// Generated from c:/Users/minip/source/repos/ahk2-antlr4-demo/src/grammar/AutoHotkeyLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


    import { AutoHotkeyLexerBase } from "./AutoHotkeyLexerBase";


export class AutoHotkeyLexer extends AutoHotkeyLexerBase {
    public static readonly DerefStart = 1;
    public static readonly DerefEnd = 2;
    public static readonly SingleLineBlockComment = 3;
    public static readonly HotstringTrigger = 4;
    public static readonly RemapKey = 5;
    public static readonly HotkeyTrigger = 6;
    public static readonly OpenBracket = 7;
    public static readonly CloseBracket = 8;
    public static readonly OpenParen = 9;
    public static readonly CloseParen = 10;
    public static readonly OpenBrace = 11;
    public static readonly CloseBrace = 12;
    public static readonly Comma = 13;
    public static readonly Assign = 14;
    public static readonly QuestionMark = 15;
    public static readonly QuestionMarkDot = 16;
    public static readonly Colon = 17;
    public static readonly DoubleColon = 18;
    public static readonly Ellipsis = 19;
    public static readonly Dot = 20;
    public static readonly ConcatDot = 21;
    public static readonly PlusPlus = 22;
    public static readonly MinusMinus = 23;
    public static readonly Plus = 24;
    public static readonly Minus = 25;
    public static readonly BitNot = 26;
    public static readonly Not = 27;
    public static readonly Multiply = 28;
    public static readonly Divide = 29;
    public static readonly IntegerDivide = 30;
    public static readonly Modulus = 31;
    public static readonly Power = 32;
    public static readonly NullCoalesce = 33;
    public static readonly Hashtag = 34;
    public static readonly RightShiftArithmetic = 35;
    public static readonly LeftShiftArithmetic = 36;
    public static readonly RightShiftLogical = 37;
    public static readonly LessThan = 38;
    public static readonly MoreThan = 39;
    public static readonly LessThanEquals = 40;
    public static readonly GreaterThanEquals = 41;
    public static readonly Equals_ = 42;
    public static readonly NotEquals = 43;
    public static readonly IdentityEquals = 44;
    public static readonly IdentityNotEquals = 45;
    public static readonly RegExMatch = 46;
    public static readonly BitAnd = 47;
    public static readonly BitXOr = 48;
    public static readonly BitOr = 49;
    public static readonly And = 50;
    public static readonly Or = 51;
    public static readonly MultiplyAssign = 52;
    public static readonly DivideAssign = 53;
    public static readonly ModulusAssign = 54;
    public static readonly PlusAssign = 55;
    public static readonly MinusAssign = 56;
    public static readonly LeftShiftArithmeticAssign = 57;
    public static readonly RightShiftArithmeticAssign = 58;
    public static readonly RightShiftLogicalAssign = 59;
    public static readonly IntegerDivideAssign = 60;
    public static readonly ConcatenateAssign = 61;
    public static readonly BitAndAssign = 62;
    public static readonly BitXorAssign = 63;
    public static readonly BitOrAssign = 64;
    public static readonly PowerAssign = 65;
    public static readonly NullishCoalescingAssign = 66;
    public static readonly Arrow = 67;
    public static readonly True = 68;
    public static readonly False = 69;
    public static readonly DecimalLiteral = 70;
    public static readonly HexIntegerLiteral = 71;
    public static readonly Break = 72;
    public static readonly Do = 73;
    public static readonly Switch = 74;
    public static readonly Case = 75;
    public static readonly Default = 76;
    public static readonly Else = 77;
    public static readonly Catch = 78;
    public static readonly Finally = 79;
    public static readonly Return = 80;
    public static readonly Continue = 81;
    public static readonly For = 82;
    public static readonly While = 83;
    public static readonly Parse = 84;
    public static readonly Reg = 85;
    public static readonly Read = 86;
    public static readonly Files = 87;
    public static readonly Loop = 88;
    public static readonly Until = 89;
    public static readonly This = 90;
    public static readonly If = 91;
    public static readonly Throw = 92;
    public static readonly In = 93;
    public static readonly Try = 94;
    public static readonly Is = 95;
    public static readonly Contains = 96;
    public static readonly VerbalAnd = 97;
    public static readonly VerbalNot = 98;
    public static readonly VerbalOr = 99;
    public static readonly Goto = 100;
    public static readonly Get = 101;
    public static readonly Set = 102;
    public static readonly Class = 103;
    public static readonly Enum = 104;
    public static readonly Extends = 105;
    public static readonly Super = 106;
    public static readonly Base = 107;
    public static readonly As = 108;
    public static readonly Unset = 109;
    public static readonly Static = 110;
    public static readonly Global = 111;
    public static readonly Local = 112;
    public static readonly Identifier = 113;
    public static readonly StringLiteral = 114;
    public static readonly EOL = 115;
    public static readonly WS = 116;
    public static readonly UnexpectedCharacter = 117;
    public static readonly HotstringWhitespaces = 118;
    public static readonly HotstringMultiLineExpansion = 119;
    public static readonly HotstringSingleLineExpansion = 120;
    public static readonly HotstringUnexpectedCharacter = 121;
    public static readonly PreprocessorDirectiveWS = 122;
    public static readonly Digits = 123;
    public static readonly HotIf = 124;
    public static readonly InputLevel = 125;
    public static readonly SuspendExempt = 126;
    public static readonly UseHook = 127;
    public static readonly Hotstring = 128;
    public static readonly Include = 129;
    public static readonly IncludeAgain = 130;
    public static readonly DllLoad = 131;
    public static readonly Requires = 132;
    public static readonly SingleInstance = 133;
    public static readonly Persistent = 134;
    public static readonly Warn = 135;
    public static readonly ErrorStdOut = 136;
    public static readonly ClipboardTimeout = 137;
    public static readonly HotIfTimeout = 138;
    public static readonly MaxThreads = 139;
    public static readonly MaxThreadsBuffer = 140;
    public static readonly MaxThreadsPerHotkey = 141;
    public static readonly DirectiveSingleLineComment = 142;
    public static readonly TextWhitespace = 143;
    public static readonly Text = 144;
    public static readonly HotstringWhitespace = 145;
    public static readonly NoMouse = 146;
    public static readonly EndChars = 147;
    public static readonly HotstringOptions = 148;
    public static readonly HOTSTRING_MODE = 1;
    public static readonly DIRECTIVE_MODE = 2;
    public static readonly DIRECTIVE_TEXT = 3;
    public static readonly HOTSTRING_OPTIONS = 4;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR", "COMMENT"
    ];

    public static readonly literalNames = [
        null, null, null, null, null, null, null, "'['", "']'", "'('", "')'", 
        "'{'", "'}'", "','", "':='", "'?'", "'?.'", "':'", "'::'", "'...'", 
        "'.'", null, "'++'", "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", 
        "'/'", "'//'", "'%'", "'**'", "'??'", "'#'", "'>>'", "'<<'", "'>>>'", 
        "'<'", "'>'", "'<='", "'>='", "'='", "'!='", "'=='", "'!=='", "'~='", 
        "'&'", "'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", 
        "'-='", "'<<='", "'>>='", "'>>>='", "'//='", "'.='", "'&='", "'^='", 
        "'|='", "'**='", "'??='", "'=>'", null, null, null, null, "'break'", 
        "'do'", "'switch'", "'case'", "'default'", "'else'", "'catch'", 
        "'finally'", "'return'", "'continue'", "'for'", "'while'", "'parse'", 
        "'reg'", "'read'", "'files'", "'loop'", "'until'", "'this'", "'if'", 
        "'throw'", "'in'", "'try'", "'is'", "'contains'", "'and'", "'not'", 
        "'or'", "'goto'", "'get'", "'set'", "'class'", "'enum'", "'extends'", 
        "'super'", "'base'", "'as'", "'unset'", "'static'", "'global'", 
        "'local'", null, null, null, null, null, null, null, null, null, 
        null, null, "'hotif'", "'inputlevel'", "'suspendexempt'", "'usehook'", 
        "'hotstring'", "'include'", "'includeagain'", "'dllload'", "'requires'", 
        "'singleinstance'", "'persistent'", "'warn'", "'errorstdout'", "'clipboardtimeout'", 
        "'hotiftimeout'", "'maxthreads'", "'maxthreadsbuffer'", "'maxthreadsperhotkey'", 
        null, null, null, null, "'NoMouse'", "'EndChars'"
    ];

    public static readonly symbolicNames = [
        null, "DerefStart", "DerefEnd", "SingleLineBlockComment", "HotstringTrigger", 
        "RemapKey", "HotkeyTrigger", "OpenBracket", "CloseBracket", "OpenParen", 
        "CloseParen", "OpenBrace", "CloseBrace", "Comma", "Assign", "QuestionMark", 
        "QuestionMarkDot", "Colon", "DoubleColon", "Ellipsis", "Dot", "ConcatDot", 
        "PlusPlus", "MinusMinus", "Plus", "Minus", "BitNot", "Not", "Multiply", 
        "Divide", "IntegerDivide", "Modulus", "Power", "NullCoalesce", "Hashtag", 
        "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", 
        "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals_", 
        "NotEquals", "IdentityEquals", "IdentityNotEquals", "RegExMatch", 
        "BitAnd", "BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", 
        "ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
        "RightShiftArithmeticAssign", "RightShiftLogicalAssign", "IntegerDivideAssign", 
        "ConcatenateAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
        "PowerAssign", "NullishCoalescingAssign", "Arrow", "True", "False", 
        "DecimalLiteral", "HexIntegerLiteral", "Break", "Do", "Switch", 
        "Case", "Default", "Else", "Catch", "Finally", "Return", "Continue", 
        "For", "While", "Parse", "Reg", "Read", "Files", "Loop", "Until", 
        "This", "If", "Throw", "In", "Try", "Is", "Contains", "VerbalAnd", 
        "VerbalNot", "VerbalOr", "Goto", "Get", "Set", "Class", "Enum", 
        "Extends", "Super", "Base", "As", "Unset", "Static", "Global", "Local", 
        "Identifier", "StringLiteral", "EOL", "WS", "UnexpectedCharacter", 
        "HotstringWhitespaces", "HotstringMultiLineExpansion", "HotstringSingleLineExpansion", 
        "HotstringUnexpectedCharacter", "PreprocessorDirectiveWS", "Digits", 
        "HotIf", "InputLevel", "SuspendExempt", "UseHook", "Hotstring", 
        "Include", "IncludeAgain", "DllLoad", "Requires", "SingleInstance", 
        "Persistent", "Warn", "ErrorStdOut", "ClipboardTimeout", "HotIfTimeout", 
        "MaxThreads", "MaxThreadsBuffer", "MaxThreadsPerHotkey", "DirectiveSingleLineComment", 
        "TextWhitespace", "Text", "HotstringWhitespace", "NoMouse", "EndChars", 
        "HotstringOptions"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE", "HOTSTRING_MODE", "DIRECTIVE_MODE", "DIRECTIVE_TEXT", 
        "HOTSTRING_OPTIONS",
    ];

    public static readonly ruleNames = [
        "SingleLineBlockComment", "MultiLineComment", "SingleLineComment", 
        "HotstringLiteralTrigger", "HotstringTrigger", "RemapKey", "HotkeyTrigger", 
        "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
        "CloseBrace", "Comma", "Assign", "QuestionMark", "QuestionMarkDot", 
        "Colon", "DoubleColon", "Ellipsis", "Dot", "ConcatDot", "PlusPlus", 
        "MinusMinus", "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", 
        "IntegerDivide", "Modulus", "Power", "NullCoalesce", "Hashtag", 
        "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", 
        "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals_", 
        "NotEquals", "IdentityEquals", "IdentityNotEquals", "RegExMatch", 
        "BitAnd", "BitXOr", "BitOr", "And", "Or", "MultiplyAssign", "DivideAssign", 
        "ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
        "RightShiftArithmeticAssign", "RightShiftLogicalAssign", "IntegerDivideAssign", 
        "ConcatenateAssign", "BitAndAssign", "BitXorAssign", "BitOrAssign", 
        "PowerAssign", "NullishCoalescingAssign", "Arrow", "True", "False", 
        "DecimalLiteral", "HexIntegerLiteral", "Break", "Do", "Switch", 
        "Case", "Default", "Else", "Catch", "Finally", "Return", "Continue", 
        "For", "While", "Parse", "Reg", "Read", "Files", "Loop", "Until", 
        "This", "If", "Throw", "In", "Try", "Is", "Contains", "VerbalAnd", 
        "VerbalNot", "VerbalOr", "Goto", "Get", "Set", "Class", "Enum", 
        "Extends", "Super", "Base", "As", "Unset", "Static", "Global", "Local", 
        "Identifier", "MultilineStringLiteral", "StringLiteral", "EOL", 
        "WS", "UnexpectedCharacter", "HotstringEOL", "HotstringOpenBrace", 
        "HotstringWhitespaces", "HotstringMultiLineExpansion", "HotstringSingleLineExpansion", 
        "HotstringUnexpectedCharacter", "PreprocessorDirectiveWS", "Digits", 
        "HotIf", "InputLevel", "SuspendExempt", "UseHook", "Hotstring", 
        "Include", "IncludeAgain", "DllLoad", "Requires", "SingleInstance", 
        "Persistent", "Warn", "ErrorStdOut", "ClipboardTimeout", "HotIfTimeout", 
        "MaxThreads", "MaxThreadsBuffer", "MaxThreadsPerHotkey", "DirectiveString", 
        "DirectiveTrue", "DirectiveFalse", "DirectiveSingleLineComment", 
        "DirectiveNewline", "TextWhitespace", "Text", "TextNewline", "HotstringWhitespace", 
        "NoMouse", "EndChars", "HotstringOptions", "HotstringTriggerPart", 
        "HotstringOptionCharacter", "Options", "Trigger", "WhiteSpace", 
        "DoubleStringCharacter", "SingleStringCharacter", "NonColonStringCharacter", 
        "RawStringCharacter", "AnyCharacter", "RawString", "EscapeSequence", 
        "CharacterEscapeSequence", "HexEscapeSequence", "UnicodeEscapeSequence", 
        "ExtendedUnicodeEscapeSequence", "SingleEscapeCharacter", "NonEscapeCharacter", 
        "EscapeCharacter", "LineBreak", "HexDigit", "DecimalIntegerLiteral", 
        "IntegerLiteral", "ExponentPart", "IdentifierPart", "IdentifierStart", 
        "ContinuationSection", "HotkeyModifierKey", "HotkeyModifier", "HotkeyCharacter", 
        "HotkeyCombinatorCharacter",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, AutoHotkeyLexer._ATN, AutoHotkeyLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "AutoHotkeyLexer.g4"; }

    public get literalNames(): (string | null)[] { return AutoHotkeyLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return AutoHotkeyLexer.symbolicNames; }
    public get ruleNames(): string[] { return AutoHotkeyLexer.ruleNames; }

    public get serializedATN(): number[] { return AutoHotkeyLexer._serializedATN; }

    public get channelNames(): string[] { return AutoHotkeyLexer.channelNames; }

    public get modeNames(): string[] { return AutoHotkeyLexer.modeNames; }

    public override action(localContext: antlr.ParserRuleContext | null, ruleIndex: number, actionIndex: number): void {
        switch (ruleIndex) {
        case 7:
            this.OpenBracket_action(localContext, actionIndex);
            break;
        case 8:
            this.CloseBracket_action(localContext, actionIndex);
            break;
        case 9:
            this.OpenParen_action(localContext, actionIndex);
            break;
        case 10:
            this.CloseParen_action(localContext, actionIndex);
            break;
        case 31:
            this.Modulus_action(localContext, actionIndex);
            break;
        case 114:
            this.MultilineStringLiteral_action(localContext, actionIndex);
            break;
        case 115:
            this.StringLiteral_action(localContext, actionIndex);
            break;
        case 116:
            this.EOL_action(localContext, actionIndex);
            break;
        case 117:
            this.WS_action(localContext, actionIndex);
            break;
        case 120:
            this.HotstringOpenBrace_action(localContext, actionIndex);
            break;
        case 156:
            this.HotstringOptions_action(localContext, actionIndex);
            break;
        }
    }
    private OpenBracket_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 0:
            this.ProcessOpenBracket();
            break;
        }
    }
    private CloseBracket_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 1:
            this.ProcessCloseBracket();
            break;
        }
    }
    private OpenParen_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 2:
            this.ProcessOpenParen();
            break;
        }
    }
    private CloseParen_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 3:
            this.ProcessCloseParen();
            break;
        }
    }
    private Modulus_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 4:
            this.ProcessDeref();
            break;
        }
    }
    private MultilineStringLiteral_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 5:
            this.ProcessStringLiteral();
            break;
        }
    }
    private StringLiteral_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 6:
            this.ProcessStringLiteral();
            break;
        }
    }
    private EOL_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 7:
            this.ProcessEOL();
            break;
        }
    }
    private WS_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 8:
            this.ProcessWS();
            break;
        }
    }
    private HotstringOpenBrace_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 9:
            this.ProcessHotstringOpenBrace();
            break;
        }
    }
    private HotstringOptions_action(localContext: antlr.ParserRuleContext | null, actionIndex: number): void {
        switch (actionIndex) {
        case 10:
            this.ProcessHotstringOptions();
            break;
        }
    }
    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 2:
            return this.SingleLineComment_sempred(localContext, predIndex);
        case 3:
            return this.HotstringLiteralTrigger_sempred(localContext, predIndex);
        case 4:
            return this.HotstringTrigger_sempred(localContext, predIndex);
        case 5:
            return this.RemapKey_sempred(localContext, predIndex);
        case 6:
            return this.HotkeyTrigger_sempred(localContext, predIndex);
        case 70:
            return this.DecimalLiteral_sempred(localContext, predIndex);
        case 160:
            return this.Trigger_sempred(localContext, predIndex);
        }
        return true;
    }
    private SingleLineComment_sempred(localContext: antlr.ParserRuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.IsCommentPossible();
        }
        return true;
    }
    private HotstringLiteralTrigger_sempred(localContext: antlr.ParserRuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.IsBOS() && this.IsHotstringLiteral();
        }
        return true;
    }
    private HotstringTrigger_sempred(localContext: antlr.ParserRuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.IsBOS() && !this.IsHotstringLiteral();
        }
        return true;
    }
    private RemapKey_sempred(localContext: antlr.ParserRuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.IsBOS() && this.IsValidRemap();
        }
        return true;
    }
    private HotkeyTrigger_sempred(localContext: antlr.ParserRuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 4:
            return this.IsBOS();
        }
        return true;
    }
    private DecimalLiteral_sempred(localContext: antlr.ParserRuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 5:
            return this.IsValidDotDecimal();
        }
        return true;
    }
    private Trigger_sempred(localContext: antlr.ParserRuleContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 6:
            return this._input.index == 0 || this._input.LA(-1) != ' '.charCodeAt(0);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,0,148,2457,6,-1,6,-1,6,-1,6,-1,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,
        3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,
        2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
        7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
        2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,
        7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,
        2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,
        7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,
        2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
        7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,
        2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,
        7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,
        2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
        7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,
        2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,
        7,95,2,96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,
        101,2,102,7,102,2,103,7,103,2,104,7,104,2,105,7,105,2,106,7,106,
        2,107,7,107,2,108,7,108,2,109,7,109,2,110,7,110,2,111,7,111,2,112,
        7,112,2,113,7,113,2,114,7,114,2,115,7,115,2,116,7,116,2,117,7,117,
        2,118,7,118,2,119,7,119,2,120,7,120,2,121,7,121,2,122,7,122,2,123,
        7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,7,127,2,128,7,128,
        2,129,7,129,2,130,7,130,2,131,7,131,2,132,7,132,2,133,7,133,2,134,
        7,134,2,135,7,135,2,136,7,136,2,137,7,137,2,138,7,138,2,139,7,139,
        2,140,7,140,2,141,7,141,2,142,7,142,2,143,7,143,2,144,7,144,2,145,
        7,145,2,146,7,146,2,147,7,147,2,148,7,148,2,149,7,149,2,150,7,150,
        2,151,7,151,2,152,7,152,2,153,7,153,2,154,7,154,2,155,7,155,2,156,
        7,156,2,157,7,157,2,158,7,158,2,159,7,159,2,160,7,160,2,161,7,161,
        2,162,7,162,2,163,7,163,2,164,7,164,2,165,7,165,2,166,7,166,2,167,
        7,167,2,168,7,168,2,169,7,169,2,170,7,170,2,171,7,171,2,172,7,172,
        2,173,7,173,2,174,7,174,2,175,7,175,2,176,7,176,2,177,7,177,2,178,
        7,178,2,179,7,179,2,180,7,180,2,181,7,181,2,182,7,182,2,183,7,183,
        2,184,7,184,2,185,7,185,2,186,7,186,2,187,7,187,1,0,1,0,1,0,1,0,
        5,0,386,8,0,10,0,12,0,389,9,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,
        1,5,1,400,8,1,10,1,12,1,403,9,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,5,2,
        412,8,2,10,2,12,2,415,9,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
        3,1,3,1,4,1,4,1,4,1,5,5,5,432,8,5,10,5,12,5,435,9,5,1,5,1,5,4,5,
        439,8,5,11,5,12,5,440,1,5,1,5,4,5,445,8,5,11,5,12,5,446,1,5,1,5,
        3,5,451,8,5,1,5,1,5,1,5,1,5,5,5,457,8,5,10,5,12,5,460,9,5,1,5,1,
        5,1,5,1,6,5,6,466,8,6,10,6,12,6,469,9,6,1,6,1,6,4,6,473,8,6,11,6,
        12,6,474,1,6,1,6,4,6,479,8,6,11,6,12,6,480,1,6,1,6,3,6,485,8,6,1,
        6,4,6,488,8,6,11,6,12,6,489,1,6,1,6,1,6,3,6,495,8,6,1,6,1,6,1,6,
        1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,
        1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,
        1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,21,1,21,
        4,21,541,8,21,11,21,12,21,542,1,21,1,21,1,21,4,21,548,8,21,11,21,
        12,21,549,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,25,1,25,1,26,
        1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,31,1,31,1,31,
        1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,
        1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,
        1,40,1,41,1,41,1,41,1,42,1,42,1,43,1,43,1,43,1,44,1,44,1,44,1,45,
        1,45,1,45,1,45,1,46,1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,50,
        1,50,1,50,1,51,1,51,1,51,1,52,1,52,1,52,1,53,1,53,1,53,1,54,1,54,
        1,54,1,55,1,55,1,55,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,58,1,58,
        1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,61,1,61,
        1,61,1,62,1,62,1,62,1,63,1,63,1,63,1,64,1,64,1,64,1,65,1,65,1,65,
        1,65,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,
        1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,5,70,703,8,70,
        10,70,12,70,706,9,70,1,70,3,70,709,8,70,1,70,1,70,1,70,5,70,714,
        8,70,10,70,12,70,717,9,70,1,70,3,70,720,8,70,1,70,1,70,1,70,3,70,
        725,8,70,3,70,727,8,70,1,71,1,71,1,71,1,71,1,71,5,71,734,8,71,10,
        71,12,71,737,9,71,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,
        74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,76,1,
        76,1,76,1,76,1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,78,1,
        78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,
        80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,
        81,1,81,1,81,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,
        84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,86,1,86,1,86,1,
        86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,
        89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,
        91,1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,93,1,94,1,94,1,94,1,
        94,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,
        97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,99,1,99,1,99,1,100,1,100,
        1,100,1,100,1,100,1,101,1,101,1,101,1,101,1,102,1,102,1,102,1,102,
        1,103,1,103,1,103,1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,
        1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,106,1,106,1,106,
        1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,1,108,1,108,1,108,
        1,109,1,109,1,109,1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,
        1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,112,1,112,
        1,112,1,112,1,112,1,112,1,113,1,113,5,113,963,8,113,10,113,12,113,
        966,9,113,1,114,1,114,1,114,1,114,5,114,972,8,114,10,114,12,114,
        975,9,114,1,114,5,114,978,8,114,10,114,12,114,981,9,114,3,114,983,
        8,114,1,114,4,114,986,8,114,11,114,12,114,987,1,114,1,114,1,114,
        1,114,1,114,1,114,5,114,996,8,114,10,114,12,114,999,9,114,1,114,
        5,114,1002,8,114,10,114,12,114,1005,9,114,3,114,1007,8,114,1,114,
        4,114,1010,8,114,11,114,12,114,1011,1,114,1,114,3,114,1016,8,114,
        1,114,1,114,1,114,1,114,1,115,1,115,5,115,1024,8,115,10,115,12,115,
        1027,9,115,1,115,1,115,1,115,5,115,1032,8,115,10,115,12,115,1035,
        9,115,1,115,3,115,1038,8,115,1,115,1,115,1,116,1,116,1,116,1,117,
        1,117,1,117,1,118,1,118,1,118,1,118,1,119,1,119,1,119,1,119,1,119,
        1,120,1,120,1,120,1,120,1,120,1,120,1,121,4,121,1064,8,121,11,121,
        12,121,1065,1,121,1,121,1,122,1,122,1,122,1,122,1,123,1,123,1,123,
        3,123,1077,8,123,1,123,3,123,1080,8,123,1,123,1,123,1,124,1,124,
        1,124,1,124,1,125,1,125,1,125,1,125,1,126,4,126,1093,8,126,11,126,
        12,126,1094,1,127,1,127,1,127,1,127,1,127,1,127,1,128,1,128,1,128,
        1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,
        1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,1,129,
        1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,132,1,132,1,132,1,132,
        1,132,1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,134,
        1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,135,1,135,
        1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,136,1,136,
        1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,1,136,
        1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
        1,137,1,137,1,137,1,137,1,138,1,138,1,138,1,138,1,138,1,138,1,138,
        1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,1,139,
        1,139,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,140,
        1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,
        1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,141,1,142,1,142,
        1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,
        1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,143,
        1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,144,1,144,1,144,1,144,
        1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,1,144,
        1,144,1,144,1,145,1,145,5,145,1319,8,145,10,145,12,145,1322,9,145,
        1,145,1,145,1,145,1,145,1,146,1,146,1,146,1,146,1,146,1,146,1,146,
        1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,147,1,148,1,148,1,148,
        1,148,5,148,1347,8,148,10,148,12,148,1350,9,148,1,148,1,148,1,149,
        1,149,1,149,1,149,1,149,1,150,1,150,1,150,1,150,1,151,1,151,4,151,
        1365,8,151,11,151,12,151,1366,1,152,1,152,1,152,1,152,1,152,1,153,
        1,153,1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,
        1,154,1,154,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,155,
        1,156,1,156,1,156,1,156,1,156,1,157,1,157,3,157,1404,8,157,1,157,
        1,157,1,157,1,157,1,158,1,158,5,158,1412,8,158,10,158,12,158,1415,
        9,158,1,158,3,158,1418,8,158,1,158,1,158,1,158,1,158,1,158,1,158,
        1,158,1,158,1,158,1,158,4,158,1430,8,158,11,158,12,158,1431,1,158,
        1,158,5,158,1436,8,158,10,158,12,158,1439,9,158,1,158,1,158,5,158,
        1443,8,158,10,158,12,158,1446,9,158,1,158,4,158,1449,8,158,11,158,
        12,158,1450,3,158,1453,8,158,1,159,4,159,1456,8,159,11,159,12,159,
        1457,1,160,3,160,1461,8,160,1,160,1,160,1,160,4,160,1466,8,160,11,
        160,12,160,1467,1,161,4,161,1471,8,161,11,161,12,161,1472,1,162,
        1,162,1,162,3,162,1478,8,162,1,163,1,163,1,163,3,163,1483,8,163,
        1,164,1,164,1,164,3,164,1488,8,164,1,165,1,165,1,165,1,165,1,165,
        3,165,1495,8,165,1,166,1,166,1,167,4,167,1500,8,167,11,167,12,167,
        1501,1,168,1,168,1,168,1,168,1,168,3,168,1509,8,168,1,169,1,169,
        3,169,1513,8,169,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,
        1,171,1,171,1,171,1,171,1,171,1,171,4,171,1529,8,171,11,171,12,171,
        1530,1,171,1,171,3,171,1535,8,171,1,172,1,172,1,172,4,172,1540,8,
        172,11,172,12,172,1541,1,172,1,172,1,173,1,173,1,174,1,174,1,175,
        1,175,3,175,1552,8,175,1,176,4,176,1555,8,176,11,176,12,176,1556,
        1,177,1,177,1,178,1,178,1,178,5,178,1564,8,178,10,178,12,178,1567,
        9,178,3,178,1569,8,178,1,179,3,179,1572,8,179,1,179,1,179,1,180,
        1,180,3,180,1578,8,180,1,180,4,180,1581,8,180,11,180,12,180,1582,
        1,181,1,181,3,181,1587,8,181,1,182,1,182,1,182,3,182,1592,8,182,
        1,183,1,183,3,183,1596,8,183,1,183,1,183,5,183,1600,8,183,10,183,
        12,183,1603,9,183,1,183,1,183,3,183,1607,8,183,1,183,1,183,3,183,
        1611,8,183,1,184,1,184,1,185,1,185,3,185,1617,8,185,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,1,186,
        1,186,1,186,1,186,1,186,1,186,1,186,3,186,2452,8,186,3,186,2454,
        8,186,1,187,1,187,3,387,401,1601,0,188,5,3,7,0,9,0,11,0,13,4,15,
        5,17,6,19,7,21,8,23,9,25,10,27,11,29,12,31,13,33,14,35,15,37,16,
        39,17,41,18,43,19,45,20,47,21,49,22,51,23,53,24,55,25,57,26,59,27,
        61,28,63,29,65,30,67,31,69,32,71,33,73,34,75,35,77,36,79,37,81,38,
        83,39,85,40,87,41,89,42,91,43,93,44,95,45,97,46,99,47,101,48,103,
        49,105,50,107,51,109,52,111,53,113,54,115,55,117,56,119,57,121,58,
        123,59,125,60,127,61,129,62,131,63,133,64,135,65,137,66,139,67,141,
        68,143,69,145,70,147,71,149,72,151,73,153,74,155,75,157,76,159,77,
        161,78,163,79,165,80,167,81,169,82,171,83,173,84,175,85,177,86,179,
        87,181,88,183,89,185,90,187,91,189,92,191,93,193,94,195,95,197,96,
        199,97,201,98,203,99,205,100,207,101,209,102,211,103,213,104,215,
        105,217,106,219,107,221,108,223,109,225,110,227,111,229,112,231,
        113,233,0,235,114,237,115,239,116,241,117,243,0,245,0,247,118,249,
        119,251,120,253,121,255,122,257,123,259,124,261,125,263,126,265,
        127,267,128,269,129,271,130,273,131,275,132,277,133,279,134,281,
        135,283,136,285,137,287,138,289,139,291,140,293,141,295,0,297,0,
        299,0,301,142,303,0,305,143,307,144,309,0,311,145,313,146,315,147,
        317,148,319,0,321,0,323,0,325,0,327,0,329,0,331,0,333,0,335,0,337,
        0,339,0,341,0,343,0,345,0,347,0,349,0,351,0,353,0,355,0,357,0,359,
        0,361,0,363,0,365,0,367,0,369,0,371,0,373,0,375,0,377,0,379,0,5,
        0,1,2,3,4,53,3,0,10,10,13,13,8232,8233,2,0,85,85,117,117,2,0,80,
        80,112,112,2,0,84,84,116,116,2,0,82,82,114,114,2,0,69,69,101,101,
        2,0,70,70,102,102,2,0,65,65,97,97,2,0,76,76,108,108,2,0,83,83,115,
        115,1,0,48,57,2,0,48,57,95,95,2,0,88,88,120,120,3,0,48,57,65,70,
        97,102,2,0,66,66,98,98,2,0,75,75,107,107,2,0,68,68,100,100,2,0,79,
        79,111,111,2,0,87,87,119,119,2,0,73,73,105,105,2,0,67,67,99,99,2,
        0,72,72,104,104,2,0,78,78,110,110,2,0,89,89,121,121,2,0,71,71,103,
        103,2,0,77,77,109,109,2,0,10,10,13,13,3,0,10,10,13,13,34,34,3,0,
        10,10,13,13,39,39,6,0,10,10,13,13,32,32,59,59,96,96,123,123,2,0,
        86,86,118,118,2,0,81,81,113,113,5,0,10,10,13,13,34,34,133,133,8232,
        8233,4,0,10,10,13,13,133,133,8232,8233,5,0,9,10,13,13,32,32,133,
        133,8232,8233,12,0,42,42,63,63,66,67,79,79,82,84,88,88,90,90,98,
        99,111,111,114,116,120,120,122,122,4,0,9,9,11,12,32,32,160,160,2,
        0,34,34,96,96,2,0,39,39,96,96,4,0,10,10,13,13,58,59,96,96,5,0,9,
        10,12,13,32,32,96,96,8232,8233,5,0,10,10,13,13,59,59,96,96,8232,
        8233,13,0,34,34,39,39,58,59,65,66,70,70,78,78,82,84,86,86,96,98,
        102,102,110,110,114,116,118,118,15,0,10,10,13,13,34,34,39,39,48,
        59,65,66,70,70,78,78,82,86,88,88,96,98,102,102,110,110,114,118,120,
        120,5,0,48,57,85,85,88,88,117,117,120,120,4,0,48,57,65,70,95,95,
        97,102,1,0,49,57,2,0,43,43,45,45,408,0,48,57,95,95,768,879,1155,
        1159,1425,1469,1471,1471,1473,1474,1476,1477,1479,1479,1552,1562,
        1611,1641,1648,1648,1750,1756,1759,1764,1767,1768,1770,1773,1776,
        1785,1809,1809,1840,1866,1958,1968,1984,1993,2027,2035,2045,2045,
        2070,2073,2075,2083,2085,2087,2089,2093,2137,2139,2200,2207,2250,
        2273,2275,2306,2362,2362,2364,2364,2369,2376,2381,2381,2385,2391,
        2402,2403,2406,2415,2433,2433,2492,2492,2497,2500,2509,2509,2530,
        2531,2534,2543,2558,2558,2561,2562,2620,2620,2625,2626,2631,2632,
        2635,2637,2641,2641,2662,2673,2677,2677,2689,2690,2748,2748,2753,
        2757,2759,2760,2765,2765,2786,2787,2790,2799,2810,2815,2817,2817,
        2876,2876,2879,2879,2881,2884,2893,2893,2901,2902,2914,2915,2918,
        2927,2946,2946,3008,3008,3021,3021,3046,3055,3072,3072,3076,3076,
        3132,3132,3134,3136,3142,3144,3146,3149,3157,3158,3170,3171,3174,
        3183,3201,3201,3260,3260,3263,3263,3270,3270,3276,3277,3298,3299,
        3302,3311,3328,3329,3387,3388,3393,3396,3405,3405,3426,3427,3430,
        3439,3457,3457,3530,3530,3538,3540,3542,3542,3558,3567,3633,3633,
        3636,3642,3655,3662,3664,3673,3761,3761,3764,3772,3784,3790,3792,
        3801,3864,3865,3872,3881,3893,3893,3895,3895,3897,3897,3953,3966,
        3968,3972,3974,3975,3981,3991,3993,4028,4038,4038,4141,4144,4146,
        4151,4153,4154,4157,4158,4160,4169,4184,4185,4190,4192,4209,4212,
        4226,4226,4229,4230,4237,4237,4240,4249,4253,4253,4957,4959,5906,
        5908,5938,5939,5970,5971,6002,6003,6068,6069,6071,6077,6086,6086,
        6089,6099,6109,6109,6112,6121,6155,6157,6159,6169,6277,6278,6313,
        6313,6432,6434,6439,6440,6450,6450,6457,6459,6470,6479,6608,6617,
        6679,6680,6683,6683,6742,6742,6744,6750,6752,6752,6754,6754,6757,
        6764,6771,6780,6783,6793,6800,6809,6832,6845,6847,6862,6912,6915,
        6964,6964,6966,6970,6972,6972,6978,6978,6992,7001,7019,7027,7040,
        7041,7074,7077,7080,7081,7083,7085,7088,7097,7142,7142,7144,7145,
        7149,7149,7151,7153,7212,7219,7222,7223,7232,7241,7248,7257,7376,
        7378,7380,7392,7394,7400,7405,7405,7412,7412,7416,7417,7616,7679,
        8204,8205,8255,8256,8276,8276,8400,8412,8417,8417,8421,8432,11503,
        11505,11647,11647,11744,11775,12330,12333,12441,12442,42528,42537,
        42607,42607,42612,42621,42654,42655,42736,42737,43010,43010,43014,
        43014,43019,43019,43045,43046,43052,43052,43204,43205,43216,43225,
        43232,43249,43263,43273,43302,43309,43335,43345,43392,43394,43443,
        43443,43446,43449,43452,43453,43472,43481,43493,43493,43504,43513,
        43561,43566,43569,43570,43573,43574,43587,43587,43596,43596,43600,
        43609,43644,43644,43696,43696,43698,43700,43703,43704,43710,43711,
        43713,43713,43756,43757,43766,43766,44005,44005,44008,44008,44013,
        44013,44016,44025,64286,64286,65024,65039,65056,65071,65075,65076,
        65101,65103,65296,65305,65343,65343,66045,66045,66272,66272,66422,
        66426,66720,66729,68097,68099,68101,68102,68108,68111,68152,68154,
        68159,68159,68325,68326,68900,68903,68912,68921,69291,69292,69373,
        69375,69446,69456,69506,69509,69633,69633,69688,69702,69734,69744,
        69747,69748,69759,69761,69811,69814,69817,69818,69826,69826,69872,
        69881,69888,69890,69927,69931,69933,69940,69942,69951,70003,70003,
        70016,70017,70070,70078,70089,70092,70095,70105,70191,70193,70196,
        70196,70198,70199,70206,70206,70209,70209,70367,70367,70371,70378,
        70384,70393,70400,70401,70459,70460,70464,70464,70502,70508,70512,
        70516,70712,70719,70722,70724,70726,70726,70736,70745,70750,70750,
        70835,70840,70842,70842,70847,70848,70850,70851,70864,70873,71090,
        71093,71100,71101,71103,71104,71132,71133,71219,71226,71229,71229,
        71231,71232,71248,71257,71339,71339,71341,71341,71344,71349,71351,
        71351,71360,71369,71453,71455,71458,71461,71463,71467,71472,71481,
        71727,71735,71737,71738,71904,71913,71995,71996,71998,71998,72003,
        72003,72016,72025,72148,72151,72154,72155,72160,72160,72193,72202,
        72243,72248,72251,72254,72263,72263,72273,72278,72281,72283,72330,
        72342,72344,72345,72752,72758,72760,72765,72767,72767,72784,72793,
        72850,72871,72874,72880,72882,72883,72885,72886,73009,73014,73018,
        73018,73020,73021,73023,73029,73031,73031,73040,73049,73104,73105,
        73109,73109,73111,73111,73120,73129,73459,73460,73472,73473,73526,
        73530,73536,73536,73538,73538,73552,73561,78912,78912,78919,78933,
        92768,92777,92864,92873,92912,92916,92976,92982,93008,93017,94031,
        94031,94095,94098,94180,94180,113821,113822,118528,118573,118576,
        118598,119143,119145,119163,119170,119173,119179,119210,119213,119362,
        119364,120782,120831,121344,121398,121403,121452,121461,121461,121476,
        121476,121499,121503,121505,121519,122880,122886,122888,122904,122907,
        122913,122915,122916,122918,122922,123023,123023,123184,123190,123200,
        123209,123566,123566,123628,123641,124140,124153,125136,125142,125252,
        125258,125264,125273,130032,130041,917760,917999,661,0,36,36,65,
        90,95,95,97,122,170,170,181,181,186,186,192,214,216,246,248,705,
        710,721,736,740,748,748,750,750,880,884,886,887,890,893,895,895,
        902,902,904,906,908,908,910,929,931,1013,1015,1153,1162,1327,1329,
        1366,1369,1369,1376,1416,1488,1514,1519,1522,1568,1610,1646,1647,
        1649,1747,1749,1749,1765,1766,1774,1775,1786,1788,1791,1791,1808,
        1808,1810,1839,1869,1957,1969,1969,1994,2026,2036,2037,2042,2042,
        2048,2069,2074,2074,2084,2084,2088,2088,2112,2136,2144,2154,2160,
        2183,2185,2190,2208,2249,2308,2361,2365,2365,2384,2384,2392,2401,
        2417,2432,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,
        2489,2493,2493,2510,2510,2524,2525,2527,2529,2544,2545,2556,2556,
        2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,
        2617,2649,2652,2654,2654,2674,2676,2693,2701,2703,2705,2707,2728,
        2730,2736,2738,2739,2741,2745,2749,2749,2768,2768,2784,2785,2809,
        2809,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2869,2873,
        2877,2877,2908,2909,2911,2913,2929,2929,2947,2947,2949,2954,2958,
        2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,
        2990,3001,3024,3024,3077,3084,3086,3088,3090,3112,3114,3129,3133,
        3133,3160,3162,3165,3165,3168,3169,3200,3200,3205,3212,3214,3216,
        3218,3240,3242,3251,3253,3257,3261,3261,3293,3294,3296,3297,3313,
        3314,3332,3340,3342,3344,3346,3386,3389,3389,3406,3406,3412,3414,
        3423,3425,3450,3455,3461,3478,3482,3505,3507,3515,3517,3517,3520,
        3526,3585,3632,3634,3635,3648,3654,3713,3714,3716,3716,3718,3722,
        3724,3747,3749,3749,3751,3760,3762,3763,3773,3773,3776,3780,3782,
        3782,3804,3807,3840,3840,3904,3911,3913,3948,3976,3980,4096,4138,
        4159,4159,4176,4181,4186,4189,4193,4193,4197,4198,4206,4208,4213,
        4225,4238,4238,4256,4293,4295,4295,4301,4301,4304,4346,4348,4680,
        4682,4685,4688,4694,4696,4696,4698,4701,4704,4744,4746,4749,4752,
        4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4822,4824,4880,
        4882,4885,4888,4954,4992,5007,5024,5109,5112,5117,5121,5740,5743,
        5759,5761,5786,5792,5866,5873,5880,5888,5905,5919,5937,5952,5969,
        5984,5996,5998,6000,6016,6067,6103,6103,6108,6108,6176,6264,6272,
        6276,6279,6312,6314,6314,6320,6389,6400,6430,6480,6509,6512,6516,
        6528,6571,6576,6601,6656,6678,6688,6740,6823,6823,6917,6963,6981,
        6988,7043,7072,7086,7087,7098,7141,7168,7203,7245,7247,7258,7293,
        7296,7304,7312,7354,7357,7359,7401,7404,7406,7411,7413,7414,7418,
        7418,7424,7615,7680,7957,7960,7965,7968,8005,8008,8013,8016,8023,
        8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,
        8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,
        8182,8188,8305,8305,8319,8319,8336,8348,8450,8450,8455,8455,8458,
        8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,
        8495,8505,8508,8511,8517,8521,8526,8526,8579,8580,11264,11492,11499,
        11502,11506,11507,11520,11557,11559,11559,11565,11565,11568,11623,
        11631,11631,11648,11670,11680,11686,11688,11694,11696,11702,11704,
        11710,11712,11718,11720,11726,11728,11734,11736,11742,11823,11823,
        12293,12294,12337,12341,12347,12348,12353,12438,12445,12447,12449,
        12538,12540,12543,12549,12591,12593,12686,12704,12735,12784,12799,
        13312,19903,19968,42124,42192,42237,42240,42508,42512,42527,42538,
        42539,42560,42606,42623,42653,42656,42725,42775,42783,42786,42888,
        42891,42954,42960,42961,42963,42963,42965,42969,42994,43009,43011,
        43013,43015,43018,43020,43042,43072,43123,43138,43187,43250,43255,
        43259,43259,43261,43262,43274,43301,43312,43334,43360,43388,43396,
        43442,43471,43471,43488,43492,43494,43503,43514,43518,43520,43560,
        43584,43586,43588,43595,43616,43638,43642,43642,43646,43695,43697,
        43697,43701,43702,43705,43709,43712,43712,43714,43714,43739,43741,
        43744,43754,43762,43764,43777,43782,43785,43790,43793,43798,43808,
        43814,43816,43822,43824,43866,43868,43881,43888,44002,44032,55203,
        55216,55238,55243,55291,63744,64109,64112,64217,64256,64262,64275,
        64279,64285,64285,64287,64296,64298,64310,64312,64316,64318,64318,
        64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,
        64967,65008,65019,65136,65140,65142,65276,65313,65338,65345,65370,
        65382,65470,65474,65479,65482,65487,65490,65495,65498,65500,65536,
        65547,65549,65574,65576,65594,65596,65597,65599,65613,65616,65629,
        65664,65786,66176,66204,66208,66256,66304,66335,66349,66368,66370,
        66377,66384,66421,66432,66461,66464,66499,66504,66511,66560,66717,
        66736,66771,66776,66811,66816,66855,66864,66915,66928,66938,66940,
        66954,66956,66962,66964,66965,66967,66977,66979,66993,66995,67001,
        67003,67004,67072,67382,67392,67413,67424,67431,67456,67461,67463,
        67504,67506,67514,67584,67589,67592,67592,67594,67637,67639,67640,
        67644,67644,67647,67669,67680,67702,67712,67742,67808,67826,67828,
        67829,67840,67861,67872,67897,67968,68023,68030,68031,68096,68096,
        68112,68115,68117,68119,68121,68149,68192,68220,68224,68252,68288,
        68295,68297,68324,68352,68405,68416,68437,68448,68466,68480,68497,
        68608,68680,68736,68786,68800,68850,68864,68899,69248,69289,69296,
        69297,69376,69404,69415,69415,69424,69445,69488,69505,69552,69572,
        69600,69622,69635,69687,69745,69746,69749,69749,69763,69807,69840,
        69864,69891,69926,69956,69956,69959,69959,69968,70002,70006,70006,
        70019,70066,70081,70084,70106,70106,70108,70108,70144,70161,70163,
        70187,70207,70208,70272,70278,70280,70280,70282,70285,70287,70301,
        70303,70312,70320,70366,70405,70412,70415,70416,70419,70440,70442,
        70448,70450,70451,70453,70457,70461,70461,70480,70480,70493,70497,
        70656,70708,70727,70730,70751,70753,70784,70831,70852,70853,70855,
        70855,71040,71086,71128,71131,71168,71215,71236,71236,71296,71338,
        71352,71352,71424,71450,71488,71494,71680,71723,71840,71903,71935,
        71942,71945,71945,71948,71955,71957,71958,71960,71983,71999,71999,
        72001,72001,72096,72103,72106,72144,72161,72161,72163,72163,72192,
        72192,72203,72242,72250,72250,72272,72272,72284,72329,72349,72349,
        72368,72440,72704,72712,72714,72750,72768,72768,72818,72847,72960,
        72966,72968,72969,72971,73008,73030,73030,73056,73061,73063,73064,
        73066,73097,73112,73112,73440,73458,73474,73474,73476,73488,73490,
        73523,73648,73648,73728,74649,74880,75075,77712,77808,77824,78895,
        78913,78918,82944,83526,92160,92728,92736,92766,92784,92862,92880,
        92909,92928,92975,92992,92995,93027,93047,93053,93071,93760,93823,
        93952,94026,94032,94032,94099,94111,94176,94177,94179,94179,94208,
        100343,100352,101589,101632,101640,110576,110579,110581,110587,110589,
        110590,110592,110882,110898,110898,110928,110930,110933,110933,110948,
        110951,110960,111355,113664,113770,113776,113788,113792,113800,113808,
        113817,119808,119892,119894,119964,119966,119967,119970,119970,119973,
        119974,119977,119980,119982,119993,119995,119995,119997,120003,120005,
        120069,120071,120074,120077,120084,120086,120092,120094,120121,120123,
        120126,120128,120132,120134,120134,120138,120144,120146,120485,120488,
        120512,120514,120538,120540,120570,120572,120596,120598,120628,120630,
        120654,120656,120686,120688,120712,120714,120744,120746,120770,120772,
        120779,122624,122654,122661,122666,122928,122989,123136,123180,123191,
        123197,123214,123214,123536,123565,123584,123627,124112,124139,124896,
        124902,124904,124907,124909,124910,124912,124926,124928,125124,125184,
        125251,125259,125259,126464,126467,126469,126495,126497,126498,126500,
        126500,126503,126503,126505,126514,126516,126519,126521,126521,126523,
        126523,126530,126530,126535,126535,126537,126537,126539,126539,126541,
        126543,126545,126546,126548,126548,126551,126551,126553,126553,126555,
        126555,126557,126557,126559,126559,126561,126562,126564,126564,126567,
        126570,126572,126578,126580,126583,126585,126588,126590,126590,126592,
        126601,126603,126619,126625,126627,126629,126633,126635,126651,131072,
        173791,173824,177977,177984,178205,178208,183969,183984,191456,194560,
        195101,196608,201546,201552,205743,6,0,33,33,35,35,43,43,60,60,62,
        62,94,94,3,0,36,36,42,42,126,126,5,0,10,10,13,13,32,32,96,96,8232,
        8233,2638,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
        1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,
        1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
        1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,
        1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,
        1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,
        1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,
        1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,
        1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,
        1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,
        1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,
        0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,
        0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,
        131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,
        0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,
        1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,
        0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,0,165,1,0,0,0,0,167,1,
        0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,
        177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,1,0,
        0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,
        1,0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,
        0,205,1,0,0,0,0,207,1,0,0,0,0,209,1,0,0,0,0,211,1,0,0,0,0,213,1,
        0,0,0,0,215,1,0,0,0,0,217,1,0,0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,
        223,1,0,0,0,0,225,1,0,0,0,0,227,1,0,0,0,0,229,1,0,0,0,0,231,1,0,
        0,0,0,233,1,0,0,0,0,235,1,0,0,0,0,237,1,0,0,0,0,239,1,0,0,0,0,241,
        1,0,0,0,1,243,1,0,0,0,1,245,1,0,0,0,1,247,1,0,0,0,1,249,1,0,0,0,
        1,251,1,0,0,0,1,253,1,0,0,0,2,255,1,0,0,0,2,257,1,0,0,0,2,259,1,
        0,0,0,2,261,1,0,0,0,2,263,1,0,0,0,2,265,1,0,0,0,2,267,1,0,0,0,2,
        269,1,0,0,0,2,271,1,0,0,0,2,273,1,0,0,0,2,275,1,0,0,0,2,277,1,0,
        0,0,2,279,1,0,0,0,2,281,1,0,0,0,2,283,1,0,0,0,2,285,1,0,0,0,2,287,
        1,0,0,0,2,289,1,0,0,0,2,291,1,0,0,0,2,293,1,0,0,0,2,295,1,0,0,0,
        2,297,1,0,0,0,2,299,1,0,0,0,2,301,1,0,0,0,2,303,1,0,0,0,3,305,1,
        0,0,0,3,307,1,0,0,0,3,309,1,0,0,0,4,311,1,0,0,0,4,313,1,0,0,0,4,
        315,1,0,0,0,4,317,1,0,0,0,5,381,1,0,0,0,7,395,1,0,0,0,9,409,1,0,
        0,0,11,421,1,0,0,0,13,427,1,0,0,0,15,433,1,0,0,0,17,467,1,0,0,0,
        19,501,1,0,0,0,21,504,1,0,0,0,23,507,1,0,0,0,25,510,1,0,0,0,27,513,
        1,0,0,0,29,515,1,0,0,0,31,517,1,0,0,0,33,519,1,0,0,0,35,522,1,0,
        0,0,37,524,1,0,0,0,39,527,1,0,0,0,41,529,1,0,0,0,43,532,1,0,0,0,
        45,536,1,0,0,0,47,540,1,0,0,0,49,551,1,0,0,0,51,554,1,0,0,0,53,557,
        1,0,0,0,55,559,1,0,0,0,57,561,1,0,0,0,59,563,1,0,0,0,61,565,1,0,
        0,0,63,567,1,0,0,0,65,569,1,0,0,0,67,572,1,0,0,0,69,575,1,0,0,0,
        71,578,1,0,0,0,73,581,1,0,0,0,75,585,1,0,0,0,77,588,1,0,0,0,79,591,
        1,0,0,0,81,595,1,0,0,0,83,597,1,0,0,0,85,599,1,0,0,0,87,602,1,0,
        0,0,89,605,1,0,0,0,91,607,1,0,0,0,93,610,1,0,0,0,95,613,1,0,0,0,
        97,617,1,0,0,0,99,620,1,0,0,0,101,622,1,0,0,0,103,624,1,0,0,0,105,
        626,1,0,0,0,107,629,1,0,0,0,109,632,1,0,0,0,111,635,1,0,0,0,113,
        638,1,0,0,0,115,641,1,0,0,0,117,644,1,0,0,0,119,647,1,0,0,0,121,
        651,1,0,0,0,123,655,1,0,0,0,125,660,1,0,0,0,127,664,1,0,0,0,129,
        667,1,0,0,0,131,670,1,0,0,0,133,673,1,0,0,0,135,676,1,0,0,0,137,
        680,1,0,0,0,139,684,1,0,0,0,141,687,1,0,0,0,143,692,1,0,0,0,145,
        726,1,0,0,0,147,728,1,0,0,0,149,738,1,0,0,0,151,744,1,0,0,0,153,
        747,1,0,0,0,155,754,1,0,0,0,157,759,1,0,0,0,159,767,1,0,0,0,161,
        772,1,0,0,0,163,778,1,0,0,0,165,786,1,0,0,0,167,793,1,0,0,0,169,
        802,1,0,0,0,171,806,1,0,0,0,173,812,1,0,0,0,175,818,1,0,0,0,177,
        822,1,0,0,0,179,827,1,0,0,0,181,833,1,0,0,0,183,838,1,0,0,0,185,
        844,1,0,0,0,187,849,1,0,0,0,189,852,1,0,0,0,191,858,1,0,0,0,193,
        861,1,0,0,0,195,865,1,0,0,0,197,868,1,0,0,0,199,877,1,0,0,0,201,
        881,1,0,0,0,203,885,1,0,0,0,205,888,1,0,0,0,207,893,1,0,0,0,209,
        897,1,0,0,0,211,901,1,0,0,0,213,907,1,0,0,0,215,912,1,0,0,0,217,
        920,1,0,0,0,219,926,1,0,0,0,221,931,1,0,0,0,223,934,1,0,0,0,225,
        940,1,0,0,0,227,947,1,0,0,0,229,954,1,0,0,0,231,960,1,0,0,0,233,
        1015,1,0,0,0,235,1037,1,0,0,0,237,1041,1,0,0,0,239,1044,1,0,0,0,
        241,1047,1,0,0,0,243,1051,1,0,0,0,245,1056,1,0,0,0,247,1063,1,0,
        0,0,249,1069,1,0,0,0,251,1076,1,0,0,0,253,1083,1,0,0,0,255,1087,
        1,0,0,0,257,1092,1,0,0,0,259,1096,1,0,0,0,261,1102,1,0,0,0,263,1113,
        1,0,0,0,265,1127,1,0,0,0,267,1135,1,0,0,0,269,1145,1,0,0,0,271,1155,
        1,0,0,0,273,1170,1,0,0,0,275,1180,1,0,0,0,277,1191,1,0,0,0,279,1208,
        1,0,0,0,281,1219,1,0,0,0,283,1226,1,0,0,0,285,1238,1,0,0,0,287,1255,
        1,0,0,0,289,1268,1,0,0,0,291,1279,1,0,0,0,293,1296,1,0,0,0,295,1316,
        1,0,0,0,297,1327,1,0,0,0,299,1334,1,0,0,0,301,1342,1,0,0,0,303,1353,
        1,0,0,0,305,1358,1,0,0,0,307,1362,1,0,0,0,309,1368,1,0,0,0,311,1373,
        1,0,0,0,313,1377,1,0,0,0,315,1387,1,0,0,0,317,1396,1,0,0,0,319,1401,
        1,0,0,0,321,1452,1,0,0,0,323,1455,1,0,0,0,325,1465,1,0,0,0,327,1470,
        1,0,0,0,329,1477,1,0,0,0,331,1482,1,0,0,0,333,1487,1,0,0,0,335,1494,
        1,0,0,0,337,1496,1,0,0,0,339,1499,1,0,0,0,341,1508,1,0,0,0,343,1512,
        1,0,0,0,345,1514,1,0,0,0,347,1534,1,0,0,0,349,1536,1,0,0,0,351,1545,
        1,0,0,0,353,1547,1,0,0,0,355,1551,1,0,0,0,357,1554,1,0,0,0,359,1558,
        1,0,0,0,361,1568,1,0,0,0,363,1571,1,0,0,0,365,1575,1,0,0,0,367,1586,
        1,0,0,0,369,1591,1,0,0,0,371,1593,1,0,0,0,373,1612,1,0,0,0,375,1616,
        1,0,0,0,377,2453,1,0,0,0,379,2455,1,0,0,0,381,382,5,47,0,0,382,383,
        5,42,0,0,383,387,1,0,0,0,384,386,8,0,0,0,385,384,1,0,0,0,386,389,
        1,0,0,0,387,388,1,0,0,0,387,385,1,0,0,0,388,390,1,0,0,0,389,387,
        1,0,0,0,390,391,5,42,0,0,391,392,5,47,0,0,392,393,1,0,0,0,393,394,
        6,0,0,0,394,6,1,0,0,0,395,396,5,47,0,0,396,397,5,42,0,0,397,401,
        1,0,0,0,398,400,9,0,0,0,399,398,1,0,0,0,400,403,1,0,0,0,401,402,
        1,0,0,0,401,399,1,0,0,0,402,404,1,0,0,0,403,401,1,0,0,0,404,405,
        5,42,0,0,405,406,5,47,0,0,406,407,1,0,0,0,407,408,6,1,1,0,408,8,
        1,0,0,0,409,413,5,59,0,0,410,412,8,0,0,0,411,410,1,0,0,0,412,415,
        1,0,0,0,413,411,1,0,0,0,413,414,1,0,0,0,414,416,1,0,0,0,415,413,
        1,0,0,0,416,417,7,0,0,0,417,418,4,2,0,0,418,419,1,0,0,0,419,420,
        6,2,1,0,420,10,1,0,0,0,421,422,3,319,157,0,422,423,4,3,1,0,423,424,
        1,0,0,0,424,425,6,3,2,0,425,426,6,3,3,0,426,12,1,0,0,0,427,428,3,
        319,157,0,428,429,4,4,2,0,429,14,1,0,0,0,430,432,3,375,185,0,431,
        430,1,0,0,0,432,435,1,0,0,0,433,431,1,0,0,0,433,434,1,0,0,0,434,
        436,1,0,0,0,435,433,1,0,0,0,436,450,3,377,186,0,437,439,3,327,161,
        0,438,437,1,0,0,0,439,440,1,0,0,0,440,438,1,0,0,0,440,441,1,0,0,
        0,441,442,1,0,0,0,442,444,5,38,0,0,443,445,3,327,161,0,444,443,1,
        0,0,0,445,446,1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,448,1,
        0,0,0,448,449,3,377,186,0,449,451,1,0,0,0,450,438,1,0,0,0,450,451,
        1,0,0,0,451,452,1,0,0,0,452,453,5,58,0,0,453,454,5,58,0,0,454,458,
        1,0,0,0,455,457,3,373,184,0,456,455,1,0,0,0,457,460,1,0,0,0,458,
        456,1,0,0,0,458,459,1,0,0,0,459,461,1,0,0,0,460,458,1,0,0,0,461,
        462,3,377,186,0,462,463,4,5,3,0,463,16,1,0,0,0,464,466,3,375,185,
        0,465,464,1,0,0,0,466,469,1,0,0,0,467,465,1,0,0,0,467,468,1,0,0,
        0,468,470,1,0,0,0,469,467,1,0,0,0,470,484,3,377,186,0,471,473,3,
        327,161,0,472,471,1,0,0,0,473,474,1,0,0,0,474,472,1,0,0,0,474,475,
        1,0,0,0,475,476,1,0,0,0,476,478,5,38,0,0,477,479,3,327,161,0,478,
        477,1,0,0,0,479,480,1,0,0,0,480,478,1,0,0,0,480,481,1,0,0,0,481,
        482,1,0,0,0,482,483,3,377,186,0,483,485,1,0,0,0,484,472,1,0,0,0,
        484,485,1,0,0,0,485,494,1,0,0,0,486,488,3,327,161,0,487,486,1,0,
        0,0,488,489,1,0,0,0,489,487,1,0,0,0,489,490,1,0,0,0,490,491,1,0,
        0,0,491,492,7,1,0,0,492,493,7,2,0,0,493,495,1,0,0,0,494,487,1,0,
        0,0,494,495,1,0,0,0,495,496,1,0,0,0,496,497,5,58,0,0,497,498,5,58,
        0,0,498,499,1,0,0,0,499,500,4,6,4,0,500,18,1,0,0,0,501,502,5,91,
        0,0,502,503,6,7,4,0,503,20,1,0,0,0,504,505,5,93,0,0,505,506,6,8,
        5,0,506,22,1,0,0,0,507,508,5,40,0,0,508,509,6,9,6,0,509,24,1,0,0,
        0,510,511,5,41,0,0,511,512,6,10,7,0,512,26,1,0,0,0,513,514,5,123,
        0,0,514,28,1,0,0,0,515,516,5,125,0,0,516,30,1,0,0,0,517,518,5,44,
        0,0,518,32,1,0,0,0,519,520,5,58,0,0,520,521,5,61,0,0,521,34,1,0,
        0,0,522,523,5,63,0,0,523,36,1,0,0,0,524,525,5,63,0,0,525,526,5,46,
        0,0,526,38,1,0,0,0,527,528,5,58,0,0,528,40,1,0,0,0,529,530,5,58,
        0,0,530,531,5,58,0,0,531,42,1,0,0,0,532,533,5,46,0,0,533,534,5,46,
        0,0,534,535,5,46,0,0,535,44,1,0,0,0,536,537,5,46,0,0,537,46,1,0,
        0,0,538,541,3,239,117,0,539,541,3,237,116,0,540,538,1,0,0,0,540,
        539,1,0,0,0,541,542,1,0,0,0,542,540,1,0,0,0,542,543,1,0,0,0,543,
        544,1,0,0,0,544,547,5,46,0,0,545,548,3,239,117,0,546,548,3,237,116,
        0,547,545,1,0,0,0,547,546,1,0,0,0,548,549,1,0,0,0,549,547,1,0,0,
        0,549,550,1,0,0,0,550,48,1,0,0,0,551,552,5,43,0,0,552,553,5,43,0,
        0,553,50,1,0,0,0,554,555,5,45,0,0,555,556,5,45,0,0,556,52,1,0,0,
        0,557,558,5,43,0,0,558,54,1,0,0,0,559,560,5,45,0,0,560,56,1,0,0,
        0,561,562,5,126,0,0,562,58,1,0,0,0,563,564,5,33,0,0,564,60,1,0,0,
        0,565,566,5,42,0,0,566,62,1,0,0,0,567,568,5,47,0,0,568,64,1,0,0,
        0,569,570,5,47,0,0,570,571,5,47,0,0,571,66,1,0,0,0,572,573,5,37,
        0,0,573,574,6,31,8,0,574,68,1,0,0,0,575,576,5,42,0,0,576,577,5,42,
        0,0,577,70,1,0,0,0,578,579,5,63,0,0,579,580,5,63,0,0,580,72,1,0,
        0,0,581,582,5,35,0,0,582,583,1,0,0,0,583,584,6,34,9,0,584,74,1,0,
        0,0,585,586,5,62,0,0,586,587,5,62,0,0,587,76,1,0,0,0,588,589,5,60,
        0,0,589,590,5,60,0,0,590,78,1,0,0,0,591,592,5,62,0,0,592,593,5,62,
        0,0,593,594,5,62,0,0,594,80,1,0,0,0,595,596,5,60,0,0,596,82,1,0,
        0,0,597,598,5,62,0,0,598,84,1,0,0,0,599,600,5,60,0,0,600,601,5,61,
        0,0,601,86,1,0,0,0,602,603,5,62,0,0,603,604,5,61,0,0,604,88,1,0,
        0,0,605,606,5,61,0,0,606,90,1,0,0,0,607,608,5,33,0,0,608,609,5,61,
        0,0,609,92,1,0,0,0,610,611,5,61,0,0,611,612,5,61,0,0,612,94,1,0,
        0,0,613,614,5,33,0,0,614,615,5,61,0,0,615,616,5,61,0,0,616,96,1,
        0,0,0,617,618,5,126,0,0,618,619,5,61,0,0,619,98,1,0,0,0,620,621,
        5,38,0,0,621,100,1,0,0,0,622,623,5,94,0,0,623,102,1,0,0,0,624,625,
        5,124,0,0,625,104,1,0,0,0,626,627,5,38,0,0,627,628,5,38,0,0,628,
        106,1,0,0,0,629,630,5,124,0,0,630,631,5,124,0,0,631,108,1,0,0,0,
        632,633,5,42,0,0,633,634,5,61,0,0,634,110,1,0,0,0,635,636,5,47,0,
        0,636,637,5,61,0,0,637,112,1,0,0,0,638,639,5,37,0,0,639,640,5,61,
        0,0,640,114,1,0,0,0,641,642,5,43,0,0,642,643,5,61,0,0,643,116,1,
        0,0,0,644,645,5,45,0,0,645,646,5,61,0,0,646,118,1,0,0,0,647,648,
        5,60,0,0,648,649,5,60,0,0,649,650,5,61,0,0,650,120,1,0,0,0,651,652,
        5,62,0,0,652,653,5,62,0,0,653,654,5,61,0,0,654,122,1,0,0,0,655,656,
        5,62,0,0,656,657,5,62,0,0,657,658,5,62,0,0,658,659,5,61,0,0,659,
        124,1,0,0,0,660,661,5,47,0,0,661,662,5,47,0,0,662,663,5,61,0,0,663,
        126,1,0,0,0,664,665,5,46,0,0,665,666,5,61,0,0,666,128,1,0,0,0,667,
        668,5,38,0,0,668,669,5,61,0,0,669,130,1,0,0,0,670,671,5,94,0,0,671,
        672,5,61,0,0,672,132,1,0,0,0,673,674,5,124,0,0,674,675,5,61,0,0,
        675,134,1,0,0,0,676,677,5,42,0,0,677,678,5,42,0,0,678,679,5,61,0,
        0,679,136,1,0,0,0,680,681,5,63,0,0,681,682,5,63,0,0,682,683,5,61,
        0,0,683,138,1,0,0,0,684,685,5,61,0,0,685,686,5,62,0,0,686,140,1,
        0,0,0,687,688,7,3,0,0,688,689,7,4,0,0,689,690,7,1,0,0,690,691,7,
        5,0,0,691,142,1,0,0,0,692,693,7,6,0,0,693,694,7,7,0,0,694,695,7,
        8,0,0,695,696,7,9,0,0,696,697,7,5,0,0,697,144,1,0,0,0,698,699,3,
        361,178,0,699,700,5,46,0,0,700,704,7,10,0,0,701,703,7,11,0,0,702,
        701,1,0,0,0,703,706,1,0,0,0,704,702,1,0,0,0,704,705,1,0,0,0,705,
        708,1,0,0,0,706,704,1,0,0,0,707,709,3,365,180,0,708,707,1,0,0,0,
        708,709,1,0,0,0,709,727,1,0,0,0,710,711,5,46,0,0,711,715,7,10,0,
        0,712,714,7,11,0,0,713,712,1,0,0,0,714,717,1,0,0,0,715,713,1,0,0,
        0,715,716,1,0,0,0,716,719,1,0,0,0,717,715,1,0,0,0,718,720,3,365,
        180,0,719,718,1,0,0,0,719,720,1,0,0,0,720,721,1,0,0,0,721,727,4,
        70,5,0,722,724,3,361,178,0,723,725,3,365,180,0,724,723,1,0,0,0,724,
        725,1,0,0,0,725,727,1,0,0,0,726,698,1,0,0,0,726,710,1,0,0,0,726,
        722,1,0,0,0,727,146,1,0,0,0,728,729,5,48,0,0,729,730,7,12,0,0,730,
        731,1,0,0,0,731,735,7,13,0,0,732,734,3,359,177,0,733,732,1,0,0,0,
        734,737,1,0,0,0,735,733,1,0,0,0,735,736,1,0,0,0,736,148,1,0,0,0,
        737,735,1,0,0,0,738,739,7,14,0,0,739,740,7,4,0,0,740,741,7,5,0,0,
        741,742,7,7,0,0,742,743,7,15,0,0,743,150,1,0,0,0,744,745,7,16,0,
        0,745,746,7,17,0,0,746,152,1,0,0,0,747,748,7,9,0,0,748,749,7,18,
        0,0,749,750,7,19,0,0,750,751,7,3,0,0,751,752,7,20,0,0,752,753,7,
        21,0,0,753,154,1,0,0,0,754,755,7,20,0,0,755,756,7,7,0,0,756,757,
        7,9,0,0,757,758,7,5,0,0,758,156,1,0,0,0,759,760,7,16,0,0,760,761,
        7,5,0,0,761,762,7,6,0,0,762,763,7,7,0,0,763,764,7,1,0,0,764,765,
        7,8,0,0,765,766,7,3,0,0,766,158,1,0,0,0,767,768,7,5,0,0,768,769,
        7,8,0,0,769,770,7,9,0,0,770,771,7,5,0,0,771,160,1,0,0,0,772,773,
        7,20,0,0,773,774,7,7,0,0,774,775,7,3,0,0,775,776,7,20,0,0,776,777,
        7,21,0,0,777,162,1,0,0,0,778,779,7,6,0,0,779,780,7,19,0,0,780,781,
        7,22,0,0,781,782,7,7,0,0,782,783,7,8,0,0,783,784,7,8,0,0,784,785,
        7,23,0,0,785,164,1,0,0,0,786,787,7,4,0,0,787,788,7,5,0,0,788,789,
        7,3,0,0,789,790,7,1,0,0,790,791,7,4,0,0,791,792,7,22,0,0,792,166,
        1,0,0,0,793,794,7,20,0,0,794,795,7,17,0,0,795,796,7,22,0,0,796,797,
        7,3,0,0,797,798,7,19,0,0,798,799,7,22,0,0,799,800,7,1,0,0,800,801,
        7,5,0,0,801,168,1,0,0,0,802,803,7,6,0,0,803,804,7,17,0,0,804,805,
        7,4,0,0,805,170,1,0,0,0,806,807,7,18,0,0,807,808,7,21,0,0,808,809,
        7,19,0,0,809,810,7,8,0,0,810,811,7,5,0,0,811,172,1,0,0,0,812,813,
        7,2,0,0,813,814,7,7,0,0,814,815,7,4,0,0,815,816,7,9,0,0,816,817,
        7,5,0,0,817,174,1,0,0,0,818,819,7,4,0,0,819,820,7,5,0,0,820,821,
        7,24,0,0,821,176,1,0,0,0,822,823,7,4,0,0,823,824,7,5,0,0,824,825,
        7,7,0,0,825,826,7,16,0,0,826,178,1,0,0,0,827,828,7,6,0,0,828,829,
        7,19,0,0,829,830,7,8,0,0,830,831,7,5,0,0,831,832,7,9,0,0,832,180,
        1,0,0,0,833,834,7,8,0,0,834,835,7,17,0,0,835,836,7,17,0,0,836,837,
        7,2,0,0,837,182,1,0,0,0,838,839,7,1,0,0,839,840,7,22,0,0,840,841,
        7,3,0,0,841,842,7,19,0,0,842,843,7,8,0,0,843,184,1,0,0,0,844,845,
        7,3,0,0,845,846,7,21,0,0,846,847,7,19,0,0,847,848,7,9,0,0,848,186,
        1,0,0,0,849,850,7,19,0,0,850,851,7,6,0,0,851,188,1,0,0,0,852,853,
        7,3,0,0,853,854,7,21,0,0,854,855,7,4,0,0,855,856,7,17,0,0,856,857,
        7,18,0,0,857,190,1,0,0,0,858,859,7,19,0,0,859,860,7,22,0,0,860,192,
        1,0,0,0,861,862,7,3,0,0,862,863,7,4,0,0,863,864,7,23,0,0,864,194,
        1,0,0,0,865,866,7,19,0,0,866,867,7,9,0,0,867,196,1,0,0,0,868,869,
        7,20,0,0,869,870,7,17,0,0,870,871,7,22,0,0,871,872,7,3,0,0,872,873,
        7,7,0,0,873,874,7,19,0,0,874,875,7,22,0,0,875,876,7,9,0,0,876,198,
        1,0,0,0,877,878,7,7,0,0,878,879,7,22,0,0,879,880,7,16,0,0,880,200,
        1,0,0,0,881,882,7,22,0,0,882,883,7,17,0,0,883,884,7,3,0,0,884,202,
        1,0,0,0,885,886,7,17,0,0,886,887,7,4,0,0,887,204,1,0,0,0,888,889,
        7,24,0,0,889,890,7,17,0,0,890,891,7,3,0,0,891,892,7,17,0,0,892,206,
        1,0,0,0,893,894,7,24,0,0,894,895,7,5,0,0,895,896,7,3,0,0,896,208,
        1,0,0,0,897,898,7,9,0,0,898,899,7,5,0,0,899,900,7,3,0,0,900,210,
        1,0,0,0,901,902,7,20,0,0,902,903,7,8,0,0,903,904,7,7,0,0,904,905,
        7,9,0,0,905,906,7,9,0,0,906,212,1,0,0,0,907,908,7,5,0,0,908,909,
        7,22,0,0,909,910,7,1,0,0,910,911,7,25,0,0,911,214,1,0,0,0,912,913,
        7,5,0,0,913,914,7,12,0,0,914,915,7,3,0,0,915,916,7,5,0,0,916,917,
        7,22,0,0,917,918,7,16,0,0,918,919,7,9,0,0,919,216,1,0,0,0,920,921,
        7,9,0,0,921,922,7,1,0,0,922,923,7,2,0,0,923,924,7,5,0,0,924,925,
        7,4,0,0,925,218,1,0,0,0,926,927,7,14,0,0,927,928,7,7,0,0,928,929,
        7,9,0,0,929,930,7,5,0,0,930,220,1,0,0,0,931,932,7,7,0,0,932,933,
        7,9,0,0,933,222,1,0,0,0,934,935,7,1,0,0,935,936,7,22,0,0,936,937,
        7,9,0,0,937,938,7,5,0,0,938,939,7,3,0,0,939,224,1,0,0,0,940,941,
        7,9,0,0,941,942,7,3,0,0,942,943,7,7,0,0,943,944,7,3,0,0,944,945,
        7,19,0,0,945,946,7,20,0,0,946,226,1,0,0,0,947,948,7,24,0,0,948,949,
        7,8,0,0,949,950,7,17,0,0,950,951,7,14,0,0,951,952,7,7,0,0,952,953,
        7,8,0,0,953,228,1,0,0,0,954,955,7,8,0,0,955,956,7,17,0,0,956,957,
        7,20,0,0,957,958,7,7,0,0,958,959,7,8,0,0,959,230,1,0,0,0,960,964,
        3,369,182,0,961,963,3,367,181,0,962,961,1,0,0,0,963,966,1,0,0,0,
        964,962,1,0,0,0,964,965,1,0,0,0,965,232,1,0,0,0,966,964,1,0,0,0,
        967,982,5,34,0,0,968,969,3,327,161,0,969,973,5,59,0,0,970,972,8,
        26,0,0,971,970,1,0,0,0,972,975,1,0,0,0,973,971,1,0,0,0,973,974,1,
        0,0,0,974,983,1,0,0,0,975,973,1,0,0,0,976,978,8,27,0,0,977,976,1,
        0,0,0,978,981,1,0,0,0,979,977,1,0,0,0,979,980,1,0,0,0,980,983,1,
        0,0,0,981,979,1,0,0,0,982,968,1,0,0,0,982,979,1,0,0,0,983,985,1,
        0,0,0,984,986,3,371,183,0,985,984,1,0,0,0,986,987,1,0,0,0,987,985,
        1,0,0,0,987,988,1,0,0,0,988,989,1,0,0,0,989,990,5,34,0,0,990,1016,
        1,0,0,0,991,1006,5,39,0,0,992,993,3,327,161,0,993,997,5,59,0,0,994,
        996,8,26,0,0,995,994,1,0,0,0,996,999,1,0,0,0,997,995,1,0,0,0,997,
        998,1,0,0,0,998,1007,1,0,0,0,999,997,1,0,0,0,1000,1002,8,28,0,0,
        1001,1000,1,0,0,0,1002,1005,1,0,0,0,1003,1001,1,0,0,0,1003,1004,
        1,0,0,0,1004,1007,1,0,0,0,1005,1003,1,0,0,0,1006,992,1,0,0,0,1006,
        1003,1,0,0,0,1007,1009,1,0,0,0,1008,1010,3,371,183,0,1009,1008,1,
        0,0,0,1010,1011,1,0,0,0,1011,1009,1,0,0,0,1011,1012,1,0,0,0,1012,
        1013,1,0,0,0,1013,1014,5,39,0,0,1014,1016,1,0,0,0,1015,967,1,0,0,
        0,1015,991,1,0,0,0,1016,1017,1,0,0,0,1017,1018,6,114,10,0,1018,1019,
        1,0,0,0,1019,1020,6,114,11,0,1020,234,1,0,0,0,1021,1025,5,34,0,0,
        1022,1024,3,329,162,0,1023,1022,1,0,0,0,1024,1027,1,0,0,0,1025,1023,
        1,0,0,0,1025,1026,1,0,0,0,1026,1028,1,0,0,0,1027,1025,1,0,0,0,1028,
        1038,5,34,0,0,1029,1033,5,39,0,0,1030,1032,3,331,163,0,1031,1030,
        1,0,0,0,1032,1035,1,0,0,0,1033,1031,1,0,0,0,1033,1034,1,0,0,0,1034,
        1036,1,0,0,0,1035,1033,1,0,0,0,1036,1038,5,39,0,0,1037,1021,1,0,
        0,0,1037,1029,1,0,0,0,1038,1039,1,0,0,0,1039,1040,6,115,12,0,1040,
        236,1,0,0,0,1041,1042,3,357,176,0,1042,1043,6,116,13,0,1043,238,
        1,0,0,0,1044,1045,3,327,161,0,1045,1046,6,117,14,0,1046,240,1,0,
        0,0,1047,1048,9,0,0,0,1048,1049,1,0,0,0,1049,1050,6,118,15,0,1050,
        242,1,0,0,0,1051,1052,3,357,176,0,1052,1053,1,0,0,0,1053,1054,6,
        119,1,0,1054,1055,6,119,16,0,1055,244,1,0,0,0,1056,1057,5,123,0,
        0,1057,1058,6,120,17,0,1058,1059,1,0,0,0,1059,1060,6,120,18,0,1060,
        1061,6,120,16,0,1061,246,1,0,0,0,1062,1064,3,327,161,0,1063,1062,
        1,0,0,0,1064,1065,1,0,0,0,1065,1063,1,0,0,0,1065,1066,1,0,0,0,1066,
        1067,1,0,0,0,1067,1068,6,121,19,0,1068,248,1,0,0,0,1069,1070,3,371,
        183,0,1070,1071,1,0,0,0,1071,1072,6,122,16,0,1072,250,1,0,0,0,1073,
        1077,8,29,0,0,1074,1075,5,96,0,0,1075,1077,3,341,168,0,1076,1073,
        1,0,0,0,1076,1074,1,0,0,0,1077,1079,1,0,0,0,1078,1080,3,339,167,
        0,1079,1078,1,0,0,0,1079,1080,1,0,0,0,1080,1081,1,0,0,0,1081,1082,
        6,123,16,0,1082,252,1,0,0,0,1083,1084,9,0,0,0,1084,1085,1,0,0,0,
        1085,1086,6,124,15,0,1086,254,1,0,0,0,1087,1088,3,327,161,0,1088,
        1089,1,0,0,0,1089,1090,6,125,19,0,1090,256,1,0,0,0,1091,1093,7,10,
        0,0,1092,1091,1,0,0,0,1093,1094,1,0,0,0,1094,1092,1,0,0,0,1094,1095,
        1,0,0,0,1095,258,1,0,0,0,1096,1097,7,21,0,0,1097,1098,7,17,0,0,1098,
        1099,7,3,0,0,1099,1100,7,19,0,0,1100,1101,7,6,0,0,1101,260,1,0,0,
        0,1102,1103,7,19,0,0,1103,1104,7,22,0,0,1104,1105,7,2,0,0,1105,1106,
        7,1,0,0,1106,1107,7,3,0,0,1107,1108,7,8,0,0,1108,1109,7,5,0,0,1109,
        1110,7,30,0,0,1110,1111,7,5,0,0,1111,1112,7,8,0,0,1112,262,1,0,0,
        0,1113,1114,7,9,0,0,1114,1115,7,1,0,0,1115,1116,7,9,0,0,1116,1117,
        7,2,0,0,1117,1118,7,5,0,0,1118,1119,7,22,0,0,1119,1120,7,16,0,0,
        1120,1121,7,5,0,0,1121,1122,7,12,0,0,1122,1123,7,5,0,0,1123,1124,
        7,25,0,0,1124,1125,7,2,0,0,1125,1126,7,3,0,0,1126,264,1,0,0,0,1127,
        1128,7,1,0,0,1128,1129,7,9,0,0,1129,1130,7,5,0,0,1130,1131,7,21,
        0,0,1131,1132,7,17,0,0,1132,1133,7,17,0,0,1133,1134,7,15,0,0,1134,
        266,1,0,0,0,1135,1136,7,21,0,0,1136,1137,7,17,0,0,1137,1138,7,3,
        0,0,1138,1139,7,9,0,0,1139,1140,7,3,0,0,1140,1141,7,4,0,0,1141,1142,
        7,19,0,0,1142,1143,7,22,0,0,1143,1144,7,24,0,0,1144,268,1,0,0,0,
        1145,1146,7,19,0,0,1146,1147,7,22,0,0,1147,1148,7,20,0,0,1148,1149,
        7,8,0,0,1149,1150,7,1,0,0,1150,1151,7,16,0,0,1151,1152,7,5,0,0,1152,
        1153,1,0,0,0,1153,1154,6,132,20,0,1154,270,1,0,0,0,1155,1156,7,19,
        0,0,1156,1157,7,22,0,0,1157,1158,7,20,0,0,1158,1159,7,8,0,0,1159,
        1160,7,1,0,0,1160,1161,7,16,0,0,1161,1162,7,5,0,0,1162,1163,7,7,
        0,0,1163,1164,7,24,0,0,1164,1165,7,7,0,0,1165,1166,7,19,0,0,1166,
        1167,7,22,0,0,1167,1168,1,0,0,0,1168,1169,6,133,20,0,1169,272,1,
        0,0,0,1170,1171,7,16,0,0,1171,1172,7,8,0,0,1172,1173,7,8,0,0,1173,
        1174,7,8,0,0,1174,1175,7,17,0,0,1175,1176,7,7,0,0,1176,1177,7,16,
        0,0,1177,1178,1,0,0,0,1178,1179,6,134,20,0,1179,274,1,0,0,0,1180,
        1181,7,4,0,0,1181,1182,7,5,0,0,1182,1183,7,31,0,0,1183,1184,7,1,
        0,0,1184,1185,7,19,0,0,1185,1186,7,4,0,0,1186,1187,7,5,0,0,1187,
        1188,7,9,0,0,1188,1189,1,0,0,0,1189,1190,6,135,20,0,1190,276,1,0,
        0,0,1191,1192,7,9,0,0,1192,1193,7,19,0,0,1193,1194,7,22,0,0,1194,
        1195,7,24,0,0,1195,1196,7,8,0,0,1196,1197,7,5,0,0,1197,1198,7,19,
        0,0,1198,1199,7,22,0,0,1199,1200,7,9,0,0,1200,1201,7,3,0,0,1201,
        1202,7,7,0,0,1202,1203,7,22,0,0,1203,1204,7,20,0,0,1204,1205,7,5,
        0,0,1205,1206,1,0,0,0,1206,1207,6,136,20,0,1207,278,1,0,0,0,1208,
        1209,7,2,0,0,1209,1210,7,5,0,0,1210,1211,7,4,0,0,1211,1212,7,9,0,
        0,1212,1213,7,19,0,0,1213,1214,7,9,0,0,1214,1215,7,3,0,0,1215,1216,
        7,5,0,0,1216,1217,7,22,0,0,1217,1218,7,3,0,0,1218,280,1,0,0,0,1219,
        1220,7,18,0,0,1220,1221,7,7,0,0,1221,1222,7,4,0,0,1222,1223,7,22,
        0,0,1223,1224,1,0,0,0,1224,1225,6,138,20,0,1225,282,1,0,0,0,1226,
        1227,7,5,0,0,1227,1228,7,4,0,0,1228,1229,7,4,0,0,1229,1230,7,17,
        0,0,1230,1231,7,4,0,0,1231,1232,7,9,0,0,1232,1233,7,3,0,0,1233,1234,
        7,16,0,0,1234,1235,7,17,0,0,1235,1236,7,1,0,0,1236,1237,7,3,0,0,
        1237,284,1,0,0,0,1238,1239,7,20,0,0,1239,1240,7,8,0,0,1240,1241,
        7,19,0,0,1241,1242,7,2,0,0,1242,1243,7,14,0,0,1243,1244,7,17,0,0,
        1244,1245,7,7,0,0,1245,1246,7,4,0,0,1246,1247,7,16,0,0,1247,1248,
        7,3,0,0,1248,1249,7,19,0,0,1249,1250,7,25,0,0,1250,1251,7,5,0,0,
        1251,1252,7,17,0,0,1252,1253,7,1,0,0,1253,1254,7,3,0,0,1254,286,
        1,0,0,0,1255,1256,7,21,0,0,1256,1257,7,17,0,0,1257,1258,7,3,0,0,
        1258,1259,7,19,0,0,1259,1260,7,6,0,0,1260,1261,7,3,0,0,1261,1262,
        7,19,0,0,1262,1263,7,25,0,0,1263,1264,7,5,0,0,1264,1265,7,17,0,0,
        1265,1266,7,1,0,0,1266,1267,7,3,0,0,1267,288,1,0,0,0,1268,1269,7,
        25,0,0,1269,1270,7,7,0,0,1270,1271,7,12,0,0,1271,1272,7,3,0,0,1272,
        1273,7,21,0,0,1273,1274,7,4,0,0,1274,1275,7,5,0,0,1275,1276,7,7,
        0,0,1276,1277,7,16,0,0,1277,1278,7,9,0,0,1278,290,1,0,0,0,1279,1280,
        7,25,0,0,1280,1281,7,7,0,0,1281,1282,7,12,0,0,1282,1283,7,3,0,0,
        1283,1284,7,21,0,0,1284,1285,7,4,0,0,1285,1286,7,5,0,0,1286,1287,
        7,7,0,0,1287,1288,7,16,0,0,1288,1289,7,9,0,0,1289,1290,7,14,0,0,
        1290,1291,7,1,0,0,1291,1292,7,6,0,0,1292,1293,7,6,0,0,1293,1294,
        7,5,0,0,1294,1295,7,4,0,0,1295,292,1,0,0,0,1296,1297,7,25,0,0,1297,
        1298,7,7,0,0,1298,1299,7,12,0,0,1299,1300,7,3,0,0,1300,1301,7,21,
        0,0,1301,1302,7,4,0,0,1302,1303,7,5,0,0,1303,1304,7,7,0,0,1304,1305,
        7,16,0,0,1305,1306,7,9,0,0,1306,1307,7,2,0,0,1307,1308,7,5,0,0,1308,
        1309,7,4,0,0,1309,1310,7,21,0,0,1310,1311,7,17,0,0,1311,1312,7,3,
        0,0,1312,1313,7,15,0,0,1313,1314,7,5,0,0,1314,1315,7,23,0,0,1315,
        294,1,0,0,0,1316,1320,5,34,0,0,1317,1319,8,32,0,0,1318,1317,1,0,
        0,0,1319,1322,1,0,0,0,1320,1318,1,0,0,0,1320,1321,1,0,0,0,1321,1323,
        1,0,0,0,1322,1320,1,0,0,0,1323,1324,5,34,0,0,1324,1325,1,0,0,0,1325,
        1326,6,145,11,0,1326,296,1,0,0,0,1327,1328,7,3,0,0,1328,1329,7,4,
        0,0,1329,1330,7,1,0,0,1330,1331,7,5,0,0,1331,1332,1,0,0,0,1332,1333,
        6,146,21,0,1333,298,1,0,0,0,1334,1335,7,6,0,0,1335,1336,7,7,0,0,
        1336,1337,7,8,0,0,1337,1338,7,9,0,0,1338,1339,7,5,0,0,1339,1340,
        1,0,0,0,1340,1341,6,147,22,0,1341,300,1,0,0,0,1342,1343,5,32,0,0,
        1343,1344,5,59,0,0,1344,1348,1,0,0,0,1345,1347,8,33,0,0,1346,1345,
        1,0,0,0,1347,1350,1,0,0,0,1348,1346,1,0,0,0,1348,1349,1,0,0,0,1349,
        1351,1,0,0,0,1350,1348,1,0,0,0,1351,1352,6,148,19,0,1352,302,1,0,
        0,0,1353,1354,3,357,176,0,1354,1355,1,0,0,0,1355,1356,6,149,1,0,
        1356,1357,6,149,23,0,1357,304,1,0,0,0,1358,1359,3,327,161,0,1359,
        1360,1,0,0,0,1360,1361,6,150,19,0,1361,306,1,0,0,0,1362,1364,8,34,
        0,0,1363,1365,8,33,0,0,1364,1363,1,0,0,0,1365,1366,1,0,0,0,1366,
        1364,1,0,0,0,1366,1367,1,0,0,0,1367,308,1,0,0,0,1368,1369,3,357,
        176,0,1369,1370,1,0,0,0,1370,1371,6,152,1,0,1371,1372,6,152,23,0,
        1372,310,1,0,0,0,1373,1374,3,327,161,0,1374,1375,1,0,0,0,1375,1376,
        6,153,19,0,1376,312,1,0,0,0,1377,1378,7,22,0,0,1378,1379,7,17,0,
        0,1379,1380,7,25,0,0,1380,1381,7,17,0,0,1381,1382,7,1,0,0,1382,1383,
        7,9,0,0,1383,1384,7,5,0,0,1384,1385,1,0,0,0,1385,1386,6,154,23,0,
        1386,314,1,0,0,0,1387,1388,7,5,0,0,1388,1389,7,22,0,0,1389,1390,
        7,16,0,0,1390,1391,7,20,0,0,1391,1392,7,21,0,0,1392,1393,7,7,0,0,
        1393,1394,7,4,0,0,1394,1395,7,9,0,0,1395,316,1,0,0,0,1396,1397,3,
        339,167,0,1397,1398,6,156,24,0,1398,1399,1,0,0,0,1399,1400,6,156,
        23,0,1400,318,1,0,0,0,1401,1403,3,39,17,0,1402,1404,3,323,159,0,
        1403,1402,1,0,0,0,1403,1404,1,0,0,0,1404,1405,1,0,0,0,1405,1406,
        3,39,17,0,1406,1407,3,325,160,0,1407,1408,3,41,18,0,1408,320,1,0,
        0,0,1409,1413,7,35,0,0,1410,1412,5,32,0,0,1411,1410,1,0,0,0,1412,
        1415,1,0,0,0,1413,1411,1,0,0,0,1413,1414,1,0,0,0,1414,1417,1,0,0,
        0,1415,1413,1,0,0,0,1416,1418,5,48,0,0,1417,1416,1,0,0,0,1417,1418,
        1,0,0,0,1418,1453,1,0,0,0,1419,1420,7,20,0,0,1420,1453,5,49,0,0,
        1421,1422,7,9,0,0,1422,1453,7,19,0,0,1423,1424,7,9,0,0,1424,1453,
        7,2,0,0,1425,1426,7,9,0,0,1426,1453,7,5,0,0,1427,1429,7,2,0,0,1428,
        1430,7,10,0,0,1429,1428,1,0,0,0,1430,1431,1,0,0,0,1431,1429,1,0,
        0,0,1431,1432,1,0,0,0,1432,1453,1,0,0,0,1433,1437,7,15,0,0,1434,
        1436,5,32,0,0,1435,1434,1,0,0,0,1436,1439,1,0,0,0,1437,1435,1,0,
        0,0,1437,1438,1,0,0,0,1438,1440,1,0,0,0,1439,1437,1,0,0,0,1440,1444,
        5,45,0,0,1441,1443,5,32,0,0,1442,1441,1,0,0,0,1443,1446,1,0,0,0,
        1444,1442,1,0,0,0,1444,1445,1,0,0,0,1445,1448,1,0,0,0,1446,1444,
        1,0,0,0,1447,1449,7,10,0,0,1448,1447,1,0,0,0,1449,1450,1,0,0,0,1450,
        1448,1,0,0,0,1450,1451,1,0,0,0,1451,1453,1,0,0,0,1452,1409,1,0,0,
        0,1452,1419,1,0,0,0,1452,1421,1,0,0,0,1452,1423,1,0,0,0,1452,1425,
        1,0,0,0,1452,1427,1,0,0,0,1452,1433,1,0,0,0,1453,322,1,0,0,0,1454,
        1456,3,321,158,0,1455,1454,1,0,0,0,1456,1457,1,0,0,0,1457,1455,1,
        0,0,0,1457,1458,1,0,0,0,1458,324,1,0,0,0,1459,1461,5,58,0,0,1460,
        1459,1,0,0,0,1460,1461,1,0,0,0,1461,1462,1,0,0,0,1462,1466,3,333,
        164,0,1463,1464,5,59,0,0,1464,1466,4,160,6,0,1465,1460,1,0,0,0,1465,
        1463,1,0,0,0,1466,1467,1,0,0,0,1467,1465,1,0,0,0,1467,1468,1,0,0,
        0,1468,326,1,0,0,0,1469,1471,7,36,0,0,1470,1469,1,0,0,0,1471,1472,
        1,0,0,0,1472,1470,1,0,0,0,1472,1473,1,0,0,0,1473,328,1,0,0,0,1474,
        1478,8,37,0,0,1475,1476,5,96,0,0,1476,1478,3,341,168,0,1477,1474,
        1,0,0,0,1477,1475,1,0,0,0,1478,330,1,0,0,0,1479,1483,8,38,0,0,1480,
        1481,5,96,0,0,1481,1483,3,341,168,0,1482,1479,1,0,0,0,1482,1480,
        1,0,0,0,1483,332,1,0,0,0,1484,1488,8,39,0,0,1485,1486,5,96,0,0,1486,
        1488,3,341,168,0,1487,1484,1,0,0,0,1487,1485,1,0,0,0,1488,334,1,
        0,0,0,1489,1490,8,40,0,0,1490,1495,5,59,0,0,1491,1495,8,41,0,0,1492,
        1493,5,96,0,0,1493,1495,3,341,168,0,1494,1489,1,0,0,0,1494,1491,
        1,0,0,0,1494,1492,1,0,0,0,1495,336,1,0,0,0,1496,1497,9,0,0,0,1497,
        338,1,0,0,0,1498,1500,3,335,165,0,1499,1498,1,0,0,0,1500,1501,1,
        0,0,0,1501,1499,1,0,0,0,1501,1502,1,0,0,0,1502,340,1,0,0,0,1503,
        1509,3,343,169,0,1504,1509,5,48,0,0,1505,1509,3,345,170,0,1506,1509,
        3,347,171,0,1507,1509,3,349,172,0,1508,1503,1,0,0,0,1508,1504,1,
        0,0,0,1508,1505,1,0,0,0,1508,1506,1,0,0,0,1508,1507,1,0,0,0,1509,
        342,1,0,0,0,1510,1513,3,351,173,0,1511,1513,3,353,174,0,1512,1510,
        1,0,0,0,1512,1511,1,0,0,0,1513,344,1,0,0,0,1514,1515,7,12,0,0,1515,
        1516,3,359,177,0,1516,1517,3,359,177,0,1517,346,1,0,0,0,1518,1519,
        7,1,0,0,1519,1520,3,359,177,0,1520,1521,3,359,177,0,1521,1522,3,
        359,177,0,1522,1523,3,359,177,0,1523,1535,1,0,0,0,1524,1525,7,1,
        0,0,1525,1526,5,123,0,0,1526,1528,3,359,177,0,1527,1529,3,359,177,
        0,1528,1527,1,0,0,0,1529,1530,1,0,0,0,1530,1528,1,0,0,0,1530,1531,
        1,0,0,0,1531,1532,1,0,0,0,1532,1533,5,125,0,0,1533,1535,1,0,0,0,
        1534,1518,1,0,0,0,1534,1524,1,0,0,0,1535,348,1,0,0,0,1536,1537,7,
        1,0,0,1537,1539,5,123,0,0,1538,1540,3,359,177,0,1539,1538,1,0,0,
        0,1540,1541,1,0,0,0,1541,1539,1,0,0,0,1541,1542,1,0,0,0,1542,1543,
        1,0,0,0,1543,1544,5,125,0,0,1544,350,1,0,0,0,1545,1546,7,42,0,0,
        1546,352,1,0,0,0,1547,1548,8,43,0,0,1548,354,1,0,0,0,1549,1552,3,
        351,173,0,1550,1552,7,44,0,0,1551,1549,1,0,0,0,1551,1550,1,0,0,0,
        1552,356,1,0,0,0,1553,1555,7,0,0,0,1554,1553,1,0,0,0,1555,1556,1,
        0,0,0,1556,1554,1,0,0,0,1556,1557,1,0,0,0,1557,358,1,0,0,0,1558,
        1559,7,45,0,0,1559,360,1,0,0,0,1560,1569,5,48,0,0,1561,1565,7,46,
        0,0,1562,1564,7,11,0,0,1563,1562,1,0,0,0,1564,1567,1,0,0,0,1565,
        1563,1,0,0,0,1565,1566,1,0,0,0,1566,1569,1,0,0,0,1567,1565,1,0,0,
        0,1568,1560,1,0,0,0,1568,1561,1,0,0,0,1569,362,1,0,0,0,1570,1572,
        3,55,25,0,1571,1570,1,0,0,0,1571,1572,1,0,0,0,1572,1573,1,0,0,0,
        1573,1574,3,361,178,0,1574,364,1,0,0,0,1575,1577,7,5,0,0,1576,1578,
        7,47,0,0,1577,1576,1,0,0,0,1577,1578,1,0,0,0,1578,1580,1,0,0,0,1579,
        1581,7,11,0,0,1580,1579,1,0,0,0,1581,1582,1,0,0,0,1582,1580,1,0,
        0,0,1582,1583,1,0,0,0,1583,366,1,0,0,0,1584,1587,3,369,182,0,1585,
        1587,7,48,0,0,1586,1584,1,0,0,0,1586,1585,1,0,0,0,1587,368,1,0,0,
        0,1588,1592,7,49,0,0,1589,1590,5,92,0,0,1590,1592,3,347,171,0,1591,
        1588,1,0,0,0,1591,1589,1,0,0,0,1592,370,1,0,0,0,1593,1595,3,357,
        176,0,1594,1596,3,327,161,0,1595,1594,1,0,0,0,1595,1596,1,0,0,0,
        1596,1597,1,0,0,0,1597,1601,5,40,0,0,1598,1600,9,0,0,0,1599,1598,
        1,0,0,0,1600,1603,1,0,0,0,1601,1602,1,0,0,0,1601,1599,1,0,0,0,1602,
        1604,1,0,0,0,1603,1601,1,0,0,0,1604,1606,3,357,176,0,1605,1607,3,
        327,161,0,1606,1605,1,0,0,0,1606,1607,1,0,0,0,1607,1608,1,0,0,0,
        1608,1610,5,41,0,0,1609,1611,3,327,161,0,1610,1609,1,0,0,0,1610,
        1611,1,0,0,0,1611,372,1,0,0,0,1612,1613,7,50,0,0,1613,374,1,0,0,
        0,1614,1617,3,373,184,0,1615,1617,7,51,0,0,1616,1614,1,0,0,0,1616,
        1615,1,0,0,0,1617,376,1,0,0,0,1618,1619,7,22,0,0,1619,1620,7,1,0,
        0,1620,1621,7,25,0,0,1621,1622,7,2,0,0,1622,1623,7,7,0,0,1623,1624,
        7,16,0,0,1624,1625,7,5,0,0,1625,1626,7,22,0,0,1626,1627,7,3,0,0,
        1627,1628,7,5,0,0,1628,2454,7,4,0,0,1629,1630,7,16,0,0,1630,1631,
        7,5,0,0,1631,1632,7,8,0,0,1632,1633,7,5,0,0,1633,1634,7,3,0,0,1634,
        2454,7,5,0,0,1635,1636,7,16,0,0,1636,1637,7,5,0,0,1637,2454,7,8,
        0,0,1638,1639,7,19,0,0,1639,1640,7,22,0,0,1640,1641,7,9,0,0,1641,
        1642,7,5,0,0,1642,1643,7,4,0,0,1643,2454,7,3,0,0,1644,1645,7,19,
        0,0,1645,1646,7,22,0,0,1646,2454,7,9,0,0,1647,1648,7,20,0,0,1648,
        1649,7,8,0,0,1649,1650,7,5,0,0,1650,1651,7,7,0,0,1651,2454,7,4,0,
        0,1652,1653,7,1,0,0,1653,2454,7,2,0,0,1654,1655,7,16,0,0,1655,1656,
        7,17,0,0,1656,1657,7,18,0,0,1657,2454,7,22,0,0,1658,1659,7,8,0,0,
        1659,1660,7,5,0,0,1660,1661,7,6,0,0,1661,2454,7,3,0,0,1662,1663,
        7,4,0,0,1663,1664,7,19,0,0,1664,1665,7,24,0,0,1665,1666,7,21,0,0,
        1666,2454,7,3,0,0,1667,1668,7,21,0,0,1668,1669,7,17,0,0,1669,1670,
        7,25,0,0,1670,2454,7,5,0,0,1671,1672,7,5,0,0,1672,1673,7,22,0,0,
        1673,2454,7,16,0,0,1674,1675,7,2,0,0,1675,1676,7,24,0,0,1676,1677,
        7,1,0,0,1677,2454,7,2,0,0,1678,1679,7,2,0,0,1679,1680,7,24,0,0,1680,
        1681,7,16,0,0,1681,2454,7,22,0,0,1682,1683,7,22,0,0,1683,1684,7,
        1,0,0,1684,1685,7,25,0,0,1685,1686,7,2,0,0,1686,1687,7,7,0,0,1687,
        1688,7,16,0,0,1688,2454,5,48,0,0,1689,1690,7,22,0,0,1690,1691,7,
        1,0,0,1691,1692,7,25,0,0,1692,1693,7,2,0,0,1693,1694,7,7,0,0,1694,
        1695,7,16,0,0,1695,2454,5,49,0,0,1696,1697,7,22,0,0,1697,1698,7,
        1,0,0,1698,1699,7,25,0,0,1699,1700,7,2,0,0,1700,1701,7,7,0,0,1701,
        1702,7,16,0,0,1702,2454,5,50,0,0,1703,1704,7,22,0,0,1704,1705,7,
        1,0,0,1705,1706,7,25,0,0,1706,1707,7,2,0,0,1707,1708,7,7,0,0,1708,
        1709,7,16,0,0,1709,2454,5,51,0,0,1710,1711,7,22,0,0,1711,1712,7,
        1,0,0,1712,1713,7,25,0,0,1713,1714,7,2,0,0,1714,1715,7,7,0,0,1715,
        1716,7,16,0,0,1716,2454,5,52,0,0,1717,1718,7,22,0,0,1718,1719,7,
        1,0,0,1719,1720,7,25,0,0,1720,1721,7,2,0,0,1721,1722,7,7,0,0,1722,
        1723,7,16,0,0,1723,2454,5,53,0,0,1724,1725,7,22,0,0,1725,1726,7,
        1,0,0,1726,1727,7,25,0,0,1727,1728,7,2,0,0,1728,1729,7,7,0,0,1729,
        1730,7,16,0,0,1730,2454,5,54,0,0,1731,1732,7,22,0,0,1732,1733,7,
        1,0,0,1733,1734,7,25,0,0,1734,1735,7,2,0,0,1735,1736,7,7,0,0,1736,
        1737,7,16,0,0,1737,2454,5,55,0,0,1738,1739,7,22,0,0,1739,1740,7,
        1,0,0,1740,1741,7,25,0,0,1741,1742,7,2,0,0,1742,1743,7,7,0,0,1743,
        1744,7,16,0,0,1744,2454,5,56,0,0,1745,1746,7,22,0,0,1746,1747,7,
        1,0,0,1747,1748,7,25,0,0,1748,1749,7,2,0,0,1749,1750,7,7,0,0,1750,
        1751,7,16,0,0,1751,2454,5,57,0,0,1752,1753,7,22,0,0,1753,1754,7,
        1,0,0,1754,1755,7,25,0,0,1755,1756,7,2,0,0,1756,1757,7,7,0,0,1757,
        1758,7,16,0,0,1758,1759,7,25,0,0,1759,1760,7,1,0,0,1760,1761,7,8,
        0,0,1761,2454,7,3,0,0,1762,1763,7,22,0,0,1763,1764,7,1,0,0,1764,
        1765,7,25,0,0,1765,1766,7,2,0,0,1766,1767,7,7,0,0,1767,1768,7,16,
        0,0,1768,1769,7,16,0,0,1769,1770,7,19,0,0,1770,2454,7,30,0,0,1771,
        1772,7,22,0,0,1772,1773,7,1,0,0,1773,1774,7,25,0,0,1774,1775,7,2,
        0,0,1775,1776,7,7,0,0,1776,1777,7,16,0,0,1777,1778,7,7,0,0,1778,
        1779,7,16,0,0,1779,2454,7,16,0,0,1780,1781,7,22,0,0,1781,1782,7,
        1,0,0,1782,1783,7,25,0,0,1783,1784,7,2,0,0,1784,1785,7,7,0,0,1785,
        1786,7,16,0,0,1786,1787,7,9,0,0,1787,1788,7,1,0,0,1788,2454,7,14,
        0,0,1789,1790,7,22,0,0,1790,1791,7,1,0,0,1791,1792,7,25,0,0,1792,
        1793,7,2,0,0,1793,1794,7,7,0,0,1794,1795,7,16,0,0,1795,1796,7,16,
        0,0,1796,1797,7,17,0,0,1797,2454,7,3,0,0,1798,1799,7,22,0,0,1799,
        1800,7,1,0,0,1800,1801,7,25,0,0,1801,1802,7,8,0,0,1802,1803,7,17,
        0,0,1803,1804,7,20,0,0,1804,2454,7,15,0,0,1805,1806,7,9,0,0,1806,
        1807,7,20,0,0,1807,1808,7,4,0,0,1808,1809,7,17,0,0,1809,1810,7,8,
        0,0,1810,1811,7,8,0,0,1811,1812,7,8,0,0,1812,1813,7,17,0,0,1813,
        1814,7,20,0,0,1814,2454,7,15,0,0,1815,1816,7,20,0,0,1816,1817,7,
        7,0,0,1817,1818,7,2,0,0,1818,1819,7,9,0,0,1819,1820,7,8,0,0,1820,
        1821,7,17,0,0,1821,1822,7,20,0,0,1822,2454,7,15,0,0,1823,1824,7,
        5,0,0,1824,1825,7,9,0,0,1825,1826,7,20,0,0,1826,1827,7,7,0,0,1827,
        1828,7,2,0,0,1828,2454,7,5,0,0,1829,1830,7,5,0,0,1830,1831,7,9,0,
        0,1831,2454,7,20,0,0,1832,1833,7,3,0,0,1833,1834,7,7,0,0,1834,2454,
        7,14,0,0,1835,1836,7,9,0,0,1836,1837,7,2,0,0,1837,1838,7,7,0,0,1838,
        1839,7,20,0,0,1839,2454,7,5,0,0,1840,1841,7,14,0,0,1841,1842,7,7,
        0,0,1842,1843,7,20,0,0,1843,1844,7,15,0,0,1844,1845,7,9,0,0,1845,
        1846,7,2,0,0,1846,1847,7,7,0,0,1847,1848,7,20,0,0,1848,2454,7,5,
        0,0,1849,1850,7,14,0,0,1850,2454,7,9,0,0,1851,1852,7,5,0,0,1852,
        1853,7,22,0,0,1853,1854,7,3,0,0,1854,1855,7,5,0,0,1855,2454,7,4,
        0,0,1856,1857,7,22,0,0,1857,1858,7,1,0,0,1858,1859,7,25,0,0,1859,
        1860,7,2,0,0,1860,1861,7,7,0,0,1861,1862,7,16,0,0,1862,1863,7,16,
        0,0,1863,1864,7,5,0,0,1864,2454,7,8,0,0,1865,1866,7,22,0,0,1866,
        1867,7,1,0,0,1867,1868,7,25,0,0,1868,1869,7,2,0,0,1869,1870,7,7,
        0,0,1870,1871,7,16,0,0,1871,1872,7,19,0,0,1872,1873,7,22,0,0,1873,
        2454,7,9,0,0,1874,1875,7,22,0,0,1875,1876,7,1,0,0,1876,1877,7,25,
        0,0,1877,1878,7,2,0,0,1878,1879,7,7,0,0,1879,1880,7,16,0,0,1880,
        1881,7,20,0,0,1881,1882,7,8,0,0,1882,1883,7,5,0,0,1883,1884,7,7,
        0,0,1884,2454,7,4,0,0,1885,1886,7,22,0,0,1886,1887,7,1,0,0,1887,
        1888,7,25,0,0,1888,1889,7,2,0,0,1889,1890,7,7,0,0,1890,1891,7,16,
        0,0,1891,1892,7,1,0,0,1892,2454,7,2,0,0,1893,1894,7,22,0,0,1894,
        1895,7,1,0,0,1895,1896,7,25,0,0,1896,1897,7,2,0,0,1897,1898,7,7,
        0,0,1898,1899,7,16,0,0,1899,1900,7,16,0,0,1900,1901,7,17,0,0,1901,
        1902,7,18,0,0,1902,2454,7,22,0,0,1903,1904,7,22,0,0,1904,1905,7,
        1,0,0,1905,1906,7,25,0,0,1906,1907,7,2,0,0,1907,1908,7,7,0,0,1908,
        1909,7,16,0,0,1909,1910,7,8,0,0,1910,1911,7,5,0,0,1911,1912,7,6,
        0,0,1912,2454,7,3,0,0,1913,1914,7,22,0,0,1914,1915,7,1,0,0,1915,
        1916,7,25,0,0,1916,1917,7,2,0,0,1917,1918,7,7,0,0,1918,1919,7,16,
        0,0,1919,1920,7,4,0,0,1920,1921,7,19,0,0,1921,1922,7,24,0,0,1922,
        1923,7,21,0,0,1923,2454,7,3,0,0,1924,1925,7,22,0,0,1925,1926,7,1,
        0,0,1926,1927,7,25,0,0,1927,1928,7,2,0,0,1928,1929,7,7,0,0,1929,
        1930,7,16,0,0,1930,1931,7,21,0,0,1931,1932,7,17,0,0,1932,1933,7,
        25,0,0,1933,2454,7,5,0,0,1934,1935,7,22,0,0,1935,1936,7,1,0,0,1936,
        1937,7,25,0,0,1937,1938,7,2,0,0,1938,1939,7,7,0,0,1939,1940,7,16,
        0,0,1940,1941,7,5,0,0,1941,1942,7,22,0,0,1942,2454,7,16,0,0,1943,
        1944,7,22,0,0,1944,1945,7,1,0,0,1945,1946,7,25,0,0,1946,1947,7,2,
        0,0,1947,1948,7,7,0,0,1948,1949,7,16,0,0,1949,1950,7,2,0,0,1950,
        1951,7,24,0,0,1951,1952,7,1,0,0,1952,2454,7,2,0,0,1953,1954,7,22,
        0,0,1954,1955,7,1,0,0,1955,1956,7,25,0,0,1956,1957,7,2,0,0,1957,
        1958,7,7,0,0,1958,1959,7,16,0,0,1959,1960,7,2,0,0,1960,1961,7,24,
        0,0,1961,1962,7,16,0,0,1962,2454,7,22,0,0,1963,1964,7,2,0,0,1964,
        1965,7,4,0,0,1965,1966,7,19,0,0,1966,1967,7,22,0,0,1967,1968,7,3,
        0,0,1968,1969,7,9,0,0,1969,1970,7,20,0,0,1970,1971,7,4,0,0,1971,
        1972,7,5,0,0,1972,1973,7,5,0,0,1973,2454,7,22,0,0,1974,1975,7,20,
        0,0,1975,1976,7,3,0,0,1976,1977,7,4,0,0,1977,1978,7,8,0,0,1978,1979,
        7,14,0,0,1979,1980,7,4,0,0,1980,1981,7,5,0,0,1981,1982,7,7,0,0,1982,
        2454,7,15,0,0,1983,1984,7,2,0,0,1984,1985,7,7,0,0,1985,1986,7,1,
        0,0,1986,1987,7,9,0,0,1987,2454,7,5,0,0,1988,1989,7,21,0,0,1989,
        1990,7,5,0,0,1990,1991,7,8,0,0,1991,2454,7,2,0,0,1992,1993,7,9,0,
        0,1993,1994,7,8,0,0,1994,1995,7,5,0,0,1995,1996,7,5,0,0,1996,2454,
        7,2,0,0,1997,1998,7,7,0,0,1998,1999,7,2,0,0,1999,2000,7,2,0,0,2000,
        2001,7,9,0,0,2001,2002,7,15,0,0,2002,2003,7,5,0,0,2003,2454,7,23,
        0,0,2004,2005,7,8,0,0,2005,2006,7,20,0,0,2006,2007,7,17,0,0,2007,
        2008,7,22,0,0,2008,2009,7,3,0,0,2009,2010,7,4,0,0,2010,2011,7,17,
        0,0,2011,2454,7,8,0,0,2012,2013,7,4,0,0,2013,2014,7,20,0,0,2014,
        2015,7,17,0,0,2015,2016,7,22,0,0,2016,2017,7,3,0,0,2017,2018,7,4,
        0,0,2018,2019,7,17,0,0,2019,2454,7,8,0,0,2020,2021,7,8,0,0,2021,
        2022,7,20,0,0,2022,2023,7,3,0,0,2023,2024,7,4,0,0,2024,2454,7,8,
        0,0,2025,2026,7,4,0,0,2026,2027,7,20,0,0,2027,2028,7,3,0,0,2028,
        2029,7,4,0,0,2029,2454,7,8,0,0,2030,2031,7,8,0,0,2031,2032,7,9,0,
        0,2032,2033,7,21,0,0,2033,2034,7,19,0,0,2034,2035,7,6,0,0,2035,2454,
        7,3,0,0,2036,2037,7,4,0,0,2037,2038,7,9,0,0,2038,2039,7,21,0,0,2039,
        2040,7,19,0,0,2040,2041,7,6,0,0,2041,2454,7,3,0,0,2042,2043,7,8,
        0,0,2043,2044,7,7,0,0,2044,2045,7,8,0,0,2045,2454,7,3,0,0,2046,2047,
        7,4,0,0,2047,2048,7,7,0,0,2048,2049,7,8,0,0,2049,2454,7,3,0,0,2050,
        2051,7,8,0,0,2051,2052,7,18,0,0,2052,2053,7,19,0,0,2053,2454,7,22,
        0,0,2054,2055,7,4,0,0,2055,2056,7,18,0,0,2056,2057,7,19,0,0,2057,
        2454,7,22,0,0,2058,2059,7,20,0,0,2059,2060,7,17,0,0,2060,2061,7,
        22,0,0,2061,2062,7,3,0,0,2062,2063,7,4,0,0,2063,2064,7,17,0,0,2064,
        2454,7,8,0,0,2065,2066,7,20,0,0,2066,2067,7,3,0,0,2067,2068,7,4,
        0,0,2068,2454,7,8,0,0,2069,2070,7,7,0,0,2070,2071,7,8,0,0,2071,2454,
        7,3,0,0,2072,2073,7,9,0,0,2073,2074,7,21,0,0,2074,2075,7,19,0,0,
        2075,2076,7,6,0,0,2076,2454,7,3,0,0,2077,2078,7,6,0,0,2078,2454,
        5,49,0,0,2079,2080,7,6,0,0,2080,2454,5,50,0,0,2081,2082,7,6,0,0,
        2082,2454,5,51,0,0,2083,2084,7,6,0,0,2084,2454,5,52,0,0,2085,2086,
        7,6,0,0,2086,2454,5,53,0,0,2087,2088,7,6,0,0,2088,2454,5,54,0,0,
        2089,2090,7,6,0,0,2090,2454,5,55,0,0,2091,2092,7,6,0,0,2092,2454,
        5,56,0,0,2093,2094,7,6,0,0,2094,2454,5,57,0,0,2095,2096,7,6,0,0,
        2096,2097,5,49,0,0,2097,2454,5,48,0,0,2098,2099,7,6,0,0,2099,2100,
        5,49,0,0,2100,2454,5,49,0,0,2101,2102,7,6,0,0,2102,2103,5,49,0,0,
        2103,2454,5,50,0,0,2104,2105,7,6,0,0,2105,2106,5,49,0,0,2106,2454,
        5,51,0,0,2107,2108,7,6,0,0,2108,2109,5,49,0,0,2109,2454,5,52,0,0,
        2110,2111,7,6,0,0,2111,2112,5,49,0,0,2112,2454,5,53,0,0,2113,2114,
        7,6,0,0,2114,2115,5,49,0,0,2115,2454,5,54,0,0,2116,2117,7,6,0,0,
        2117,2118,5,49,0,0,2118,2454,5,55,0,0,2119,2120,7,6,0,0,2120,2121,
        5,49,0,0,2121,2454,5,56,0,0,2122,2123,7,6,0,0,2123,2124,5,49,0,0,
        2124,2454,5,57,0,0,2125,2126,7,6,0,0,2126,2127,5,50,0,0,2127,2454,
        5,48,0,0,2128,2129,7,6,0,0,2129,2130,5,50,0,0,2130,2454,5,49,0,0,
        2131,2132,7,6,0,0,2132,2133,5,50,0,0,2133,2454,5,50,0,0,2134,2135,
        7,6,0,0,2135,2136,5,50,0,0,2136,2454,5,51,0,0,2137,2138,7,6,0,0,
        2138,2139,5,50,0,0,2139,2454,5,52,0,0,2140,2141,7,8,0,0,2141,2142,
        7,14,0,0,2142,2143,7,1,0,0,2143,2144,7,3,0,0,2144,2145,7,3,0,0,2145,
        2146,7,17,0,0,2146,2454,7,22,0,0,2147,2148,7,4,0,0,2148,2149,7,14,
        0,0,2149,2150,7,1,0,0,2150,2151,7,3,0,0,2151,2152,7,3,0,0,2152,2153,
        7,17,0,0,2153,2454,7,22,0,0,2154,2155,7,25,0,0,2155,2156,7,14,0,
        0,2156,2157,7,1,0,0,2157,2158,7,3,0,0,2158,2159,7,3,0,0,2159,2160,
        7,17,0,0,2160,2454,7,22,0,0,2161,2162,7,12,0,0,2162,2163,7,14,0,
        0,2163,2164,7,1,0,0,2164,2165,7,3,0,0,2165,2166,7,3,0,0,2166,2167,
        7,17,0,0,2167,2168,7,22,0,0,2168,2454,5,49,0,0,2169,2170,7,12,0,
        0,2170,2171,7,14,0,0,2171,2172,7,1,0,0,2172,2173,7,3,0,0,2173,2174,
        7,3,0,0,2174,2175,7,17,0,0,2175,2176,7,22,0,0,2176,2454,5,50,0,0,
        2177,2178,7,18,0,0,2178,2179,7,21,0,0,2179,2180,7,5,0,0,2180,2181,
        7,5,0,0,2181,2182,7,8,0,0,2182,2183,7,16,0,0,2183,2184,7,17,0,0,
        2184,2185,7,18,0,0,2185,2454,7,22,0,0,2186,2187,7,18,0,0,2187,2188,
        7,21,0,0,2188,2189,7,5,0,0,2189,2190,7,5,0,0,2190,2191,7,8,0,0,2191,
        2192,7,1,0,0,2192,2454,7,2,0,0,2193,2194,7,18,0,0,2194,2195,7,21,
        0,0,2195,2196,7,5,0,0,2196,2197,7,5,0,0,2197,2198,7,8,0,0,2198,2199,
        7,8,0,0,2199,2200,7,5,0,0,2200,2201,7,6,0,0,2201,2454,7,3,0,0,2202,
        2203,7,18,0,0,2203,2204,7,21,0,0,2204,2205,7,5,0,0,2205,2206,7,5,
        0,0,2206,2207,7,8,0,0,2207,2208,7,4,0,0,2208,2209,7,19,0,0,2209,
        2210,7,24,0,0,2210,2211,7,21,0,0,2211,2454,7,3,0,0,2212,2213,7,14,
        0,0,2213,2214,7,4,0,0,2214,2215,7,17,0,0,2215,2216,7,18,0,0,2216,
        2217,7,9,0,0,2217,2218,7,5,0,0,2218,2219,7,4,0,0,2219,2220,5,95,
        0,0,2220,2221,7,14,0,0,2221,2222,7,7,0,0,2222,2223,7,20,0,0,2223,
        2454,7,15,0,0,2224,2225,7,14,0,0,2225,2226,7,4,0,0,2226,2227,7,17,
        0,0,2227,2228,7,18,0,0,2228,2229,7,9,0,0,2229,2230,7,5,0,0,2230,
        2231,7,4,0,0,2231,2232,5,95,0,0,2232,2233,7,6,0,0,2233,2234,7,17,
        0,0,2234,2235,7,4,0,0,2235,2236,7,18,0,0,2236,2237,7,7,0,0,2237,
        2238,7,4,0,0,2238,2454,7,16,0,0,2239,2240,7,14,0,0,2240,2241,7,4,
        0,0,2241,2242,7,17,0,0,2242,2243,7,18,0,0,2243,2244,7,9,0,0,2244,
        2245,7,5,0,0,2245,2246,7,4,0,0,2246,2247,5,95,0,0,2247,2248,7,4,
        0,0,2248,2249,7,5,0,0,2249,2250,7,6,0,0,2250,2251,7,4,0,0,2251,2252,
        7,5,0,0,2252,2253,7,9,0,0,2253,2454,7,21,0,0,2254,2255,7,14,0,0,
        2255,2256,7,4,0,0,2256,2257,7,17,0,0,2257,2258,7,18,0,0,2258,2259,
        7,9,0,0,2259,2260,7,5,0,0,2260,2261,7,4,0,0,2261,2262,5,95,0,0,2262,
        2263,7,9,0,0,2263,2264,7,3,0,0,2264,2265,7,17,0,0,2265,2454,7,2,
        0,0,2266,2267,7,14,0,0,2267,2268,7,4,0,0,2268,2269,7,17,0,0,2269,
        2270,7,18,0,0,2270,2271,7,9,0,0,2271,2272,7,5,0,0,2272,2273,7,4,
        0,0,2273,2274,5,95,0,0,2274,2275,7,9,0,0,2275,2276,7,5,0,0,2276,
        2277,7,7,0,0,2277,2278,7,4,0,0,2278,2279,7,20,0,0,2279,2454,7,21,
        0,0,2280,2281,7,14,0,0,2281,2282,7,4,0,0,2282,2283,7,17,0,0,2283,
        2284,7,18,0,0,2284,2285,7,9,0,0,2285,2286,7,5,0,0,2286,2287,7,4,
        0,0,2287,2288,5,95,0,0,2288,2289,7,6,0,0,2289,2290,7,7,0,0,2290,
        2291,7,30,0,0,2291,2292,7,17,0,0,2292,2293,7,4,0,0,2293,2294,7,19,
        0,0,2294,2295,7,3,0,0,2295,2296,7,5,0,0,2296,2454,7,9,0,0,2297,2298,
        7,14,0,0,2298,2299,7,4,0,0,2299,2300,7,17,0,0,2300,2301,7,18,0,0,
        2301,2302,7,9,0,0,2302,2303,7,5,0,0,2303,2304,7,4,0,0,2304,2305,
        5,95,0,0,2305,2306,7,21,0,0,2306,2307,7,17,0,0,2307,2308,7,25,0,
        0,2308,2454,7,5,0,0,2309,2310,7,30,0,0,2310,2311,7,17,0,0,2311,2312,
        7,8,0,0,2312,2313,7,1,0,0,2313,2314,7,25,0,0,2314,2315,7,5,0,0,2315,
        2316,5,95,0,0,2316,2317,7,25,0,0,2317,2318,7,1,0,0,2318,2319,7,3,
        0,0,2319,2454,7,5,0,0,2320,2321,7,30,0,0,2321,2322,7,17,0,0,2322,
        2323,7,8,0,0,2323,2324,7,1,0,0,2324,2325,7,25,0,0,2325,2326,7,5,
        0,0,2326,2327,5,95,0,0,2327,2328,7,16,0,0,2328,2329,7,17,0,0,2329,
        2330,7,18,0,0,2330,2454,7,22,0,0,2331,2332,7,30,0,0,2332,2333,7,
        17,0,0,2333,2334,7,8,0,0,2334,2335,7,1,0,0,2335,2336,7,25,0,0,2336,
        2337,7,5,0,0,2337,2338,5,95,0,0,2338,2339,7,1,0,0,2339,2454,7,2,
        0,0,2340,2341,7,25,0,0,2341,2342,7,5,0,0,2342,2343,7,16,0,0,2343,
        2344,7,19,0,0,2344,2345,7,7,0,0,2345,2346,5,95,0,0,2346,2347,7,22,
        0,0,2347,2348,7,5,0,0,2348,2349,7,12,0,0,2349,2454,7,3,0,0,2350,
        2351,7,25,0,0,2351,2352,7,5,0,0,2352,2353,7,16,0,0,2353,2354,7,19,
        0,0,2354,2355,7,7,0,0,2355,2356,5,95,0,0,2356,2357,7,2,0,0,2357,
        2358,7,4,0,0,2358,2359,7,5,0,0,2359,2454,7,30,0,0,2360,2361,7,25,
        0,0,2361,2362,7,5,0,0,2362,2363,7,16,0,0,2363,2364,7,19,0,0,2364,
        2365,7,7,0,0,2365,2366,5,95,0,0,2366,2367,7,9,0,0,2367,2368,7,3,
        0,0,2368,2369,7,17,0,0,2369,2454,7,2,0,0,2370,2371,7,25,0,0,2371,
        2372,7,5,0,0,2372,2373,7,16,0,0,2373,2374,7,19,0,0,2374,2375,7,7,
        0,0,2375,2376,5,95,0,0,2376,2377,7,2,0,0,2377,2378,7,8,0,0,2378,
        2379,7,7,0,0,2379,2380,7,23,0,0,2380,2381,5,95,0,0,2381,2382,7,2,
        0,0,2382,2383,7,7,0,0,2383,2384,7,1,0,0,2384,2385,7,9,0,0,2385,2454,
        7,5,0,0,2386,2387,7,8,0,0,2387,2388,7,7,0,0,2388,2389,7,1,0,0,2389,
        2390,7,22,0,0,2390,2391,7,20,0,0,2391,2392,7,21,0,0,2392,2393,5,
        95,0,0,2393,2394,7,25,0,0,2394,2395,7,7,0,0,2395,2396,7,19,0,0,2396,
        2454,7,8,0,0,2397,2398,7,8,0,0,2398,2399,7,7,0,0,2399,2400,7,1,0,
        0,2400,2401,7,22,0,0,2401,2402,7,20,0,0,2402,2403,7,21,0,0,2403,
        2404,5,95,0,0,2404,2405,7,25,0,0,2405,2406,7,5,0,0,2406,2407,7,16,
        0,0,2407,2408,7,19,0,0,2408,2454,7,7,0,0,2409,2410,7,8,0,0,2410,
        2411,7,7,0,0,2411,2412,7,1,0,0,2412,2413,7,22,0,0,2413,2414,7,20,
        0,0,2414,2415,7,21,0,0,2415,2416,5,95,0,0,2416,2417,7,7,0,0,2417,
        2418,7,2,0,0,2418,2419,7,2,0,0,2419,2454,5,49,0,0,2420,2421,7,8,
        0,0,2421,2422,7,7,0,0,2422,2423,7,1,0,0,2423,2424,7,22,0,0,2424,
        2425,7,20,0,0,2425,2426,7,21,0,0,2426,2427,5,95,0,0,2427,2428,7,
        7,0,0,2428,2429,7,2,0,0,2429,2430,7,2,0,0,2430,2454,5,50,0,0,2431,
        2432,7,7,0,0,2432,2433,7,8,0,0,2433,2434,7,3,0,0,2434,2435,7,3,0,
        0,2435,2436,7,7,0,0,2436,2454,7,14,0,0,2437,2438,7,9,0,0,2438,2439,
        7,21,0,0,2439,2440,7,19,0,0,2440,2441,7,6,0,0,2441,2442,7,3,0,0,
        2442,2443,7,7,0,0,2443,2444,7,8,0,0,2444,2445,7,3,0,0,2445,2446,
        7,3,0,0,2446,2447,7,7,0,0,2447,2454,7,14,0,0,2448,2454,8,52,0,0,
        2449,2451,5,96,0,0,2450,2452,3,341,168,0,2451,2450,1,0,0,0,2451,
        2452,1,0,0,0,2452,2454,1,0,0,0,2453,1618,1,0,0,0,2453,1629,1,0,0,
        0,2453,1635,1,0,0,0,2453,1638,1,0,0,0,2453,1644,1,0,0,0,2453,1647,
        1,0,0,0,2453,1652,1,0,0,0,2453,1654,1,0,0,0,2453,1658,1,0,0,0,2453,
        1662,1,0,0,0,2453,1667,1,0,0,0,2453,1671,1,0,0,0,2453,1674,1,0,0,
        0,2453,1678,1,0,0,0,2453,1682,1,0,0,0,2453,1689,1,0,0,0,2453,1696,
        1,0,0,0,2453,1703,1,0,0,0,2453,1710,1,0,0,0,2453,1717,1,0,0,0,2453,
        1724,1,0,0,0,2453,1731,1,0,0,0,2453,1738,1,0,0,0,2453,1745,1,0,0,
        0,2453,1752,1,0,0,0,2453,1762,1,0,0,0,2453,1771,1,0,0,0,2453,1780,
        1,0,0,0,2453,1789,1,0,0,0,2453,1798,1,0,0,0,2453,1805,1,0,0,0,2453,
        1815,1,0,0,0,2453,1823,1,0,0,0,2453,1829,1,0,0,0,2453,1832,1,0,0,
        0,2453,1835,1,0,0,0,2453,1840,1,0,0,0,2453,1849,1,0,0,0,2453,1851,
        1,0,0,0,2453,1856,1,0,0,0,2453,1865,1,0,0,0,2453,1874,1,0,0,0,2453,
        1885,1,0,0,0,2453,1893,1,0,0,0,2453,1903,1,0,0,0,2453,1913,1,0,0,
        0,2453,1924,1,0,0,0,2453,1934,1,0,0,0,2453,1943,1,0,0,0,2453,1953,
        1,0,0,0,2453,1963,1,0,0,0,2453,1974,1,0,0,0,2453,1983,1,0,0,0,2453,
        1988,1,0,0,0,2453,1992,1,0,0,0,2453,1997,1,0,0,0,2453,2004,1,0,0,
        0,2453,2012,1,0,0,0,2453,2020,1,0,0,0,2453,2025,1,0,0,0,2453,2030,
        1,0,0,0,2453,2036,1,0,0,0,2453,2042,1,0,0,0,2453,2046,1,0,0,0,2453,
        2050,1,0,0,0,2453,2054,1,0,0,0,2453,2058,1,0,0,0,2453,2065,1,0,0,
        0,2453,2069,1,0,0,0,2453,2072,1,0,0,0,2453,2077,1,0,0,0,2453,2079,
        1,0,0,0,2453,2081,1,0,0,0,2453,2083,1,0,0,0,2453,2085,1,0,0,0,2453,
        2087,1,0,0,0,2453,2089,1,0,0,0,2453,2091,1,0,0,0,2453,2093,1,0,0,
        0,2453,2095,1,0,0,0,2453,2098,1,0,0,0,2453,2101,1,0,0,0,2453,2104,
        1,0,0,0,2453,2107,1,0,0,0,2453,2110,1,0,0,0,2453,2113,1,0,0,0,2453,
        2116,1,0,0,0,2453,2119,1,0,0,0,2453,2122,1,0,0,0,2453,2125,1,0,0,
        0,2453,2128,1,0,0,0,2453,2131,1,0,0,0,2453,2134,1,0,0,0,2453,2137,
        1,0,0,0,2453,2140,1,0,0,0,2453,2147,1,0,0,0,2453,2154,1,0,0,0,2453,
        2161,1,0,0,0,2453,2169,1,0,0,0,2453,2177,1,0,0,0,2453,2186,1,0,0,
        0,2453,2193,1,0,0,0,2453,2202,1,0,0,0,2453,2212,1,0,0,0,2453,2224,
        1,0,0,0,2453,2239,1,0,0,0,2453,2254,1,0,0,0,2453,2266,1,0,0,0,2453,
        2280,1,0,0,0,2453,2297,1,0,0,0,2453,2309,1,0,0,0,2453,2320,1,0,0,
        0,2453,2331,1,0,0,0,2453,2340,1,0,0,0,2453,2350,1,0,0,0,2453,2360,
        1,0,0,0,2453,2370,1,0,0,0,2453,2386,1,0,0,0,2453,2397,1,0,0,0,2453,
        2409,1,0,0,0,2453,2420,1,0,0,0,2453,2431,1,0,0,0,2453,2437,1,0,0,
        0,2453,2448,1,0,0,0,2453,2449,1,0,0,0,2454,378,1,0,0,0,2455,2456,
        5,38,0,0,2456,380,1,0,0,0,89,0,1,2,3,4,387,401,413,433,440,446,450,
        458,467,474,480,484,489,494,540,542,547,549,704,708,715,719,724,
        726,735,964,973,979,982,987,997,1003,1006,1011,1015,1025,1033,1037,
        1065,1076,1079,1094,1320,1348,1366,1403,1413,1417,1431,1437,1444,
        1450,1452,1457,1460,1465,1467,1472,1477,1482,1487,1494,1501,1508,
        1512,1530,1534,1541,1551,1556,1565,1568,1571,1577,1582,1586,1591,
        1595,1601,1606,1610,1616,2451,2453,25,6,0,0,7,115,0,5,1,0,7,4,0,
        1,7,0,1,8,1,1,9,2,1,10,3,1,31,4,2,2,0,1,114,5,7,114,0,1,115,6,1,
        116,7,1,117,8,0,2,0,4,0,0,1,120,9,7,11,0,0,1,0,2,3,0,7,68,0,7,69,
        0,2,0,0,1,156,10
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!AutoHotkeyLexer.__ATN) {
            AutoHotkeyLexer.__ATN = new antlr.ATNDeserializer().deserialize(AutoHotkeyLexer._serializedATN);
        }

        return AutoHotkeyLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(AutoHotkeyLexer.literalNames, AutoHotkeyLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return AutoHotkeyLexer.vocabulary;
    }

    private static readonly decisionsToDFA = AutoHotkeyLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}