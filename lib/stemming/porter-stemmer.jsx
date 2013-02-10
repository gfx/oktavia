// This file was generated automatically by the Snowball to JSX compiler

import "snowball-stemmer.jsx";
import "among.jsx";

 /**
  * This class was automatically generated by a Snowball to JSX compiler
  * It implements the stemming algorithm defined by a snowball script.
  */

class PorterStemmer extends SnowballStemmer
{
    static const serialVersionUID = 1;
    static const methodObject = new PorterStemmer();

    static const a_0 = [
        new Among("s", -1, 3, null, null),
        new Among("ies", 0, 2, null, null),
        new Among("sses", 0, 1, null, null),
        new Among("ss", 0, -1, null, null)
    ];

    static const a_1 = [
        new Among("", -1, 3, null, null),
        new Among("bb", 0, 2, null, null),
        new Among("dd", 0, 2, null, null),
        new Among("ff", 0, 2, null, null),
        new Among("gg", 0, 2, null, null),
        new Among("bl", 0, 1, null, null),
        new Among("mm", 0, 2, null, null),
        new Among("nn", 0, 2, null, null),
        new Among("pp", 0, 2, null, null),
        new Among("rr", 0, 2, null, null),
        new Among("at", 0, 1, null, null),
        new Among("tt", 0, 2, null, null),
        new Among("iz", 0, 1, null, null)
    ];

    static const a_2 = [
        new Among("ed", -1, 2, null, null),
        new Among("eed", 0, 1, null, null),
        new Among("ing", -1, 2, null, null)
    ];

    static const a_3 = [
        new Among("anci", -1, 3, null, null),
        new Among("enci", -1, 2, null, null),
        new Among("abli", -1, 4, null, null),
        new Among("eli", -1, 6, null, null),
        new Among("alli", -1, 9, null, null),
        new Among("ousli", -1, 12, null, null),
        new Among("entli", -1, 5, null, null),
        new Among("aliti", -1, 10, null, null),
        new Among("biliti", -1, 14, null, null),
        new Among("iviti", -1, 13, null, null),
        new Among("tional", -1, 1, null, null),
        new Among("ational", 10, 8, null, null),
        new Among("alism", -1, 10, null, null),
        new Among("ation", -1, 8, null, null),
        new Among("ization", 13, 7, null, null),
        new Among("izer", -1, 7, null, null),
        new Among("ator", -1, 8, null, null),
        new Among("iveness", -1, 13, null, null),
        new Among("fulness", -1, 11, null, null),
        new Among("ousness", -1, 12, null, null)
    ];

    static const a_4 = [
        new Among("icate", -1, 2, null, null),
        new Among("ative", -1, 3, null, null),
        new Among("alize", -1, 1, null, null),
        new Among("iciti", -1, 2, null, null),
        new Among("ical", -1, 2, null, null),
        new Among("ful", -1, 3, null, null),
        new Among("ness", -1, 3, null, null)
    ];

    static const a_5 = [
        new Among("ic", -1, 1, null, null),
        new Among("ance", -1, 1, null, null),
        new Among("ence", -1, 1, null, null),
        new Among("able", -1, 1, null, null),
        new Among("ible", -1, 1, null, null),
        new Among("ate", -1, 1, null, null),
        new Among("ive", -1, 1, null, null),
        new Among("ize", -1, 1, null, null),
        new Among("iti", -1, 1, null, null),
        new Among("al", -1, 1, null, null),
        new Among("ism", -1, 1, null, null),
        new Among("ion", -1, 2, null, null),
        new Among("er", -1, 1, null, null),
        new Among("ous", -1, 1, null, null),
        new Among("ant", -1, 1, null, null),
        new Among("ent", -1, 1, null, null),
        new Among("ment", 15, 1, null, null),
        new Among("ement", 16, 1, null, null),
        new Among("ou", -1, 1, null, null)
    ];

    static const g_v = [17, 65, 16, 1] : int[];

