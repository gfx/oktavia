import "bit-vector.jsx";
import "oktavia.jsx";
import "console.jsx";


class Metadata
{
    var _parent : Oktavia;
    var _bitVector : BitVector;

    function constructor (parent : Oktavia)
    {
        this._parent = parent;
        this._bitVector = new BitVector();
    }

    function _size () : int
    {
        return this._bitVector.rank(this._bitVector.size()); 
    }

    function getContent (index : int) : string
    {
        if (index < 0 || this._size() <= index)
        {
            throw new Error("Section.getContent() : range error " + index as string);
        }
        var startPosition = 0;
        if (index > 0)
        {
            startPosition = this._bitVector.select(index - 1) + 1;
        }
        var length = this._bitVector.select(index) - startPosition + 1;
        return this._parent._getSubstring(startPosition, length);
    }

    function build () : void
    {
        this._bitVector.build();
    }
}

class Section extends Metadata
{
    var _names : string[];

    function constructor (parent : Oktavia)
    {
        super(parent);
        this._names = [] : string[];
    }

    function setTail (name : string) : void
    {
        this._names.push(name);
        var index = this._parent._contentSize();
        log 'setTail: index = ', index;
        this._bitVector.set(index - 1);
    }

    function size () : int
    {
        return this._names.length; 
    }

    function getSectionIndex (position : int) : int
    {
        if (position < 0 || this._bitVector.size() <= position)
        {
            throw new Error("Section.getSectionIndex() : range error " + position as string);
        }
        return this._bitVector.rank(position);
    }

    function getName (index : int) : string
    {
        if (index < 0 || this.size() <= index)
        {
            throw new Error("Section.getName() : range error");
        }
        return this._names[index];
    }
}

class Splitter extends Metadata
{
    function constructor (parent : Oktavia)
    {
        super(parent);
    }

    function size () : int
    {
        return this._size(); 
    }

    function split () : void
    {
        var index = this._parent._contentSize();
        this._bitVector.set(index - 1);
    }

    function getIndex (position : int) : int
    {
        if (position < 0 || this._bitVector.size() <= position)
        {
            throw new Error("Section.getSectionIndex() : range error");
        }
        return this._bitVector.rank(position);
    }
}

class Table extends Metadata
{
    var _headers : string[];
    var _columnTails : BitVector;
    var _splitter : string;

    function constructor (parent : Oktavia, headers : string[])
    {
        super(parent);
        this._headers = headers;
        this._columnTails = new BitVector();
        this._splitter = String.fromCharCode(2);
    }

    function rowSize () : int
    {
        return this._size();
    }

    function columnSize () : int
    {
        return this._headers.length;
    }

    function setColumnTail () : void
    {
        var index = this._parent._contentSize();
        this._parent.addWord(this._splitter);
        this._columnTails.set(index - 1);
    }

    function setRowTail () : void
    {
        var index = this._parent._contentSize();
        this._bitVector.set(index - 1);
    }

    function getCell (position : int) : int[]
    {
        if (position < 0 || this._bitVector.size() <= position)
        {
            throw new Error("Section.getSectionIndex() : range error " + position as string);
        }
        var row = this._bitVector.rank(position);
        var currentColumn = this._columnTails.rank(position);

        var lastRowColumn = 0;
        if (row > 0)
        {
            var startPosition = this._bitVector.select(row - 1) + 1;
            lastRowColumn = this._columnTails.rank(startPosition);
        }
        var result = [row, currentColumn - lastRowColumn] : int[];
        return result;
    }

    function getRowContent (rowIndex : int) : Map.<string>
    {
        var content = this.getContent(rowIndex);
        var values = content.split(this._splitter, this._headers.length);
        var result = {} : Map.<string>;
        for (var i in this._headers)
        {
            if (i < values.length)
            {
                result[this._headers[i]] = values[i];
            }
            else
            {
                result[this._headers[i]] = '';
            }
        }
        return result;
    }

    override function build () : void
    {
        this._bitVector.build();
        this._columnTails.build();
    }
}

class Block extends Metadata
{
    var _names : string[];
    var _start : boolean;

    function constructor (parent : Oktavia)
    {
        super(parent);
        this._names = [] : string[];
        this._start = false;
    }

    function startBlock (blockName : string) : void
    {
        if (this._start)
        {
            throw new Error('Splitter `' + this._names[this._names.length - 1] + '` is not closed');
        }
        this._start = true;
        this._names.push(blockName);
        var index = this._parent._contentSize();
        this._bitVector.set(index - 1);
    }

    function endBlock () : void
    {
        if (!this._start)
        {
            throw new Error('Splitter is not started');
        }
        this._start = false;
        var index = this._parent._contentSize();
        this._bitVector.set(index - 1);
    }

    function size () : int
    {
        return this._names.length;
    }

    function blockIndex (position : int) : int
    {
        if (position < 0 || (this._parent._fmindex.size() - 1) <= position)
        {
            throw new Error("Block.blockIndex() : range error " + position as string);
        }
        var result : int;
        if (position >= this._bitVector.size())
        {
            position = this._bitVector.size() - 1;
            result = this._bitVector.rank(position) + 1;
        }
        else
        {
            result = this._bitVector.rank(position);
        }
        return result;
    }

    function inBlock (position : int) : boolean
    {
        var blockIndex = this.blockIndex(position);
        return (blockIndex % 2) != 0;
    }

    function  getBlockContent (position : int) : string
    {
        var blockIndex = this.blockIndex(position);
        var result : string;
        if ((blockIndex % 2) != 0)
        {
            result = this.getContent(blockIndex);
        }
        else
        {
            result = '';
        }
        return result;
    }

    function  getBlockName (position : int) : string
    {
        var blockIndex = this.blockIndex(position);
        var result : string;
        if ((blockIndex % 2) != 0)
        {
            result = this._names[blockIndex >>> 1];
        }
        else
        {
            result = '';
        }
        return result;
    }
}