    static const g_v_WXY = [1, 17, 65, 208, 1] : int[];

    var B_Y_found : boolean = false;
    var I_p2 : int = 0;
    var I_p1 : int = 0;

    function copy_from (other : PorterStemmer) : void
    {
        this.B_Y_found = other.B_Y_found;
        this.I_p2 = other.I_p2;
        this.I_p1 = other.I_p1;
        super.copy_from(other);
    }

    function r_shortv () : boolean
    {
        // (, line 19
        if (!(this.out_grouping_b(PorterStemmer.g_v_WXY, 89, 121)))
        {
            return false;
        }
        if (!(this.in_grouping_b(PorterStemmer.g_v, 97, 121)))
        {
            return false;
        }
        if (!(this.out_grouping_b(PorterStemmer.g_v, 97, 121)))
        {
            return false;
        }
        return true;
    }

    function r_R1 () : boolean
    {
        if (!(this.I_p1 <= this.cursor))
        {
            return false;
        }
        return true;
    }

    function r_R2 () : boolean
    {
        if (!(this.I_p2 <= this.cursor))
        {
            return false;
        }
        return true;
    }

    function r_Step_1a () : boolean
    {
        var among_var : int;
        // (, line 24
        // [, line 25
        this.ket = this.cursor;
        // substring, line 25
        among_var = this.find_among_b(PorterStemmer.a_0, 4);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 25
        this.bra = this.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 26
                // <-, line 26
                if (!this.slice_from("ss"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 27
                // <-, line 27
                if (!this.slice_from("i"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 29
                // delete, line 29
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_Step_1b () : boolean
    {
        var among_var : int;
        var v_1 : int;
        var v_3 : int;
        var v_4 : int;
        // (, line 33
        // [, line 34
        this.ket = this.cursor;
        // substring, line 34
        among_var = this.find_among_b(PorterStemmer.a_2, 3);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 34
        this.bra = this.cursor;
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 35
                // call R1, line 35
                if (!this.r_R1())
                {
                    return false;
                }
                // <-, line 35
                if (!this.slice_from("ee"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 37
                // test, line 38
                v_1 = this.limit - this.cursor;
                // gopast, line 38
                golab0: while(true)
                {
                    var lab1 = true;
                    lab1: while (lab1 == true)
                    {
                        lab1 = false;
                        if (!(this.in_grouping_b(PorterStemmer.g_v, 97, 121)))
                        {
                            break lab1;
                        }
                        break golab0;
                    }
                    if (this.cursor <= this.limit_backward)
                    {
                        return false;
                    }
                    this.cursor--;
                }
                this.cursor = this.limit - v_1;
                // delete, line 38
                if (!this.slice_del())
                {
                    return false;
                }
                // test, line 39
                v_3 = this.limit - this.cursor;
                // substring, line 39
                among_var = this.find_among_b(PorterStemmer.a_1, 13);
                if (among_var == 0)
                {
                    return false;
                }
                this.cursor = this.limit - v_3;
                switch (among_var) {
                    case 0:
                        return false;
                    case 1:
                        // (, line 41
                        // <+, line 41
                        {
                            var c : int = this.cursor;
                            this.insert(this.cursor, this.cursor, "e");
                            this.cursor = c;
                        }
                        break;
                    case 2:
                        // (, line 44
                        // [, line 44
                        this.ket = this.cursor;
                        // next, line 44
                        if (this.cursor <= this.limit_backward)
                        {
                            return false;
                        }
                        this.cursor--;
                        // ], line 44
                        this.bra = this.cursor;
                        // delete, line 44
                        if (!this.slice_del())
                        {
                            return false;
                        }
                        break;
                    case 3:
                        // (, line 45
                        // atmark, line 45
                        if (this.cursor != this.I_p1)
                        {
                            return false;
                        }
                        // test, line 45
                        v_4 = this.limit - this.cursor;
                        // call shortv, line 45
                        if (!this.r_shortv())
                        {
                            return false;
                        }
                        this.cursor = this.limit - v_4;
                        // <+, line 45
                        {
                            var c : int = this.cursor;
                            this.insert(this.cursor, this.cursor, "e");
                            this.cursor = c;
                        }
                        break;
                }
                break;
        }
        return true;
    }

    function r_Step_1c () : boolean
    {
        var v_1 : int;
        // (, line 51
        // [, line 52
        this.ket = this.cursor;
        // or, line 52
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            v_1 = this.limit - this.cursor;
            var lab1 = true;
            lab1: while (lab1 == true)
            {
                lab1 = false;
                // literal, line 52
                if (!(this.eq_s_b(1, "y")))
                {
                    break lab1;
                }
                break lab0;
            }
            this.cursor = this.limit - v_1;
            // literal, line 52
            if (!(this.eq_s_b(1, "Y")))
            {
                return false;
            }
        }
        // ], line 52
        this.bra = this.cursor;
        // gopast, line 53
        golab2: while(true)
        {
            var lab3 = true;
            lab3: while (lab3 == true)
            {
                lab3 = false;
                if (!(this.in_grouping_b(PorterStemmer.g_v, 97, 121)))
                {
                    break lab3;
                }
                break golab2;
            }
            if (this.cursor <= this.limit_backward)
            {
                return false;
            }
            this.cursor--;
        }
        // <-, line 54
        if (!this.slice_from("i"))
        {
            return false;
        }
        return true;
    }

    function r_Step_2 () : boolean
    {
        var among_var : int;
        // (, line 57
        // [, line 58
        this.ket = this.cursor;
        // substring, line 58
        among_var = this.find_among_b(PorterStemmer.a_3, 20);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 58
        this.bra = this.cursor;
        // call R1, line 58
        if (!this.r_R1())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 59
                // <-, line 59
                if (!this.slice_from("tion"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 60
                // <-, line 60
                if (!this.slice_from("ence"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 61
                // <-, line 61
                if (!this.slice_from("ance"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 62
                // <-, line 62
                if (!this.slice_from("able"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 63
                // <-, line 63
                if (!this.slice_from("ent"))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 64
                // <-, line 64
                if (!this.slice_from("e"))
                {
                    return false;
                }
                break;
            case 7:
                // (, line 66
                // <-, line 66
                if (!this.slice_from("ize"))
                {
                    return false;
                }
                break;
            case 8:
                // (, line 68
                // <-, line 68
                if (!this.slice_from("ate"))
                {
                    return false;
                }
                break;
            case 9:
                // (, line 69
                // <-, line 69
                if (!this.slice_from("al"))
                {
                    return false;
                }
                break;
            case 10:
                // (, line 71
                // <-, line 71
                if (!this.slice_from("al"))
                {
                    return false;
                }
                break;
            case 11:
                // (, line 72
                // <-, line 72
                if (!this.slice_from("ful"))
                {
                    return false;
                }
                break;
            case 12:
                // (, line 74
                // <-, line 74
                if (!this.slice_from("ous"))
                {
                    return false;
                }
                break;
            case 13:
                // (, line 76
                // <-, line 76
                if (!this.slice_from("ive"))
                {
                    return false;
                }
                break;
            case 14:
                // (, line 77
                // <-, line 77
                if (!this.slice_from("ble"))
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_Step_3 () : boolean
    {
        var among_var : int;
        // (, line 81
        // [, line 82
        this.ket = this.cursor;
        // substring, line 82
        among_var = this.find_among_b(PorterStemmer.a_4, 7);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 82
        this.bra = this.cursor;
        // call R1, line 82
        if (!this.r_R1())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 83
                // <-, line 83
                if (!this.slice_from("al"))
                {
                    return false;
                }
                break;
            case 2:
                // (, line 85
                // <-, line 85
                if (!this.slice_from("ic"))
                {
                    return false;
                }
                break;
            case 3:
                // (, line 87
                // delete, line 87
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_Step_4 () : boolean
    {
        var among_var : int;
        var v_1 : int;
        // (, line 91
        // [, line 92
        this.ket = this.cursor;
        // substring, line 92
        among_var = this.find_among_b(PorterStemmer.a_5, 19);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 92
        this.bra = this.cursor;
        // call R2, line 92
        if (!this.r_R2())
        {
            return false;
        }
        switch (among_var) {
            case 0:
                return false;
            case 1:
                // (, line 95
                // delete, line 95
                if (!this.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 96
                // or, line 96
                var lab0 = true;
                lab0: while (lab0 == true)
                {
                    lab0 = false;
                    v_1 = this.limit - this.cursor;
                    var lab1 = true;
                    lab1: while (lab1 == true)
                    {
                        lab1 = false;
                        // literal, line 96
                        if (!(this.eq_s_b(1, "s")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    this.cursor = this.limit - v_1;
                    // literal, line 96
                    if (!(this.eq_s_b(1, "t")))
                    {
                        return false;
                    }
                }
                // delete, line 96
                if (!this.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    }

    function r_Step_5a () : boolean
    {
        var v_1 : int;
        var v_2 : int;
        // (, line 100
        // [, line 101
        this.ket = this.cursor;
        // literal, line 101
        if (!(this.eq_s_b(1, "e")))
        {
            return false;
        }
        // ], line 101
        this.bra = this.cursor;
        // or, line 102
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            v_1 = this.limit - this.cursor;
            var lab1 = true;
            lab1: while (lab1 == true)
            {
                lab1 = false;
                // call R2, line 102
                if (!this.r_R2())
                {
                    break lab1;
                }
                break lab0;
            }
            this.cursor = this.limit - v_1;
            // (, line 102
            // call R1, line 102
            if (!this.r_R1())
            {
                return false;
            }
            // not, line 102
            {
                v_2 = this.limit - this.cursor;
                var lab2 = true;
                lab2: while (lab2 == true)
                {
                    lab2 = false;
                    // call shortv, line 102
                    if (!this.r_shortv())
                    {
                        break lab2;
                    }
                    return false;
                }
                this.cursor = this.limit - v_2;
            }
        }
        // delete, line 103
        if (!this.slice_del())
        {
            return false;
        }
        return true;
    }

    function r_Step_5b () : boolean
    {
        // (, line 106
        // [, line 107
        this.ket = this.cursor;
        // literal, line 107
        if (!(this.eq_s_b(1, "l")))
        {
            return false;
        }
        // ], line 107
        this.bra = this.cursor;
        // call R2, line 108
        if (!this.r_R2())
        {
            return false;
        }
        // literal, line 108
        if (!(this.eq_s_b(1, "l")))
        {
            return false;
        }
        // delete, line 109
        if (!this.slice_del())
        {
            return false;
        }
        return true;
    }

    override function stem () : boolean
    {
        var v_1 : int;
        var v_2 : int;
        var v_3 : int;
        var v_4 : int;
        var v_5 : int;
        var v_10 : int;
        var v_11 : int;
        var v_12 : int;
        var v_13 : int;
        var v_14 : int;
        var v_15 : int;
        var v_16 : int;
        var v_17 : int;
        var v_18 : int;
        var v_19 : int;
        var v_20 : int;
        // (, line 113
        // unset Y_found, line 115
        this.B_Y_found = false;
        // do, line 116
        v_1 = this.cursor;
        var lab0 = true;
        lab0: while (lab0 == true)
        {
            lab0 = false;
            // (, line 116
            // [, line 116
            this.bra = this.cursor;
            // literal, line 116
            if (!(this.eq_s(1, "y")))
            {
                break lab0;
            }
            // ], line 116
            this.ket = this.cursor;
            // <-, line 116
            if (!this.slice_from("Y"))
            {
                return false;
            }
            // set Y_found, line 116
            this.B_Y_found = true;
        }
        this.cursor = v_1;
        // do, line 117
        v_2 = this.cursor;
        var lab1 = true;
        lab1: while (lab1 == true)
        {
            lab1 = false;
            // repeat, line 117
            replab2: while(true)
            {
                v_3 = this.cursor;
                var lab3 = true;
                lab3: while (lab3 == true)
                {
                    lab3 = false;
                    // (, line 117
                    // goto, line 117
                    golab4: while(true)
                    {
                        v_4 = this.cursor;
                        var lab5 = true;
                        lab5: while (lab5 == true)
                        {
                            lab5 = false;
                            // (, line 117
                            if (!(this.in_grouping(PorterStemmer.g_v, 97, 121)))
                            {
                                break lab5;
                            }
                            // [, line 117
                            this.bra = this.cursor;
                            // literal, line 117
                            if (!(this.eq_s(1, "y")))
                            {
                                break lab5;
                            }
                            // ], line 117
                            this.ket = this.cursor;
                            this.cursor = v_4;
                            break golab4;
                        }
                        this.cursor = v_4;
                        if (this.cursor >= this.limit)
                        {
                            break lab3;
                        }
                        this.cursor++;
                    }
                    // <-, line 117
                    if (!this.slice_from("Y"))
                    {
                        return false;
                    }
                    // set Y_found, line 117
                    this.B_Y_found = true;
                    continue replab2;
                }
                this.cursor = v_3;
                break replab2;
            }
        }
        this.cursor = v_2;
        this.I_p1 = this.limit;
        this.I_p2 = this.limit;
        // do, line 121
        v_5 = this.cursor;
        var lab6 = true;
        lab6: while (lab6 == true)
        {
            lab6 = false;
            // (, line 121
            // gopast, line 122
            golab7: while(true)
            {
                var lab8 = true;
                lab8: while (lab8 == true)
                {
                    lab8 = false;
                    if (!(this.in_grouping(PorterStemmer.g_v, 97, 121)))
                    {
                        break lab8;
                    }
                    break golab7;
                }
                if (this.cursor >= this.limit)
                {
                    break lab6;
                }
                this.cursor++;
            }
            // gopast, line 122
            golab9: while(true)
            {
                var lab10 = true;
                lab10: while (lab10 == true)
                {
                    lab10 = false;
                    if (!(this.out_grouping(PorterStemmer.g_v, 97, 121)))
                    {
                        break lab10;
                    }
                    break golab9;
                }
                if (this.cursor >= this.limit)
                {
                    break lab6;
                }
                this.cursor++;
            }
            // setmark p1, line 122
            this.I_p1 = this.cursor;
            // gopast, line 123
            golab11: while(true)
            {
                var lab12 = true;
                lab12: while (lab12 == true)
                {
                    lab12 = false;
                    if (!(this.in_grouping(PorterStemmer.g_v, 97, 121)))
                    {
                        break lab12;
                    }
                    break golab11;
                }
                if (this.cursor >= this.limit)
                {
                    break lab6;
                }
                this.cursor++;
            }
            // gopast, line 123
            golab13: while(true)
            {
                var lab14 = true;
                lab14: while (lab14 == true)
                {
                    lab14 = false;
                    if (!(this.out_grouping(PorterStemmer.g_v, 97, 121)))
                    {
                        break lab14;
                    }
                    break golab13;
                }
                if (this.cursor >= this.limit)
                {
                    break lab6;
                }
                this.cursor++;
            }
            // setmark p2, line 123
            this.I_p2 = this.cursor;
        }
        this.cursor = v_5;
        // backwards, line 126
        this.limit_backward = this.cursor; this.cursor = this.limit;
        // (, line 126
        // do, line 127
        v_10 = this.limit - this.cursor;
        var lab15 = true;
        lab15: while (lab15 == true)
        {
            lab15 = false;
            // call Step_1a, line 127
            if (!this.r_Step_1a())
            {
                break lab15;
            }
        }
        this.cursor = this.limit - v_10;
        // do, line 128
        v_11 = this.limit - this.cursor;
        var lab16 = true;
        lab16: while (lab16 == true)
        {
            lab16 = false;
            // call Step_1b, line 128
            if (!this.r_Step_1b())
            {
                break lab16;
            }
        }
        this.cursor = this.limit - v_11;
        // do, line 129
        v_12 = this.limit - this.cursor;
        var lab17 = true;
        lab17: while (lab17 == true)
        {
            lab17 = false;
            // call Step_1c, line 129
            if (!this.r_Step_1c())
            {
                break lab17;
            }
        }
        this.cursor = this.limit - v_12;
        // do, line 130
        v_13 = this.limit - this.cursor;
        var lab18 = true;
        lab18: while (lab18 == true)
        {
            lab18 = false;
            // call Step_2, line 130
            if (!this.r_Step_2())
            {
                break lab18;
            }
        }
        this.cursor = this.limit - v_13;
        // do, line 131
        v_14 = this.limit - this.cursor;
        var lab19 = true;
        lab19: while (lab19 == true)
        {
            lab19 = false;
            // call Step_3, line 131
            if (!this.r_Step_3())
            {
                break lab19;
            }
        }
        this.cursor = this.limit - v_14;
        // do, line 132
        v_15 = this.limit - this.cursor;
        var lab20 = true;
        lab20: while (lab20 == true)
        {
            lab20 = false;
            // call Step_4, line 132
            if (!this.r_Step_4())
            {
                break lab20;
            }
        }
        this.cursor = this.limit - v_15;
        // do, line 133
        v_16 = this.limit - this.cursor;
        var lab21 = true;
        lab21: while (lab21 == true)
        {
            lab21 = false;
            // call Step_5a, line 133
            if (!this.r_Step_5a())
            {
                break lab21;
            }
        }
        this.cursor = this.limit - v_16;
        // do, line 134
        v_17 = this.limit - this.cursor;
        var lab22 = true;
        lab22: while (lab22 == true)
        {
            lab22 = false;
            // call Step_5b, line 134
            if (!this.r_Step_5b())
            {
                break lab22;
            }
        }
        this.cursor = this.limit - v_17;
        this.cursor = this.limit_backward;        // do, line 137
        v_18 = this.cursor;
        var lab23 = true;
        lab23: while (lab23 == true)
        {
            lab23 = false;
            // (, line 137
            // Boolean test Y_found, line 137
            if (!(this.B_Y_found))
            {
                break lab23;
            }
            // repeat, line 137
            replab24: while(true)
            {
                v_19 = this.cursor;
                var lab25 = true;
                lab25: while (lab25 == true)
                {
                    lab25 = false;
                    // (, line 137
                    // goto, line 137
                    golab26: while(true)
                    {
                        v_20 = this.cursor;
                        var lab27 = true;
                        lab27: while (lab27 == true)
                        {
                            lab27 = false;
                            // (, line 137
                            // [, line 137
                            this.bra = this.cursor;
                            // literal, line 137
                            if (!(this.eq_s(1, "Y")))
                            {
                                break lab27;
                            }
                            // ], line 137
                            this.ket = this.cursor;
                            this.cursor = v_20;
                            break golab26;
                        }
                        this.cursor = v_20;
                        if (this.cursor >= this.limit)
                        {
                            break lab25;
                        }
                        this.cursor++;
                    }
                    // <-, line 137
                    if (!this.slice_from("y"))
                    {
                        return false;
                    }
                    continue replab24;
                }
                this.cursor = v_19;
                break replab24;
            }
        }
        this.cursor = v_18;
        return true;
    }

    function equals (o : variant) : boolean {
        return o instanceof PorterStemmer;
    }

    function hashCode() : int
    {
        //http://stackoverflow.com/questions/194846/is-there-any-kind-of-hashcode-function-in-javascript
        var classname = "PorterStemmer";
        var hash = 0;
        if (classname.length == 0) return hash;
        for (var i = 0; i < classname.length; i++) {
            var char = classname.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

}

