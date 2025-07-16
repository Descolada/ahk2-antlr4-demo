// Generated from c:/Users/minip/source/repos/ahk2-antlr4-demo/src/grammar/AutoHotkeyParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { AutoHotkeyParserListener } from "./AutoHotkeyParserListener.js";
import { AutoHotkeyParserVisitor } from "./AutoHotkeyParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


    import { AutoHotkeyParserBase } from "./AutoHotkeyParserBase";


export class AutoHotkeyParser extends AutoHotkeyParserBase {
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
    public static readonly NullLiteral = 68;
    public static readonly Unset = 69;
    public static readonly True = 70;
    public static readonly False = 71;
    public static readonly DecimalLiteral = 72;
    public static readonly HexIntegerLiteral = 73;
    public static readonly OctalIntegerLiteral = 74;
    public static readonly OctalIntegerLiteral2 = 75;
    public static readonly BinaryIntegerLiteral = 76;
    public static readonly BigHexIntegerLiteral = 77;
    public static readonly BigOctalIntegerLiteral = 78;
    public static readonly BigBinaryIntegerLiteral = 79;
    public static readonly BigDecimalIntegerLiteral = 80;
    public static readonly Break = 81;
    public static readonly Do = 82;
    public static readonly Instanceof = 83;
    public static readonly Switch = 84;
    public static readonly Case = 85;
    public static readonly Default = 86;
    public static readonly Else = 87;
    public static readonly Catch = 88;
    public static readonly Finally = 89;
    public static readonly Return = 90;
    public static readonly Continue = 91;
    public static readonly For = 92;
    public static readonly While = 93;
    public static readonly Parse = 94;
    public static readonly Reg = 95;
    public static readonly Read = 96;
    public static readonly Files = 97;
    public static readonly Loop = 98;
    public static readonly Until = 99;
    public static readonly This = 100;
    public static readonly If = 101;
    public static readonly Throw = 102;
    public static readonly Delete = 103;
    public static readonly In = 104;
    public static readonly Try = 105;
    public static readonly Yield = 106;
    public static readonly Is = 107;
    public static readonly Contains = 108;
    public static readonly VerbalAnd = 109;
    public static readonly VerbalNot = 110;
    public static readonly VerbalOr = 111;
    public static readonly Goto = 112;
    public static readonly Get = 113;
    public static readonly Set = 114;
    public static readonly Class = 115;
    public static readonly Enum = 116;
    public static readonly Extends = 117;
    public static readonly Super = 118;
    public static readonly Base = 119;
    public static readonly Export = 120;
    public static readonly Import = 121;
    public static readonly From = 122;
    public static readonly As = 123;
    public static readonly Async = 124;
    public static readonly Await = 125;
    public static readonly Static = 126;
    public static readonly Global = 127;
    public static readonly Local = 128;
    public static readonly Identifier = 129;
    public static readonly StringLiteral = 130;
    public static readonly EOL = 131;
    public static readonly WS = 132;
    public static readonly UnexpectedCharacter = 133;
    public static readonly HotstringWhitespaces = 134;
    public static readonly HotstringMultiLineExpansion = 135;
    public static readonly HotstringSingleLineExpansion = 136;
    public static readonly HotstringUnexpectedCharacter = 137;
    public static readonly PreprocessorDirectiveWS = 138;
    public static readonly Digits = 139;
    public static readonly HotIf = 140;
    public static readonly InputLevel = 141;
    public static readonly SuspendExempt = 142;
    public static readonly UseHook = 143;
    public static readonly Hotstring = 144;
    public static readonly Include = 145;
    public static readonly IncludeAgain = 146;
    public static readonly DllLoad = 147;
    public static readonly Requires = 148;
    public static readonly SingleInstance = 149;
    public static readonly Persistent = 150;
    public static readonly Warn = 151;
    public static readonly ErrorStdOut = 152;
    public static readonly ClipboardTimeout = 153;
    public static readonly HotIfTimeout = 154;
    public static readonly MaxThreads = 155;
    public static readonly MaxThreadsBuffer = 156;
    public static readonly MaxThreadsPerHotkey = 157;
    public static readonly DirectiveSingleLineComment = 158;
    public static readonly TextWhitespace = 159;
    public static readonly Text = 160;
    public static readonly HotstringWhitespace = 161;
    public static readonly NoMouse = 162;
    public static readonly EndChars = 163;
    public static readonly HotstringOptions = 164;
    public static readonly RULE_program = 0;
    public static readonly RULE_sourceElements = 1;
    public static readonly RULE_sourceElement = 2;
    public static readonly RULE_directive = 3;
    public static readonly RULE_positionalDirective = 4;
    public static readonly RULE_generalDirective = 5;
    public static readonly RULE_remap = 6;
    public static readonly RULE_hotstring = 7;
    public static readonly RULE_hotstringExpansion = 8;
    public static readonly RULE_hotkey = 9;
    public static readonly RULE_statement = 10;
    public static readonly RULE_blockStatement = 11;
    public static readonly RULE_block = 12;
    public static readonly RULE_statementList = 13;
    public static readonly RULE_variableStatement = 14;
    public static readonly RULE_awaitStatement = 15;
    public static readonly RULE_deleteStatement = 16;
    public static readonly RULE_declaration = 17;
    public static readonly RULE_variableDeclarationList = 18;
    public static readonly RULE_variableDeclaration = 19;
    public static readonly RULE_functionStatement = 20;
    public static readonly RULE_expressionStatement = 21;
    public static readonly RULE_ifStatement = 22;
    public static readonly RULE_flowBlock = 23;
    public static readonly RULE_untilProduction = 24;
    public static readonly RULE_elseProduction = 25;
    public static readonly RULE_iterationStatement = 26;
    public static readonly RULE_forInParameters = 27;
    public static readonly RULE_continueStatement = 28;
    public static readonly RULE_breakStatement = 29;
    public static readonly RULE_returnStatement = 30;
    public static readonly RULE_yieldStatement = 31;
    public static readonly RULE_switchStatement = 32;
    public static readonly RULE_caseBlock = 33;
    public static readonly RULE_caseClause = 34;
    public static readonly RULE_labelledStatement = 35;
    public static readonly RULE_gotoStatement = 36;
    public static readonly RULE_throwStatement = 37;
    public static readonly RULE_tryStatement = 38;
    public static readonly RULE_catchProduction = 39;
    public static readonly RULE_catchAssignable = 40;
    public static readonly RULE_catchClasses = 41;
    public static readonly RULE_finallyProduction = 42;
    public static readonly RULE_functionDeclaration = 43;
    public static readonly RULE_classDeclaration = 44;
    public static readonly RULE_classExtensionName = 45;
    public static readonly RULE_classTail = 46;
    public static readonly RULE_classElement = 47;
    public static readonly RULE_methodDefinition = 48;
    public static readonly RULE_propertyDefinition = 49;
    public static readonly RULE_classPropertyName = 50;
    public static readonly RULE_propertyGetterDefinition = 51;
    public static readonly RULE_propertySetterDefinition = 52;
    public static readonly RULE_fieldDefinition = 53;
    public static readonly RULE_formalParameterList = 54;
    public static readonly RULE_formalParameterArg = 55;
    public static readonly RULE_lastFormalParameterArg = 56;
    public static readonly RULE_arrayLiteral = 57;
    public static readonly RULE_mapElementList = 58;
    public static readonly RULE_mapElement = 59;
    public static readonly RULE_propertyAssignment = 60;
    public static readonly RULE_propertyName = 61;
    public static readonly RULE_dereference = 62;
    public static readonly RULE_arguments = 63;
    public static readonly RULE_argument = 64;
    public static readonly RULE_expressionSequence = 65;
    public static readonly RULE_memberIndexArguments = 66;
    public static readonly RULE_singleExpression = 67;
    public static readonly RULE_primaryExpression = 68;
    public static readonly RULE_accessSuffix = 69;
    public static readonly RULE_memberDot = 70;
    public static readonly RULE_memberIdentifier = 71;
    public static readonly RULE_dynamicIdentifier = 72;
    public static readonly RULE_initializer = 73;
    public static readonly RULE_assignable = 74;
    public static readonly RULE_objectLiteral = 75;
    public static readonly RULE_functionHead = 76;
    public static readonly RULE_functionHeadPrefix = 77;
    public static readonly RULE_functionExpressionHead = 78;
    public static readonly RULE_fatArrowExpressionHead = 79;
    public static readonly RULE_functionBody = 80;
    public static readonly RULE_assignmentOperator = 81;
    public static readonly RULE_literal = 82;
    public static readonly RULE_boolean = 83;
    public static readonly RULE_numericLiteral = 84;
    public static readonly RULE_bigintLiteral = 85;
    public static readonly RULE_getter = 86;
    public static readonly RULE_setter = 87;
    public static readonly RULE_identifierName = 88;
    public static readonly RULE_identifier = 89;
    public static readonly RULE_reservedWord = 90;
    public static readonly RULE_keyword = 91;
    public static readonly RULE_s = 92;
    public static readonly RULE_eos = 93;

    public static readonly literalNames = [
        null, null, null, null, null, null, null, "'['", "']'", "'('", "')'", 
        "'{'", "'}'", "','", "':='", "'?'", "'?.'", "':'", "'::'", "'...'", 
        "'.'", null, "'++'", "'--'", "'+'", "'-'", "'~'", "'!'", "'*'", 
        "'/'", "'//'", "'%'", "'**'", "'??'", "'#'", "'>>'", "'<<'", "'>>>'", 
        "'<'", "'>'", "'<='", "'>='", "'='", "'!='", "'=='", "'!=='", "'~='", 
        "'&'", "'^'", "'|'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", 
        "'-='", "'<<='", "'>>='", "'>>>='", "'//='", "'.='", "'&='", "'^='", 
        "'|='", "'**='", "'??='", "'=>'", "'null'", "'unset'", null, null, 
        null, null, null, null, null, null, null, null, null, "'break'", 
        "'do'", "'instanceof'", "'switch'", "'case'", "'default'", "'else'", 
        "'catch'", "'finally'", "'return'", "'continue'", "'for'", "'while'", 
        "'parse'", "'reg'", "'read'", "'files'", "'loop'", "'until'", "'this'", 
        "'if'", "'throw'", "'delete'", "'in'", "'try'", "'yield'", "'is'", 
        "'contains'", "'and'", "'not'", "'or'", "'goto'", "'get'", "'set'", 
        "'class'", "'enum'", "'extends'", "'super'", "'base'", "'export'", 
        "'import'", "'from'", "'as'", "'async'", "'await'", "'static'", 
        "'global'", "'local'", null, null, null, null, null, null, null, 
        null, null, null, null, "'hotif'", "'inputlevel'", "'suspendexempt'", 
        "'usehook'", "'hotstring'", "'include'", "'includeagain'", "'dllload'", 
        "'requires'", "'singleinstance'", "'persistent'", "'warn'", "'errorstdout'", 
        "'clipboardtimeout'", "'hotiftimeout'", "'maxthreads'", "'maxthreadsbuffer'", 
        "'maxthreadsperhotkey'", null, null, null, null, "'NoMouse'", "'EndChars'"
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
        "PowerAssign", "NullishCoalescingAssign", "Arrow", "NullLiteral", 
        "Unset", "True", "False", "DecimalLiteral", "HexIntegerLiteral", 
        "OctalIntegerLiteral", "OctalIntegerLiteral2", "BinaryIntegerLiteral", 
        "BigHexIntegerLiteral", "BigOctalIntegerLiteral", "BigBinaryIntegerLiteral", 
        "BigDecimalIntegerLiteral", "Break", "Do", "Instanceof", "Switch", 
        "Case", "Default", "Else", "Catch", "Finally", "Return", "Continue", 
        "For", "While", "Parse", "Reg", "Read", "Files", "Loop", "Until", 
        "This", "If", "Throw", "Delete", "In", "Try", "Yield", "Is", "Contains", 
        "VerbalAnd", "VerbalNot", "VerbalOr", "Goto", "Get", "Set", "Class", 
        "Enum", "Extends", "Super", "Base", "Export", "Import", "From", 
        "As", "Async", "Await", "Static", "Global", "Local", "Identifier", 
        "StringLiteral", "EOL", "WS", "UnexpectedCharacter", "HotstringWhitespaces", 
        "HotstringMultiLineExpansion", "HotstringSingleLineExpansion", "HotstringUnexpectedCharacter", 
        "PreprocessorDirectiveWS", "Digits", "HotIf", "InputLevel", "SuspendExempt", 
        "UseHook", "Hotstring", "Include", "IncludeAgain", "DllLoad", "Requires", 
        "SingleInstance", "Persistent", "Warn", "ErrorStdOut", "ClipboardTimeout", 
        "HotIfTimeout", "MaxThreads", "MaxThreadsBuffer", "MaxThreadsPerHotkey", 
        "DirectiveSingleLineComment", "TextWhitespace", "Text", "HotstringWhitespace", 
        "NoMouse", "EndChars", "HotstringOptions"
    ];
    public static readonly ruleNames = [
        "program", "sourceElements", "sourceElement", "directive", "positionalDirective", 
        "generalDirective", "remap", "hotstring", "hotstringExpansion", 
        "hotkey", "statement", "blockStatement", "block", "statementList", 
        "variableStatement", "awaitStatement", "deleteStatement", "declaration", 
        "variableDeclarationList", "variableDeclaration", "functionStatement", 
        "expressionStatement", "ifStatement", "flowBlock", "untilProduction", 
        "elseProduction", "iterationStatement", "forInParameters", "continueStatement", 
        "breakStatement", "returnStatement", "yieldStatement", "switchStatement", 
        "caseBlock", "caseClause", "labelledStatement", "gotoStatement", 
        "throwStatement", "tryStatement", "catchProduction", "catchAssignable", 
        "catchClasses", "finallyProduction", "functionDeclaration", "classDeclaration", 
        "classExtensionName", "classTail", "classElement", "methodDefinition", 
        "propertyDefinition", "classPropertyName", "propertyGetterDefinition", 
        "propertySetterDefinition", "fieldDefinition", "formalParameterList", 
        "formalParameterArg", "lastFormalParameterArg", "arrayLiteral", 
        "mapElementList", "mapElement", "propertyAssignment", "propertyName", 
        "dereference", "arguments", "argument", "expressionSequence", "memberIndexArguments", 
        "singleExpression", "primaryExpression", "accessSuffix", "memberDot", 
        "memberIdentifier", "dynamicIdentifier", "initializer", "assignable", 
        "objectLiteral", "functionHead", "functionHeadPrefix", "functionExpressionHead", 
        "fatArrowExpressionHead", "functionBody", "assignmentOperator", 
        "literal", "boolean", "numericLiteral", "bigintLiteral", "getter", 
        "setter", "identifierName", "identifier", "reservedWord", "keyword", 
        "s", "eos",
    ];

    public get grammarFileName(): string { return "AutoHotkeyParser.g4"; }
    public get literalNames(): (string | null)[] { return AutoHotkeyParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return AutoHotkeyParser.symbolicNames; }
    public get ruleNames(): string[] { return AutoHotkeyParser.ruleNames; }
    public get serializedATN(): number[] { return AutoHotkeyParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, AutoHotkeyParser._ATN, AutoHotkeyParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, AutoHotkeyParser.RULE_program);
        try {
            this.state = 192;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 188;
                this.sourceElements();
                this.state = 189;
                this.match(AutoHotkeyParser.EOF);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 191;
                this.match(AutoHotkeyParser.EOF);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sourceElements(): SourceElementsContext {
        let localContext = new SourceElementsContext(this.context, this.state);
        this.enterRule(localContext, 2, AutoHotkeyParser.RULE_sourceElements);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 199;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    this.state = 199;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
                    case 1:
                        {
                        this.state = 194;
                        this.sourceElement();
                        this.state = 195;
                        this.eos();
                        }
                        break;
                    case 2:
                        {
                        this.state = 197;
                        this.match(AutoHotkeyParser.WS);
                        }
                        break;
                    case 3:
                        {
                        this.state = 198;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        break;
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 201;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sourceElement(): SourceElementContext {
        let localContext = new SourceElementContext(this.context, this.state);
        this.enterRule(localContext, 4, AutoHotkeyParser.RULE_sourceElement);
        try {
            this.state = 209;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 203;
                this.classDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 204;
                this.directive();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 205;
                this.remap();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 206;
                this.hotstring();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 207;
                this.hotkey();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 208;
                this.statement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public directive(): DirectiveContext {
        let localContext = new DirectiveContext(this.context, this.state);
        this.enterRule(localContext, 6, AutoHotkeyParser.RULE_directive);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 211;
            this.match(AutoHotkeyParser.Hashtag);
            this.state = 214;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.HotIf:
            case AutoHotkeyParser.InputLevel:
            case AutoHotkeyParser.SuspendExempt:
            case AutoHotkeyParser.UseHook:
            case AutoHotkeyParser.Hotstring:
                {
                this.state = 212;
                this.positionalDirective();
                }
                break;
            case AutoHotkeyParser.Include:
            case AutoHotkeyParser.IncludeAgain:
            case AutoHotkeyParser.DllLoad:
            case AutoHotkeyParser.Requires:
            case AutoHotkeyParser.SingleInstance:
            case AutoHotkeyParser.Persistent:
            case AutoHotkeyParser.Warn:
            case AutoHotkeyParser.ErrorStdOut:
            case AutoHotkeyParser.ClipboardTimeout:
            case AutoHotkeyParser.HotIfTimeout:
            case AutoHotkeyParser.MaxThreads:
            case AutoHotkeyParser.MaxThreadsBuffer:
            case AutoHotkeyParser.MaxThreadsPerHotkey:
                {
                this.state = 213;
                this.generalDirective();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public positionalDirective(): PositionalDirectiveContext {
        let localContext = new PositionalDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 8, AutoHotkeyParser.RULE_positionalDirective);
        let _la: number;
        try {
            this.state = 242;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.HotIf:
                localContext = new HotIfDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 216;
                this.match(AutoHotkeyParser.HotIf);
                this.state = 218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532679298) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1048575) !== 0)) {
                    {
                    this.state = 217;
                    this.singleExpression(0);
                    }
                }

                }
                break;
            case AutoHotkeyParser.Hotstring:
                localContext = new HotstringDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 220;
                this.match(AutoHotkeyParser.Hotstring);
                this.state = 226;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case AutoHotkeyParser.EndChars:
                case AutoHotkeyParser.HotstringOptions:
                    {
                    this.state = 222;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 163) {
                        {
                        this.state = 221;
                        this.match(AutoHotkeyParser.EndChars);
                        }
                    }

                    this.state = 224;
                    this.match(AutoHotkeyParser.HotstringOptions);
                    }
                    break;
                case AutoHotkeyParser.NoMouse:
                    {
                    this.state = 225;
                    this.match(AutoHotkeyParser.NoMouse);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case AutoHotkeyParser.InputLevel:
                localContext = new InputLevelDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 228;
                this.match(AutoHotkeyParser.InputLevel);
                this.state = 230;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 31) !== 0)) {
                    {
                    this.state = 229;
                    this.numericLiteral();
                    }
                }

                }
                break;
            case AutoHotkeyParser.UseHook:
                localContext = new UseHookDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 232;
                this.match(AutoHotkeyParser.UseHook);
                this.state = 235;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case AutoHotkeyParser.DecimalLiteral:
                case AutoHotkeyParser.HexIntegerLiteral:
                case AutoHotkeyParser.OctalIntegerLiteral:
                case AutoHotkeyParser.OctalIntegerLiteral2:
                case AutoHotkeyParser.BinaryIntegerLiteral:
                    {
                    this.state = 233;
                    this.numericLiteral();
                    }
                    break;
                case AutoHotkeyParser.True:
                case AutoHotkeyParser.False:
                    {
                    this.state = 234;
                    this.boolean_();
                    }
                    break;
                case AutoHotkeyParser.EOF:
                case AutoHotkeyParser.EOL:
                    break;
                default:
                    break;
                }
                }
                break;
            case AutoHotkeyParser.SuspendExempt:
                localContext = new SuspendExemptDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 237;
                this.match(AutoHotkeyParser.SuspendExempt);
                this.state = 240;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case AutoHotkeyParser.DecimalLiteral:
                case AutoHotkeyParser.HexIntegerLiteral:
                case AutoHotkeyParser.OctalIntegerLiteral:
                case AutoHotkeyParser.OctalIntegerLiteral2:
                case AutoHotkeyParser.BinaryIntegerLiteral:
                    {
                    this.state = 238;
                    this.numericLiteral();
                    }
                    break;
                case AutoHotkeyParser.True:
                case AutoHotkeyParser.False:
                    {
                    this.state = 239;
                    this.boolean_();
                    }
                    break;
                case AutoHotkeyParser.EOF:
                case AutoHotkeyParser.EOL:
                    break;
                default:
                    break;
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public generalDirective(): GeneralDirectiveContext {
        let localContext = new GeneralDirectiveContext(this.context, this.state);
        this.enterRule(localContext, 10, AutoHotkeyParser.RULE_generalDirective);
        let _la: number;
        try {
            this.state = 257;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Include:
            case AutoHotkeyParser.IncludeAgain:
            case AutoHotkeyParser.DllLoad:
            case AutoHotkeyParser.Requires:
                localContext = new TextualDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 244;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 145)) & ~0x1F) === 0 && ((1 << (_la - 145)) & 15) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 245;
                this.match(AutoHotkeyParser.Text);
                }
                break;
            case AutoHotkeyParser.Persistent:
                localContext = new PersistentDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 246;
                this.match(AutoHotkeyParser.Persistent);
                this.state = 248;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70 || _la === 71 || _la === 139) {
                    {
                    this.state = 247;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 70 || _la === 71 || _la === 139)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                }
                break;
            case AutoHotkeyParser.SingleInstance:
            case AutoHotkeyParser.Warn:
                localContext = new OptionalTextualDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 250;
                _la = this.tokenStream.LA(1);
                if(!(_la === 149 || _la === 151)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 252;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 160) {
                    {
                    this.state = 251;
                    this.match(AutoHotkeyParser.Text);
                    }
                }

                }
                break;
            case AutoHotkeyParser.ErrorStdOut:
                localContext = new ErrorStdOutDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 254;
                this.match(AutoHotkeyParser.ErrorStdOut);
                }
                break;
            case AutoHotkeyParser.ClipboardTimeout:
            case AutoHotkeyParser.HotIfTimeout:
            case AutoHotkeyParser.MaxThreads:
            case AutoHotkeyParser.MaxThreadsBuffer:
            case AutoHotkeyParser.MaxThreadsPerHotkey:
                localContext = new NumericDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 255;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 31) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 256;
                this.match(AutoHotkeyParser.Digits);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public remap(): RemapContext {
        let localContext = new RemapContext(this.context, this.state);
        this.enterRule(localContext, 12, AutoHotkeyParser.RULE_remap);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 259;
            this.match(AutoHotkeyParser.RemapKey);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hotstring(): HotstringContext {
        let localContext = new HotstringContext(this.context, this.state);
        this.enterRule(localContext, 14, AutoHotkeyParser.RULE_hotstring);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 261;
            this.match(AutoHotkeyParser.HotstringTrigger);
            this.state = 266;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 262;
                    this.match(AutoHotkeyParser.EOL);
                    this.state = 263;
                    this.match(AutoHotkeyParser.HotstringTrigger);
                    }
                    }
                }
                this.state = 268;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            this.state = 272;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 269;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                }
                this.state = 274;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            }
            this.state = 284;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                {
                this.state = 275;
                this.hotstringExpansion();
                }
                break;
            case 2:
                {
                this.state = 277;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 131) {
                    {
                    this.state = 276;
                    this.match(AutoHotkeyParser.EOL);
                    }
                }

                this.state = 279;
                this.functionDeclaration();
                }
                break;
            case 3:
                {
                this.state = 281;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
                case 1:
                    {
                    this.state = 280;
                    this.match(AutoHotkeyParser.EOL);
                    }
                    break;
                }
                this.state = 283;
                this.statement();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hotstringExpansion(): HotstringExpansionContext {
        let localContext = new HotstringExpansionContext(this.context, this.state);
        this.enterRule(localContext, 16, AutoHotkeyParser.RULE_hotstringExpansion);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 286;
            _la = this.tokenStream.LA(1);
            if(!(_la === 135 || _la === 136)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public hotkey(): HotkeyContext {
        let localContext = new HotkeyContext(this.context, this.state);
        this.enterRule(localContext, 18, AutoHotkeyParser.RULE_hotkey);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 288;
            this.match(AutoHotkeyParser.HotkeyTrigger);
            this.state = 293;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 289;
                    this.match(AutoHotkeyParser.EOL);
                    this.state = 290;
                    this.match(AutoHotkeyParser.HotkeyTrigger);
                    }
                    }
                }
                this.state = 295;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            }
            this.state = 299;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 296;
                    this.s();
                    }
                    }
                }
                this.state = 301;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            this.state = 304;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                {
                this.state = 302;
                this.functionDeclaration();
                }
                break;
            case 2:
                {
                this.state = 303;
                this.statement();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 20, AutoHotkeyParser.RULE_statement);
        try {
            this.state = 324;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 306;
                this.variableStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 307;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 308;
                this.iterationStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 309;
                this.continueStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 310;
                this.breakStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 311;
                this.returnStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 312;
                this.yieldStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 313;
                this.labelledStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 314;
                this.gotoStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 315;
                this.switchStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 316;
                this.throwStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 317;
                this.tryStatement();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 318;
                this.awaitStatement();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 319;
                this.deleteStatement();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 320;
                this.functionDeclaration();
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 321;
                this.functionStatement();
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 322;
                this.blockStatement();
                }
                break;
            case 18:
                this.enterOuterAlt(localContext, 18);
                {
                this.state = 323;
                this.expressionStatement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockStatement(): BlockStatementContext {
        let localContext = new BlockStatementContext(this.context, this.state);
        this.enterRule(localContext, 22, AutoHotkeyParser.RULE_blockStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 326;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 24, AutoHotkeyParser.RULE_block);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 328;
            this.match(AutoHotkeyParser.OpenBrace);
            this.state = 332;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 329;
                    this.s();
                    }
                    }
                }
                this.state = 334;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            }
            this.state = 336;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                {
                this.state = 335;
                this.statementList();
                }
                break;
            }
            this.state = 338;
            this.match(AutoHotkeyParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statementList(): StatementListContext {
        let localContext = new StatementListContext(this.context, this.state);
        this.enterRule(localContext, 26, AutoHotkeyParser.RULE_statementList);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 343;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 340;
                    this.statement();
                    this.state = 341;
                    this.match(AutoHotkeyParser.EOL);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 345;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableStatement(): VariableStatementContext {
        let localContext = new VariableStatementContext(this.context, this.state);
        this.enterRule(localContext, 28, AutoHotkeyParser.RULE_variableStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 347;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 355;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0) || _la === 132) {
                {
                this.state = 351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 348;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 353;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 354;
                this.variableDeclarationList();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public awaitStatement(): AwaitStatementContext {
        let localContext = new AwaitStatementContext(this.context, this.state);
        this.enterRule(localContext, 30, AutoHotkeyParser.RULE_awaitStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 357;
            this.match(AutoHotkeyParser.Await);
            this.state = 361;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 358;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 363;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 364;
            this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public deleteStatement(): DeleteStatementContext {
        let localContext = new DeleteStatementContext(this.context, this.state);
        this.enterRule(localContext, 32, AutoHotkeyParser.RULE_deleteStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 366;
            this.match(AutoHotkeyParser.Delete);
            this.state = 370;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 367;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 372;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 373;
            this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public declaration(): DeclarationContext {
        let localContext = new DeclarationContext(this.context, this.state);
        this.enterRule(localContext, 34, AutoHotkeyParser.RULE_declaration);
        try {
            this.state = 377;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 375;
                this.classDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 376;
                this.functionDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarationList(): VariableDeclarationListContext {
        let localContext = new VariableDeclarationListContext(this.context, this.state);
        this.enterRule(localContext, 36, AutoHotkeyParser.RULE_variableDeclarationList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 379;
            this.variableDeclaration();
            this.state = 390;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13 || _la === 132) {
                {
                {
                this.state = 383;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 380;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 385;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 386;
                this.match(AutoHotkeyParser.Comma);
                this.state = 387;
                this.variableDeclaration();
                }
                }
                this.state = 392;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclaration(): VariableDeclarationContext {
        let localContext = new VariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 38, AutoHotkeyParser.RULE_variableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 393;
            this.assignable();
            this.state = 398;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Assign:
            case AutoHotkeyParser.MultiplyAssign:
            case AutoHotkeyParser.DivideAssign:
            case AutoHotkeyParser.ModulusAssign:
            case AutoHotkeyParser.PlusAssign:
            case AutoHotkeyParser.MinusAssign:
            case AutoHotkeyParser.LeftShiftArithmeticAssign:
            case AutoHotkeyParser.RightShiftArithmeticAssign:
            case AutoHotkeyParser.RightShiftLogicalAssign:
            case AutoHotkeyParser.IntegerDivideAssign:
            case AutoHotkeyParser.ConcatenateAssign:
            case AutoHotkeyParser.BitAndAssign:
            case AutoHotkeyParser.BitXorAssign:
            case AutoHotkeyParser.BitOrAssign:
            case AutoHotkeyParser.PowerAssign:
            case AutoHotkeyParser.NullishCoalescingAssign:
                {
                this.state = 394;
                this.assignmentOperator();
                this.state = 395;
                this.singleExpression(0);
                }
                break;
            case AutoHotkeyParser.PlusPlus:
            case AutoHotkeyParser.MinusMinus:
                {
                this.state = 397;
                localContext._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 22 || _la === 23)) {
                    localContext._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case AutoHotkeyParser.EOF:
            case AutoHotkeyParser.Comma:
            case AutoHotkeyParser.EOL:
            case AutoHotkeyParser.WS:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionStatement(): FunctionStatementContext {
        let localContext = new FunctionStatementContext(this.context, this.state);
        this.enterRule(localContext, 40, AutoHotkeyParser.RULE_functionStatement);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 400;
            this.primaryExpression(0);
            this.state = 407;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 132) {
                {
                this.state = 402;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 401;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 404;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 406;
                this.arguments();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionStatement(): ExpressionStatementContext {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 42, AutoHotkeyParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 409;
            this.expressionSequence();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ifStatement(): IfStatementContext {
        let localContext = new IfStatementContext(this.context, this.state);
        this.enterRule(localContext, 44, AutoHotkeyParser.RULE_ifStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 411;
            this.match(AutoHotkeyParser.If);
            this.state = 415;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 131 || _la === 132) {
                {
                {
                this.state = 412;
                this.s();
                }
                }
                this.state = 417;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 418;
            this.singleExpression(0);
            this.state = 422;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 419;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 424;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 425;
            this.flowBlock();
            this.state = 427;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 39, this.context) ) {
            case 1:
                {
                this.state = 426;
                this.elseProduction();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public flowBlock(): FlowBlockContext {
        let localContext = new FlowBlockContext(this.context, this.state);
        this.enterRule(localContext, 46, AutoHotkeyParser.RULE_flowBlock);
        try {
            let alternative: number;
            this.state = 436;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.EOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 430;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 429;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 432;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 434;
                this.statement();
                }
                break;
            case AutoHotkeyParser.OpenBrace:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 435;
                this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public untilProduction(): UntilProductionContext {
        let localContext = new UntilProductionContext(this.context, this.state);
        this.enterRule(localContext, 48, AutoHotkeyParser.RULE_untilProduction);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 438;
            this.match(AutoHotkeyParser.EOL);
            this.state = 439;
            this.match(AutoHotkeyParser.Until);
            this.state = 443;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 131 || _la === 132) {
                {
                {
                this.state = 440;
                this.s();
                }
                }
                this.state = 445;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 446;
            this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elseProduction(): ElseProductionContext {
        let localContext = new ElseProductionContext(this.context, this.state);
        this.enterRule(localContext, 50, AutoHotkeyParser.RULE_elseProduction);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 448;
            this.match(AutoHotkeyParser.EOL);
            this.state = 449;
            this.match(AutoHotkeyParser.Else);
            this.state = 453;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 450;
                    this.s();
                    }
                    }
                }
                this.state = 455;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
            }
            this.state = 456;
            this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public iterationStatement(): IterationStatementContext {
        let localContext = new IterationStatementContext(this.context, this.state);
        this.enterRule(localContext, 52, AutoHotkeyParser.RULE_iterationStatement);
        let _la: number;
        try {
            let alternative: number;
            this.state = 561;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context) ) {
            case 1:
                localContext = new SpecializedLoopStatementContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 458;
                this.match(AutoHotkeyParser.Loop);
                this.state = 459;
                (localContext as SpecializedLoopStatementContext)._type_ = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & 15) !== 0))) {
                    (localContext as SpecializedLoopStatementContext)._type_ = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 463;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 460;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 465;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 466;
                this.singleExpression(0);
                this.state = 479;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 47, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 470;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 132) {
                            {
                            {
                            this.state = 467;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 472;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 473;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 475;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 46, this.context) ) {
                        case 1:
                            {
                            this.state = 474;
                            this.singleExpression(0);
                            }
                            break;
                        }
                        }
                        }
                    }
                    this.state = 481;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 47, this.context);
                }
                this.state = 485;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 482;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 487;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 488;
                this.flowBlock();
                this.state = 490;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 49, this.context) ) {
                case 1:
                    {
                    this.state = 489;
                    this.untilProduction();
                    }
                    break;
                }
                this.state = 493;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 50, this.context) ) {
                case 1:
                    {
                    this.state = 492;
                    this.elseProduction();
                    }
                    break;
                }
                }
                break;
            case 2:
                localContext = new LoopStatementContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 495;
                if (!(this.isValidLoopExpression())) {
                    throw this.createFailedPredicateException("this.isValidLoopExpression()");
                }
                this.state = 496;
                this.match(AutoHotkeyParser.Loop);
                this.state = 500;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 497;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 502;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 510;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                case 1:
                    {
                    this.state = 503;
                    this.singleExpression(0);
                    this.state = 507;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 504;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 509;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 512;
                this.flowBlock();
                this.state = 514;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context) ) {
                case 1:
                    {
                    this.state = 513;
                    this.untilProduction();
                    }
                    break;
                }
                this.state = 517;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 55, this.context) ) {
                case 1:
                    {
                    this.state = 516;
                    this.elseProduction();
                    }
                    break;
                }
                }
                break;
            case 3:
                localContext = new WhileStatementContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 519;
                this.match(AutoHotkeyParser.While);
                this.state = 523;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 520;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 525;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 526;
                this.singleExpression(0);
                this.state = 530;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 527;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 532;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 533;
                this.flowBlock();
                this.state = 535;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 58, this.context) ) {
                case 1:
                    {
                    this.state = 534;
                    this.untilProduction();
                    }
                    break;
                }
                this.state = 538;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 59, this.context) ) {
                case 1:
                    {
                    this.state = 537;
                    this.elseProduction();
                    }
                    break;
                }
                }
                break;
            case 4:
                localContext = new ForInStatementContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 540;
                this.match(AutoHotkeyParser.For);
                this.state = 544;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 541;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                    }
                    this.state = 546;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 60, this.context);
                }
                this.state = 547;
                this.forInParameters();
                this.state = 551;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 548;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 553;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 554;
                this.flowBlock();
                this.state = 556;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
                case 1:
                    {
                    this.state = 555;
                    this.untilProduction();
                    }
                    break;
                }
                this.state = 559;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context) ) {
                case 1:
                    {
                    this.state = 558;
                    this.elseProduction();
                    }
                    break;
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forInParameters(): ForInParametersContext {
        let localContext = new ForInParametersContext(this.context, this.state);
        this.enterRule(localContext, 54, AutoHotkeyParser.RULE_forInParameters);
        let _la: number;
        try {
            let alternative: number;
            this.state = 630;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Comma:
            case AutoHotkeyParser.NullLiteral:
            case AutoHotkeyParser.Do:
            case AutoHotkeyParser.Default:
            case AutoHotkeyParser.Parse:
            case AutoHotkeyParser.Reg:
            case AutoHotkeyParser.Read:
            case AutoHotkeyParser.Files:
            case AutoHotkeyParser.This:
            case AutoHotkeyParser.In:
            case AutoHotkeyParser.Get:
            case AutoHotkeyParser.Set:
            case AutoHotkeyParser.Class:
            case AutoHotkeyParser.Enum:
            case AutoHotkeyParser.Extends:
            case AutoHotkeyParser.Super:
            case AutoHotkeyParser.Base:
            case AutoHotkeyParser.From:
            case AutoHotkeyParser.As:
            case AutoHotkeyParser.Identifier:
            case AutoHotkeyParser.WS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 564;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0)) {
                    {
                    this.state = 563;
                    this.assignable();
                    }
                }

                this.state = 578;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 569;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 132) {
                            {
                            {
                            this.state = 566;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 571;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 572;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 574;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0)) {
                            {
                            this.state = 573;
                            this.assignable();
                            }
                        }

                        }
                        }
                    }
                    this.state = 580;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
                }
                this.state = 584;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 581;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 586;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 587;
                this.match(AutoHotkeyParser.In);
                this.state = 591;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 588;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 593;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 594;
                this.singleExpression(0);
                }
                break;
            case AutoHotkeyParser.OpenParen:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 595;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 597;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0)) {
                    {
                    this.state = 596;
                    this.assignable();
                    }
                }

                this.state = 611;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 602;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 132) {
                            {
                            {
                            this.state = 599;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 604;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 605;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 607;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0)) {
                            {
                            this.state = 606;
                            this.assignable();
                            }
                        }

                        }
                        }
                    }
                    this.state = 613;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
                }
                this.state = 617;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 614;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 131 || _la === 132)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 619;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 620;
                this.match(AutoHotkeyParser.In);
                this.state = 624;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 621;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 131 || _la === 132)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 626;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 627;
                this.singleExpression(0);
                this.state = 628;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public continueStatement(): ContinueStatementContext {
        let localContext = new ContinueStatementContext(this.context, this.state);
        this.enterRule(localContext, 56, AutoHotkeyParser.RULE_continueStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 632;
            this.match(AutoHotkeyParser.Continue);
            this.state = 636;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 633;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 638;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 644;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.NullLiteral:
            case AutoHotkeyParser.Unset:
            case AutoHotkeyParser.True:
            case AutoHotkeyParser.False:
            case AutoHotkeyParser.DecimalLiteral:
            case AutoHotkeyParser.HexIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral2:
            case AutoHotkeyParser.BinaryIntegerLiteral:
            case AutoHotkeyParser.Break:
            case AutoHotkeyParser.Do:
            case AutoHotkeyParser.Instanceof:
            case AutoHotkeyParser.Switch:
            case AutoHotkeyParser.Case:
            case AutoHotkeyParser.Default:
            case AutoHotkeyParser.Else:
            case AutoHotkeyParser.Catch:
            case AutoHotkeyParser.Finally:
            case AutoHotkeyParser.Return:
            case AutoHotkeyParser.Continue:
            case AutoHotkeyParser.For:
            case AutoHotkeyParser.While:
            case AutoHotkeyParser.Parse:
            case AutoHotkeyParser.Reg:
            case AutoHotkeyParser.Read:
            case AutoHotkeyParser.Files:
            case AutoHotkeyParser.Loop:
            case AutoHotkeyParser.Until:
            case AutoHotkeyParser.This:
            case AutoHotkeyParser.If:
            case AutoHotkeyParser.Throw:
            case AutoHotkeyParser.Delete:
            case AutoHotkeyParser.In:
            case AutoHotkeyParser.Try:
            case AutoHotkeyParser.Yield:
            case AutoHotkeyParser.Is:
            case AutoHotkeyParser.Contains:
            case AutoHotkeyParser.VerbalAnd:
            case AutoHotkeyParser.VerbalNot:
            case AutoHotkeyParser.VerbalOr:
            case AutoHotkeyParser.Goto:
            case AutoHotkeyParser.Get:
            case AutoHotkeyParser.Set:
            case AutoHotkeyParser.Class:
            case AutoHotkeyParser.Enum:
            case AutoHotkeyParser.Extends:
            case AutoHotkeyParser.Super:
            case AutoHotkeyParser.Base:
            case AutoHotkeyParser.Export:
            case AutoHotkeyParser.Import:
            case AutoHotkeyParser.From:
            case AutoHotkeyParser.As:
            case AutoHotkeyParser.Async:
            case AutoHotkeyParser.Await:
            case AutoHotkeyParser.Static:
            case AutoHotkeyParser.Global:
            case AutoHotkeyParser.Local:
            case AutoHotkeyParser.Identifier:
            case AutoHotkeyParser.StringLiteral:
                {
                this.state = 639;
                this.propertyName();
                }
                break;
            case AutoHotkeyParser.OpenParen:
                {
                this.state = 640;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 641;
                this.propertyName();
                this.state = 642;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            case AutoHotkeyParser.EOF:
            case AutoHotkeyParser.EOL:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public breakStatement(): BreakStatementContext {
        let localContext = new BreakStatementContext(this.context, this.state);
        this.enterRule(localContext, 58, AutoHotkeyParser.RULE_breakStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 646;
            this.match(AutoHotkeyParser.Break);
            this.state = 650;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 647;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 652;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 658;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.OpenParen:
                {
                this.state = 653;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 654;
                this.propertyName();
                this.state = 655;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            case AutoHotkeyParser.NullLiteral:
            case AutoHotkeyParser.Unset:
            case AutoHotkeyParser.True:
            case AutoHotkeyParser.False:
            case AutoHotkeyParser.DecimalLiteral:
            case AutoHotkeyParser.HexIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral2:
            case AutoHotkeyParser.BinaryIntegerLiteral:
            case AutoHotkeyParser.Break:
            case AutoHotkeyParser.Do:
            case AutoHotkeyParser.Instanceof:
            case AutoHotkeyParser.Switch:
            case AutoHotkeyParser.Case:
            case AutoHotkeyParser.Default:
            case AutoHotkeyParser.Else:
            case AutoHotkeyParser.Catch:
            case AutoHotkeyParser.Finally:
            case AutoHotkeyParser.Return:
            case AutoHotkeyParser.Continue:
            case AutoHotkeyParser.For:
            case AutoHotkeyParser.While:
            case AutoHotkeyParser.Parse:
            case AutoHotkeyParser.Reg:
            case AutoHotkeyParser.Read:
            case AutoHotkeyParser.Files:
            case AutoHotkeyParser.Loop:
            case AutoHotkeyParser.Until:
            case AutoHotkeyParser.This:
            case AutoHotkeyParser.If:
            case AutoHotkeyParser.Throw:
            case AutoHotkeyParser.Delete:
            case AutoHotkeyParser.In:
            case AutoHotkeyParser.Try:
            case AutoHotkeyParser.Yield:
            case AutoHotkeyParser.Is:
            case AutoHotkeyParser.Contains:
            case AutoHotkeyParser.VerbalAnd:
            case AutoHotkeyParser.VerbalNot:
            case AutoHotkeyParser.VerbalOr:
            case AutoHotkeyParser.Goto:
            case AutoHotkeyParser.Get:
            case AutoHotkeyParser.Set:
            case AutoHotkeyParser.Class:
            case AutoHotkeyParser.Enum:
            case AutoHotkeyParser.Extends:
            case AutoHotkeyParser.Super:
            case AutoHotkeyParser.Base:
            case AutoHotkeyParser.Export:
            case AutoHotkeyParser.Import:
            case AutoHotkeyParser.From:
            case AutoHotkeyParser.As:
            case AutoHotkeyParser.Async:
            case AutoHotkeyParser.Await:
            case AutoHotkeyParser.Static:
            case AutoHotkeyParser.Global:
            case AutoHotkeyParser.Local:
            case AutoHotkeyParser.Identifier:
            case AutoHotkeyParser.StringLiteral:
                {
                this.state = 657;
                this.propertyName();
                }
                break;
            case AutoHotkeyParser.EOF:
            case AutoHotkeyParser.EOL:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStatement(): ReturnStatementContext {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 60, AutoHotkeyParser.RULE_returnStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 660;
            this.match(AutoHotkeyParser.Return);
            this.state = 664;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 661;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 666;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 668;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532679298) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1048575) !== 0)) {
                {
                this.state = 667;
                this.singleExpression(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public yieldStatement(): YieldStatementContext {
        let localContext = new YieldStatementContext(this.context, this.state);
        this.enterRule(localContext, 62, AutoHotkeyParser.RULE_yieldStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 670;
            this.match(AutoHotkeyParser.Yield);
            this.state = 674;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 671;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 676;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 678;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532679298) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1048575) !== 0)) {
                {
                this.state = 677;
                this.singleExpression(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchStatement(): SwitchStatementContext {
        let localContext = new SwitchStatementContext(this.context, this.state);
        this.enterRule(localContext, 64, AutoHotkeyParser.RULE_switchStatement);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 680;
            this.match(AutoHotkeyParser.Switch);
            this.state = 684;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 681;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                }
                this.state = 686;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
            }
            this.state = 688;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context) ) {
            case 1:
                {
                this.state = 687;
                this.singleExpression(0);
                }
                break;
            }
            this.state = 698;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 89, this.context) ) {
            case 1:
                {
                this.state = 693;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 690;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 695;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 696;
                this.match(AutoHotkeyParser.Comma);
                this.state = 697;
                this.literal();
                }
                break;
            }
            this.state = 703;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 131 || _la === 132) {
                {
                {
                this.state = 700;
                this.s();
                }
                }
                this.state = 705;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 706;
            this.caseBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseBlock(): CaseBlockContext {
        let localContext = new CaseBlockContext(this.context, this.state);
        this.enterRule(localContext, 66, AutoHotkeyParser.RULE_caseBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 708;
            this.match(AutoHotkeyParser.OpenBrace);
            this.state = 712;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 131 || _la === 132) {
                {
                {
                this.state = 709;
                this.s();
                }
                }
                this.state = 714;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 718;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85 || _la === 86) {
                {
                {
                this.state = 715;
                this.caseClause();
                }
                }
                this.state = 720;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 721;
            this.match(AutoHotkeyParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caseClause(): CaseClauseContext {
        let localContext = new CaseClauseContext(this.context, this.state);
        this.enterRule(localContext, 68, AutoHotkeyParser.RULE_caseClause);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 732;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Case:
                {
                this.state = 723;
                this.match(AutoHotkeyParser.Case);
                this.state = 727;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 724;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 729;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 730;
                this.expressionSequence();
                }
                break;
            case AutoHotkeyParser.Default:
                {
                this.state = 731;
                this.match(AutoHotkeyParser.Default);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 737;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 734;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 739;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 740;
            this.match(AutoHotkeyParser.Colon);
            this.state = 749;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 97, this.context) ) {
            case 1:
                {
                this.state = 744;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 741;
                        this.s();
                        }
                        }
                    }
                    this.state = 746;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 96, this.context);
                }
                this.state = 747;
                this.statementList();
                }
                break;
            case 2:
                {
                this.state = 748;
                this.match(AutoHotkeyParser.EOL);
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public labelledStatement(): LabelledStatementContext {
        let localContext = new LabelledStatementContext(this.context, this.state);
        this.enterRule(localContext, 70, AutoHotkeyParser.RULE_labelledStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 751;
            this.identifier();
            this.state = 752;
            this.match(AutoHotkeyParser.Colon);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public gotoStatement(): GotoStatementContext {
        let localContext = new GotoStatementContext(this.context, this.state);
        this.enterRule(localContext, 72, AutoHotkeyParser.RULE_gotoStatement);
        let _la: number;
        try {
            this.state = 773;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 100, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 754;
                this.match(AutoHotkeyParser.Goto);
                this.state = 758;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 755;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 760;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 761;
                this.propertyName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 762;
                this.match(AutoHotkeyParser.Goto);
                this.state = 766;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 763;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 768;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 769;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 770;
                this.propertyName();
                this.state = 771;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public throwStatement(): ThrowStatementContext {
        let localContext = new ThrowStatementContext(this.context, this.state);
        this.enterRule(localContext, 74, AutoHotkeyParser.RULE_throwStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 775;
            this.match(AutoHotkeyParser.Throw);
            this.state = 779;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 776;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 781;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 783;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532679298) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1048575) !== 0)) {
                {
                this.state = 782;
                this.singleExpression(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tryStatement(): TryStatementContext {
        let localContext = new TryStatementContext(this.context, this.state);
        this.enterRule(localContext, 76, AutoHotkeyParser.RULE_tryStatement);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 785;
            this.match(AutoHotkeyParser.Try);
            this.state = 789;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 786;
                    this.s();
                    }
                    }
                }
                this.state = 791;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context);
            }
            this.state = 792;
            this.statement();
            this.state = 796;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 793;
                    this.catchProduction();
                    }
                    }
                }
                this.state = 798;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 104, this.context);
            }
            this.state = 800;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 105, this.context) ) {
            case 1:
                {
                this.state = 799;
                this.elseProduction();
                }
                break;
            }
            this.state = 803;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 106, this.context) ) {
            case 1:
                {
                this.state = 802;
                this.finallyProduction();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchProduction(): CatchProductionContext {
        let localContext = new CatchProductionContext(this.context, this.state);
        this.enterRule(localContext, 78, AutoHotkeyParser.RULE_catchProduction);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 805;
            this.match(AutoHotkeyParser.EOL);
            this.state = 806;
            this.match(AutoHotkeyParser.Catch);
            this.state = 810;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 107, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 807;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                }
                this.state = 812;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 107, this.context);
            }
            this.state = 820;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0) || _la === 132) {
                {
                this.state = 813;
                this.catchAssignable();
                this.state = 817;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 814;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 819;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 822;
            this.flowBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchAssignable(): CatchAssignableContext {
        let localContext = new CatchAssignableContext(this.context, this.state);
        this.enterRule(localContext, 80, AutoHotkeyParser.RULE_catchAssignable);
        let _la: number;
        try {
            this.state = 899;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 122, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 824;
                this.catchClasses();
                this.state = 832;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context) ) {
                case 1:
                    {
                    this.state = 828;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 825;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 830;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 831;
                    this.match(AutoHotkeyParser.As);
                    }
                    break;
                }
                this.state = 841;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context) ) {
                case 1:
                    {
                    this.state = 837;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 834;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 839;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 840;
                    this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 843;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 844;
                this.catchClasses();
                this.state = 852;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
                case 1:
                    {
                    this.state = 848;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 845;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 850;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 851;
                    this.match(AutoHotkeyParser.As);
                    }
                    break;
                }
                this.state = 861;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0) || _la === 132) {
                    {
                    this.state = 857;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 854;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 859;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 860;
                    this.identifier();
                    }
                }

                this.state = 863;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 868;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 865;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 870;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 871;
                this.match(AutoHotkeyParser.As);
                }
                {
                this.state = 876;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 873;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 878;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 879;
                this.identifier();
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 880;
                this.match(AutoHotkeyParser.OpenParen);
                {
                this.state = 884;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 881;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 886;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 887;
                this.match(AutoHotkeyParser.As);
                }
                {
                this.state = 892;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 889;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 894;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 895;
                this.identifier();
                }
                this.state = 897;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchClasses(): CatchClassesContext {
        let localContext = new CatchClassesContext(this.context, this.state);
        this.enterRule(localContext, 82, AutoHotkeyParser.RULE_catchClasses);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 901;
            this.identifier();
            this.state = 912;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 124, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 905;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 902;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 907;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 908;
                    this.match(AutoHotkeyParser.Comma);
                    this.state = 909;
                    this.identifier();
                    }
                    }
                }
                this.state = 914;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 124, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public finallyProduction(): FinallyProductionContext {
        let localContext = new FinallyProductionContext(this.context, this.state);
        this.enterRule(localContext, 84, AutoHotkeyParser.RULE_finallyProduction);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 915;
            this.match(AutoHotkeyParser.EOL);
            this.state = 916;
            this.match(AutoHotkeyParser.Finally);
            this.state = 920;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 125, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 917;
                    this.s();
                    }
                    }
                }
                this.state = 922;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 125, this.context);
            }
            this.state = 923;
            this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionDeclaration(): FunctionDeclarationContext {
        let localContext = new FunctionDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 86, AutoHotkeyParser.RULE_functionDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 925;
            this.functionHead();
            this.state = 926;
            this.functionBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classDeclaration(): ClassDeclarationContext {
        let localContext = new ClassDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 88, AutoHotkeyParser.RULE_classDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 928;
            this.match(AutoHotkeyParser.Class);
            this.state = 932;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 929;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 934;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 935;
            this.identifier();
            this.state = 948;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 129, this.context) ) {
            case 1:
                {
                this.state = 937;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 936;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 939;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 132);
                this.state = 941;
                this.match(AutoHotkeyParser.Extends);
                this.state = 943;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 942;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 945;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 132);
                this.state = 947;
                this.classExtensionName();
                }
                break;
            }
            this.state = 953;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 131 || _la === 132) {
                {
                {
                this.state = 950;
                this.s();
                }
                }
                this.state = 955;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 956;
            this.classTail();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classExtensionName(): ClassExtensionNameContext {
        let localContext = new ClassExtensionNameContext(this.context, this.state);
        this.enterRule(localContext, 90, AutoHotkeyParser.RULE_classExtensionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 958;
            this.identifier();
            this.state = 963;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 959;
                this.match(AutoHotkeyParser.Dot);
                this.state = 960;
                this.identifier();
                }
                }
                this.state = 965;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classTail(): ClassTailContext {
        let localContext = new ClassTailContext(this.context, this.state);
        this.enterRule(localContext, 92, AutoHotkeyParser.RULE_classTail);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 966;
            this.match(AutoHotkeyParser.OpenBrace);
            this.state = 973;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4294959615) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 4294967295) !== 0)) {
                {
                this.state = 971;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case AutoHotkeyParser.NullLiteral:
                case AutoHotkeyParser.Unset:
                case AutoHotkeyParser.True:
                case AutoHotkeyParser.False:
                case AutoHotkeyParser.DecimalLiteral:
                case AutoHotkeyParser.HexIntegerLiteral:
                case AutoHotkeyParser.OctalIntegerLiteral:
                case AutoHotkeyParser.OctalIntegerLiteral2:
                case AutoHotkeyParser.BinaryIntegerLiteral:
                case AutoHotkeyParser.Break:
                case AutoHotkeyParser.Do:
                case AutoHotkeyParser.Instanceof:
                case AutoHotkeyParser.Switch:
                case AutoHotkeyParser.Case:
                case AutoHotkeyParser.Default:
                case AutoHotkeyParser.Else:
                case AutoHotkeyParser.Catch:
                case AutoHotkeyParser.Finally:
                case AutoHotkeyParser.Return:
                case AutoHotkeyParser.Continue:
                case AutoHotkeyParser.For:
                case AutoHotkeyParser.While:
                case AutoHotkeyParser.Parse:
                case AutoHotkeyParser.Reg:
                case AutoHotkeyParser.Read:
                case AutoHotkeyParser.Files:
                case AutoHotkeyParser.Loop:
                case AutoHotkeyParser.Until:
                case AutoHotkeyParser.This:
                case AutoHotkeyParser.If:
                case AutoHotkeyParser.Throw:
                case AutoHotkeyParser.Delete:
                case AutoHotkeyParser.In:
                case AutoHotkeyParser.Try:
                case AutoHotkeyParser.Yield:
                case AutoHotkeyParser.Is:
                case AutoHotkeyParser.Contains:
                case AutoHotkeyParser.VerbalAnd:
                case AutoHotkeyParser.VerbalNot:
                case AutoHotkeyParser.VerbalOr:
                case AutoHotkeyParser.Goto:
                case AutoHotkeyParser.Get:
                case AutoHotkeyParser.Set:
                case AutoHotkeyParser.Class:
                case AutoHotkeyParser.Enum:
                case AutoHotkeyParser.Extends:
                case AutoHotkeyParser.Super:
                case AutoHotkeyParser.Base:
                case AutoHotkeyParser.Export:
                case AutoHotkeyParser.Import:
                case AutoHotkeyParser.From:
                case AutoHotkeyParser.As:
                case AutoHotkeyParser.Async:
                case AutoHotkeyParser.Await:
                case AutoHotkeyParser.Static:
                case AutoHotkeyParser.Global:
                case AutoHotkeyParser.Local:
                case AutoHotkeyParser.Identifier:
                case AutoHotkeyParser.StringLiteral:
                    {
                    this.state = 967;
                    this.classElement();
                    this.state = 968;
                    this.match(AutoHotkeyParser.EOL);
                    }
                    break;
                case AutoHotkeyParser.EOL:
                    {
                    this.state = 970;
                    this.match(AutoHotkeyParser.EOL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 975;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 976;
            this.match(AutoHotkeyParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classElement(): ClassElementContext {
        let localContext = new ClassElementContext(this.context, this.state);
        this.enterRule(localContext, 94, AutoHotkeyParser.RULE_classElement);
        let _la: number;
        try {
            this.state = 1013;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 140, this.context) ) {
            case 1:
                localContext = new ClassMethodDeclarationContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 978;
                this.methodDefinition();
                }
                break;
            case 2:
                localContext = new ClassPropertyDeclarationContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 986;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 135, this.context) ) {
                case 1:
                    {
                    this.state = 979;
                    this.match(AutoHotkeyParser.Static);
                    this.state = 983;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 980;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 985;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 988;
                this.propertyDefinition();
                }
                break;
            case 3:
                localContext = new ClassFieldDeclarationContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 996;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 137, this.context) ) {
                case 1:
                    {
                    this.state = 989;
                    this.match(AutoHotkeyParser.Static);
                    this.state = 993;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 990;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 995;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 998;
                this.fieldDefinition();
                this.state = 1009;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 13 || _la === 132) {
                    {
                    {
                    this.state = 1002;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 999;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 1004;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1005;
                    this.match(AutoHotkeyParser.Comma);
                    this.state = 1006;
                    this.fieldDefinition();
                    }
                    }
                    this.state = 1011;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 4:
                localContext = new NestedClassDeclarationContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1012;
                this.classDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodDefinition(): MethodDefinitionContext {
        let localContext = new MethodDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 96, AutoHotkeyParser.RULE_methodDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1015;
            this.functionHead();
            this.state = 1016;
            this.functionBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propertyDefinition(): PropertyDefinitionContext {
        let localContext = new PropertyDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 98, AutoHotkeyParser.RULE_propertyDefinition);
        let _la: number;
        try {
            this.state = 1043;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1018;
                this.classPropertyName();
                this.state = 1019;
                this.match(AutoHotkeyParser.Arrow);
                this.state = 1020;
                this.singleExpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1022;
                this.classPropertyName();
                this.state = 1026;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 1023;
                    this.s();
                    }
                    }
                    this.state = 1028;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1029;
                this.match(AutoHotkeyParser.OpenBrace);
                this.state = 1037;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    this.state = 1037;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case AutoHotkeyParser.Get:
                        {
                        this.state = 1030;
                        this.propertyGetterDefinition();
                        this.state = 1031;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        break;
                    case AutoHotkeyParser.Set:
                        {
                        this.state = 1033;
                        this.propertySetterDefinition();
                        this.state = 1034;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        break;
                    case AutoHotkeyParser.EOL:
                        {
                        this.state = 1036;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    this.state = 1039;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 262147) !== 0));
                this.state = 1041;
                this.match(AutoHotkeyParser.CloseBrace);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classPropertyName(): ClassPropertyNameContext {
        let localContext = new ClassPropertyNameContext(this.context, this.state);
        this.enterRule(localContext, 100, AutoHotkeyParser.RULE_classPropertyName);
        let _la: number;
        try {
            this.state = 1059;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 147, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1045;
                this.propertyName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1046;
                this.propertyName();
                this.state = 1047;
                this.match(AutoHotkeyParser.OpenBracket);
                this.state = 1049;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 28 || _la === 47 || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0)) {
                    {
                    this.state = 1048;
                    this.formalParameterList();
                    }
                }

                this.state = 1054;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 1051;
                    this.s();
                    }
                    }
                    this.state = 1056;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1057;
                this.match(AutoHotkeyParser.CloseBracket);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propertyGetterDefinition(): PropertyGetterDefinitionContext {
        let localContext = new PropertyGetterDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 102, AutoHotkeyParser.RULE_propertyGetterDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1061;
            this.match(AutoHotkeyParser.Get);
            this.state = 1062;
            this.functionBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propertySetterDefinition(): PropertySetterDefinitionContext {
        let localContext = new PropertySetterDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 104, AutoHotkeyParser.RULE_propertySetterDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1064;
            this.match(AutoHotkeyParser.Set);
            this.state = 1065;
            this.functionBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldDefinition(): FieldDefinitionContext {
        let localContext = new FieldDefinitionContext(this.context, this.state);
        this.enterRule(localContext, 106, AutoHotkeyParser.RULE_fieldDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1067;
            this.propertyName();
            this.state = 1072;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 1068;
                this.match(AutoHotkeyParser.Dot);
                this.state = 1069;
                this.propertyName();
                }
                }
                this.state = 1074;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 1075;
            this.match(AutoHotkeyParser.Assign);
            this.state = 1076;
            this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameterList(): FormalParameterListContext {
        let localContext = new FormalParameterListContext(this.context, this.state);
        this.enterRule(localContext, 108, AutoHotkeyParser.RULE_formalParameterList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1089;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 150, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1078;
                    this.formalParameterArg();
                    this.state = 1082;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 1079;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 1084;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1085;
                    this.match(AutoHotkeyParser.Comma);
                    }
                    }
                }
                this.state = 1091;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 150, this.context);
            }
            this.state = 1092;
            this.lastFormalParameterArg();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameterArg(): FormalParameterArgContext {
        let localContext = new FormalParameterArgContext(this.context, this.state);
        this.enterRule(localContext, 110, AutoHotkeyParser.RULE_formalParameterArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1095;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 1094;
                this.match(AutoHotkeyParser.BitAnd);
                }
            }

            this.state = 1097;
            this.identifier();
            this.state = 1101;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Assign:
                {
                this.state = 1098;
                this.match(AutoHotkeyParser.Assign);
                this.state = 1099;
                this.singleExpression(0);
                }
                break;
            case AutoHotkeyParser.QuestionMark:
                {
                this.state = 1100;
                this.match(AutoHotkeyParser.QuestionMark);
                }
                break;
            case AutoHotkeyParser.CloseBracket:
            case AutoHotkeyParser.CloseParen:
            case AutoHotkeyParser.Comma:
            case AutoHotkeyParser.EOL:
            case AutoHotkeyParser.WS:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lastFormalParameterArg(): LastFormalParameterArgContext {
        let localContext = new LastFormalParameterArgContext(this.context, this.state);
        this.enterRule(localContext, 112, AutoHotkeyParser.RULE_lastFormalParameterArg);
        let _la: number;
        try {
            this.state = 1108;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 154, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1103;
                this.formalParameterArg();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1105;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0)) {
                    {
                    this.state = 1104;
                    this.identifier();
                    }
                }

                this.state = 1107;
                this.match(AutoHotkeyParser.Multiply);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayLiteral(): ArrayLiteralContext {
        let localContext = new ArrayLiteralContext(this.context, this.state);
        this.enterRule(localContext, 114, AutoHotkeyParser.RULE_arrayLiteral);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1110;
            this.match(AutoHotkeyParser.OpenBracket);
            this.state = 1114;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 155, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1111;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 131 || _la === 132)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                }
                this.state = 1116;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 155, this.context);
            }
            this.state = 1124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532687490) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 3145727) !== 0)) {
                {
                this.state = 1117;
                this.arguments();
                this.state = 1121;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 1118;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 131 || _la === 132)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1123;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1126;
            this.match(AutoHotkeyParser.CloseBracket);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mapElementList(): MapElementListContext {
        let localContext = new MapElementListContext(this.context, this.state);
        this.enterRule(localContext, 116, AutoHotkeyParser.RULE_mapElementList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1137;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13 || _la === 132) {
                {
                {
                this.state = 1131;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 1128;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 1133;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1134;
                this.match(AutoHotkeyParser.Comma);
                }
                }
                this.state = 1139;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1140;
            this.mapElement();
            this.state = 1153;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13 || _la === 132) {
                {
                {
                this.state = 1144;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 1141;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 1146;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1147;
                this.match(AutoHotkeyParser.Comma);
                this.state = 1149;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532679298) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1048575) !== 0)) {
                    {
                    this.state = 1148;
                    this.mapElement();
                    }
                }

                }
                }
                this.state = 1155;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mapElement(): MapElementContext {
        let localContext = new MapElementContext(this.context, this.state);
        this.enterRule(localContext, 118, AutoHotkeyParser.RULE_mapElement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1156;
            localContext._key = this.singleExpression(0);
            this.state = 1157;
            this.match(AutoHotkeyParser.Colon);
            this.state = 1158;
            localContext._value = this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propertyAssignment(): PropertyAssignmentContext {
        let localContext = new PropertyAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 120, AutoHotkeyParser.RULE_propertyAssignment);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1160;
            this.memberIdentifier();
            this.state = 1164;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 131 || _la === 132) {
                {
                {
                this.state = 1161;
                _la = this.tokenStream.LA(1);
                if(!(_la === 131 || _la === 132)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 1166;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1167;
            this.match(AutoHotkeyParser.Colon);
            this.state = 1171;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 131 || _la === 132) {
                {
                {
                this.state = 1168;
                _la = this.tokenStream.LA(1);
                if(!(_la === 131 || _la === 132)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 1173;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1174;
            this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public propertyName(): PropertyNameContext {
        let localContext = new PropertyNameContext(this.context, this.state);
        this.enterRule(localContext, 122, AutoHotkeyParser.RULE_propertyName);
        try {
            this.state = 1180;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 165, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1176;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1177;
                this.reservedWord();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1178;
                this.match(AutoHotkeyParser.StringLiteral);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1179;
                this.numericLiteral();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dereference(): DereferenceContext {
        let localContext = new DereferenceContext(this.context, this.state);
        this.enterRule(localContext, 124, AutoHotkeyParser.RULE_dereference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1182;
            this.match(AutoHotkeyParser.DerefStart);
            this.state = 1183;
            this.singleExpression(0);
            this.state = 1184;
            this.match(AutoHotkeyParser.DerefEnd);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arguments(): ArgumentsContext {
        let localContext = new ArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 126, AutoHotkeyParser.RULE_arguments);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1216;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.DerefStart:
            case AutoHotkeyParser.OpenBracket:
            case AutoHotkeyParser.OpenParen:
            case AutoHotkeyParser.OpenBrace:
            case AutoHotkeyParser.PlusPlus:
            case AutoHotkeyParser.MinusMinus:
            case AutoHotkeyParser.Plus:
            case AutoHotkeyParser.Minus:
            case AutoHotkeyParser.BitNot:
            case AutoHotkeyParser.Not:
            case AutoHotkeyParser.Multiply:
            case AutoHotkeyParser.BitAnd:
            case AutoHotkeyParser.NullLiteral:
            case AutoHotkeyParser.Unset:
            case AutoHotkeyParser.True:
            case AutoHotkeyParser.False:
            case AutoHotkeyParser.DecimalLiteral:
            case AutoHotkeyParser.HexIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral2:
            case AutoHotkeyParser.BinaryIntegerLiteral:
            case AutoHotkeyParser.BigHexIntegerLiteral:
            case AutoHotkeyParser.BigOctalIntegerLiteral:
            case AutoHotkeyParser.BigBinaryIntegerLiteral:
            case AutoHotkeyParser.BigDecimalIntegerLiteral:
            case AutoHotkeyParser.Break:
            case AutoHotkeyParser.Do:
            case AutoHotkeyParser.Instanceof:
            case AutoHotkeyParser.Switch:
            case AutoHotkeyParser.Case:
            case AutoHotkeyParser.Default:
            case AutoHotkeyParser.Else:
            case AutoHotkeyParser.Catch:
            case AutoHotkeyParser.Finally:
            case AutoHotkeyParser.Return:
            case AutoHotkeyParser.Continue:
            case AutoHotkeyParser.For:
            case AutoHotkeyParser.While:
            case AutoHotkeyParser.Parse:
            case AutoHotkeyParser.Reg:
            case AutoHotkeyParser.Read:
            case AutoHotkeyParser.Files:
            case AutoHotkeyParser.Loop:
            case AutoHotkeyParser.Until:
            case AutoHotkeyParser.This:
            case AutoHotkeyParser.If:
            case AutoHotkeyParser.Throw:
            case AutoHotkeyParser.Delete:
            case AutoHotkeyParser.In:
            case AutoHotkeyParser.Try:
            case AutoHotkeyParser.Yield:
            case AutoHotkeyParser.Is:
            case AutoHotkeyParser.Contains:
            case AutoHotkeyParser.VerbalAnd:
            case AutoHotkeyParser.VerbalNot:
            case AutoHotkeyParser.VerbalOr:
            case AutoHotkeyParser.Goto:
            case AutoHotkeyParser.Get:
            case AutoHotkeyParser.Set:
            case AutoHotkeyParser.Class:
            case AutoHotkeyParser.Enum:
            case AutoHotkeyParser.Extends:
            case AutoHotkeyParser.Super:
            case AutoHotkeyParser.Base:
            case AutoHotkeyParser.Export:
            case AutoHotkeyParser.Import:
            case AutoHotkeyParser.From:
            case AutoHotkeyParser.As:
            case AutoHotkeyParser.Async:
            case AutoHotkeyParser.Await:
            case AutoHotkeyParser.Static:
            case AutoHotkeyParser.Global:
            case AutoHotkeyParser.Local:
            case AutoHotkeyParser.Identifier:
            case AutoHotkeyParser.StringLiteral:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1186;
                this.argument();
                this.state = 1199;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 168, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1190;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 132) {
                            {
                            {
                            this.state = 1187;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 1192;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1193;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 1195;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532679298) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1048575) !== 0)) {
                            {
                            this.state = 1194;
                            this.argument();
                            }
                        }

                        }
                        }
                    }
                    this.state = 1201;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 168, this.context);
                }
                }
                break;
            case AutoHotkeyParser.Comma:
            case AutoHotkeyParser.WS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1212;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1205;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 132) {
                            {
                            {
                            this.state = 1202;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 1207;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1208;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 1210;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532679298) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 1048575) !== 0)) {
                            {
                            this.state = 1209;
                            this.argument();
                            }
                        }

                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1214;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 171, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public argument(): ArgumentContext {
        let localContext = new ArgumentContext(this.context, this.state);
        this.enterRule(localContext, 128, AutoHotkeyParser.RULE_argument);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1218;
            this.singleExpression(0);
            this.state = 1220;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 15 || _la === 28) {
                {
                this.state = 1219;
                _la = this.tokenStream.LA(1);
                if(!(_la === 15 || _la === 28)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionSequence(): ExpressionSequenceContext {
        let localContext = new ExpressionSequenceContext(this.context, this.state);
        this.enterRule(localContext, 130, AutoHotkeyParser.RULE_expressionSequence);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1222;
            this.singleExpression(0);
            this.state = 1233;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 175, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1226;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 132) {
                        {
                        {
                        this.state = 1223;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 1228;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1229;
                    this.match(AutoHotkeyParser.Comma);
                    this.state = 1230;
                    this.singleExpression(0);
                    }
                    }
                }
                this.state = 1235;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 175, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public memberIndexArguments(): MemberIndexArgumentsContext {
        let localContext = new MemberIndexArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 132, AutoHotkeyParser.RULE_memberIndexArguments);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1236;
            this.match(AutoHotkeyParser.OpenBracket);
            this.state = 1240;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 176, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1237;
                    this.s();
                    }
                    }
                }
                this.state = 1242;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 176, this.context);
            }
            this.state = 1250;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532687490) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 3145727) !== 0)) {
                {
                this.state = 1243;
                this.arguments();
                this.state = 1247;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 1244;
                    this.s();
                    }
                    }
                    this.state = 1249;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1252;
            this.match(AutoHotkeyParser.CloseBracket);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public singleExpression(): SingleExpressionContext;
    public singleExpression(_p: number): SingleExpressionContext;
    public singleExpression(_p?: number): SingleExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new SingleExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 134;
        this.enterRecursionRule(localContext, 134, AutoHotkeyParser.RULE_singleExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1290;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 181, this.context) ) {
            case 1:
                {
                localContext = new PreIncrementExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1255;
                this.match(AutoHotkeyParser.PlusPlus);
                this.state = 1256;
                (localContext as PreIncrementExpressionContext)._right = this.singleExpression(26);
                }
                break;
            case 2:
                {
                localContext = new PreDecreaseExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1257;
                this.match(AutoHotkeyParser.MinusMinus);
                this.state = 1258;
                (localContext as PreDecreaseExpressionContext)._right = this.singleExpression(25);
                }
                break;
            case 3:
                {
                localContext = new UnaryMinusExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1259;
                this.match(AutoHotkeyParser.Minus);
                this.state = 1260;
                (localContext as UnaryMinusExpressionContext)._right = this.singleExpression(23);
                }
                break;
            case 4:
                {
                localContext = new NotExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1261;
                this.match(AutoHotkeyParser.Not);
                this.state = 1265;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 1262;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 1267;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1268;
                (localContext as NotExpressionContext)._right = this.singleExpression(22);
                }
                break;
            case 5:
                {
                localContext = new UnaryPlusExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1269;
                this.match(AutoHotkeyParser.Plus);
                this.state = 1270;
                (localContext as UnaryPlusExpressionContext)._right = this.singleExpression(21);
                }
                break;
            case 6:
                {
                localContext = new BitNotExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1271;
                this.match(AutoHotkeyParser.BitNot);
                this.state = 1272;
                (localContext as BitNotExpressionContext)._right = this.singleExpression(20);
                }
                break;
            case 7:
                {
                localContext = new VerbalNotExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1273;
                this.match(AutoHotkeyParser.VerbalNot);
                this.state = 1277;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 132) {
                    {
                    {
                    this.state = 1274;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 1279;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1280;
                (localContext as VerbalNotExpressionContext)._right = this.singleExpression(8);
                }
                break;
            case 8:
                {
                localContext = new AssignmentExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1281;
                (localContext as AssignmentExpressionContext)._left = this.primaryExpression(0);
                this.state = 1282;
                (localContext as AssignmentExpressionContext)._op = this.assignmentOperator();
                this.state = 1283;
                (localContext as AssignmentExpressionContext)._right = this.singleExpression(3);
                }
                break;
            case 9:
                {
                localContext = new FatArrowExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1285;
                this.fatArrowExpressionHead();
                this.state = 1286;
                this.match(AutoHotkeyParser.Arrow);
                this.state = 1287;
                this.singleExpression(2);
                }
                break;
            case 10:
                {
                localContext = new AtomExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1289;
                this.primaryExpression(0);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1422;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 197, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1420;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 196, this.context) ) {
                    case 1:
                        {
                        localContext = new PowerExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as PowerExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1292;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 1293;
                        (localContext as PowerExpressionContext)._op = this.match(AutoHotkeyParser.Power);
                        this.state = 1294;
                        (localContext as PowerExpressionContext)._right = this.singleExpression(24);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MultiplicativeExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as MultiplicativeExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1295;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        {
                        this.state = 1296;
                        (localContext as MultiplicativeExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1879048192) !== 0))) {
                            (localContext as MultiplicativeExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1300;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1297;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1302;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                        this.state = 1303;
                        (localContext as MultiplicativeExpressionContext)._right = this.singleExpression(20);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AdditiveExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as AdditiveExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1304;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        {
                        this.state = 1305;
                        (localContext as AdditiveExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 24 || _la === 25)) {
                            (localContext as AdditiveExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1309;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1306;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1311;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                        this.state = 1312;
                        (localContext as AdditiveExpressionContext)._right = this.singleExpression(19);
                        }
                        break;
                    case 4:
                        {
                        localContext = new BitShiftExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as BitShiftExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1313;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 1314;
                        (localContext as BitShiftExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 7) !== 0))) {
                            (localContext as BitShiftExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1315;
                        (localContext as BitShiftExpressionContext)._right = this.singleExpression(18);
                        }
                        break;
                    case 5:
                        {
                        localContext = new BitAndExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as BitAndExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1316;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        {
                        this.state = 1320;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1317;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1322;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1323;
                        (localContext as BitAndExpressionContext)._op = this.match(AutoHotkeyParser.BitAnd);
                        this.state = 1327;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1324;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1329;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                        this.state = 1330;
                        (localContext as BitAndExpressionContext)._right = this.singleExpression(17);
                        }
                        break;
                    case 6:
                        {
                        localContext = new BitXOrExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as BitXOrExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1331;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 1332;
                        (localContext as BitXOrExpressionContext)._op = this.match(AutoHotkeyParser.BitXOr);
                        this.state = 1333;
                        (localContext as BitXOrExpressionContext)._right = this.singleExpression(16);
                        }
                        break;
                    case 7:
                        {
                        localContext = new BitOrExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as BitOrExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1334;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 1335;
                        (localContext as BitOrExpressionContext)._op = this.match(AutoHotkeyParser.BitOr);
                        this.state = 1336;
                        (localContext as BitOrExpressionContext)._right = this.singleExpression(15);
                        }
                        break;
                    case 8:
                        {
                        localContext = new ConcatenateExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as ConcatenateExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1337;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1344;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.ConcatDot:
                            {
                            this.state = 1338;
                            this.match(AutoHotkeyParser.ConcatDot);
                            }
                            break;
                        case AutoHotkeyParser.WS:
                            {
                            this.state = 1340;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                {
                                this.state = 1339;
                                this.match(AutoHotkeyParser.WS);
                                }
                                }
                                this.state = 1342;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 132);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1346;
                        (localContext as ConcatenateExpressionContext)._right = this.singleExpression(14);
                        }
                        break;
                    case 9:
                        {
                        localContext = new RegExMatchExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as RegExMatchExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1347;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 1348;
                        (localContext as RegExMatchExpressionContext)._op = this.match(AutoHotkeyParser.RegExMatch);
                        this.state = 1349;
                        (localContext as RegExMatchExpressionContext)._right = this.singleExpression(13);
                        }
                        break;
                    case 10:
                        {
                        localContext = new RelationalExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as RelationalExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1350;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1351;
                        (localContext as RelationalExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 15) !== 0))) {
                            (localContext as RelationalExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1352;
                        (localContext as RelationalExpressionContext)._right = this.singleExpression(12);
                        }
                        break;
                    case 11:
                        {
                        localContext = new EqualityExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as EqualityExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1353;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1354;
                        (localContext as EqualityExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 15) !== 0))) {
                            (localContext as EqualityExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1355;
                        (localContext as EqualityExpressionContext)._right = this.singleExpression(11);
                        }
                        break;
                    case 12:
                        {
                        localContext = new LogicalAndExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as LogicalAndExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1356;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 1359;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.And:
                            {
                            this.state = 1357;
                            (localContext as LogicalAndExpressionContext)._op = this.match(AutoHotkeyParser.And);
                            }
                            break;
                        case AutoHotkeyParser.VerbalAnd:
                            {
                            this.state = 1358;
                            (localContext as LogicalAndExpressionContext)._op = this.match(AutoHotkeyParser.VerbalAnd);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1361;
                        (localContext as LogicalAndExpressionContext)._right = this.singleExpression(8);
                        }
                        break;
                    case 13:
                        {
                        localContext = new LogicalOrExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as LogicalOrExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1362;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1365;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.Or:
                            {
                            this.state = 1363;
                            (localContext as LogicalOrExpressionContext)._op = this.match(AutoHotkeyParser.Or);
                            }
                            break;
                        case AutoHotkeyParser.VerbalOr:
                            {
                            this.state = 1364;
                            (localContext as LogicalOrExpressionContext)._op = this.match(AutoHotkeyParser.VerbalOr);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1367;
                        (localContext as LogicalOrExpressionContext)._right = this.singleExpression(7);
                        }
                        break;
                    case 14:
                        {
                        localContext = new CoalesceExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as CoalesceExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1368;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1369;
                        (localContext as CoalesceExpressionContext)._op = this.match(AutoHotkeyParser.NullCoalesce);
                        this.state = 1370;
                        (localContext as CoalesceExpressionContext)._right = this.singleExpression(5);
                        }
                        break;
                    case 15:
                        {
                        localContext = new TernaryExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as TernaryExpressionContext)._ternCond = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1371;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1375;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1372;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1377;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1378;
                        this.match(AutoHotkeyParser.QuestionMark);
                        this.state = 1382;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1379;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1384;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1385;
                        (localContext as TernaryExpressionContext)._ternTrue = this.singleExpression(0);
                        this.state = 1389;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1386;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1391;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1392;
                        this.match(AutoHotkeyParser.Colon);
                        this.state = 1396;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1393;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1398;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1399;
                        (localContext as TernaryExpressionContext)._ternFalse = this.singleExpression(4);
                        }
                        break;
                    case 16:
                        {
                        localContext = new PostIncrementExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as PostIncrementExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1401;
                        if (!(this.precpred(this.context, 28))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 28)");
                        }
                        this.state = 1402;
                        this.match(AutoHotkeyParser.PlusPlus);
                        }
                        break;
                    case 17:
                        {
                        localContext = new PostDecreaseExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as PostDecreaseExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1403;
                        if (!(this.precpred(this.context, 27))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 27)");
                        }
                        this.state = 1404;
                        this.match(AutoHotkeyParser.MinusMinus);
                        }
                        break;
                    case 18:
                        {
                        localContext = new ContainExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as ContainExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1405;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        {
                        this.state = 1409;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1406;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1411;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1412;
                        (localContext as ContainExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 52428801) !== 0))) {
                            (localContext as ContainExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1416;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 131 || _la === 132) {
                            {
                            {
                            this.state = 1413;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 131 || _la === 132)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1418;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                        this.state = 1419;
                        (localContext as ContainExpressionContext)._right = this.primaryExpression(0);
                        }
                        break;
                    }
                    }
                }
                this.state = 1424;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 197, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public primaryExpression(): PrimaryExpressionContext;
    public primaryExpression(_p: number): PrimaryExpressionContext;
    public primaryExpression(_p?: number): PrimaryExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PrimaryExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 136;
        this.enterRecursionRule(localContext, 136, AutoHotkeyParser.RULE_primaryExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1437;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context) ) {
            case 1:
                {
                localContext = new VarRefExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1426;
                this.match(AutoHotkeyParser.BitAnd);
                this.state = 1427;
                this.primaryExpression(7);
                }
                break;
            case 2:
                {
                localContext = new IdentifierExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1428;
                this.identifier();
                }
                break;
            case 3:
                {
                localContext = new DynamicIdentifierExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1429;
                this.dynamicIdentifier();
                }
                break;
            case 4:
                {
                localContext = new LiteralExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1430;
                this.literal();
                }
                break;
            case 5:
                {
                localContext = new ArrayLiteralExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1431;
                this.arrayLiteral();
                }
                break;
            case 6:
                {
                localContext = new ObjectLiteralExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1432;
                this.objectLiteral();
                }
                break;
            case 7:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1433;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 1434;
                this.expressionSequence();
                this.state = 1435;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1443;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 199, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new AccessExpressionContext(new PrimaryExpressionContext(parentContext, parentState));
                    this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_primaryExpression);
                    this.state = 1439;
                    if (!(this.precpred(this.context, 8))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                    }
                    this.state = 1440;
                    this.accessSuffix();
                    }
                    }
                }
                this.state = 1445;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 199, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public accessSuffix(): AccessSuffixContext {
        let localContext = new AccessSuffixContext(this.context, this.state);
        this.enterRule(localContext, 138, AutoHotkeyParser.RULE_accessSuffix);
        let _la: number;
        try {
            this.state = 1457;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 202, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1446;
                localContext._modifier = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 16 || _la === 20)) {
                    localContext._modifier = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1447;
                this.memberIdentifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1449;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 16) {
                    {
                    this.state = 1448;
                    localContext._modifier = this.match(AutoHotkeyParser.QuestionMarkDot);
                    }
                }

                this.state = 1451;
                this.memberIndexArguments();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1452;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 1454;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532687490) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 3145727) !== 0)) {
                    {
                    this.state = 1453;
                    this.arguments();
                    }
                }

                this.state = 1456;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public memberDot(): MemberDotContext {
        let localContext = new MemberDotContext(this.context, this.state);
        this.enterRule(localContext, 140, AutoHotkeyParser.RULE_memberDot);
        let _la: number;
        try {
            this.state = 1485;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 207, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1460;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1459;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 131 || _la === 132)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1462;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 131 || _la === 132);
                this.state = 1464;
                this.match(AutoHotkeyParser.Dot);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1465;
                this.match(AutoHotkeyParser.Dot);
                this.state = 1469;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 1466;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 131 || _la === 132)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1471;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1475;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 1472;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 131 || _la === 132)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1477;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1478;
                this.match(AutoHotkeyParser.QuestionMarkDot);
                this.state = 1482;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 1479;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 131 || _la === 132)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1484;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public memberIdentifier(): MemberIdentifierContext {
        let localContext = new MemberIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 142, AutoHotkeyParser.RULE_memberIdentifier);
        try {
            this.state = 1491;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 208, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1487;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1488;
                this.dynamicIdentifier();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1489;
                this.keyword();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1490;
                this.literal();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dynamicIdentifier(): DynamicIdentifierContext {
        let localContext = new DynamicIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 144, AutoHotkeyParser.RULE_dynamicIdentifier);
        try {
            let alternative: number;
            this.state = 1510;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.NullLiteral:
            case AutoHotkeyParser.Unset:
            case AutoHotkeyParser.True:
            case AutoHotkeyParser.False:
            case AutoHotkeyParser.DecimalLiteral:
            case AutoHotkeyParser.HexIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral2:
            case AutoHotkeyParser.BinaryIntegerLiteral:
            case AutoHotkeyParser.Break:
            case AutoHotkeyParser.Do:
            case AutoHotkeyParser.Instanceof:
            case AutoHotkeyParser.Switch:
            case AutoHotkeyParser.Case:
            case AutoHotkeyParser.Default:
            case AutoHotkeyParser.Else:
            case AutoHotkeyParser.Catch:
            case AutoHotkeyParser.Finally:
            case AutoHotkeyParser.Return:
            case AutoHotkeyParser.Continue:
            case AutoHotkeyParser.For:
            case AutoHotkeyParser.While:
            case AutoHotkeyParser.Parse:
            case AutoHotkeyParser.Reg:
            case AutoHotkeyParser.Read:
            case AutoHotkeyParser.Files:
            case AutoHotkeyParser.Loop:
            case AutoHotkeyParser.Until:
            case AutoHotkeyParser.This:
            case AutoHotkeyParser.If:
            case AutoHotkeyParser.Throw:
            case AutoHotkeyParser.Delete:
            case AutoHotkeyParser.In:
            case AutoHotkeyParser.Try:
            case AutoHotkeyParser.Yield:
            case AutoHotkeyParser.Is:
            case AutoHotkeyParser.Contains:
            case AutoHotkeyParser.VerbalAnd:
            case AutoHotkeyParser.VerbalNot:
            case AutoHotkeyParser.VerbalOr:
            case AutoHotkeyParser.Goto:
            case AutoHotkeyParser.Get:
            case AutoHotkeyParser.Set:
            case AutoHotkeyParser.Class:
            case AutoHotkeyParser.Enum:
            case AutoHotkeyParser.Extends:
            case AutoHotkeyParser.Super:
            case AutoHotkeyParser.Base:
            case AutoHotkeyParser.Export:
            case AutoHotkeyParser.Import:
            case AutoHotkeyParser.From:
            case AutoHotkeyParser.As:
            case AutoHotkeyParser.Async:
            case AutoHotkeyParser.Await:
            case AutoHotkeyParser.Static:
            case AutoHotkeyParser.Global:
            case AutoHotkeyParser.Local:
            case AutoHotkeyParser.Identifier:
            case AutoHotkeyParser.StringLiteral:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1493;
                this.propertyName();
                this.state = 1494;
                this.dereference();
                this.state = 1499;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 210, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        this.state = 1497;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.NullLiteral:
                        case AutoHotkeyParser.Unset:
                        case AutoHotkeyParser.True:
                        case AutoHotkeyParser.False:
                        case AutoHotkeyParser.DecimalLiteral:
                        case AutoHotkeyParser.HexIntegerLiteral:
                        case AutoHotkeyParser.OctalIntegerLiteral:
                        case AutoHotkeyParser.OctalIntegerLiteral2:
                        case AutoHotkeyParser.BinaryIntegerLiteral:
                        case AutoHotkeyParser.Break:
                        case AutoHotkeyParser.Do:
                        case AutoHotkeyParser.Instanceof:
                        case AutoHotkeyParser.Switch:
                        case AutoHotkeyParser.Case:
                        case AutoHotkeyParser.Default:
                        case AutoHotkeyParser.Else:
                        case AutoHotkeyParser.Catch:
                        case AutoHotkeyParser.Finally:
                        case AutoHotkeyParser.Return:
                        case AutoHotkeyParser.Continue:
                        case AutoHotkeyParser.For:
                        case AutoHotkeyParser.While:
                        case AutoHotkeyParser.Parse:
                        case AutoHotkeyParser.Reg:
                        case AutoHotkeyParser.Read:
                        case AutoHotkeyParser.Files:
                        case AutoHotkeyParser.Loop:
                        case AutoHotkeyParser.Until:
                        case AutoHotkeyParser.This:
                        case AutoHotkeyParser.If:
                        case AutoHotkeyParser.Throw:
                        case AutoHotkeyParser.Delete:
                        case AutoHotkeyParser.In:
                        case AutoHotkeyParser.Try:
                        case AutoHotkeyParser.Yield:
                        case AutoHotkeyParser.Is:
                        case AutoHotkeyParser.Contains:
                        case AutoHotkeyParser.VerbalAnd:
                        case AutoHotkeyParser.VerbalNot:
                        case AutoHotkeyParser.VerbalOr:
                        case AutoHotkeyParser.Goto:
                        case AutoHotkeyParser.Get:
                        case AutoHotkeyParser.Set:
                        case AutoHotkeyParser.Class:
                        case AutoHotkeyParser.Enum:
                        case AutoHotkeyParser.Extends:
                        case AutoHotkeyParser.Super:
                        case AutoHotkeyParser.Base:
                        case AutoHotkeyParser.Export:
                        case AutoHotkeyParser.Import:
                        case AutoHotkeyParser.From:
                        case AutoHotkeyParser.As:
                        case AutoHotkeyParser.Async:
                        case AutoHotkeyParser.Await:
                        case AutoHotkeyParser.Static:
                        case AutoHotkeyParser.Global:
                        case AutoHotkeyParser.Local:
                        case AutoHotkeyParser.Identifier:
                        case AutoHotkeyParser.StringLiteral:
                            {
                            this.state = 1495;
                            this.propertyName();
                            }
                            break;
                        case AutoHotkeyParser.DerefStart:
                            {
                            this.state = 1496;
                            this.dereference();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                    }
                    this.state = 1501;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 210, this.context);
                }
                }
                break;
            case AutoHotkeyParser.DerefStart:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1502;
                this.dereference();
                this.state = 1507;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 212, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        this.state = 1505;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.NullLiteral:
                        case AutoHotkeyParser.Unset:
                        case AutoHotkeyParser.True:
                        case AutoHotkeyParser.False:
                        case AutoHotkeyParser.DecimalLiteral:
                        case AutoHotkeyParser.HexIntegerLiteral:
                        case AutoHotkeyParser.OctalIntegerLiteral:
                        case AutoHotkeyParser.OctalIntegerLiteral2:
                        case AutoHotkeyParser.BinaryIntegerLiteral:
                        case AutoHotkeyParser.Break:
                        case AutoHotkeyParser.Do:
                        case AutoHotkeyParser.Instanceof:
                        case AutoHotkeyParser.Switch:
                        case AutoHotkeyParser.Case:
                        case AutoHotkeyParser.Default:
                        case AutoHotkeyParser.Else:
                        case AutoHotkeyParser.Catch:
                        case AutoHotkeyParser.Finally:
                        case AutoHotkeyParser.Return:
                        case AutoHotkeyParser.Continue:
                        case AutoHotkeyParser.For:
                        case AutoHotkeyParser.While:
                        case AutoHotkeyParser.Parse:
                        case AutoHotkeyParser.Reg:
                        case AutoHotkeyParser.Read:
                        case AutoHotkeyParser.Files:
                        case AutoHotkeyParser.Loop:
                        case AutoHotkeyParser.Until:
                        case AutoHotkeyParser.This:
                        case AutoHotkeyParser.If:
                        case AutoHotkeyParser.Throw:
                        case AutoHotkeyParser.Delete:
                        case AutoHotkeyParser.In:
                        case AutoHotkeyParser.Try:
                        case AutoHotkeyParser.Yield:
                        case AutoHotkeyParser.Is:
                        case AutoHotkeyParser.Contains:
                        case AutoHotkeyParser.VerbalAnd:
                        case AutoHotkeyParser.VerbalNot:
                        case AutoHotkeyParser.VerbalOr:
                        case AutoHotkeyParser.Goto:
                        case AutoHotkeyParser.Get:
                        case AutoHotkeyParser.Set:
                        case AutoHotkeyParser.Class:
                        case AutoHotkeyParser.Enum:
                        case AutoHotkeyParser.Extends:
                        case AutoHotkeyParser.Super:
                        case AutoHotkeyParser.Base:
                        case AutoHotkeyParser.Export:
                        case AutoHotkeyParser.Import:
                        case AutoHotkeyParser.From:
                        case AutoHotkeyParser.As:
                        case AutoHotkeyParser.Async:
                        case AutoHotkeyParser.Await:
                        case AutoHotkeyParser.Static:
                        case AutoHotkeyParser.Global:
                        case AutoHotkeyParser.Local:
                        case AutoHotkeyParser.Identifier:
                        case AutoHotkeyParser.StringLiteral:
                            {
                            this.state = 1503;
                            this.propertyName();
                            }
                            break;
                        case AutoHotkeyParser.DerefStart:
                            {
                            this.state = 1504;
                            this.dereference();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                    }
                    this.state = 1509;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 212, this.context);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public initializer(): InitializerContext {
        let localContext = new InitializerContext(this.context, this.state);
        this.enterRule(localContext, 146, AutoHotkeyParser.RULE_initializer);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1512;
            this.match(AutoHotkeyParser.Assign);
            this.state = 1513;
            this.singleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignable(): AssignableContext {
        let localContext = new AssignableContext(this.context, this.state);
        this.enterRule(localContext, 148, AutoHotkeyParser.RULE_assignable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1515;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public objectLiteral(): ObjectLiteralContext {
        let localContext = new ObjectLiteralContext(this.context, this.state);
        this.enterRule(localContext, 150, AutoHotkeyParser.RULE_objectLiteral);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1517;
            this.match(AutoHotkeyParser.OpenBrace);
            this.state = 1521;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 131 || _la === 132) {
                {
                {
                this.state = 1518;
                this.s();
                }
                }
                this.state = 1523;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1544;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1 || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4294967295) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 2147483647) !== 0)) {
                {
                this.state = 1524;
                this.propertyAssignment();
                this.state = 1535;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 216, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1528;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 132) {
                            {
                            {
                            this.state = 1525;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 1530;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1531;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 1532;
                        this.propertyAssignment();
                        }
                        }
                    }
                    this.state = 1537;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 216, this.context);
                }
                this.state = 1541;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 1538;
                    this.s();
                    }
                    }
                    this.state = 1543;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1546;
            this.match(AutoHotkeyParser.CloseBrace);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionHead(): FunctionHeadContext {
        let localContext = new FunctionHeadContext(this.context, this.state);
        this.enterRule(localContext, 152, AutoHotkeyParser.RULE_functionHead);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1549;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 219, this.context) ) {
            case 1:
                {
                this.state = 1548;
                this.functionHeadPrefix();
                }
                break;
            }
            this.state = 1551;
            this.identifierName();
            this.state = 1552;
            this.match(AutoHotkeyParser.OpenParen);
            this.state = 1554;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28 || _la === 47 || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0)) {
                {
                this.state = 1553;
                this.formalParameterList();
                }
            }

            this.state = 1556;
            this.match(AutoHotkeyParser.CloseParen);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionHeadPrefix(): FunctionHeadPrefixContext {
        let localContext = new FunctionHeadPrefixContext(this.context, this.state);
        this.enterRule(localContext, 154, AutoHotkeyParser.RULE_functionHeadPrefix);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1558;
            this.match(AutoHotkeyParser.Static);
            this.state = 1562;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 132) {
                {
                {
                this.state = 1559;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 1564;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionExpressionHead(): FunctionExpressionHeadContext {
        let localContext = new FunctionExpressionHeadContext(this.context, this.state);
        this.enterRule(localContext, 156, AutoHotkeyParser.RULE_functionExpressionHead);
        let _la: number;
        try {
            this.state = 1574;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 224, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1565;
                this.functionHead();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1567;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 126) {
                    {
                    this.state = 1566;
                    this.functionHeadPrefix();
                    }
                }

                this.state = 1569;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 1571;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 28 || _la === 47 || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0)) {
                    {
                    this.state = 1570;
                    this.formalParameterList();
                    }
                }

                this.state = 1573;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fatArrowExpressionHead(): FatArrowExpressionHeadContext {
        let localContext = new FatArrowExpressionHeadContext(this.context, this.state);
        this.enterRule(localContext, 158, AutoHotkeyParser.RULE_fatArrowExpressionHead);
        let _la: number;
        try {
            this.state = 1594;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 230, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1580;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4294959119) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1073741823) !== 0)) {
                    {
                    this.state = 1577;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 225, this.context) ) {
                    case 1:
                        {
                        this.state = 1576;
                        this.functionHeadPrefix();
                        }
                        break;
                    }
                    this.state = 1579;
                    this.identifierName();
                    }
                }

                this.state = 1582;
                this.match(AutoHotkeyParser.Multiply);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1584;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 227, this.context) ) {
                case 1:
                    {
                    this.state = 1583;
                    this.functionHeadPrefix();
                    }
                    break;
                }
                this.state = 1587;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 47) {
                    {
                    this.state = 1586;
                    this.match(AutoHotkeyParser.BitAnd);
                    }
                }

                this.state = 1589;
                this.identifierName();
                this.state = 1591;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 15) {
                    {
                    this.state = 1590;
                    this.match(AutoHotkeyParser.QuestionMark);
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1593;
                this.functionExpressionHead();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionBody(): FunctionBodyContext {
        let localContext = new FunctionBodyContext(this.context, this.state);
        this.enterRule(localContext, 160, AutoHotkeyParser.RULE_functionBody);
        let _la: number;
        try {
            this.state = 1605;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Arrow:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1596;
                this.match(AutoHotkeyParser.Arrow);
                this.state = 1597;
                this.singleExpression(0);
                }
                break;
            case AutoHotkeyParser.OpenBrace:
            case AutoHotkeyParser.EOL:
            case AutoHotkeyParser.WS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1601;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 131 || _la === 132) {
                    {
                    {
                    this.state = 1598;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 131 || _la === 132)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1603;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1604;
                this.block();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignmentOperator(): AssignmentOperatorContext {
        let localContext = new AssignmentOperatorContext(this.context, this.state);
        this.enterRule(localContext, 162, AutoHotkeyParser.RULE_assignmentOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1607;
            _la = this.tokenStream.LA(1);
            if(!(_la === 14 || ((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & 32767) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 164, AutoHotkeyParser.RULE_literal);
        let _la: number;
        try {
            this.state = 1613;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.True:
            case AutoHotkeyParser.False:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1609;
                this.boolean_();
                }
                break;
            case AutoHotkeyParser.DecimalLiteral:
            case AutoHotkeyParser.HexIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral:
            case AutoHotkeyParser.OctalIntegerLiteral2:
            case AutoHotkeyParser.BinaryIntegerLiteral:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1610;
                this.numericLiteral();
                }
                break;
            case AutoHotkeyParser.BigHexIntegerLiteral:
            case AutoHotkeyParser.BigOctalIntegerLiteral:
            case AutoHotkeyParser.BigBinaryIntegerLiteral:
            case AutoHotkeyParser.BigDecimalIntegerLiteral:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1611;
                this.bigintLiteral();
                }
                break;
            case AutoHotkeyParser.NullLiteral:
            case AutoHotkeyParser.Unset:
            case AutoHotkeyParser.StringLiteral:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1612;
                _la = this.tokenStream.LA(1);
                if(!(_la === 68 || _la === 69 || _la === 130)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public boolean_(): BooleanContext {
        let localContext = new BooleanContext(this.context, this.state);
        this.enterRule(localContext, 166, AutoHotkeyParser.RULE_boolean);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1615;
            _la = this.tokenStream.LA(1);
            if(!(_la === 70 || _la === 71)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public numericLiteral(): NumericLiteralContext {
        let localContext = new NumericLiteralContext(this.context, this.state);
        this.enterRule(localContext, 168, AutoHotkeyParser.RULE_numericLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1617;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 31) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public bigintLiteral(): BigintLiteralContext {
        let localContext = new BigintLiteralContext(this.context, this.state);
        this.enterRule(localContext, 170, AutoHotkeyParser.RULE_bigintLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1619;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 15) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public getter(): GetterContext {
        let localContext = new GetterContext(this.context, this.state);
        this.enterRule(localContext, 172, AutoHotkeyParser.RULE_getter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1621;
            this.match(AutoHotkeyParser.Get);
            this.state = 1622;
            this.propertyName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public setter(): SetterContext {
        let localContext = new SetterContext(this.context, this.state);
        this.enterRule(localContext, 174, AutoHotkeyParser.RULE_setter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1624;
            this.match(AutoHotkeyParser.Set);
            this.state = 1625;
            this.propertyName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifierName(): IdentifierNameContext {
        let localContext = new IdentifierNameContext(this.context, this.state);
        this.enterRule(localContext, 176, AutoHotkeyParser.RULE_identifierName);
        try {
            this.state = 1629;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 234, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1627;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1628;
                this.reservedWord();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 178, AutoHotkeyParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1631;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 1006911489) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 550494209) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public reservedWord(): ReservedWordContext {
        let localContext = new ReservedWordContext(this.context, this.state);
        this.enterRule(localContext, 180, AutoHotkeyParser.RULE_reservedWord);
        try {
            this.state = 1636;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 235, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1633;
                this.keyword();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1634;
                this.match(AutoHotkeyParser.Unset);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1635;
                this.boolean_();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyword(): KeywordContext {
        let localContext = new KeywordContext(this.context, this.state);
        this.enterRule(localContext, 182, AutoHotkeyParser.RULE_keyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1638;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 1644023809) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 265949183) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public s(): SContext {
        let localContext = new SContext(this.context, this.state);
        this.enterRule(localContext, 184, AutoHotkeyParser.RULE_s);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1640;
            _la = this.tokenStream.LA(1);
            if(!(_la === 131 || _la === 132)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public eos(): EosContext {
        let localContext = new EosContext(this.context, this.state);
        this.enterRule(localContext, 186, AutoHotkeyParser.RULE_eos);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1642;
            _la = this.tokenStream.LA(1);
            if(!(_la === -1 || _la === 131)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 26:
            return this.iterationStatement_sempred(localContext as IterationStatementContext, predIndex);
        case 67:
            return this.singleExpression_sempred(localContext as SingleExpressionContext, predIndex);
        case 68:
            return this.primaryExpression_sempred(localContext as PrimaryExpressionContext, predIndex);
        }
        return true;
    }
    private iterationStatement_sempred(localContext: IterationStatementContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.isValidLoopExpression();
        }
        return true;
    }
    private singleExpression_sempred(localContext: SingleExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 24);
        case 2:
            return this.precpred(this.context, 19);
        case 3:
            return this.precpred(this.context, 18);
        case 4:
            return this.precpred(this.context, 17);
        case 5:
            return this.precpred(this.context, 16);
        case 6:
            return this.precpred(this.context, 15);
        case 7:
            return this.precpred(this.context, 14);
        case 8:
            return this.precpred(this.context, 13);
        case 9:
            return this.precpred(this.context, 12);
        case 10:
            return this.precpred(this.context, 11);
        case 11:
            return this.precpred(this.context, 10);
        case 12:
            return this.precpred(this.context, 7);
        case 13:
            return this.precpred(this.context, 6);
        case 14:
            return this.precpred(this.context, 5);
        case 15:
            return this.precpred(this.context, 4);
        case 16:
            return this.precpred(this.context, 28);
        case 17:
            return this.precpred(this.context, 27);
        case 18:
            return this.precpred(this.context, 9);
        }
        return true;
    }
    private primaryExpression_sempred(localContext: PrimaryExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 19:
            return this.precpred(this.context, 8);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,164,1645,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,1,0,1,0,1,0,1,0,3,0,193,8,0,1,1,1,1,1,1,1,
        1,1,1,4,1,200,8,1,11,1,12,1,201,1,2,1,2,1,2,1,2,1,2,1,2,3,2,210,
        8,2,1,3,1,3,1,3,3,3,215,8,3,1,4,1,4,3,4,219,8,4,1,4,1,4,3,4,223,
        8,4,1,4,1,4,3,4,227,8,4,1,4,1,4,3,4,231,8,4,1,4,1,4,1,4,3,4,236,
        8,4,1,4,1,4,1,4,3,4,241,8,4,3,4,243,8,4,1,5,1,5,1,5,1,5,3,5,249,
        8,5,1,5,1,5,3,5,253,8,5,1,5,1,5,1,5,3,5,258,8,5,1,6,1,6,1,7,1,7,
        1,7,5,7,265,8,7,10,7,12,7,268,9,7,1,7,5,7,271,8,7,10,7,12,7,274,
        9,7,1,7,1,7,3,7,278,8,7,1,7,1,7,3,7,282,8,7,1,7,3,7,285,8,7,1,8,
        1,8,1,9,1,9,1,9,5,9,292,8,9,10,9,12,9,295,9,9,1,9,5,9,298,8,9,10,
        9,12,9,301,9,9,1,9,1,9,3,9,305,8,9,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,
        325,8,10,1,11,1,11,1,12,1,12,5,12,331,8,12,10,12,12,12,334,9,12,
        1,12,3,12,337,8,12,1,12,1,12,1,13,1,13,1,13,4,13,344,8,13,11,13,
        12,13,345,1,14,1,14,5,14,350,8,14,10,14,12,14,353,9,14,1,14,3,14,
        356,8,14,1,15,1,15,5,15,360,8,15,10,15,12,15,363,9,15,1,15,1,15,
        1,16,1,16,5,16,369,8,16,10,16,12,16,372,9,16,1,16,1,16,1,17,1,17,
        3,17,378,8,17,1,18,1,18,5,18,382,8,18,10,18,12,18,385,9,18,1,18,
        1,18,5,18,389,8,18,10,18,12,18,392,9,18,1,19,1,19,1,19,1,19,1,19,
        3,19,399,8,19,1,20,1,20,4,20,403,8,20,11,20,12,20,404,1,20,3,20,
        408,8,20,1,21,1,21,1,22,1,22,5,22,414,8,22,10,22,12,22,417,9,22,
        1,22,1,22,5,22,421,8,22,10,22,12,22,424,9,22,1,22,1,22,3,22,428,
        8,22,1,23,4,23,431,8,23,11,23,12,23,432,1,23,1,23,3,23,437,8,23,
        1,24,1,24,1,24,5,24,442,8,24,10,24,12,24,445,9,24,1,24,1,24,1,25,
        1,25,1,25,5,25,452,8,25,10,25,12,25,455,9,25,1,25,1,25,1,26,1,26,
        1,26,5,26,462,8,26,10,26,12,26,465,9,26,1,26,1,26,5,26,469,8,26,
        10,26,12,26,472,9,26,1,26,1,26,3,26,476,8,26,5,26,478,8,26,10,26,
        12,26,481,9,26,1,26,5,26,484,8,26,10,26,12,26,487,9,26,1,26,1,26,
        3,26,491,8,26,1,26,3,26,494,8,26,1,26,1,26,1,26,5,26,499,8,26,10,
        26,12,26,502,9,26,1,26,1,26,5,26,506,8,26,10,26,12,26,509,9,26,3,
        26,511,8,26,1,26,1,26,3,26,515,8,26,1,26,3,26,518,8,26,1,26,1,26,
        5,26,522,8,26,10,26,12,26,525,9,26,1,26,1,26,5,26,529,8,26,10,26,
        12,26,532,9,26,1,26,1,26,3,26,536,8,26,1,26,3,26,539,8,26,1,26,1,
        26,5,26,543,8,26,10,26,12,26,546,9,26,1,26,1,26,5,26,550,8,26,10,
        26,12,26,553,9,26,1,26,1,26,3,26,557,8,26,1,26,3,26,560,8,26,3,26,
        562,8,26,1,27,3,27,565,8,27,1,27,5,27,568,8,27,10,27,12,27,571,9,
        27,1,27,1,27,3,27,575,8,27,5,27,577,8,27,10,27,12,27,580,9,27,1,
        27,5,27,583,8,27,10,27,12,27,586,9,27,1,27,1,27,5,27,590,8,27,10,
        27,12,27,593,9,27,1,27,1,27,1,27,3,27,598,8,27,1,27,5,27,601,8,27,
        10,27,12,27,604,9,27,1,27,1,27,3,27,608,8,27,5,27,610,8,27,10,27,
        12,27,613,9,27,1,27,5,27,616,8,27,10,27,12,27,619,9,27,1,27,1,27,
        5,27,623,8,27,10,27,12,27,626,9,27,1,27,1,27,1,27,3,27,631,8,27,
        1,28,1,28,5,28,635,8,28,10,28,12,28,638,9,28,1,28,1,28,1,28,1,28,
        1,28,3,28,645,8,28,1,29,1,29,5,29,649,8,29,10,29,12,29,652,9,29,
        1,29,1,29,1,29,1,29,1,29,3,29,659,8,29,1,30,1,30,5,30,663,8,30,10,
        30,12,30,666,9,30,1,30,3,30,669,8,30,1,31,1,31,5,31,673,8,31,10,
        31,12,31,676,9,31,1,31,3,31,679,8,31,1,32,1,32,5,32,683,8,32,10,
        32,12,32,686,9,32,1,32,3,32,689,8,32,1,32,5,32,692,8,32,10,32,12,
        32,695,9,32,1,32,1,32,3,32,699,8,32,1,32,5,32,702,8,32,10,32,12,
        32,705,9,32,1,32,1,32,1,33,1,33,5,33,711,8,33,10,33,12,33,714,9,
        33,1,33,5,33,717,8,33,10,33,12,33,720,9,33,1,33,1,33,1,34,1,34,5,
        34,726,8,34,10,34,12,34,729,9,34,1,34,1,34,3,34,733,8,34,1,34,5,
        34,736,8,34,10,34,12,34,739,9,34,1,34,1,34,5,34,743,8,34,10,34,12,
        34,746,9,34,1,34,1,34,3,34,750,8,34,1,35,1,35,1,35,1,36,1,36,5,36,
        757,8,36,10,36,12,36,760,9,36,1,36,1,36,1,36,5,36,765,8,36,10,36,
        12,36,768,9,36,1,36,1,36,1,36,1,36,3,36,774,8,36,1,37,1,37,5,37,
        778,8,37,10,37,12,37,781,9,37,1,37,3,37,784,8,37,1,38,1,38,5,38,
        788,8,38,10,38,12,38,791,9,38,1,38,1,38,5,38,795,8,38,10,38,12,38,
        798,9,38,1,38,3,38,801,8,38,1,38,3,38,804,8,38,1,39,1,39,1,39,5,
        39,809,8,39,10,39,12,39,812,9,39,1,39,1,39,5,39,816,8,39,10,39,12,
        39,819,9,39,3,39,821,8,39,1,39,1,39,1,40,1,40,5,40,827,8,40,10,40,
        12,40,830,9,40,1,40,3,40,833,8,40,1,40,5,40,836,8,40,10,40,12,40,
        839,9,40,1,40,3,40,842,8,40,1,40,1,40,1,40,5,40,847,8,40,10,40,12,
        40,850,9,40,1,40,3,40,853,8,40,1,40,5,40,856,8,40,10,40,12,40,859,
        9,40,1,40,3,40,862,8,40,1,40,1,40,1,40,5,40,867,8,40,10,40,12,40,
        870,9,40,1,40,1,40,1,40,5,40,875,8,40,10,40,12,40,878,9,40,1,40,
        1,40,1,40,5,40,883,8,40,10,40,12,40,886,9,40,1,40,1,40,1,40,5,40,
        891,8,40,10,40,12,40,894,9,40,1,40,1,40,1,40,1,40,3,40,900,8,40,
        1,41,1,41,5,41,904,8,41,10,41,12,41,907,9,41,1,41,1,41,5,41,911,
        8,41,10,41,12,41,914,9,41,1,42,1,42,1,42,5,42,919,8,42,10,42,12,
        42,922,9,42,1,42,1,42,1,43,1,43,1,43,1,44,1,44,5,44,931,8,44,10,
        44,12,44,934,9,44,1,44,1,44,4,44,938,8,44,11,44,12,44,939,1,44,1,
        44,4,44,944,8,44,11,44,12,44,945,1,44,3,44,949,8,44,1,44,5,44,952,
        8,44,10,44,12,44,955,9,44,1,44,1,44,1,45,1,45,1,45,5,45,962,8,45,
        10,45,12,45,965,9,45,1,46,1,46,1,46,1,46,1,46,5,46,972,8,46,10,46,
        12,46,975,9,46,1,46,1,46,1,47,1,47,1,47,5,47,982,8,47,10,47,12,47,
        985,9,47,3,47,987,8,47,1,47,1,47,1,47,5,47,992,8,47,10,47,12,47,
        995,9,47,3,47,997,8,47,1,47,1,47,5,47,1001,8,47,10,47,12,47,1004,
        9,47,1,47,1,47,5,47,1008,8,47,10,47,12,47,1011,9,47,1,47,3,47,1014,
        8,47,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,5,49,1025,8,49,
        10,49,12,49,1028,9,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,4,
        49,1038,8,49,11,49,12,49,1039,1,49,1,49,3,49,1044,8,49,1,50,1,50,
        1,50,1,50,3,50,1050,8,50,1,50,5,50,1053,8,50,10,50,12,50,1056,9,
        50,1,50,1,50,3,50,1060,8,50,1,51,1,51,1,51,1,52,1,52,1,52,1,53,1,
        53,1,53,5,53,1071,8,53,10,53,12,53,1074,9,53,1,53,1,53,1,53,1,54,
        1,54,5,54,1081,8,54,10,54,12,54,1084,9,54,1,54,1,54,5,54,1088,8,
        54,10,54,12,54,1091,9,54,1,54,1,54,1,55,3,55,1096,8,55,1,55,1,55,
        1,55,1,55,3,55,1102,8,55,1,56,1,56,3,56,1106,8,56,1,56,3,56,1109,
        8,56,1,57,1,57,5,57,1113,8,57,10,57,12,57,1116,9,57,1,57,1,57,5,
        57,1120,8,57,10,57,12,57,1123,9,57,3,57,1125,8,57,1,57,1,57,1,58,
        5,58,1130,8,58,10,58,12,58,1133,9,58,1,58,5,58,1136,8,58,10,58,12,
        58,1139,9,58,1,58,1,58,5,58,1143,8,58,10,58,12,58,1146,9,58,1,58,
        1,58,3,58,1150,8,58,5,58,1152,8,58,10,58,12,58,1155,9,58,1,59,1,
        59,1,59,1,59,1,60,1,60,5,60,1163,8,60,10,60,12,60,1166,9,60,1,60,
        1,60,5,60,1170,8,60,10,60,12,60,1173,9,60,1,60,1,60,1,61,1,61,1,
        61,1,61,3,61,1181,8,61,1,62,1,62,1,62,1,62,1,63,1,63,5,63,1189,8,
        63,10,63,12,63,1192,9,63,1,63,1,63,3,63,1196,8,63,5,63,1198,8,63,
        10,63,12,63,1201,9,63,1,63,5,63,1204,8,63,10,63,12,63,1207,9,63,
        1,63,1,63,3,63,1211,8,63,4,63,1213,8,63,11,63,12,63,1214,3,63,1217,
        8,63,1,64,1,64,3,64,1221,8,64,1,65,1,65,5,65,1225,8,65,10,65,12,
        65,1228,9,65,1,65,1,65,5,65,1232,8,65,10,65,12,65,1235,9,65,1,66,
        1,66,5,66,1239,8,66,10,66,12,66,1242,9,66,1,66,1,66,5,66,1246,8,
        66,10,66,12,66,1249,9,66,3,66,1251,8,66,1,66,1,66,1,67,1,67,1,67,
        1,67,1,67,1,67,1,67,1,67,1,67,5,67,1264,8,67,10,67,12,67,1267,9,
        67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,5,67,1276,8,67,10,67,12,67,
        1279,9,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,3,67,
        1291,8,67,1,67,1,67,1,67,1,67,1,67,1,67,5,67,1299,8,67,10,67,12,
        67,1302,9,67,1,67,1,67,1,67,1,67,5,67,1308,8,67,10,67,12,67,1311,
        9,67,1,67,1,67,1,67,1,67,1,67,1,67,5,67,1319,8,67,10,67,12,67,1322,
        9,67,1,67,1,67,5,67,1326,8,67,10,67,12,67,1329,9,67,1,67,1,67,1,
        67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,4,67,1341,8,67,11,67,12,67,
        1342,3,67,1345,8,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,
        1,67,1,67,1,67,1,67,3,67,1360,8,67,1,67,1,67,1,67,1,67,3,67,1366,
        8,67,1,67,1,67,1,67,1,67,1,67,1,67,5,67,1374,8,67,10,67,12,67,1377,
        9,67,1,67,1,67,5,67,1381,8,67,10,67,12,67,1384,9,67,1,67,1,67,5,
        67,1388,8,67,10,67,12,67,1391,9,67,1,67,1,67,5,67,1395,8,67,10,67,
        12,67,1398,9,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,5,67,1408,
        8,67,10,67,12,67,1411,9,67,1,67,1,67,5,67,1415,8,67,10,67,12,67,
        1418,9,67,1,67,5,67,1421,8,67,10,67,12,67,1424,9,67,1,68,1,68,1,
        68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,3,68,1438,8,68,1,
        68,1,68,5,68,1442,8,68,10,68,12,68,1445,9,68,1,69,1,69,1,69,3,69,
        1450,8,69,1,69,1,69,1,69,3,69,1455,8,69,1,69,3,69,1458,8,69,1,70,
        4,70,1461,8,70,11,70,12,70,1462,1,70,1,70,1,70,5,70,1468,8,70,10,
        70,12,70,1471,9,70,1,70,5,70,1474,8,70,10,70,12,70,1477,9,70,1,70,
        1,70,5,70,1481,8,70,10,70,12,70,1484,9,70,3,70,1486,8,70,1,71,1,
        71,1,71,1,71,3,71,1492,8,71,1,72,1,72,1,72,1,72,5,72,1498,8,72,10,
        72,12,72,1501,9,72,1,72,1,72,1,72,5,72,1506,8,72,10,72,12,72,1509,
        9,72,3,72,1511,8,72,1,73,1,73,1,73,1,74,1,74,1,75,1,75,5,75,1520,
        8,75,10,75,12,75,1523,9,75,1,75,1,75,5,75,1527,8,75,10,75,12,75,
        1530,9,75,1,75,1,75,5,75,1534,8,75,10,75,12,75,1537,9,75,1,75,5,
        75,1540,8,75,10,75,12,75,1543,9,75,3,75,1545,8,75,1,75,1,75,1,76,
        3,76,1550,8,76,1,76,1,76,1,76,3,76,1555,8,76,1,76,1,76,1,77,1,77,
        5,77,1561,8,77,10,77,12,77,1564,9,77,1,78,1,78,3,78,1568,8,78,1,
        78,1,78,3,78,1572,8,78,1,78,3,78,1575,8,78,1,79,3,79,1578,8,79,1,
        79,3,79,1581,8,79,1,79,1,79,3,79,1585,8,79,1,79,3,79,1588,8,79,1,
        79,1,79,3,79,1592,8,79,1,79,3,79,1595,8,79,1,80,1,80,1,80,5,80,1600,
        8,80,10,80,12,80,1603,9,80,1,80,3,80,1606,8,80,1,81,1,81,1,82,1,
        82,1,82,1,82,3,82,1614,8,82,1,83,1,83,1,84,1,84,1,85,1,85,1,86,1,
        86,1,86,1,87,1,87,1,87,1,88,1,88,3,88,1630,8,88,1,89,1,89,1,90,1,
        90,1,90,3,90,1637,8,90,1,91,1,91,1,92,1,92,1,93,1,93,1,93,0,2,134,
        136,94,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
        86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
        122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
        154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,
        186,0,25,1,0,145,148,2,0,70,71,139,139,2,0,149,149,151,151,1,0,153,
        157,1,0,135,136,1,0,126,128,1,0,22,23,1,0,94,97,1,0,131,132,2,0,
        15,15,28,28,1,0,28,30,1,0,24,25,1,0,35,37,1,0,38,41,1,0,42,45,3,
        0,83,83,104,104,107,108,2,0,16,16,20,20,2,0,14,14,52,66,2,0,68,69,
        130,130,1,0,70,71,1,0,72,76,1,0,77,80,8,0,68,68,82,82,86,86,94,97,
        100,100,113,119,122,123,129,129,9,0,69,69,81,81,83,85,87,93,98,99,
        101,112,118,118,120,121,123,128,1,1,131,131,1866,0,192,1,0,0,0,2,
        199,1,0,0,0,4,209,1,0,0,0,6,211,1,0,0,0,8,242,1,0,0,0,10,257,1,0,
        0,0,12,259,1,0,0,0,14,261,1,0,0,0,16,286,1,0,0,0,18,288,1,0,0,0,
        20,324,1,0,0,0,22,326,1,0,0,0,24,328,1,0,0,0,26,343,1,0,0,0,28,347,
        1,0,0,0,30,357,1,0,0,0,32,366,1,0,0,0,34,377,1,0,0,0,36,379,1,0,
        0,0,38,393,1,0,0,0,40,400,1,0,0,0,42,409,1,0,0,0,44,411,1,0,0,0,
        46,436,1,0,0,0,48,438,1,0,0,0,50,448,1,0,0,0,52,561,1,0,0,0,54,630,
        1,0,0,0,56,632,1,0,0,0,58,646,1,0,0,0,60,660,1,0,0,0,62,670,1,0,
        0,0,64,680,1,0,0,0,66,708,1,0,0,0,68,732,1,0,0,0,70,751,1,0,0,0,
        72,773,1,0,0,0,74,775,1,0,0,0,76,785,1,0,0,0,78,805,1,0,0,0,80,899,
        1,0,0,0,82,901,1,0,0,0,84,915,1,0,0,0,86,925,1,0,0,0,88,928,1,0,
        0,0,90,958,1,0,0,0,92,966,1,0,0,0,94,1013,1,0,0,0,96,1015,1,0,0,
        0,98,1043,1,0,0,0,100,1059,1,0,0,0,102,1061,1,0,0,0,104,1064,1,0,
        0,0,106,1067,1,0,0,0,108,1089,1,0,0,0,110,1095,1,0,0,0,112,1108,
        1,0,0,0,114,1110,1,0,0,0,116,1137,1,0,0,0,118,1156,1,0,0,0,120,1160,
        1,0,0,0,122,1180,1,0,0,0,124,1182,1,0,0,0,126,1216,1,0,0,0,128,1218,
        1,0,0,0,130,1222,1,0,0,0,132,1236,1,0,0,0,134,1290,1,0,0,0,136,1437,
        1,0,0,0,138,1457,1,0,0,0,140,1485,1,0,0,0,142,1491,1,0,0,0,144,1510,
        1,0,0,0,146,1512,1,0,0,0,148,1515,1,0,0,0,150,1517,1,0,0,0,152,1549,
        1,0,0,0,154,1558,1,0,0,0,156,1574,1,0,0,0,158,1594,1,0,0,0,160,1605,
        1,0,0,0,162,1607,1,0,0,0,164,1613,1,0,0,0,166,1615,1,0,0,0,168,1617,
        1,0,0,0,170,1619,1,0,0,0,172,1621,1,0,0,0,174,1624,1,0,0,0,176,1629,
        1,0,0,0,178,1631,1,0,0,0,180,1636,1,0,0,0,182,1638,1,0,0,0,184,1640,
        1,0,0,0,186,1642,1,0,0,0,188,189,3,2,1,0,189,190,5,0,0,1,190,193,
        1,0,0,0,191,193,5,0,0,1,192,188,1,0,0,0,192,191,1,0,0,0,193,1,1,
        0,0,0,194,195,3,4,2,0,195,196,3,186,93,0,196,200,1,0,0,0,197,200,
        5,132,0,0,198,200,5,131,0,0,199,194,1,0,0,0,199,197,1,0,0,0,199,
        198,1,0,0,0,200,201,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,
        3,1,0,0,0,203,210,3,88,44,0,204,210,3,6,3,0,205,210,3,12,6,0,206,
        210,3,14,7,0,207,210,3,18,9,0,208,210,3,20,10,0,209,203,1,0,0,0,
        209,204,1,0,0,0,209,205,1,0,0,0,209,206,1,0,0,0,209,207,1,0,0,0,
        209,208,1,0,0,0,210,5,1,0,0,0,211,214,5,34,0,0,212,215,3,8,4,0,213,
        215,3,10,5,0,214,212,1,0,0,0,214,213,1,0,0,0,215,7,1,0,0,0,216,218,
        5,140,0,0,217,219,3,134,67,0,218,217,1,0,0,0,218,219,1,0,0,0,219,
        243,1,0,0,0,220,226,5,144,0,0,221,223,5,163,0,0,222,221,1,0,0,0,
        222,223,1,0,0,0,223,224,1,0,0,0,224,227,5,164,0,0,225,227,5,162,
        0,0,226,222,1,0,0,0,226,225,1,0,0,0,227,243,1,0,0,0,228,230,5,141,
        0,0,229,231,3,168,84,0,230,229,1,0,0,0,230,231,1,0,0,0,231,243,1,
        0,0,0,232,235,5,143,0,0,233,236,3,168,84,0,234,236,3,166,83,0,235,
        233,1,0,0,0,235,234,1,0,0,0,235,236,1,0,0,0,236,243,1,0,0,0,237,
        240,5,142,0,0,238,241,3,168,84,0,239,241,3,166,83,0,240,238,1,0,
        0,0,240,239,1,0,0,0,240,241,1,0,0,0,241,243,1,0,0,0,242,216,1,0,
        0,0,242,220,1,0,0,0,242,228,1,0,0,0,242,232,1,0,0,0,242,237,1,0,
        0,0,243,9,1,0,0,0,244,245,7,0,0,0,245,258,5,160,0,0,246,248,5,150,
        0,0,247,249,7,1,0,0,248,247,1,0,0,0,248,249,1,0,0,0,249,258,1,0,
        0,0,250,252,7,2,0,0,251,253,5,160,0,0,252,251,1,0,0,0,252,253,1,
        0,0,0,253,258,1,0,0,0,254,258,5,152,0,0,255,256,7,3,0,0,256,258,
        5,139,0,0,257,244,1,0,0,0,257,246,1,0,0,0,257,250,1,0,0,0,257,254,
        1,0,0,0,257,255,1,0,0,0,258,11,1,0,0,0,259,260,5,5,0,0,260,13,1,
        0,0,0,261,266,5,4,0,0,262,263,5,131,0,0,263,265,5,4,0,0,264,262,
        1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,272,
        1,0,0,0,268,266,1,0,0,0,269,271,5,132,0,0,270,269,1,0,0,0,271,274,
        1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,284,1,0,0,0,274,272,
        1,0,0,0,275,285,3,16,8,0,276,278,5,131,0,0,277,276,1,0,0,0,277,278,
        1,0,0,0,278,279,1,0,0,0,279,285,3,86,43,0,280,282,5,131,0,0,281,
        280,1,0,0,0,281,282,1,0,0,0,282,283,1,0,0,0,283,285,3,20,10,0,284,
        275,1,0,0,0,284,277,1,0,0,0,284,281,1,0,0,0,285,15,1,0,0,0,286,287,
        7,4,0,0,287,17,1,0,0,0,288,293,5,6,0,0,289,290,5,131,0,0,290,292,
        5,6,0,0,291,289,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,294,
        1,0,0,0,294,299,1,0,0,0,295,293,1,0,0,0,296,298,3,184,92,0,297,296,
        1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,304,
        1,0,0,0,301,299,1,0,0,0,302,305,3,86,43,0,303,305,3,20,10,0,304,
        302,1,0,0,0,304,303,1,0,0,0,305,19,1,0,0,0,306,325,3,28,14,0,307,
        325,3,44,22,0,308,325,3,52,26,0,309,325,3,56,28,0,310,325,3,58,29,
        0,311,325,3,60,30,0,312,325,3,62,31,0,313,325,3,70,35,0,314,325,
        3,72,36,0,315,325,3,64,32,0,316,325,3,74,37,0,317,325,3,76,38,0,
        318,325,3,30,15,0,319,325,3,32,16,0,320,325,3,86,43,0,321,325,3,
        40,20,0,322,325,3,22,11,0,323,325,3,42,21,0,324,306,1,0,0,0,324,
        307,1,0,0,0,324,308,1,0,0,0,324,309,1,0,0,0,324,310,1,0,0,0,324,
        311,1,0,0,0,324,312,1,0,0,0,324,313,1,0,0,0,324,314,1,0,0,0,324,
        315,1,0,0,0,324,316,1,0,0,0,324,317,1,0,0,0,324,318,1,0,0,0,324,
        319,1,0,0,0,324,320,1,0,0,0,324,321,1,0,0,0,324,322,1,0,0,0,324,
        323,1,0,0,0,325,21,1,0,0,0,326,327,3,24,12,0,327,23,1,0,0,0,328,
        332,5,11,0,0,329,331,3,184,92,0,330,329,1,0,0,0,331,334,1,0,0,0,
        332,330,1,0,0,0,332,333,1,0,0,0,333,336,1,0,0,0,334,332,1,0,0,0,
        335,337,3,26,13,0,336,335,1,0,0,0,336,337,1,0,0,0,337,338,1,0,0,
        0,338,339,5,12,0,0,339,25,1,0,0,0,340,341,3,20,10,0,341,342,5,131,
        0,0,342,344,1,0,0,0,343,340,1,0,0,0,344,345,1,0,0,0,345,343,1,0,
        0,0,345,346,1,0,0,0,346,27,1,0,0,0,347,355,7,5,0,0,348,350,5,132,
        0,0,349,348,1,0,0,0,350,353,1,0,0,0,351,349,1,0,0,0,351,352,1,0,
        0,0,352,354,1,0,0,0,353,351,1,0,0,0,354,356,3,36,18,0,355,351,1,
        0,0,0,355,356,1,0,0,0,356,29,1,0,0,0,357,361,5,125,0,0,358,360,5,
        132,0,0,359,358,1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,0,361,362,
        1,0,0,0,362,364,1,0,0,0,363,361,1,0,0,0,364,365,3,134,67,0,365,31,
        1,0,0,0,366,370,5,103,0,0,367,369,5,132,0,0,368,367,1,0,0,0,369,
        372,1,0,0,0,370,368,1,0,0,0,370,371,1,0,0,0,371,373,1,0,0,0,372,
        370,1,0,0,0,373,374,3,134,67,0,374,33,1,0,0,0,375,378,3,88,44,0,
        376,378,3,86,43,0,377,375,1,0,0,0,377,376,1,0,0,0,378,35,1,0,0,0,
        379,390,3,38,19,0,380,382,5,132,0,0,381,380,1,0,0,0,382,385,1,0,
        0,0,383,381,1,0,0,0,383,384,1,0,0,0,384,386,1,0,0,0,385,383,1,0,
        0,0,386,387,5,13,0,0,387,389,3,38,19,0,388,383,1,0,0,0,389,392,1,
        0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,37,1,0,0,0,392,390,1,0,
        0,0,393,398,3,148,74,0,394,395,3,162,81,0,395,396,3,134,67,0,396,
        399,1,0,0,0,397,399,7,6,0,0,398,394,1,0,0,0,398,397,1,0,0,0,398,
        399,1,0,0,0,399,39,1,0,0,0,400,407,3,136,68,0,401,403,5,132,0,0,
        402,401,1,0,0,0,403,404,1,0,0,0,404,402,1,0,0,0,404,405,1,0,0,0,
        405,406,1,0,0,0,406,408,3,126,63,0,407,402,1,0,0,0,407,408,1,0,0,
        0,408,41,1,0,0,0,409,410,3,130,65,0,410,43,1,0,0,0,411,415,5,101,
        0,0,412,414,3,184,92,0,413,412,1,0,0,0,414,417,1,0,0,0,415,413,1,
        0,0,0,415,416,1,0,0,0,416,418,1,0,0,0,417,415,1,0,0,0,418,422,3,
        134,67,0,419,421,5,132,0,0,420,419,1,0,0,0,421,424,1,0,0,0,422,420,
        1,0,0,0,422,423,1,0,0,0,423,425,1,0,0,0,424,422,1,0,0,0,425,427,
        3,46,23,0,426,428,3,50,25,0,427,426,1,0,0,0,427,428,1,0,0,0,428,
        45,1,0,0,0,429,431,5,131,0,0,430,429,1,0,0,0,431,432,1,0,0,0,432,
        430,1,0,0,0,432,433,1,0,0,0,433,434,1,0,0,0,434,437,3,20,10,0,435,
        437,3,24,12,0,436,430,1,0,0,0,436,435,1,0,0,0,437,47,1,0,0,0,438,
        439,5,131,0,0,439,443,5,99,0,0,440,442,3,184,92,0,441,440,1,0,0,
        0,442,445,1,0,0,0,443,441,1,0,0,0,443,444,1,0,0,0,444,446,1,0,0,
        0,445,443,1,0,0,0,446,447,3,134,67,0,447,49,1,0,0,0,448,449,5,131,
        0,0,449,453,5,87,0,0,450,452,3,184,92,0,451,450,1,0,0,0,452,455,
        1,0,0,0,453,451,1,0,0,0,453,454,1,0,0,0,454,456,1,0,0,0,455,453,
        1,0,0,0,456,457,3,20,10,0,457,51,1,0,0,0,458,459,5,98,0,0,459,463,
        7,7,0,0,460,462,5,132,0,0,461,460,1,0,0,0,462,465,1,0,0,0,463,461,
        1,0,0,0,463,464,1,0,0,0,464,466,1,0,0,0,465,463,1,0,0,0,466,479,
        3,134,67,0,467,469,5,132,0,0,468,467,1,0,0,0,469,472,1,0,0,0,470,
        468,1,0,0,0,470,471,1,0,0,0,471,473,1,0,0,0,472,470,1,0,0,0,473,
        475,5,13,0,0,474,476,3,134,67,0,475,474,1,0,0,0,475,476,1,0,0,0,
        476,478,1,0,0,0,477,470,1,0,0,0,478,481,1,0,0,0,479,477,1,0,0,0,
        479,480,1,0,0,0,480,485,1,0,0,0,481,479,1,0,0,0,482,484,5,132,0,
        0,483,482,1,0,0,0,484,487,1,0,0,0,485,483,1,0,0,0,485,486,1,0,0,
        0,486,488,1,0,0,0,487,485,1,0,0,0,488,490,3,46,23,0,489,491,3,48,
        24,0,490,489,1,0,0,0,490,491,1,0,0,0,491,493,1,0,0,0,492,494,3,50,
        25,0,493,492,1,0,0,0,493,494,1,0,0,0,494,562,1,0,0,0,495,496,4,26,
        0,0,496,500,5,98,0,0,497,499,5,132,0,0,498,497,1,0,0,0,499,502,1,
        0,0,0,500,498,1,0,0,0,500,501,1,0,0,0,501,510,1,0,0,0,502,500,1,
        0,0,0,503,507,3,134,67,0,504,506,5,132,0,0,505,504,1,0,0,0,506,509,
        1,0,0,0,507,505,1,0,0,0,507,508,1,0,0,0,508,511,1,0,0,0,509,507,
        1,0,0,0,510,503,1,0,0,0,510,511,1,0,0,0,511,512,1,0,0,0,512,514,
        3,46,23,0,513,515,3,48,24,0,514,513,1,0,0,0,514,515,1,0,0,0,515,
        517,1,0,0,0,516,518,3,50,25,0,517,516,1,0,0,0,517,518,1,0,0,0,518,
        562,1,0,0,0,519,523,5,93,0,0,520,522,5,132,0,0,521,520,1,0,0,0,522,
        525,1,0,0,0,523,521,1,0,0,0,523,524,1,0,0,0,524,526,1,0,0,0,525,
        523,1,0,0,0,526,530,3,134,67,0,527,529,5,132,0,0,528,527,1,0,0,0,
        529,532,1,0,0,0,530,528,1,0,0,0,530,531,1,0,0,0,531,533,1,0,0,0,
        532,530,1,0,0,0,533,535,3,46,23,0,534,536,3,48,24,0,535,534,1,0,
        0,0,535,536,1,0,0,0,536,538,1,0,0,0,537,539,3,50,25,0,538,537,1,
        0,0,0,538,539,1,0,0,0,539,562,1,0,0,0,540,544,5,92,0,0,541,543,5,
        132,0,0,542,541,1,0,0,0,543,546,1,0,0,0,544,542,1,0,0,0,544,545,
        1,0,0,0,545,547,1,0,0,0,546,544,1,0,0,0,547,551,3,54,27,0,548,550,
        5,132,0,0,549,548,1,0,0,0,550,553,1,0,0,0,551,549,1,0,0,0,551,552,
        1,0,0,0,552,554,1,0,0,0,553,551,1,0,0,0,554,556,3,46,23,0,555,557,
        3,48,24,0,556,555,1,0,0,0,556,557,1,0,0,0,557,559,1,0,0,0,558,560,
        3,50,25,0,559,558,1,0,0,0,559,560,1,0,0,0,560,562,1,0,0,0,561,458,
        1,0,0,0,561,495,1,0,0,0,561,519,1,0,0,0,561,540,1,0,0,0,562,53,1,
        0,0,0,563,565,3,148,74,0,564,563,1,0,0,0,564,565,1,0,0,0,565,578,
        1,0,0,0,566,568,5,132,0,0,567,566,1,0,0,0,568,571,1,0,0,0,569,567,
        1,0,0,0,569,570,1,0,0,0,570,572,1,0,0,0,571,569,1,0,0,0,572,574,
        5,13,0,0,573,575,3,148,74,0,574,573,1,0,0,0,574,575,1,0,0,0,575,
        577,1,0,0,0,576,569,1,0,0,0,577,580,1,0,0,0,578,576,1,0,0,0,578,
        579,1,0,0,0,579,584,1,0,0,0,580,578,1,0,0,0,581,583,5,132,0,0,582,
        581,1,0,0,0,583,586,1,0,0,0,584,582,1,0,0,0,584,585,1,0,0,0,585,
        587,1,0,0,0,586,584,1,0,0,0,587,591,5,104,0,0,588,590,5,132,0,0,
        589,588,1,0,0,0,590,593,1,0,0,0,591,589,1,0,0,0,591,592,1,0,0,0,
        592,594,1,0,0,0,593,591,1,0,0,0,594,631,3,134,67,0,595,597,5,9,0,
        0,596,598,3,148,74,0,597,596,1,0,0,0,597,598,1,0,0,0,598,611,1,0,
        0,0,599,601,5,132,0,0,600,599,1,0,0,0,601,604,1,0,0,0,602,600,1,
        0,0,0,602,603,1,0,0,0,603,605,1,0,0,0,604,602,1,0,0,0,605,607,5,
        13,0,0,606,608,3,148,74,0,607,606,1,0,0,0,607,608,1,0,0,0,608,610,
        1,0,0,0,609,602,1,0,0,0,610,613,1,0,0,0,611,609,1,0,0,0,611,612,
        1,0,0,0,612,617,1,0,0,0,613,611,1,0,0,0,614,616,7,8,0,0,615,614,
        1,0,0,0,616,619,1,0,0,0,617,615,1,0,0,0,617,618,1,0,0,0,618,620,
        1,0,0,0,619,617,1,0,0,0,620,624,5,104,0,0,621,623,7,8,0,0,622,621,
        1,0,0,0,623,626,1,0,0,0,624,622,1,0,0,0,624,625,1,0,0,0,625,627,
        1,0,0,0,626,624,1,0,0,0,627,628,3,134,67,0,628,629,5,10,0,0,629,
        631,1,0,0,0,630,564,1,0,0,0,630,595,1,0,0,0,631,55,1,0,0,0,632,636,
        5,91,0,0,633,635,5,132,0,0,634,633,1,0,0,0,635,638,1,0,0,0,636,634,
        1,0,0,0,636,637,1,0,0,0,637,644,1,0,0,0,638,636,1,0,0,0,639,645,
        3,122,61,0,640,641,5,9,0,0,641,642,3,122,61,0,642,643,5,10,0,0,643,
        645,1,0,0,0,644,639,1,0,0,0,644,640,1,0,0,0,644,645,1,0,0,0,645,
        57,1,0,0,0,646,650,5,81,0,0,647,649,5,132,0,0,648,647,1,0,0,0,649,
        652,1,0,0,0,650,648,1,0,0,0,650,651,1,0,0,0,651,658,1,0,0,0,652,
        650,1,0,0,0,653,654,5,9,0,0,654,655,3,122,61,0,655,656,5,10,0,0,
        656,659,1,0,0,0,657,659,3,122,61,0,658,653,1,0,0,0,658,657,1,0,0,
        0,658,659,1,0,0,0,659,59,1,0,0,0,660,664,5,90,0,0,661,663,5,132,
        0,0,662,661,1,0,0,0,663,666,1,0,0,0,664,662,1,0,0,0,664,665,1,0,
        0,0,665,668,1,0,0,0,666,664,1,0,0,0,667,669,3,134,67,0,668,667,1,
        0,0,0,668,669,1,0,0,0,669,61,1,0,0,0,670,674,5,106,0,0,671,673,5,
        132,0,0,672,671,1,0,0,0,673,676,1,0,0,0,674,672,1,0,0,0,674,675,
        1,0,0,0,675,678,1,0,0,0,676,674,1,0,0,0,677,679,3,134,67,0,678,677,
        1,0,0,0,678,679,1,0,0,0,679,63,1,0,0,0,680,684,5,84,0,0,681,683,
        5,132,0,0,682,681,1,0,0,0,683,686,1,0,0,0,684,682,1,0,0,0,684,685,
        1,0,0,0,685,688,1,0,0,0,686,684,1,0,0,0,687,689,3,134,67,0,688,687,
        1,0,0,0,688,689,1,0,0,0,689,698,1,0,0,0,690,692,5,132,0,0,691,690,
        1,0,0,0,692,695,1,0,0,0,693,691,1,0,0,0,693,694,1,0,0,0,694,696,
        1,0,0,0,695,693,1,0,0,0,696,697,5,13,0,0,697,699,3,164,82,0,698,
        693,1,0,0,0,698,699,1,0,0,0,699,703,1,0,0,0,700,702,3,184,92,0,701,
        700,1,0,0,0,702,705,1,0,0,0,703,701,1,0,0,0,703,704,1,0,0,0,704,
        706,1,0,0,0,705,703,1,0,0,0,706,707,3,66,33,0,707,65,1,0,0,0,708,
        712,5,11,0,0,709,711,3,184,92,0,710,709,1,0,0,0,711,714,1,0,0,0,
        712,710,1,0,0,0,712,713,1,0,0,0,713,718,1,0,0,0,714,712,1,0,0,0,
        715,717,3,68,34,0,716,715,1,0,0,0,717,720,1,0,0,0,718,716,1,0,0,
        0,718,719,1,0,0,0,719,721,1,0,0,0,720,718,1,0,0,0,721,722,5,12,0,
        0,722,67,1,0,0,0,723,727,5,85,0,0,724,726,5,132,0,0,725,724,1,0,
        0,0,726,729,1,0,0,0,727,725,1,0,0,0,727,728,1,0,0,0,728,730,1,0,
        0,0,729,727,1,0,0,0,730,733,3,130,65,0,731,733,5,86,0,0,732,723,
        1,0,0,0,732,731,1,0,0,0,733,737,1,0,0,0,734,736,5,132,0,0,735,734,
        1,0,0,0,736,739,1,0,0,0,737,735,1,0,0,0,737,738,1,0,0,0,738,740,
        1,0,0,0,739,737,1,0,0,0,740,749,5,17,0,0,741,743,3,184,92,0,742,
        741,1,0,0,0,743,746,1,0,0,0,744,742,1,0,0,0,744,745,1,0,0,0,745,
        747,1,0,0,0,746,744,1,0,0,0,747,750,3,26,13,0,748,750,5,131,0,0,
        749,744,1,0,0,0,749,748,1,0,0,0,750,69,1,0,0,0,751,752,3,178,89,
        0,752,753,5,17,0,0,753,71,1,0,0,0,754,758,5,112,0,0,755,757,5,132,
        0,0,756,755,1,0,0,0,757,760,1,0,0,0,758,756,1,0,0,0,758,759,1,0,
        0,0,759,761,1,0,0,0,760,758,1,0,0,0,761,774,3,122,61,0,762,766,5,
        112,0,0,763,765,5,132,0,0,764,763,1,0,0,0,765,768,1,0,0,0,766,764,
        1,0,0,0,766,767,1,0,0,0,767,769,1,0,0,0,768,766,1,0,0,0,769,770,
        5,9,0,0,770,771,3,122,61,0,771,772,5,10,0,0,772,774,1,0,0,0,773,
        754,1,0,0,0,773,762,1,0,0,0,774,73,1,0,0,0,775,779,5,102,0,0,776,
        778,5,132,0,0,777,776,1,0,0,0,778,781,1,0,0,0,779,777,1,0,0,0,779,
        780,1,0,0,0,780,783,1,0,0,0,781,779,1,0,0,0,782,784,3,134,67,0,783,
        782,1,0,0,0,783,784,1,0,0,0,784,75,1,0,0,0,785,789,5,105,0,0,786,
        788,3,184,92,0,787,786,1,0,0,0,788,791,1,0,0,0,789,787,1,0,0,0,789,
        790,1,0,0,0,790,792,1,0,0,0,791,789,1,0,0,0,792,796,3,20,10,0,793,
        795,3,78,39,0,794,793,1,0,0,0,795,798,1,0,0,0,796,794,1,0,0,0,796,
        797,1,0,0,0,797,800,1,0,0,0,798,796,1,0,0,0,799,801,3,50,25,0,800,
        799,1,0,0,0,800,801,1,0,0,0,801,803,1,0,0,0,802,804,3,84,42,0,803,
        802,1,0,0,0,803,804,1,0,0,0,804,77,1,0,0,0,805,806,5,131,0,0,806,
        810,5,88,0,0,807,809,5,132,0,0,808,807,1,0,0,0,809,812,1,0,0,0,810,
        808,1,0,0,0,810,811,1,0,0,0,811,820,1,0,0,0,812,810,1,0,0,0,813,
        817,3,80,40,0,814,816,5,132,0,0,815,814,1,0,0,0,816,819,1,0,0,0,
        817,815,1,0,0,0,817,818,1,0,0,0,818,821,1,0,0,0,819,817,1,0,0,0,
        820,813,1,0,0,0,820,821,1,0,0,0,821,822,1,0,0,0,822,823,3,46,23,
        0,823,79,1,0,0,0,824,832,3,82,41,0,825,827,5,132,0,0,826,825,1,0,
        0,0,827,830,1,0,0,0,828,826,1,0,0,0,828,829,1,0,0,0,829,831,1,0,
        0,0,830,828,1,0,0,0,831,833,5,123,0,0,832,828,1,0,0,0,832,833,1,
        0,0,0,833,841,1,0,0,0,834,836,5,132,0,0,835,834,1,0,0,0,836,839,
        1,0,0,0,837,835,1,0,0,0,837,838,1,0,0,0,838,840,1,0,0,0,839,837,
        1,0,0,0,840,842,3,178,89,0,841,837,1,0,0,0,841,842,1,0,0,0,842,900,
        1,0,0,0,843,844,5,9,0,0,844,852,3,82,41,0,845,847,5,132,0,0,846,
        845,1,0,0,0,847,850,1,0,0,0,848,846,1,0,0,0,848,849,1,0,0,0,849,
        851,1,0,0,0,850,848,1,0,0,0,851,853,5,123,0,0,852,848,1,0,0,0,852,
        853,1,0,0,0,853,861,1,0,0,0,854,856,5,132,0,0,855,854,1,0,0,0,856,
        859,1,0,0,0,857,855,1,0,0,0,857,858,1,0,0,0,858,860,1,0,0,0,859,
        857,1,0,0,0,860,862,3,178,89,0,861,857,1,0,0,0,861,862,1,0,0,0,862,
        863,1,0,0,0,863,864,5,10,0,0,864,900,1,0,0,0,865,867,5,132,0,0,866,
        865,1,0,0,0,867,870,1,0,0,0,868,866,1,0,0,0,868,869,1,0,0,0,869,
        871,1,0,0,0,870,868,1,0,0,0,871,872,5,123,0,0,872,876,1,0,0,0,873,
        875,5,132,0,0,874,873,1,0,0,0,875,878,1,0,0,0,876,874,1,0,0,0,876,
        877,1,0,0,0,877,879,1,0,0,0,878,876,1,0,0,0,879,900,3,178,89,0,880,
        884,5,9,0,0,881,883,5,132,0,0,882,881,1,0,0,0,883,886,1,0,0,0,884,
        882,1,0,0,0,884,885,1,0,0,0,885,887,1,0,0,0,886,884,1,0,0,0,887,
        888,5,123,0,0,888,892,1,0,0,0,889,891,5,132,0,0,890,889,1,0,0,0,
        891,894,1,0,0,0,892,890,1,0,0,0,892,893,1,0,0,0,893,895,1,0,0,0,
        894,892,1,0,0,0,895,896,3,178,89,0,896,897,1,0,0,0,897,898,5,10,
        0,0,898,900,1,0,0,0,899,824,1,0,0,0,899,843,1,0,0,0,899,868,1,0,
        0,0,899,880,1,0,0,0,900,81,1,0,0,0,901,912,3,178,89,0,902,904,5,
        132,0,0,903,902,1,0,0,0,904,907,1,0,0,0,905,903,1,0,0,0,905,906,
        1,0,0,0,906,908,1,0,0,0,907,905,1,0,0,0,908,909,5,13,0,0,909,911,
        3,178,89,0,910,905,1,0,0,0,911,914,1,0,0,0,912,910,1,0,0,0,912,913,
        1,0,0,0,913,83,1,0,0,0,914,912,1,0,0,0,915,916,5,131,0,0,916,920,
        5,89,0,0,917,919,3,184,92,0,918,917,1,0,0,0,919,922,1,0,0,0,920,
        918,1,0,0,0,920,921,1,0,0,0,921,923,1,0,0,0,922,920,1,0,0,0,923,
        924,3,20,10,0,924,85,1,0,0,0,925,926,3,152,76,0,926,927,3,160,80,
        0,927,87,1,0,0,0,928,932,5,115,0,0,929,931,5,132,0,0,930,929,1,0,
        0,0,931,934,1,0,0,0,932,930,1,0,0,0,932,933,1,0,0,0,933,935,1,0,
        0,0,934,932,1,0,0,0,935,948,3,178,89,0,936,938,5,132,0,0,937,936,
        1,0,0,0,938,939,1,0,0,0,939,937,1,0,0,0,939,940,1,0,0,0,940,941,
        1,0,0,0,941,943,5,117,0,0,942,944,5,132,0,0,943,942,1,0,0,0,944,
        945,1,0,0,0,945,943,1,0,0,0,945,946,1,0,0,0,946,947,1,0,0,0,947,
        949,3,90,45,0,948,937,1,0,0,0,948,949,1,0,0,0,949,953,1,0,0,0,950,
        952,3,184,92,0,951,950,1,0,0,0,952,955,1,0,0,0,953,951,1,0,0,0,953,
        954,1,0,0,0,954,956,1,0,0,0,955,953,1,0,0,0,956,957,3,92,46,0,957,
        89,1,0,0,0,958,963,3,178,89,0,959,960,5,20,0,0,960,962,3,178,89,
        0,961,959,1,0,0,0,962,965,1,0,0,0,963,961,1,0,0,0,963,964,1,0,0,
        0,964,91,1,0,0,0,965,963,1,0,0,0,966,973,5,11,0,0,967,968,3,94,47,
        0,968,969,5,131,0,0,969,972,1,0,0,0,970,972,5,131,0,0,971,967,1,
        0,0,0,971,970,1,0,0,0,972,975,1,0,0,0,973,971,1,0,0,0,973,974,1,
        0,0,0,974,976,1,0,0,0,975,973,1,0,0,0,976,977,5,12,0,0,977,93,1,
        0,0,0,978,1014,3,96,48,0,979,983,5,126,0,0,980,982,5,132,0,0,981,
        980,1,0,0,0,982,985,1,0,0,0,983,981,1,0,0,0,983,984,1,0,0,0,984,
        987,1,0,0,0,985,983,1,0,0,0,986,979,1,0,0,0,986,987,1,0,0,0,987,
        988,1,0,0,0,988,1014,3,98,49,0,989,993,5,126,0,0,990,992,5,132,0,
        0,991,990,1,0,0,0,992,995,1,0,0,0,993,991,1,0,0,0,993,994,1,0,0,
        0,994,997,1,0,0,0,995,993,1,0,0,0,996,989,1,0,0,0,996,997,1,0,0,
        0,997,998,1,0,0,0,998,1009,3,106,53,0,999,1001,5,132,0,0,1000,999,
        1,0,0,0,1001,1004,1,0,0,0,1002,1000,1,0,0,0,1002,1003,1,0,0,0,1003,
        1005,1,0,0,0,1004,1002,1,0,0,0,1005,1006,5,13,0,0,1006,1008,3,106,
        53,0,1007,1002,1,0,0,0,1008,1011,1,0,0,0,1009,1007,1,0,0,0,1009,
        1010,1,0,0,0,1010,1014,1,0,0,0,1011,1009,1,0,0,0,1012,1014,3,88,
        44,0,1013,978,1,0,0,0,1013,986,1,0,0,0,1013,996,1,0,0,0,1013,1012,
        1,0,0,0,1014,95,1,0,0,0,1015,1016,3,152,76,0,1016,1017,3,160,80,
        0,1017,97,1,0,0,0,1018,1019,3,100,50,0,1019,1020,5,67,0,0,1020,1021,
        3,134,67,0,1021,1044,1,0,0,0,1022,1026,3,100,50,0,1023,1025,3,184,
        92,0,1024,1023,1,0,0,0,1025,1028,1,0,0,0,1026,1024,1,0,0,0,1026,
        1027,1,0,0,0,1027,1029,1,0,0,0,1028,1026,1,0,0,0,1029,1037,5,11,
        0,0,1030,1031,3,102,51,0,1031,1032,5,131,0,0,1032,1038,1,0,0,0,1033,
        1034,3,104,52,0,1034,1035,5,131,0,0,1035,1038,1,0,0,0,1036,1038,
        5,131,0,0,1037,1030,1,0,0,0,1037,1033,1,0,0,0,1037,1036,1,0,0,0,
        1038,1039,1,0,0,0,1039,1037,1,0,0,0,1039,1040,1,0,0,0,1040,1041,
        1,0,0,0,1041,1042,5,12,0,0,1042,1044,1,0,0,0,1043,1018,1,0,0,0,1043,
        1022,1,0,0,0,1044,99,1,0,0,0,1045,1060,3,122,61,0,1046,1047,3,122,
        61,0,1047,1049,5,7,0,0,1048,1050,3,108,54,0,1049,1048,1,0,0,0,1049,
        1050,1,0,0,0,1050,1054,1,0,0,0,1051,1053,3,184,92,0,1052,1051,1,
        0,0,0,1053,1056,1,0,0,0,1054,1052,1,0,0,0,1054,1055,1,0,0,0,1055,
        1057,1,0,0,0,1056,1054,1,0,0,0,1057,1058,5,8,0,0,1058,1060,1,0,0,
        0,1059,1045,1,0,0,0,1059,1046,1,0,0,0,1060,101,1,0,0,0,1061,1062,
        5,113,0,0,1062,1063,3,160,80,0,1063,103,1,0,0,0,1064,1065,5,114,
        0,0,1065,1066,3,160,80,0,1066,105,1,0,0,0,1067,1072,3,122,61,0,1068,
        1069,5,20,0,0,1069,1071,3,122,61,0,1070,1068,1,0,0,0,1071,1074,1,
        0,0,0,1072,1070,1,0,0,0,1072,1073,1,0,0,0,1073,1075,1,0,0,0,1074,
        1072,1,0,0,0,1075,1076,5,14,0,0,1076,1077,3,134,67,0,1077,107,1,
        0,0,0,1078,1082,3,110,55,0,1079,1081,5,132,0,0,1080,1079,1,0,0,0,
        1081,1084,1,0,0,0,1082,1080,1,0,0,0,1082,1083,1,0,0,0,1083,1085,
        1,0,0,0,1084,1082,1,0,0,0,1085,1086,5,13,0,0,1086,1088,1,0,0,0,1087,
        1078,1,0,0,0,1088,1091,1,0,0,0,1089,1087,1,0,0,0,1089,1090,1,0,0,
        0,1090,1092,1,0,0,0,1091,1089,1,0,0,0,1092,1093,3,112,56,0,1093,
        109,1,0,0,0,1094,1096,5,47,0,0,1095,1094,1,0,0,0,1095,1096,1,0,0,
        0,1096,1097,1,0,0,0,1097,1101,3,178,89,0,1098,1099,5,14,0,0,1099,
        1102,3,134,67,0,1100,1102,5,15,0,0,1101,1098,1,0,0,0,1101,1100,1,
        0,0,0,1101,1102,1,0,0,0,1102,111,1,0,0,0,1103,1109,3,110,55,0,1104,
        1106,3,178,89,0,1105,1104,1,0,0,0,1105,1106,1,0,0,0,1106,1107,1,
        0,0,0,1107,1109,5,28,0,0,1108,1103,1,0,0,0,1108,1105,1,0,0,0,1109,
        113,1,0,0,0,1110,1114,5,7,0,0,1111,1113,7,8,0,0,1112,1111,1,0,0,
        0,1113,1116,1,0,0,0,1114,1112,1,0,0,0,1114,1115,1,0,0,0,1115,1124,
        1,0,0,0,1116,1114,1,0,0,0,1117,1121,3,126,63,0,1118,1120,7,8,0,0,
        1119,1118,1,0,0,0,1120,1123,1,0,0,0,1121,1119,1,0,0,0,1121,1122,
        1,0,0,0,1122,1125,1,0,0,0,1123,1121,1,0,0,0,1124,1117,1,0,0,0,1124,
        1125,1,0,0,0,1125,1126,1,0,0,0,1126,1127,5,8,0,0,1127,115,1,0,0,
        0,1128,1130,5,132,0,0,1129,1128,1,0,0,0,1130,1133,1,0,0,0,1131,1129,
        1,0,0,0,1131,1132,1,0,0,0,1132,1134,1,0,0,0,1133,1131,1,0,0,0,1134,
        1136,5,13,0,0,1135,1131,1,0,0,0,1136,1139,1,0,0,0,1137,1135,1,0,
        0,0,1137,1138,1,0,0,0,1138,1140,1,0,0,0,1139,1137,1,0,0,0,1140,1153,
        3,118,59,0,1141,1143,5,132,0,0,1142,1141,1,0,0,0,1143,1146,1,0,0,
        0,1144,1142,1,0,0,0,1144,1145,1,0,0,0,1145,1147,1,0,0,0,1146,1144,
        1,0,0,0,1147,1149,5,13,0,0,1148,1150,3,118,59,0,1149,1148,1,0,0,
        0,1149,1150,1,0,0,0,1150,1152,1,0,0,0,1151,1144,1,0,0,0,1152,1155,
        1,0,0,0,1153,1151,1,0,0,0,1153,1154,1,0,0,0,1154,117,1,0,0,0,1155,
        1153,1,0,0,0,1156,1157,3,134,67,0,1157,1158,5,17,0,0,1158,1159,3,
        134,67,0,1159,119,1,0,0,0,1160,1164,3,142,71,0,1161,1163,7,8,0,0,
        1162,1161,1,0,0,0,1163,1166,1,0,0,0,1164,1162,1,0,0,0,1164,1165,
        1,0,0,0,1165,1167,1,0,0,0,1166,1164,1,0,0,0,1167,1171,5,17,0,0,1168,
        1170,7,8,0,0,1169,1168,1,0,0,0,1170,1173,1,0,0,0,1171,1169,1,0,0,
        0,1171,1172,1,0,0,0,1172,1174,1,0,0,0,1173,1171,1,0,0,0,1174,1175,
        3,134,67,0,1175,121,1,0,0,0,1176,1181,3,178,89,0,1177,1181,3,180,
        90,0,1178,1181,5,130,0,0,1179,1181,3,168,84,0,1180,1176,1,0,0,0,
        1180,1177,1,0,0,0,1180,1178,1,0,0,0,1180,1179,1,0,0,0,1181,123,1,
        0,0,0,1182,1183,5,1,0,0,1183,1184,3,134,67,0,1184,1185,5,2,0,0,1185,
        125,1,0,0,0,1186,1199,3,128,64,0,1187,1189,5,132,0,0,1188,1187,1,
        0,0,0,1189,1192,1,0,0,0,1190,1188,1,0,0,0,1190,1191,1,0,0,0,1191,
        1193,1,0,0,0,1192,1190,1,0,0,0,1193,1195,5,13,0,0,1194,1196,3,128,
        64,0,1195,1194,1,0,0,0,1195,1196,1,0,0,0,1196,1198,1,0,0,0,1197,
        1190,1,0,0,0,1198,1201,1,0,0,0,1199,1197,1,0,0,0,1199,1200,1,0,0,
        0,1200,1217,1,0,0,0,1201,1199,1,0,0,0,1202,1204,5,132,0,0,1203,1202,
        1,0,0,0,1204,1207,1,0,0,0,1205,1203,1,0,0,0,1205,1206,1,0,0,0,1206,
        1208,1,0,0,0,1207,1205,1,0,0,0,1208,1210,5,13,0,0,1209,1211,3,128,
        64,0,1210,1209,1,0,0,0,1210,1211,1,0,0,0,1211,1213,1,0,0,0,1212,
        1205,1,0,0,0,1213,1214,1,0,0,0,1214,1212,1,0,0,0,1214,1215,1,0,0,
        0,1215,1217,1,0,0,0,1216,1186,1,0,0,0,1216,1212,1,0,0,0,1217,127,
        1,0,0,0,1218,1220,3,134,67,0,1219,1221,7,9,0,0,1220,1219,1,0,0,0,
        1220,1221,1,0,0,0,1221,129,1,0,0,0,1222,1233,3,134,67,0,1223,1225,
        5,132,0,0,1224,1223,1,0,0,0,1225,1228,1,0,0,0,1226,1224,1,0,0,0,
        1226,1227,1,0,0,0,1227,1229,1,0,0,0,1228,1226,1,0,0,0,1229,1230,
        5,13,0,0,1230,1232,3,134,67,0,1231,1226,1,0,0,0,1232,1235,1,0,0,
        0,1233,1231,1,0,0,0,1233,1234,1,0,0,0,1234,131,1,0,0,0,1235,1233,
        1,0,0,0,1236,1240,5,7,0,0,1237,1239,3,184,92,0,1238,1237,1,0,0,0,
        1239,1242,1,0,0,0,1240,1238,1,0,0,0,1240,1241,1,0,0,0,1241,1250,
        1,0,0,0,1242,1240,1,0,0,0,1243,1247,3,126,63,0,1244,1246,3,184,92,
        0,1245,1244,1,0,0,0,1246,1249,1,0,0,0,1247,1245,1,0,0,0,1247,1248,
        1,0,0,0,1248,1251,1,0,0,0,1249,1247,1,0,0,0,1250,1243,1,0,0,0,1250,
        1251,1,0,0,0,1251,1252,1,0,0,0,1252,1253,5,8,0,0,1253,133,1,0,0,
        0,1254,1255,6,67,-1,0,1255,1256,5,22,0,0,1256,1291,3,134,67,26,1257,
        1258,5,23,0,0,1258,1291,3,134,67,25,1259,1260,5,25,0,0,1260,1291,
        3,134,67,23,1261,1265,5,27,0,0,1262,1264,5,132,0,0,1263,1262,1,0,
        0,0,1264,1267,1,0,0,0,1265,1263,1,0,0,0,1265,1266,1,0,0,0,1266,1268,
        1,0,0,0,1267,1265,1,0,0,0,1268,1291,3,134,67,22,1269,1270,5,24,0,
        0,1270,1291,3,134,67,21,1271,1272,5,26,0,0,1272,1291,3,134,67,20,
        1273,1277,5,110,0,0,1274,1276,5,132,0,0,1275,1274,1,0,0,0,1276,1279,
        1,0,0,0,1277,1275,1,0,0,0,1277,1278,1,0,0,0,1278,1280,1,0,0,0,1279,
        1277,1,0,0,0,1280,1291,3,134,67,8,1281,1282,3,136,68,0,1282,1283,
        3,162,81,0,1283,1284,3,134,67,3,1284,1291,1,0,0,0,1285,1286,3,158,
        79,0,1286,1287,5,67,0,0,1287,1288,3,134,67,2,1288,1291,1,0,0,0,1289,
        1291,3,136,68,0,1290,1254,1,0,0,0,1290,1257,1,0,0,0,1290,1259,1,
        0,0,0,1290,1261,1,0,0,0,1290,1269,1,0,0,0,1290,1271,1,0,0,0,1290,
        1273,1,0,0,0,1290,1281,1,0,0,0,1290,1285,1,0,0,0,1290,1289,1,0,0,
        0,1291,1422,1,0,0,0,1292,1293,10,24,0,0,1293,1294,5,32,0,0,1294,
        1421,3,134,67,24,1295,1296,10,19,0,0,1296,1300,7,10,0,0,1297,1299,
        7,8,0,0,1298,1297,1,0,0,0,1299,1302,1,0,0,0,1300,1298,1,0,0,0,1300,
        1301,1,0,0,0,1301,1303,1,0,0,0,1302,1300,1,0,0,0,1303,1421,3,134,
        67,20,1304,1305,10,18,0,0,1305,1309,7,11,0,0,1306,1308,7,8,0,0,1307,
        1306,1,0,0,0,1308,1311,1,0,0,0,1309,1307,1,0,0,0,1309,1310,1,0,0,
        0,1310,1312,1,0,0,0,1311,1309,1,0,0,0,1312,1421,3,134,67,19,1313,
        1314,10,17,0,0,1314,1315,7,12,0,0,1315,1421,3,134,67,18,1316,1320,
        10,16,0,0,1317,1319,7,8,0,0,1318,1317,1,0,0,0,1319,1322,1,0,0,0,
        1320,1318,1,0,0,0,1320,1321,1,0,0,0,1321,1323,1,0,0,0,1322,1320,
        1,0,0,0,1323,1327,5,47,0,0,1324,1326,7,8,0,0,1325,1324,1,0,0,0,1326,
        1329,1,0,0,0,1327,1325,1,0,0,0,1327,1328,1,0,0,0,1328,1330,1,0,0,
        0,1329,1327,1,0,0,0,1330,1421,3,134,67,17,1331,1332,10,15,0,0,1332,
        1333,5,48,0,0,1333,1421,3,134,67,16,1334,1335,10,14,0,0,1335,1336,
        5,49,0,0,1336,1421,3,134,67,15,1337,1344,10,13,0,0,1338,1345,5,21,
        0,0,1339,1341,5,132,0,0,1340,1339,1,0,0,0,1341,1342,1,0,0,0,1342,
        1340,1,0,0,0,1342,1343,1,0,0,0,1343,1345,1,0,0,0,1344,1338,1,0,0,
        0,1344,1340,1,0,0,0,1345,1346,1,0,0,0,1346,1421,3,134,67,14,1347,
        1348,10,12,0,0,1348,1349,5,46,0,0,1349,1421,3,134,67,13,1350,1351,
        10,11,0,0,1351,1352,7,13,0,0,1352,1421,3,134,67,12,1353,1354,10,
        10,0,0,1354,1355,7,14,0,0,1355,1421,3,134,67,11,1356,1359,10,7,0,
        0,1357,1360,5,50,0,0,1358,1360,5,109,0,0,1359,1357,1,0,0,0,1359,
        1358,1,0,0,0,1360,1361,1,0,0,0,1361,1421,3,134,67,8,1362,1365,10,
        6,0,0,1363,1366,5,51,0,0,1364,1366,5,111,0,0,1365,1363,1,0,0,0,1365,
        1364,1,0,0,0,1366,1367,1,0,0,0,1367,1421,3,134,67,7,1368,1369,10,
        5,0,0,1369,1370,5,33,0,0,1370,1421,3,134,67,5,1371,1375,10,4,0,0,
        1372,1374,7,8,0,0,1373,1372,1,0,0,0,1374,1377,1,0,0,0,1375,1373,
        1,0,0,0,1375,1376,1,0,0,0,1376,1378,1,0,0,0,1377,1375,1,0,0,0,1378,
        1382,5,15,0,0,1379,1381,7,8,0,0,1380,1379,1,0,0,0,1381,1384,1,0,
        0,0,1382,1380,1,0,0,0,1382,1383,1,0,0,0,1383,1385,1,0,0,0,1384,1382,
        1,0,0,0,1385,1389,3,134,67,0,1386,1388,7,8,0,0,1387,1386,1,0,0,0,
        1388,1391,1,0,0,0,1389,1387,1,0,0,0,1389,1390,1,0,0,0,1390,1392,
        1,0,0,0,1391,1389,1,0,0,0,1392,1396,5,17,0,0,1393,1395,7,8,0,0,1394,
        1393,1,0,0,0,1395,1398,1,0,0,0,1396,1394,1,0,0,0,1396,1397,1,0,0,
        0,1397,1399,1,0,0,0,1398,1396,1,0,0,0,1399,1400,3,134,67,4,1400,
        1421,1,0,0,0,1401,1402,10,28,0,0,1402,1421,5,22,0,0,1403,1404,10,
        27,0,0,1404,1421,5,23,0,0,1405,1409,10,9,0,0,1406,1408,7,8,0,0,1407,
        1406,1,0,0,0,1408,1411,1,0,0,0,1409,1407,1,0,0,0,1409,1410,1,0,0,
        0,1410,1412,1,0,0,0,1411,1409,1,0,0,0,1412,1416,7,15,0,0,1413,1415,
        7,8,0,0,1414,1413,1,0,0,0,1415,1418,1,0,0,0,1416,1414,1,0,0,0,1416,
        1417,1,0,0,0,1417,1419,1,0,0,0,1418,1416,1,0,0,0,1419,1421,3,136,
        68,0,1420,1292,1,0,0,0,1420,1295,1,0,0,0,1420,1304,1,0,0,0,1420,
        1313,1,0,0,0,1420,1316,1,0,0,0,1420,1331,1,0,0,0,1420,1334,1,0,0,
        0,1420,1337,1,0,0,0,1420,1347,1,0,0,0,1420,1350,1,0,0,0,1420,1353,
        1,0,0,0,1420,1356,1,0,0,0,1420,1362,1,0,0,0,1420,1368,1,0,0,0,1420,
        1371,1,0,0,0,1420,1401,1,0,0,0,1420,1403,1,0,0,0,1420,1405,1,0,0,
        0,1421,1424,1,0,0,0,1422,1420,1,0,0,0,1422,1423,1,0,0,0,1423,135,
        1,0,0,0,1424,1422,1,0,0,0,1425,1426,6,68,-1,0,1426,1427,5,47,0,0,
        1427,1438,3,136,68,7,1428,1438,3,178,89,0,1429,1438,3,144,72,0,1430,
        1438,3,164,82,0,1431,1438,3,114,57,0,1432,1438,3,150,75,0,1433,1434,
        5,9,0,0,1434,1435,3,130,65,0,1435,1436,5,10,0,0,1436,1438,1,0,0,
        0,1437,1425,1,0,0,0,1437,1428,1,0,0,0,1437,1429,1,0,0,0,1437,1430,
        1,0,0,0,1437,1431,1,0,0,0,1437,1432,1,0,0,0,1437,1433,1,0,0,0,1438,
        1443,1,0,0,0,1439,1440,10,8,0,0,1440,1442,3,138,69,0,1441,1439,1,
        0,0,0,1442,1445,1,0,0,0,1443,1441,1,0,0,0,1443,1444,1,0,0,0,1444,
        137,1,0,0,0,1445,1443,1,0,0,0,1446,1447,7,16,0,0,1447,1458,3,142,
        71,0,1448,1450,5,16,0,0,1449,1448,1,0,0,0,1449,1450,1,0,0,0,1450,
        1451,1,0,0,0,1451,1458,3,132,66,0,1452,1454,5,9,0,0,1453,1455,3,
        126,63,0,1454,1453,1,0,0,0,1454,1455,1,0,0,0,1455,1456,1,0,0,0,1456,
        1458,5,10,0,0,1457,1446,1,0,0,0,1457,1449,1,0,0,0,1457,1452,1,0,
        0,0,1458,139,1,0,0,0,1459,1461,7,8,0,0,1460,1459,1,0,0,0,1461,1462,
        1,0,0,0,1462,1460,1,0,0,0,1462,1463,1,0,0,0,1463,1464,1,0,0,0,1464,
        1486,5,20,0,0,1465,1469,5,20,0,0,1466,1468,7,8,0,0,1467,1466,1,0,
        0,0,1468,1471,1,0,0,0,1469,1467,1,0,0,0,1469,1470,1,0,0,0,1470,1486,
        1,0,0,0,1471,1469,1,0,0,0,1472,1474,7,8,0,0,1473,1472,1,0,0,0,1474,
        1477,1,0,0,0,1475,1473,1,0,0,0,1475,1476,1,0,0,0,1476,1478,1,0,0,
        0,1477,1475,1,0,0,0,1478,1482,5,16,0,0,1479,1481,7,8,0,0,1480,1479,
        1,0,0,0,1481,1484,1,0,0,0,1482,1480,1,0,0,0,1482,1483,1,0,0,0,1483,
        1486,1,0,0,0,1484,1482,1,0,0,0,1485,1460,1,0,0,0,1485,1465,1,0,0,
        0,1485,1475,1,0,0,0,1486,141,1,0,0,0,1487,1492,3,178,89,0,1488,1492,
        3,144,72,0,1489,1492,3,182,91,0,1490,1492,3,164,82,0,1491,1487,1,
        0,0,0,1491,1488,1,0,0,0,1491,1489,1,0,0,0,1491,1490,1,0,0,0,1492,
        143,1,0,0,0,1493,1494,3,122,61,0,1494,1499,3,124,62,0,1495,1498,
        3,122,61,0,1496,1498,3,124,62,0,1497,1495,1,0,0,0,1497,1496,1,0,
        0,0,1498,1501,1,0,0,0,1499,1497,1,0,0,0,1499,1500,1,0,0,0,1500,1511,
        1,0,0,0,1501,1499,1,0,0,0,1502,1507,3,124,62,0,1503,1506,3,122,61,
        0,1504,1506,3,124,62,0,1505,1503,1,0,0,0,1505,1504,1,0,0,0,1506,
        1509,1,0,0,0,1507,1505,1,0,0,0,1507,1508,1,0,0,0,1508,1511,1,0,0,
        0,1509,1507,1,0,0,0,1510,1493,1,0,0,0,1510,1502,1,0,0,0,1511,145,
        1,0,0,0,1512,1513,5,14,0,0,1513,1514,3,134,67,0,1514,147,1,0,0,0,
        1515,1516,3,178,89,0,1516,149,1,0,0,0,1517,1521,5,11,0,0,1518,1520,
        3,184,92,0,1519,1518,1,0,0,0,1520,1523,1,0,0,0,1521,1519,1,0,0,0,
        1521,1522,1,0,0,0,1522,1544,1,0,0,0,1523,1521,1,0,0,0,1524,1535,
        3,120,60,0,1525,1527,5,132,0,0,1526,1525,1,0,0,0,1527,1530,1,0,0,
        0,1528,1526,1,0,0,0,1528,1529,1,0,0,0,1529,1531,1,0,0,0,1530,1528,
        1,0,0,0,1531,1532,5,13,0,0,1532,1534,3,120,60,0,1533,1528,1,0,0,
        0,1534,1537,1,0,0,0,1535,1533,1,0,0,0,1535,1536,1,0,0,0,1536,1541,
        1,0,0,0,1537,1535,1,0,0,0,1538,1540,3,184,92,0,1539,1538,1,0,0,0,
        1540,1543,1,0,0,0,1541,1539,1,0,0,0,1541,1542,1,0,0,0,1542,1545,
        1,0,0,0,1543,1541,1,0,0,0,1544,1524,1,0,0,0,1544,1545,1,0,0,0,1545,
        1546,1,0,0,0,1546,1547,5,12,0,0,1547,151,1,0,0,0,1548,1550,3,154,
        77,0,1549,1548,1,0,0,0,1549,1550,1,0,0,0,1550,1551,1,0,0,0,1551,
        1552,3,176,88,0,1552,1554,5,9,0,0,1553,1555,3,108,54,0,1554,1553,
        1,0,0,0,1554,1555,1,0,0,0,1555,1556,1,0,0,0,1556,1557,5,10,0,0,1557,
        153,1,0,0,0,1558,1562,5,126,0,0,1559,1561,5,132,0,0,1560,1559,1,
        0,0,0,1561,1564,1,0,0,0,1562,1560,1,0,0,0,1562,1563,1,0,0,0,1563,
        155,1,0,0,0,1564,1562,1,0,0,0,1565,1575,3,152,76,0,1566,1568,3,154,
        77,0,1567,1566,1,0,0,0,1567,1568,1,0,0,0,1568,1569,1,0,0,0,1569,
        1571,5,9,0,0,1570,1572,3,108,54,0,1571,1570,1,0,0,0,1571,1572,1,
        0,0,0,1572,1573,1,0,0,0,1573,1575,5,10,0,0,1574,1565,1,0,0,0,1574,
        1567,1,0,0,0,1575,157,1,0,0,0,1576,1578,3,154,77,0,1577,1576,1,0,
        0,0,1577,1578,1,0,0,0,1578,1579,1,0,0,0,1579,1581,3,176,88,0,1580,
        1577,1,0,0,0,1580,1581,1,0,0,0,1581,1582,1,0,0,0,1582,1595,5,28,
        0,0,1583,1585,3,154,77,0,1584,1583,1,0,0,0,1584,1585,1,0,0,0,1585,
        1587,1,0,0,0,1586,1588,5,47,0,0,1587,1586,1,0,0,0,1587,1588,1,0,
        0,0,1588,1589,1,0,0,0,1589,1591,3,176,88,0,1590,1592,5,15,0,0,1591,
        1590,1,0,0,0,1591,1592,1,0,0,0,1592,1595,1,0,0,0,1593,1595,3,156,
        78,0,1594,1580,1,0,0,0,1594,1584,1,0,0,0,1594,1593,1,0,0,0,1595,
        159,1,0,0,0,1596,1597,5,67,0,0,1597,1606,3,134,67,0,1598,1600,7,
        8,0,0,1599,1598,1,0,0,0,1600,1603,1,0,0,0,1601,1599,1,0,0,0,1601,
        1602,1,0,0,0,1602,1604,1,0,0,0,1603,1601,1,0,0,0,1604,1606,3,24,
        12,0,1605,1596,1,0,0,0,1605,1601,1,0,0,0,1606,161,1,0,0,0,1607,1608,
        7,17,0,0,1608,163,1,0,0,0,1609,1614,3,166,83,0,1610,1614,3,168,84,
        0,1611,1614,3,170,85,0,1612,1614,7,18,0,0,1613,1609,1,0,0,0,1613,
        1610,1,0,0,0,1613,1611,1,0,0,0,1613,1612,1,0,0,0,1614,165,1,0,0,
        0,1615,1616,7,19,0,0,1616,167,1,0,0,0,1617,1618,7,20,0,0,1618,169,
        1,0,0,0,1619,1620,7,21,0,0,1620,171,1,0,0,0,1621,1622,5,113,0,0,
        1622,1623,3,122,61,0,1623,173,1,0,0,0,1624,1625,5,114,0,0,1625,1626,
        3,122,61,0,1626,175,1,0,0,0,1627,1630,3,178,89,0,1628,1630,3,180,
        90,0,1629,1627,1,0,0,0,1629,1628,1,0,0,0,1630,177,1,0,0,0,1631,1632,
        7,22,0,0,1632,179,1,0,0,0,1633,1637,3,182,91,0,1634,1637,5,69,0,
        0,1635,1637,3,166,83,0,1636,1633,1,0,0,0,1636,1634,1,0,0,0,1636,
        1635,1,0,0,0,1637,181,1,0,0,0,1638,1639,7,23,0,0,1639,183,1,0,0,
        0,1640,1641,7,8,0,0,1641,185,1,0,0,0,1642,1643,7,24,0,0,1643,187,
        1,0,0,0,236,192,199,201,209,214,218,222,226,230,235,240,242,248,
        252,257,266,272,277,281,284,293,299,304,324,332,336,345,351,355,
        361,370,377,383,390,398,404,407,415,422,427,432,436,443,453,463,
        470,475,479,485,490,493,500,507,510,514,517,523,530,535,538,544,
        551,556,559,561,564,569,574,578,584,591,597,602,607,611,617,624,
        630,636,644,650,658,664,668,674,678,684,688,693,698,703,712,718,
        727,732,737,744,749,758,766,773,779,783,789,796,800,803,810,817,
        820,828,832,837,841,848,852,857,861,868,876,884,892,899,905,912,
        920,932,939,945,948,953,963,971,973,983,986,993,996,1002,1009,1013,
        1026,1037,1039,1043,1049,1054,1059,1072,1082,1089,1095,1101,1105,
        1108,1114,1121,1124,1131,1137,1144,1149,1153,1164,1171,1180,1190,
        1195,1199,1205,1210,1214,1216,1220,1226,1233,1240,1247,1250,1265,
        1277,1290,1300,1309,1320,1327,1342,1344,1359,1365,1375,1382,1389,
        1396,1409,1416,1420,1422,1437,1443,1449,1454,1457,1462,1469,1475,
        1482,1485,1491,1497,1499,1505,1507,1510,1521,1528,1535,1541,1544,
        1549,1554,1562,1567,1571,1574,1577,1580,1584,1587,1591,1594,1601,
        1605,1613,1629,1636
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!AutoHotkeyParser.__ATN) {
            AutoHotkeyParser.__ATN = new antlr.ATNDeserializer().deserialize(AutoHotkeyParser._serializedATN);
        }

        return AutoHotkeyParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(AutoHotkeyParser.literalNames, AutoHotkeyParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return AutoHotkeyParser.vocabulary;
    }

    private static readonly decisionsToDFA = AutoHotkeyParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sourceElements(): SourceElementsContext | null {
        return this.getRuleContext(0, SourceElementsContext);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_program;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceElementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sourceElement(): SourceElementContext[];
    public sourceElement(i: number): SourceElementContext | null;
    public sourceElement(i?: number): SourceElementContext[] | SourceElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SourceElementContext);
        }

        return this.getRuleContext(i, SourceElementContext);
    }
    public eos(): EosContext[];
    public eos(i: number): EosContext | null;
    public eos(i?: number): EosContext[] | EosContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EosContext);
        }

        return this.getRuleContext(i, EosContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_sourceElements;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterSourceElements) {
             listener.enterSourceElements(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitSourceElements) {
             listener.exitSourceElements(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitSourceElements) {
            return visitor.visitSourceElements(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public directive(): DirectiveContext | null {
        return this.getRuleContext(0, DirectiveContext);
    }
    public remap(): RemapContext | null {
        return this.getRuleContext(0, RemapContext);
    }
    public hotstring(): HotstringContext | null {
        return this.getRuleContext(0, HotstringContext);
    }
    public hotkey(): HotkeyContext | null {
        return this.getRuleContext(0, HotkeyContext);
    }
    public statement(): StatementContext | null {
        return this.getRuleContext(0, StatementContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_sourceElement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterSourceElement) {
             listener.enterSourceElement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitSourceElement) {
             listener.exitSourceElement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitSourceElement) {
            return visitor.visitSourceElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Hashtag(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Hashtag, 0)!;
    }
    public positionalDirective(): PositionalDirectiveContext | null {
        return this.getRuleContext(0, PositionalDirectiveContext);
    }
    public generalDirective(): GeneralDirectiveContext | null {
        return this.getRuleContext(0, GeneralDirectiveContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_directive;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterDirective) {
             listener.enterDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitDirective) {
             listener.exitDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitDirective) {
            return visitor.visitDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PositionalDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_positionalDirective;
    }
    public override copyFrom(ctx: PositionalDirectiveContext): void {
        super.copyFrom(ctx);
    }
}
export class HotstringDirectiveContext extends PositionalDirectiveContext {
    public constructor(ctx: PositionalDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Hotstring(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Hotstring, 0)!;
    }
    public HotstringOptions(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.HotstringOptions, 0);
    }
    public NoMouse(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.NoMouse, 0);
    }
    public EndChars(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.EndChars, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterHotstringDirective) {
             listener.enterHotstringDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitHotstringDirective) {
             listener.exitHotstringDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitHotstringDirective) {
            return visitor.visitHotstringDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class InputLevelDirectiveContext extends PositionalDirectiveContext {
    public constructor(ctx: PositionalDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public InputLevel(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.InputLevel, 0)!;
    }
    public numericLiteral(): NumericLiteralContext | null {
        return this.getRuleContext(0, NumericLiteralContext);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterInputLevelDirective) {
             listener.enterInputLevelDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitInputLevelDirective) {
             listener.exitInputLevelDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitInputLevelDirective) {
            return visitor.visitInputLevelDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SuspendExemptDirectiveContext extends PositionalDirectiveContext {
    public constructor(ctx: PositionalDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public SuspendExempt(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.SuspendExempt, 0)!;
    }
    public numericLiteral(): NumericLiteralContext | null {
        return this.getRuleContext(0, NumericLiteralContext);
    }
    public boolean(): BooleanContext | null {
        return this.getRuleContext(0, BooleanContext);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterSuspendExemptDirective) {
             listener.enterSuspendExemptDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitSuspendExemptDirective) {
             listener.exitSuspendExemptDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitSuspendExemptDirective) {
            return visitor.visitSuspendExemptDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UseHookDirectiveContext extends PositionalDirectiveContext {
    public constructor(ctx: PositionalDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public UseHook(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.UseHook, 0)!;
    }
    public numericLiteral(): NumericLiteralContext | null {
        return this.getRuleContext(0, NumericLiteralContext);
    }
    public boolean(): BooleanContext | null {
        return this.getRuleContext(0, BooleanContext);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterUseHookDirective) {
             listener.enterUseHookDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitUseHookDirective) {
             listener.exitUseHookDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitUseHookDirective) {
            return visitor.visitUseHookDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class HotIfDirectiveContext extends PositionalDirectiveContext {
    public constructor(ctx: PositionalDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public HotIf(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.HotIf, 0)!;
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterHotIfDirective) {
             listener.enterHotIfDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitHotIfDirective) {
             listener.exitHotIfDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitHotIfDirective) {
            return visitor.visitHotIfDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GeneralDirectiveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_generalDirective;
    }
    public override copyFrom(ctx: GeneralDirectiveContext): void {
        super.copyFrom(ctx);
    }
}
export class PersistentDirectiveContext extends GeneralDirectiveContext {
    public constructor(ctx: GeneralDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Persistent(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Persistent, 0)!;
    }
    public True(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.True, 0);
    }
    public False(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.False, 0);
    }
    public Digits(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Digits, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPersistentDirective) {
             listener.enterPersistentDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPersistentDirective) {
             listener.exitPersistentDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPersistentDirective) {
            return visitor.visitPersistentDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class OptionalTextualDirectiveContext extends GeneralDirectiveContext {
    public constructor(ctx: GeneralDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Warn(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Warn, 0);
    }
    public SingleInstance(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.SingleInstance, 0);
    }
    public Text(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Text, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterOptionalTextualDirective) {
             listener.enterOptionalTextualDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitOptionalTextualDirective) {
             listener.exitOptionalTextualDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitOptionalTextualDirective) {
            return visitor.visitOptionalTextualDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TextualDirectiveContext extends GeneralDirectiveContext {
    public constructor(ctx: GeneralDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Text(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Text, 0)!;
    }
    public Include(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Include, 0);
    }
    public IncludeAgain(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.IncludeAgain, 0);
    }
    public DllLoad(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.DllLoad, 0);
    }
    public Requires(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Requires, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterTextualDirective) {
             listener.enterTextualDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitTextualDirective) {
             listener.exitTextualDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitTextualDirective) {
            return visitor.visitTextualDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumericDirectiveContext extends GeneralDirectiveContext {
    public constructor(ctx: GeneralDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Digits(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Digits, 0)!;
    }
    public HotIfTimeout(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.HotIfTimeout, 0);
    }
    public MaxThreads(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.MaxThreads, 0);
    }
    public MaxThreadsBuffer(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.MaxThreadsBuffer, 0);
    }
    public MaxThreadsPerHotkey(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.MaxThreadsPerHotkey, 0);
    }
    public ClipboardTimeout(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.ClipboardTimeout, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterNumericDirective) {
             listener.enterNumericDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitNumericDirective) {
             listener.exitNumericDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitNumericDirective) {
            return visitor.visitNumericDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ErrorStdOutDirectiveContext extends GeneralDirectiveContext {
    public constructor(ctx: GeneralDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ErrorStdOut(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.ErrorStdOut, 0)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterErrorStdOutDirective) {
             listener.enterErrorStdOutDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitErrorStdOutDirective) {
             listener.exitErrorStdOutDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitErrorStdOutDirective) {
            return visitor.visitErrorStdOutDirective(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RemapContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RemapKey(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.RemapKey, 0)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_remap;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterRemap) {
             listener.enterRemap(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitRemap) {
             listener.exitRemap(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitRemap) {
            return visitor.visitRemap(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HotstringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HotstringTrigger(): antlr.TerminalNode[];
    public HotstringTrigger(i: number): antlr.TerminalNode | null;
    public HotstringTrigger(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.HotstringTrigger);
    	} else {
    		return this.getToken(AutoHotkeyParser.HotstringTrigger, i);
    	}
    }
    public hotstringExpansion(): HotstringExpansionContext | null {
        return this.getRuleContext(0, HotstringExpansionContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public statement(): StatementContext | null {
        return this.getRuleContext(0, StatementContext);
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_hotstring;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterHotstring) {
             listener.enterHotstring(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitHotstring) {
             listener.exitHotstring(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitHotstring) {
            return visitor.visitHotstring(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HotstringExpansionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HotstringSingleLineExpansion(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.HotstringSingleLineExpansion, 0);
    }
    public HotstringMultiLineExpansion(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.HotstringMultiLineExpansion, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_hotstringExpansion;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterHotstringExpansion) {
             listener.enterHotstringExpansion(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitHotstringExpansion) {
             listener.exitHotstringExpansion(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitHotstringExpansion) {
            return visitor.visitHotstringExpansion(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class HotkeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public HotkeyTrigger(): antlr.TerminalNode[];
    public HotkeyTrigger(i: number): antlr.TerminalNode | null;
    public HotkeyTrigger(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.HotkeyTrigger);
    	} else {
    		return this.getToken(AutoHotkeyParser.HotkeyTrigger, i);
    	}
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public statement(): StatementContext | null {
        return this.getRuleContext(0, StatementContext);
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_hotkey;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterHotkey) {
             listener.enterHotkey(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitHotkey) {
             listener.exitHotkey(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitHotkey) {
            return visitor.visitHotkey(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableStatement(): VariableStatementContext | null {
        return this.getRuleContext(0, VariableStatementContext);
    }
    public ifStatement(): IfStatementContext | null {
        return this.getRuleContext(0, IfStatementContext);
    }
    public iterationStatement(): IterationStatementContext | null {
        return this.getRuleContext(0, IterationStatementContext);
    }
    public continueStatement(): ContinueStatementContext | null {
        return this.getRuleContext(0, ContinueStatementContext);
    }
    public breakStatement(): BreakStatementContext | null {
        return this.getRuleContext(0, BreakStatementContext);
    }
    public returnStatement(): ReturnStatementContext | null {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    public yieldStatement(): YieldStatementContext | null {
        return this.getRuleContext(0, YieldStatementContext);
    }
    public labelledStatement(): LabelledStatementContext | null {
        return this.getRuleContext(0, LabelledStatementContext);
    }
    public gotoStatement(): GotoStatementContext | null {
        return this.getRuleContext(0, GotoStatementContext);
    }
    public switchStatement(): SwitchStatementContext | null {
        return this.getRuleContext(0, SwitchStatementContext);
    }
    public throwStatement(): ThrowStatementContext | null {
        return this.getRuleContext(0, ThrowStatementContext);
    }
    public tryStatement(): TryStatementContext | null {
        return this.getRuleContext(0, TryStatementContext);
    }
    public awaitStatement(): AwaitStatementContext | null {
        return this.getRuleContext(0, AwaitStatementContext);
    }
    public deleteStatement(): DeleteStatementContext | null {
        return this.getRuleContext(0, DeleteStatementContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public functionStatement(): FunctionStatementContext | null {
        return this.getRuleContext(0, FunctionStatementContext);
    }
    public blockStatement(): BlockStatementContext | null {
        return this.getRuleContext(0, BlockStatementContext);
    }
    public expressionStatement(): ExpressionStatementContext | null {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_statement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_blockStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBlockStatement) {
             listener.enterBlockStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBlockStatement) {
             listener.exitBlockStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBlockStatement) {
            return visitor.visitBlockStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OpenBrace(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.OpenBrace, 0)!;
    }
    public CloseBrace(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.CloseBrace, 0)!;
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public statementList(): StatementListContext | null {
        return this.getRuleContext(0, StatementListContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_block;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_statementList;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterStatementList) {
             listener.enterStatementList(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitStatementList) {
             listener.exitStatementList(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitStatementList) {
            return visitor.visitStatementList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Global(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Global, 0);
    }
    public Local(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Local, 0);
    }
    public Static(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Static, 0);
    }
    public variableDeclarationList(): VariableDeclarationListContext | null {
        return this.getRuleContext(0, VariableDeclarationListContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_variableStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterVariableStatement) {
             listener.enterVariableStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitVariableStatement) {
             listener.exitVariableStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitVariableStatement) {
            return visitor.visitVariableStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AwaitStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Await(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Await, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_awaitStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterAwaitStatement) {
             listener.enterAwaitStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitAwaitStatement) {
             listener.exitAwaitStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitAwaitStatement) {
            return visitor.visitAwaitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeleteStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Delete(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Delete, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_deleteStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterDeleteStatement) {
             listener.enterDeleteStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitDeleteStatement) {
             listener.exitDeleteStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitDeleteStatement) {
            return visitor.visitDeleteStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | null {
        return this.getRuleContext(0, FunctionDeclarationContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_declaration;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterDeclaration) {
             listener.enterDeclaration(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitDeclaration) {
             listener.exitDeclaration(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclarationListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaration(): VariableDeclarationContext[];
    public variableDeclaration(i: number): VariableDeclarationContext | null;
    public variableDeclaration(i?: number): VariableDeclarationContext[] | VariableDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }

        return this.getRuleContext(i, VariableDeclarationContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_variableDeclarationList;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterVariableDeclarationList) {
             listener.enterVariableDeclarationList(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitVariableDeclarationList) {
             listener.exitVariableDeclarationList(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclarationList) {
            return visitor.visitVariableDeclarationList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VariableDeclarationContext extends antlr.ParserRuleContext {
    public _op?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public assignable(): AssignableContext {
        return this.getRuleContext(0, AssignableContext)!;
    }
    public assignmentOperator(): AssignmentOperatorContext | null {
        return this.getRuleContext(0, AssignmentOperatorContext);
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public PlusPlus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.PlusPlus, 0);
    }
    public MinusMinus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.MinusMinus, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_variableDeclaration;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterVariableDeclaration) {
             listener.enterVariableDeclaration(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitVariableDeclaration) {
             listener.exitVariableDeclaration(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_functionStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFunctionStatement) {
             listener.enterFunctionStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFunctionStatement) {
             listener.exitFunctionStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionStatement) {
            return visitor.visitFunctionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionSequence(): ExpressionSequenceContext {
        return this.getRuleContext(0, ExpressionSequenceContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_expressionStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterExpressionStatement) {
             listener.enterExpressionStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitExpressionStatement) {
             listener.exitExpressionStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IfStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public If(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.If, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public flowBlock(): FlowBlockContext {
        return this.getRuleContext(0, FlowBlockContext)!;
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public elseProduction(): ElseProductionContext | null {
        return this.getRuleContext(0, ElseProductionContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_ifStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterIfStatement) {
             listener.enterIfStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitIfStatement) {
             listener.exitIfStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitIfStatement) {
            return visitor.visitIfStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FlowBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext | null {
        return this.getRuleContext(0, StatementContext);
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_flowBlock;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFlowBlock) {
             listener.enterFlowBlock(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFlowBlock) {
             listener.exitFlowBlock(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFlowBlock) {
            return visitor.visitFlowBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UntilProductionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOL(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.EOL, 0)!;
    }
    public Until(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Until, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_untilProduction;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterUntilProduction) {
             listener.enterUntilProduction(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitUntilProduction) {
             listener.exitUntilProduction(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitUntilProduction) {
            return visitor.visitUntilProduction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElseProductionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOL(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.EOL, 0)!;
    }
    public Else(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Else, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_elseProduction;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterElseProduction) {
             listener.enterElseProduction(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitElseProduction) {
             listener.exitElseProduction(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitElseProduction) {
            return visitor.visitElseProduction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IterationStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_iterationStatement;
    }
    public override copyFrom(ctx: IterationStatementContext): void {
        super.copyFrom(ctx);
    }
}
export class LoopStatementContext extends IterationStatementContext {
    public constructor(ctx: IterationStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Loop(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Loop, 0)!;
    }
    public flowBlock(): FlowBlockContext {
        return this.getRuleContext(0, FlowBlockContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public untilProduction(): UntilProductionContext | null {
        return this.getRuleContext(0, UntilProductionContext);
    }
    public elseProduction(): ElseProductionContext | null {
        return this.getRuleContext(0, ElseProductionContext);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterLoopStatement) {
             listener.enterLoopStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitLoopStatement) {
             listener.exitLoopStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitLoopStatement) {
            return visitor.visitLoopStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class WhileStatementContext extends IterationStatementContext {
    public constructor(ctx: IterationStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public While(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.While, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public flowBlock(): FlowBlockContext {
        return this.getRuleContext(0, FlowBlockContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public untilProduction(): UntilProductionContext | null {
        return this.getRuleContext(0, UntilProductionContext);
    }
    public elseProduction(): ElseProductionContext | null {
        return this.getRuleContext(0, ElseProductionContext);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterWhileStatement) {
             listener.enterWhileStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitWhileStatement) {
             listener.exitWhileStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ForInStatementContext extends IterationStatementContext {
    public constructor(ctx: IterationStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public For(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.For, 0)!;
    }
    public forInParameters(): ForInParametersContext {
        return this.getRuleContext(0, ForInParametersContext)!;
    }
    public flowBlock(): FlowBlockContext {
        return this.getRuleContext(0, FlowBlockContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public untilProduction(): UntilProductionContext | null {
        return this.getRuleContext(0, UntilProductionContext);
    }
    public elseProduction(): ElseProductionContext | null {
        return this.getRuleContext(0, ElseProductionContext);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterForInStatement) {
             listener.enterForInStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitForInStatement) {
             listener.exitForInStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitForInStatement) {
            return visitor.visitForInStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SpecializedLoopStatementContext extends IterationStatementContext {
    public _type_?: Token | null;
    public constructor(ctx: IterationStatementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Loop(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Loop, 0)!;
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public flowBlock(): FlowBlockContext {
        return this.getRuleContext(0, FlowBlockContext)!;
    }
    public Files(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Files, 0);
    }
    public Read(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Read, 0);
    }
    public Reg(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Reg, 0);
    }
    public Parse(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Parse, 0);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public untilProduction(): UntilProductionContext | null {
        return this.getRuleContext(0, UntilProductionContext);
    }
    public elseProduction(): ElseProductionContext | null {
        return this.getRuleContext(0, ElseProductionContext);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterSpecializedLoopStatement) {
             listener.enterSpecializedLoopStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitSpecializedLoopStatement) {
             listener.exitSpecializedLoopStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitSpecializedLoopStatement) {
            return visitor.visitSpecializedLoopStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ForInParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public In(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.In, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public assignable(): AssignableContext[];
    public assignable(i: number): AssignableContext | null;
    public assignable(i?: number): AssignableContext[] | AssignableContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AssignableContext);
        }

        return this.getRuleContext(i, AssignableContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public OpenParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OpenParen, 0);
    }
    public CloseParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.CloseParen, 0);
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_forInParameters;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterForInParameters) {
             listener.enterForInParameters(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitForInParameters) {
             listener.exitForInParameters(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitForInParameters) {
            return visitor.visitForInParameters(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ContinueStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Continue(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Continue, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public propertyName(): PropertyNameContext | null {
        return this.getRuleContext(0, PropertyNameContext);
    }
    public OpenParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OpenParen, 0);
    }
    public CloseParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.CloseParen, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_continueStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterContinueStatement) {
             listener.enterContinueStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitContinueStatement) {
             listener.exitContinueStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitContinueStatement) {
            return visitor.visitContinueStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BreakStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Break(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Break, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public OpenParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OpenParen, 0);
    }
    public propertyName(): PropertyNameContext | null {
        return this.getRuleContext(0, PropertyNameContext);
    }
    public CloseParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.CloseParen, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_breakStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBreakStatement) {
             listener.enterBreakStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBreakStatement) {
             listener.exitBreakStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBreakStatement) {
            return visitor.visitBreakStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Return(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Return, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_returnStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterReturnStatement) {
             listener.enterReturnStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitReturnStatement) {
             listener.exitReturnStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitReturnStatement) {
            return visitor.visitReturnStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class YieldStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Yield(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Yield, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_yieldStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterYieldStatement) {
             listener.enterYieldStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitYieldStatement) {
             listener.exitYieldStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitYieldStatement) {
            return visitor.visitYieldStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SwitchStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Switch(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Switch, 0)!;
    }
    public caseBlock(): CaseBlockContext {
        return this.getRuleContext(0, CaseBlockContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public Comma(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Comma, 0);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_switchStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterSwitchStatement) {
             listener.enterSwitchStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitSwitchStatement) {
             listener.exitSwitchStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitSwitchStatement) {
            return visitor.visitSwitchStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CaseBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OpenBrace(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.OpenBrace, 0)!;
    }
    public CloseBrace(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.CloseBrace, 0)!;
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public caseClause(): CaseClauseContext[];
    public caseClause(i: number): CaseClauseContext | null;
    public caseClause(i?: number): CaseClauseContext[] | CaseClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CaseClauseContext);
        }

        return this.getRuleContext(i, CaseClauseContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_caseBlock;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterCaseBlock) {
             listener.enterCaseBlock(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitCaseBlock) {
             listener.exitCaseBlock(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitCaseBlock) {
            return visitor.visitCaseBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CaseClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Colon, 0)!;
    }
    public Case(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Case, 0);
    }
    public expressionSequence(): ExpressionSequenceContext | null {
        return this.getRuleContext(0, ExpressionSequenceContext);
    }
    public Default(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Default, 0);
    }
    public statementList(): StatementListContext | null {
        return this.getRuleContext(0, StatementListContext);
    }
    public EOL(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.EOL, 0);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_caseClause;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterCaseClause) {
             listener.enterCaseClause(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitCaseClause) {
             listener.exitCaseClause(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitCaseClause) {
            return visitor.visitCaseClause(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LabelledStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Colon, 0)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_labelledStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterLabelledStatement) {
             listener.enterLabelledStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitLabelledStatement) {
             listener.exitLabelledStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitLabelledStatement) {
            return visitor.visitLabelledStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GotoStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Goto(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Goto, 0)!;
    }
    public propertyName(): PropertyNameContext {
        return this.getRuleContext(0, PropertyNameContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public OpenParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OpenParen, 0);
    }
    public CloseParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.CloseParen, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_gotoStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterGotoStatement) {
             listener.enterGotoStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitGotoStatement) {
             listener.exitGotoStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitGotoStatement) {
            return visitor.visitGotoStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ThrowStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Throw(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Throw, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_throwStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterThrowStatement) {
             listener.enterThrowStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitThrowStatement) {
             listener.exitThrowStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitThrowStatement) {
            return visitor.visitThrowStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TryStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Try(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Try, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public catchProduction(): CatchProductionContext[];
    public catchProduction(i: number): CatchProductionContext | null;
    public catchProduction(i?: number): CatchProductionContext[] | CatchProductionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CatchProductionContext);
        }

        return this.getRuleContext(i, CatchProductionContext);
    }
    public elseProduction(): ElseProductionContext | null {
        return this.getRuleContext(0, ElseProductionContext);
    }
    public finallyProduction(): FinallyProductionContext | null {
        return this.getRuleContext(0, FinallyProductionContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_tryStatement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterTryStatement) {
             listener.enterTryStatement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitTryStatement) {
             listener.exitTryStatement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitTryStatement) {
            return visitor.visitTryStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatchProductionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOL(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.EOL, 0)!;
    }
    public Catch(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Catch, 0)!;
    }
    public flowBlock(): FlowBlockContext {
        return this.getRuleContext(0, FlowBlockContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public catchAssignable(): CatchAssignableContext | null {
        return this.getRuleContext(0, CatchAssignableContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_catchProduction;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterCatchProduction) {
             listener.enterCatchProduction(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitCatchProduction) {
             listener.exitCatchProduction(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitCatchProduction) {
            return visitor.visitCatchProduction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatchAssignableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public catchClasses(): CatchClassesContext | null {
        return this.getRuleContext(0, CatchClassesContext);
    }
    public As(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.As, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public OpenParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OpenParen, 0);
    }
    public CloseParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.CloseParen, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_catchAssignable;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterCatchAssignable) {
             listener.enterCatchAssignable(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitCatchAssignable) {
             listener.exitCatchAssignable(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitCatchAssignable) {
            return visitor.visitCatchAssignable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CatchClassesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_catchClasses;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterCatchClasses) {
             listener.enterCatchClasses(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitCatchClasses) {
             listener.exitCatchClasses(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitCatchClasses) {
            return visitor.visitCatchClasses(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FinallyProductionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOL(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.EOL, 0)!;
    }
    public Finally(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Finally, 0)!;
    }
    public statement(): StatementContext {
        return this.getRuleContext(0, StatementContext)!;
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_finallyProduction;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFinallyProduction) {
             listener.enterFinallyProduction(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFinallyProduction) {
             listener.exitFinallyProduction(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFinallyProduction) {
            return visitor.visitFinallyProduction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionHead(): FunctionHeadContext {
        return this.getRuleContext(0, FunctionHeadContext)!;
    }
    public functionBody(): FunctionBodyContext {
        return this.getRuleContext(0, FunctionBodyContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_functionDeclaration;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFunctionDeclaration) {
             listener.enterFunctionDeclaration(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFunctionDeclaration) {
             listener.exitFunctionDeclaration(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Class(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Class, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public classTail(): ClassTailContext {
        return this.getRuleContext(0, ClassTailContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public Extends(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Extends, 0);
    }
    public classExtensionName(): ClassExtensionNameContext | null {
        return this.getRuleContext(0, ClassExtensionNameContext);
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_classDeclaration;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterClassDeclaration) {
             listener.enterClassDeclaration(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitClassDeclaration) {
             listener.exitClassDeclaration(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassExtensionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public Dot(): antlr.TerminalNode[];
    public Dot(i: number): antlr.TerminalNode | null;
    public Dot(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Dot);
    	} else {
    		return this.getToken(AutoHotkeyParser.Dot, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_classExtensionName;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterClassExtensionName) {
             listener.enterClassExtensionName(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitClassExtensionName) {
             listener.exitClassExtensionName(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitClassExtensionName) {
            return visitor.visitClassExtensionName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassTailContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OpenBrace(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.OpenBrace, 0)!;
    }
    public CloseBrace(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.CloseBrace, 0)!;
    }
    public classElement(): ClassElementContext[];
    public classElement(i: number): ClassElementContext | null;
    public classElement(i?: number): ClassElementContext[] | ClassElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassElementContext);
        }

        return this.getRuleContext(i, ClassElementContext);
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_classTail;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterClassTail) {
             listener.enterClassTail(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitClassTail) {
             listener.exitClassTail(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitClassTail) {
            return visitor.visitClassTail(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassElementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_classElement;
    }
    public override copyFrom(ctx: ClassElementContext): void {
        super.copyFrom(ctx);
    }
}
export class NestedClassDeclarationContext extends ClassElementContext {
    public constructor(ctx: ClassElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public classDeclaration(): ClassDeclarationContext {
        return this.getRuleContext(0, ClassDeclarationContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterNestedClassDeclaration) {
             listener.enterNestedClassDeclaration(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitNestedClassDeclaration) {
             listener.exitNestedClassDeclaration(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitNestedClassDeclaration) {
            return visitor.visitNestedClassDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ClassFieldDeclarationContext extends ClassElementContext {
    public constructor(ctx: ClassElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public fieldDefinition(): FieldDefinitionContext[];
    public fieldDefinition(i: number): FieldDefinitionContext | null;
    public fieldDefinition(i?: number): FieldDefinitionContext[] | FieldDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FieldDefinitionContext);
        }

        return this.getRuleContext(i, FieldDefinitionContext);
    }
    public Static(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Static, 0);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterClassFieldDeclaration) {
             listener.enterClassFieldDeclaration(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitClassFieldDeclaration) {
             listener.exitClassFieldDeclaration(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitClassFieldDeclaration) {
            return visitor.visitClassFieldDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ClassMethodDeclarationContext extends ClassElementContext {
    public constructor(ctx: ClassElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public methodDefinition(): MethodDefinitionContext {
        return this.getRuleContext(0, MethodDefinitionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterClassMethodDeclaration) {
             listener.enterClassMethodDeclaration(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitClassMethodDeclaration) {
             listener.exitClassMethodDeclaration(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitClassMethodDeclaration) {
            return visitor.visitClassMethodDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ClassPropertyDeclarationContext extends ClassElementContext {
    public constructor(ctx: ClassElementContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public propertyDefinition(): PropertyDefinitionContext {
        return this.getRuleContext(0, PropertyDefinitionContext)!;
    }
    public Static(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Static, 0);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterClassPropertyDeclaration) {
             listener.enterClassPropertyDeclaration(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitClassPropertyDeclaration) {
             listener.exitClassPropertyDeclaration(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitClassPropertyDeclaration) {
            return visitor.visitClassPropertyDeclaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MethodDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionHead(): FunctionHeadContext {
        return this.getRuleContext(0, FunctionHeadContext)!;
    }
    public functionBody(): FunctionBodyContext {
        return this.getRuleContext(0, FunctionBodyContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_methodDefinition;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterMethodDefinition) {
             listener.enterMethodDefinition(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitMethodDefinition) {
             listener.exitMethodDefinition(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitMethodDefinition) {
            return visitor.visitMethodDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classPropertyName(): ClassPropertyNameContext {
        return this.getRuleContext(0, ClassPropertyNameContext)!;
    }
    public Arrow(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Arrow, 0);
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public OpenBrace(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OpenBrace, 0);
    }
    public CloseBrace(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.CloseBrace, 0);
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public propertyGetterDefinition(): PropertyGetterDefinitionContext[];
    public propertyGetterDefinition(i: number): PropertyGetterDefinitionContext | null;
    public propertyGetterDefinition(i?: number): PropertyGetterDefinitionContext[] | PropertyGetterDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyGetterDefinitionContext);
        }

        return this.getRuleContext(i, PropertyGetterDefinitionContext);
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public propertySetterDefinition(): PropertySetterDefinitionContext[];
    public propertySetterDefinition(i: number): PropertySetterDefinitionContext | null;
    public propertySetterDefinition(i?: number): PropertySetterDefinitionContext[] | PropertySetterDefinitionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertySetterDefinitionContext);
        }

        return this.getRuleContext(i, PropertySetterDefinitionContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_propertyDefinition;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPropertyDefinition) {
             listener.enterPropertyDefinition(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPropertyDefinition) {
             listener.exitPropertyDefinition(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPropertyDefinition) {
            return visitor.visitPropertyDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ClassPropertyNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public propertyName(): PropertyNameContext {
        return this.getRuleContext(0, PropertyNameContext)!;
    }
    public OpenBracket(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OpenBracket, 0);
    }
    public CloseBracket(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.CloseBracket, 0);
    }
    public formalParameterList(): FormalParameterListContext | null {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_classPropertyName;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterClassPropertyName) {
             listener.enterClassPropertyName(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitClassPropertyName) {
             listener.exitClassPropertyName(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitClassPropertyName) {
            return visitor.visitClassPropertyName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyGetterDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Get(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Get, 0)!;
    }
    public functionBody(): FunctionBodyContext {
        return this.getRuleContext(0, FunctionBodyContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_propertyGetterDefinition;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPropertyGetterDefinition) {
             listener.enterPropertyGetterDefinition(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPropertyGetterDefinition) {
             listener.exitPropertyGetterDefinition(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPropertyGetterDefinition) {
            return visitor.visitPropertyGetterDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertySetterDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Set(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Set, 0)!;
    }
    public functionBody(): FunctionBodyContext {
        return this.getRuleContext(0, FunctionBodyContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_propertySetterDefinition;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPropertySetterDefinition) {
             listener.enterPropertySetterDefinition(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPropertySetterDefinition) {
             listener.exitPropertySetterDefinition(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPropertySetterDefinition) {
            return visitor.visitPropertySetterDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assign(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Assign, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public propertyName(): PropertyNameContext[];
    public propertyName(i: number): PropertyNameContext | null;
    public propertyName(i?: number): PropertyNameContext[] | PropertyNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyNameContext);
        }

        return this.getRuleContext(i, PropertyNameContext);
    }
    public Dot(): antlr.TerminalNode[];
    public Dot(i: number): antlr.TerminalNode | null;
    public Dot(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Dot);
    	} else {
    		return this.getToken(AutoHotkeyParser.Dot, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_fieldDefinition;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFieldDefinition) {
             listener.enterFieldDefinition(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFieldDefinition) {
             listener.exitFieldDefinition(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFieldDefinition) {
            return visitor.visitFieldDefinition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FormalParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public lastFormalParameterArg(): LastFormalParameterArgContext {
        return this.getRuleContext(0, LastFormalParameterArgContext)!;
    }
    public formalParameterArg(): FormalParameterArgContext[];
    public formalParameterArg(i: number): FormalParameterArgContext | null;
    public formalParameterArg(i?: number): FormalParameterArgContext[] | FormalParameterArgContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterArgContext);
        }

        return this.getRuleContext(i, FormalParameterArgContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_formalParameterList;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFormalParameterList) {
             listener.enterFormalParameterList(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFormalParameterList) {
             listener.exitFormalParameterList(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFormalParameterList) {
            return visitor.visitFormalParameterList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FormalParameterArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public BitAnd(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BitAnd, 0);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Assign, 0);
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public QuestionMark(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.QuestionMark, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_formalParameterArg;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFormalParameterArg) {
             listener.enterFormalParameterArg(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFormalParameterArg) {
             listener.exitFormalParameterArg(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFormalParameterArg) {
            return visitor.visitFormalParameterArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LastFormalParameterArgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public formalParameterArg(): FormalParameterArgContext | null {
        return this.getRuleContext(0, FormalParameterArgContext);
    }
    public Multiply(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Multiply, 0);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_lastFormalParameterArg;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterLastFormalParameterArg) {
             listener.enterLastFormalParameterArg(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitLastFormalParameterArg) {
             listener.exitLastFormalParameterArg(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitLastFormalParameterArg) {
            return visitor.visitLastFormalParameterArg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArrayLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OpenBracket(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.OpenBracket, 0)!;
    }
    public CloseBracket(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.CloseBracket, 0)!;
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_arrayLiteral;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterArrayLiteral) {
             listener.enterArrayLiteral(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitArrayLiteral) {
             listener.exitArrayLiteral(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitArrayLiteral) {
            return visitor.visitArrayLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MapElementListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public mapElement(): MapElementContext[];
    public mapElement(i: number): MapElementContext | null;
    public mapElement(i?: number): MapElementContext[] | MapElementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MapElementContext);
        }

        return this.getRuleContext(i, MapElementContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_mapElementList;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterMapElementList) {
             listener.enterMapElementList(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitMapElementList) {
             listener.exitMapElementList(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitMapElementList) {
            return visitor.visitMapElementList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MapElementContext extends antlr.ParserRuleContext {
    public _key?: SingleExpressionContext;
    public _value?: SingleExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Colon, 0)!;
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_mapElement;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterMapElement) {
             listener.enterMapElement(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitMapElement) {
             listener.exitMapElement(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitMapElement) {
            return visitor.visitMapElement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyAssignmentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberIdentifier(): MemberIdentifierContext {
        return this.getRuleContext(0, MemberIdentifierContext)!;
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Colon, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_propertyAssignment;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPropertyAssignment) {
             listener.enterPropertyAssignment(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPropertyAssignment) {
             listener.exitPropertyAssignment(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPropertyAssignment) {
            return visitor.visitPropertyAssignment(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PropertyNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public reservedWord(): ReservedWordContext | null {
        return this.getRuleContext(0, ReservedWordContext);
    }
    public StringLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.StringLiteral, 0);
    }
    public numericLiteral(): NumericLiteralContext | null {
        return this.getRuleContext(0, NumericLiteralContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_propertyName;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPropertyName) {
             listener.enterPropertyName(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPropertyName) {
             listener.exitPropertyName(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPropertyName) {
            return visitor.visitPropertyName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DereferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DerefStart(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.DerefStart, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public DerefEnd(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.DerefEnd, 0)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_dereference;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterDereference) {
             listener.enterDereference(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitDereference) {
             listener.exitDereference(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public argument(): ArgumentContext[];
    public argument(i: number): ArgumentContext | null;
    public argument(i?: number): ArgumentContext[] | ArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArgumentContext);
        }

        return this.getRuleContext(i, ArgumentContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_arguments;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterArguments) {
             listener.enterArguments(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitArguments) {
             listener.exitArguments(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitArguments) {
            return visitor.visitArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public Multiply(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Multiply, 0);
    }
    public QuestionMark(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.QuestionMark, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_argument;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterArgument) {
             listener.enterArgument(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitArgument) {
             listener.exitArgument(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitArgument) {
            return visitor.visitArgument(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionSequenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_expressionSequence;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterExpressionSequence) {
             listener.enterExpressionSequence(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitExpressionSequence) {
             listener.exitExpressionSequence(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitExpressionSequence) {
            return visitor.visitExpressionSequence(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MemberIndexArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OpenBracket(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.OpenBracket, 0)!;
    }
    public CloseBracket(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.CloseBracket, 0)!;
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_memberIndexArguments;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterMemberIndexArguments) {
             listener.enterMemberIndexArguments(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitMemberIndexArguments) {
             listener.exitMemberIndexArguments(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitMemberIndexArguments) {
            return visitor.visitMemberIndexArguments(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_singleExpression;
    }
    public override copyFrom(ctx: SingleExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class TernaryExpressionContext extends SingleExpressionContext {
    public _ternCond?: SingleExpressionContext;
    public _ternTrue?: SingleExpressionContext;
    public _ternFalse?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public QuestionMark(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.QuestionMark, 0)!;
    }
    public Colon(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Colon, 0)!;
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterTernaryExpression) {
             listener.enterTernaryExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitTernaryExpression) {
             listener.exitTernaryExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitTernaryExpression) {
            return visitor.visitTernaryExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public And(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.And, 0);
    }
    public VerbalAnd(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.VerbalAnd, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterLogicalAndExpression) {
             listener.enterLogicalAndExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitLogicalAndExpression) {
             listener.exitLogicalAndExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalAndExpression) {
            return visitor.visitLogicalAndExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PowerExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public Power(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Power, 0)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPowerExpression) {
             listener.enterPowerExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPowerExpression) {
             listener.exitPowerExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPowerExpression) {
            return visitor.visitPowerExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PlusPlus(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.PlusPlus, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPreIncrementExpression) {
             listener.enterPreIncrementExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPreIncrementExpression) {
             listener.exitPreIncrementExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPreIncrementExpression) {
            return visitor.visitPreIncrementExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FatArrowExpressionContext extends SingleExpressionContext {
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public fatArrowExpressionHead(): FatArrowExpressionHeadContext {
        return this.getRuleContext(0, FatArrowExpressionHeadContext)!;
    }
    public Arrow(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Arrow, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFatArrowExpression) {
             listener.enterFatArrowExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFatArrowExpression) {
             listener.exitFatArrowExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFatArrowExpression) {
            return visitor.visitFatArrowExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public Or(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Or, 0);
    }
    public VerbalOr(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.VerbalOr, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterLogicalOrExpression) {
             listener.enterLogicalOrExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitLogicalOrExpression) {
             listener.exitLogicalOrExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitLogicalOrExpression) {
            return visitor.visitLogicalOrExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NotExpressionContext extends SingleExpressionContext {
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Not(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Not, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterNotExpression) {
             listener.enterNotExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitNotExpression) {
             listener.exitNotExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitNotExpression) {
            return visitor.visitNotExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AtomExpressionContext extends SingleExpressionContext {
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterAtomExpression) {
             listener.enterAtomExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitAtomExpression) {
             listener.exitAtomExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitAtomExpression) {
            return visitor.visitAtomExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RegExMatchExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public RegExMatch(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.RegExMatch, 0)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterRegExMatchExpression) {
             listener.enterRegExMatchExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitRegExMatchExpression) {
             listener.exitRegExMatchExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitRegExMatchExpression) {
            return visitor.visitRegExMatchExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MinusMinus(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.MinusMinus, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPreDecreaseExpression) {
             listener.enterPreDecreaseExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPreDecreaseExpression) {
             listener.exitPreDecreaseExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPreDecreaseExpression) {
            return visitor.visitPreDecreaseExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Minus(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Minus, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterUnaryMinusExpression) {
             listener.enterUnaryMinusExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitUnaryMinusExpression) {
             listener.exitUnaryMinusExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitUnaryMinusExpression) {
            return visitor.visitUnaryMinusExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AssignmentExpressionContext extends SingleExpressionContext {
    public _left?: PrimaryExpressionContext;
    public _op?: AssignmentOperatorContext;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public assignmentOperator(): AssignmentOperatorContext {
        return this.getRuleContext(0, AssignmentOperatorContext)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterAssignmentExpression) {
             listener.enterAssignmentExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitAssignmentExpression) {
             listener.exitAssignmentExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentExpression) {
            return visitor.visitAssignmentExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MinusMinus(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.MinusMinus, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPostDecreaseExpression) {
             listener.enterPostDecreaseExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPostDecreaseExpression) {
             listener.exitPostDecreaseExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPostDecreaseExpression) {
            return visitor.visitPostDecreaseExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public Plus(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Plus, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterUnaryPlusExpression) {
             listener.enterUnaryPlusExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitUnaryPlusExpression) {
             listener.exitUnaryPlusExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitUnaryPlusExpression) {
            return visitor.visitUnaryPlusExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ConcatenateExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public ConcatDot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.ConcatDot, 0);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterConcatenateExpression) {
             listener.enterConcatenateExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitConcatenateExpression) {
             listener.exitConcatenateExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitConcatenateExpression) {
            return visitor.visitConcatenateExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitXOrExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public BitXOr(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.BitXOr, 0)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBitXOrExpression) {
             listener.enterBitXOrExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBitXOrExpression) {
             listener.exitBitXOrExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBitXOrExpression) {
            return visitor.visitBitXOrExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqualityExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public Equals_(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Equals_, 0);
    }
    public NotEquals(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.NotEquals, 0);
    }
    public IdentityEquals(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.IdentityEquals, 0);
    }
    public IdentityNotEquals(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.IdentityNotEquals, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterEqualityExpression) {
             listener.enterEqualityExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitEqualityExpression) {
             listener.exitEqualityExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class VerbalNotExpressionContext extends SingleExpressionContext {
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VerbalNot(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.VerbalNot, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterVerbalNotExpression) {
             listener.enterVerbalNotExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitVerbalNotExpression) {
             listener.exitVerbalNotExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitVerbalNotExpression) {
            return visitor.visitVerbalNotExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public Multiply(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Multiply, 0);
    }
    public Divide(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Divide, 0);
    }
    public IntegerDivide(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.IntegerDivide, 0);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterMultiplicativeExpression) {
             listener.enterMultiplicativeExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitMultiplicativeExpression) {
             listener.exitMultiplicativeExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitShiftExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public LeftShiftArithmetic(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.LeftShiftArithmetic, 0);
    }
    public RightShiftArithmetic(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.RightShiftArithmetic, 0);
    }
    public RightShiftLogical(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.RightShiftLogical, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBitShiftExpression) {
             listener.enterBitShiftExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBitShiftExpression) {
             listener.exitBitShiftExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBitShiftExpression) {
            return visitor.visitBitShiftExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AdditiveExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public Plus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Plus, 0);
    }
    public Minus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Minus, 0);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterAdditiveExpression) {
             listener.enterAdditiveExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitAdditiveExpression) {
             listener.exitAdditiveExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RelationalExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public LessThan(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.LessThan, 0);
    }
    public MoreThan(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.MoreThan, 0);
    }
    public LessThanEquals(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.LessThanEquals, 0);
    }
    public GreaterThanEquals(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.GreaterThanEquals, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterRelationalExpression) {
             listener.enterRelationalExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitRelationalExpression) {
             listener.exitRelationalExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public PlusPlus(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.PlusPlus, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPostIncrementExpression) {
             listener.enterPostIncrementExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPostIncrementExpression) {
             listener.exitPostIncrementExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPostIncrementExpression) {
            return visitor.visitPostIncrementExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ContainExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: PrimaryExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public Instanceof(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Instanceof, 0);
    }
    public Is(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Is, 0);
    }
    public In(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.In, 0);
    }
    public Contains(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Contains, 0);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterContainExpression) {
             listener.enterContainExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitContainExpression) {
             listener.exitContainExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitContainExpression) {
            return visitor.visitContainExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitNotExpressionContext extends SingleExpressionContext {
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BitNot(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.BitNot, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBitNotExpression) {
             listener.enterBitNotExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBitNotExpression) {
             listener.exitBitNotExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBitNotExpression) {
            return visitor.visitBitNotExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitAndExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public BitAnd(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BitAnd, 0);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBitAndExpression) {
             listener.enterBitAndExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBitAndExpression) {
             listener.exitBitAndExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBitAndExpression) {
            return visitor.visitBitAndExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BitOrExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public BitOr(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.BitOr, 0)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBitOrExpression) {
             listener.enterBitOrExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBitOrExpression) {
             listener.exitBitOrExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBitOrExpression) {
            return visitor.visitBitOrExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CoalesceExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext[];
    public singleExpression(i: number): SingleExpressionContext | null;
    public singleExpression(i?: number): SingleExpressionContext[] | SingleExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleExpressionContext);
        }

        return this.getRuleContext(i, SingleExpressionContext);
    }
    public NullCoalesce(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.NullCoalesce, 0)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterCoalesceExpression) {
             listener.enterCoalesceExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitCoalesceExpression) {
             listener.exitCoalesceExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitCoalesceExpression) {
            return visitor.visitCoalesceExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_primaryExpression;
    }
    public override copyFrom(ctx: PrimaryExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OpenParen(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.OpenParen, 0)!;
    }
    public expressionSequence(): ExpressionSequenceContext {
        return this.getRuleContext(0, ExpressionSequenceContext)!;
    }
    public CloseParen(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.CloseParen, 0)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterParenthesizedExpression) {
             listener.enterParenthesizedExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitParenthesizedExpression) {
             listener.exitParenthesizedExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ObjectLiteralExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public objectLiteral(): ObjectLiteralContext {
        return this.getRuleContext(0, ObjectLiteralContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterObjectLiteralExpression) {
             listener.enterObjectLiteralExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitObjectLiteralExpression) {
             listener.exitObjectLiteralExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitObjectLiteralExpression) {
            return visitor.visitObjectLiteralExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class VarRefExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BitAnd(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.BitAnd, 0)!;
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterVarRefExpression) {
             listener.enterVarRefExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitVarRefExpression) {
             listener.exitVarRefExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitVarRefExpression) {
            return visitor.visitVarRefExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DynamicIdentifierExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public dynamicIdentifier(): DynamicIdentifierContext {
        return this.getRuleContext(0, DynamicIdentifierContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterDynamicIdentifierExpression) {
             listener.enterDynamicIdentifierExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitDynamicIdentifierExpression) {
             listener.exitDynamicIdentifierExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitDynamicIdentifierExpression) {
            return visitor.visitDynamicIdentifierExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterLiteralExpression) {
             listener.enterLiteralExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitLiteralExpression) {
             listener.exitLiteralExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayLiteralExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public arrayLiteral(): ArrayLiteralContext {
        return this.getRuleContext(0, ArrayLiteralContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterArrayLiteralExpression) {
             listener.enterArrayLiteralExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitArrayLiteralExpression) {
             listener.exitArrayLiteralExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitArrayLiteralExpression) {
            return visitor.visitArrayLiteralExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AccessExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getRuleContext(0, PrimaryExpressionContext)!;
    }
    public accessSuffix(): AccessSuffixContext {
        return this.getRuleContext(0, AccessSuffixContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterAccessExpression) {
             listener.enterAccessExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitAccessExpression) {
             listener.exitAccessExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitAccessExpression) {
            return visitor.visitAccessExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterIdentifierExpression) {
             listener.enterIdentifierExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitIdentifierExpression) {
             listener.exitIdentifierExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierExpression) {
            return visitor.visitIdentifierExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AccessSuffixContext extends antlr.ParserRuleContext {
    public _modifier?: Token | null;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public memberIdentifier(): MemberIdentifierContext | null {
        return this.getRuleContext(0, MemberIdentifierContext);
    }
    public Dot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Dot, 0);
    }
    public QuestionMarkDot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.QuestionMarkDot, 0);
    }
    public memberIndexArguments(): MemberIndexArgumentsContext | null {
        return this.getRuleContext(0, MemberIndexArgumentsContext);
    }
    public OpenParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OpenParen, 0);
    }
    public CloseParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.CloseParen, 0);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_accessSuffix;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterAccessSuffix) {
             listener.enterAccessSuffix(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitAccessSuffix) {
             listener.exitAccessSuffix(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitAccessSuffix) {
            return visitor.visitAccessSuffix(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MemberDotContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Dot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Dot, 0);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public QuestionMarkDot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.QuestionMarkDot, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_memberDot;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterMemberDot) {
             listener.enterMemberDot(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitMemberDot) {
             listener.exitMemberDot(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitMemberDot) {
            return visitor.visitMemberDot(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MemberIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public dynamicIdentifier(): DynamicIdentifierContext | null {
        return this.getRuleContext(0, DynamicIdentifierContext);
    }
    public keyword(): KeywordContext | null {
        return this.getRuleContext(0, KeywordContext);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_memberIdentifier;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterMemberIdentifier) {
             listener.enterMemberIdentifier(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitMemberIdentifier) {
             listener.exitMemberIdentifier(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitMemberIdentifier) {
            return visitor.visitMemberIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DynamicIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public propertyName(): PropertyNameContext[];
    public propertyName(i: number): PropertyNameContext | null;
    public propertyName(i?: number): PropertyNameContext[] | PropertyNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyNameContext);
        }

        return this.getRuleContext(i, PropertyNameContext);
    }
    public dereference(): DereferenceContext[];
    public dereference(i: number): DereferenceContext | null;
    public dereference(i?: number): DereferenceContext[] | DereferenceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(DereferenceContext);
        }

        return this.getRuleContext(i, DereferenceContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_dynamicIdentifier;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterDynamicIdentifier) {
             listener.enterDynamicIdentifier(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitDynamicIdentifier) {
             listener.exitDynamicIdentifier(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitDynamicIdentifier) {
            return visitor.visitDynamicIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assign(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Assign, 0)!;
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_initializer;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterInitializer) {
             listener.enterInitializer(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitInitializer) {
             listener.exitInitializer(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitInitializer) {
            return visitor.visitInitializer(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_assignable;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterAssignable) {
             listener.enterAssignable(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitAssignable) {
             listener.exitAssignable(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitAssignable) {
            return visitor.visitAssignable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ObjectLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OpenBrace(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.OpenBrace, 0)!;
    }
    public CloseBrace(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.CloseBrace, 0)!;
    }
    public s(): SContext[];
    public s(i: number): SContext | null;
    public s(i?: number): SContext[] | SContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SContext);
        }

        return this.getRuleContext(i, SContext);
    }
    public propertyAssignment(): PropertyAssignmentContext[];
    public propertyAssignment(i: number): PropertyAssignmentContext | null;
    public propertyAssignment(i?: number): PropertyAssignmentContext[] | PropertyAssignmentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropertyAssignmentContext);
        }

        return this.getRuleContext(i, PropertyAssignmentContext);
    }
    public Comma(): antlr.TerminalNode[];
    public Comma(i: number): antlr.TerminalNode | null;
    public Comma(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.Comma);
    	} else {
    		return this.getToken(AutoHotkeyParser.Comma, i);
    	}
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_objectLiteral;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterObjectLiteral) {
             listener.enterObjectLiteral(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitObjectLiteral) {
             listener.exitObjectLiteral(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitObjectLiteral) {
            return visitor.visitObjectLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifierName(): IdentifierNameContext {
        return this.getRuleContext(0, IdentifierNameContext)!;
    }
    public OpenParen(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.OpenParen, 0)!;
    }
    public CloseParen(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.CloseParen, 0)!;
    }
    public functionHeadPrefix(): FunctionHeadPrefixContext | null {
        return this.getRuleContext(0, FunctionHeadPrefixContext);
    }
    public formalParameterList(): FormalParameterListContext | null {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_functionHead;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFunctionHead) {
             listener.enterFunctionHead(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFunctionHead) {
             listener.exitFunctionHead(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionHead) {
            return visitor.visitFunctionHead(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionHeadPrefixContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Static(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Static, 0)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_functionHeadPrefix;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFunctionHeadPrefix) {
             listener.enterFunctionHeadPrefix(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFunctionHeadPrefix) {
             listener.exitFunctionHeadPrefix(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionHeadPrefix) {
            return visitor.visitFunctionHeadPrefix(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionExpressionHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public functionHead(): FunctionHeadContext | null {
        return this.getRuleContext(0, FunctionHeadContext);
    }
    public OpenParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OpenParen, 0);
    }
    public CloseParen(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.CloseParen, 0);
    }
    public functionHeadPrefix(): FunctionHeadPrefixContext | null {
        return this.getRuleContext(0, FunctionHeadPrefixContext);
    }
    public formalParameterList(): FormalParameterListContext | null {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_functionExpressionHead;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFunctionExpressionHead) {
             listener.enterFunctionExpressionHead(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFunctionExpressionHead) {
             listener.exitFunctionExpressionHead(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionExpressionHead) {
            return visitor.visitFunctionExpressionHead(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FatArrowExpressionHeadContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Multiply(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Multiply, 0);
    }
    public identifierName(): IdentifierNameContext | null {
        return this.getRuleContext(0, IdentifierNameContext);
    }
    public functionHeadPrefix(): FunctionHeadPrefixContext | null {
        return this.getRuleContext(0, FunctionHeadPrefixContext);
    }
    public BitAnd(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BitAnd, 0);
    }
    public QuestionMark(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.QuestionMark, 0);
    }
    public functionExpressionHead(): FunctionExpressionHeadContext | null {
        return this.getRuleContext(0, FunctionExpressionHeadContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_fatArrowExpressionHead;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFatArrowExpressionHead) {
             listener.enterFatArrowExpressionHead(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFatArrowExpressionHead) {
             listener.exitFatArrowExpressionHead(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFatArrowExpressionHead) {
            return visitor.visitFatArrowExpressionHead(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Arrow(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Arrow, 0);
    }
    public singleExpression(): SingleExpressionContext | null {
        return this.getRuleContext(0, SingleExpressionContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.WS);
    	} else {
    		return this.getToken(AutoHotkeyParser.WS, i);
    	}
    }
    public EOL(): antlr.TerminalNode[];
    public EOL(i: number): antlr.TerminalNode | null;
    public EOL(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(AutoHotkeyParser.EOL);
    	} else {
    		return this.getToken(AutoHotkeyParser.EOL, i);
    	}
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_functionBody;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFunctionBody) {
             listener.enterFunctionBody(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFunctionBody) {
             listener.exitFunctionBody(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignmentOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Assign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Assign, 0);
    }
    public ModulusAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.ModulusAssign, 0);
    }
    public PlusAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.PlusAssign, 0);
    }
    public MinusAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.MinusAssign, 0);
    }
    public MultiplyAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.MultiplyAssign, 0);
    }
    public DivideAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.DivideAssign, 0);
    }
    public IntegerDivideAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.IntegerDivideAssign, 0);
    }
    public ConcatenateAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.ConcatenateAssign, 0);
    }
    public BitOrAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BitOrAssign, 0);
    }
    public BitAndAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BitAndAssign, 0);
    }
    public BitXorAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BitXorAssign, 0);
    }
    public RightShiftArithmeticAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.RightShiftArithmeticAssign, 0);
    }
    public LeftShiftArithmeticAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.LeftShiftArithmeticAssign, 0);
    }
    public RightShiftLogicalAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.RightShiftLogicalAssign, 0);
    }
    public PowerAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.PowerAssign, 0);
    }
    public NullishCoalescingAssign(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.NullishCoalescingAssign, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_assignmentOperator;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterAssignmentOperator) {
             listener.enterAssignmentOperator(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitAssignmentOperator) {
             listener.exitAssignmentOperator(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitAssignmentOperator) {
            return visitor.visitAssignmentOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public boolean(): BooleanContext | null {
        return this.getRuleContext(0, BooleanContext);
    }
    public numericLiteral(): NumericLiteralContext | null {
        return this.getRuleContext(0, NumericLiteralContext);
    }
    public bigintLiteral(): BigintLiteralContext | null {
        return this.getRuleContext(0, BigintLiteralContext);
    }
    public NullLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.NullLiteral, 0);
    }
    public Unset(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Unset, 0);
    }
    public StringLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.StringLiteral, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_literal;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BooleanContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public True(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.True, 0);
    }
    public False(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.False, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_boolean;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBoolean) {
             listener.enterBoolean(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBoolean) {
             listener.exitBoolean(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBoolean) {
            return visitor.visitBoolean(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumericLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DecimalLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.DecimalLiteral, 0);
    }
    public HexIntegerLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.HexIntegerLiteral, 0);
    }
    public OctalIntegerLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OctalIntegerLiteral, 0);
    }
    public OctalIntegerLiteral2(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.OctalIntegerLiteral2, 0);
    }
    public BinaryIntegerLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BinaryIntegerLiteral, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_numericLiteral;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterNumericLiteral) {
             listener.enterNumericLiteral(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitNumericLiteral) {
             listener.exitNumericLiteral(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitNumericLiteral) {
            return visitor.visitNumericLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BigintLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BigDecimalIntegerLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BigDecimalIntegerLiteral, 0);
    }
    public BigHexIntegerLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BigHexIntegerLiteral, 0);
    }
    public BigOctalIntegerLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BigOctalIntegerLiteral, 0);
    }
    public BigBinaryIntegerLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BigBinaryIntegerLiteral, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_bigintLiteral;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterBigintLiteral) {
             listener.enterBigintLiteral(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitBigintLiteral) {
             listener.exitBigintLiteral(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitBigintLiteral) {
            return visitor.visitBigintLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GetterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Get(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Get, 0)!;
    }
    public propertyName(): PropertyNameContext {
        return this.getRuleContext(0, PropertyNameContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_getter;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterGetter) {
             listener.enterGetter(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitGetter) {
             listener.exitGetter(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitGetter) {
            return visitor.visitGetter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SetterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Set(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.Set, 0)!;
    }
    public propertyName(): PropertyNameContext {
        return this.getRuleContext(0, PropertyNameContext)!;
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_setter;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterSetter) {
             listener.enterSetter(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitSetter) {
             listener.exitSetter(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
    }
    public reservedWord(): ReservedWordContext | null {
        return this.getRuleContext(0, ReservedWordContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_identifierName;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterIdentifierName) {
             listener.enterIdentifierName(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitIdentifierName) {
             listener.exitIdentifierName(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifierName) {
            return visitor.visitIdentifierName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Identifier, 0);
    }
    public Default(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Default, 0);
    }
    public This(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.This, 0);
    }
    public Enum(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Enum, 0);
    }
    public Extends(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Extends, 0);
    }
    public Super(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Super, 0);
    }
    public Base(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Base, 0);
    }
    public From(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.From, 0);
    }
    public Get(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Get, 0);
    }
    public Set(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Set, 0);
    }
    public As(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.As, 0);
    }
    public Class(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Class, 0);
    }
    public Do(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Do, 0);
    }
    public NullLiteral(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.NullLiteral, 0);
    }
    public Parse(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Parse, 0);
    }
    public Reg(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Reg, 0);
    }
    public Read(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Read, 0);
    }
    public Files(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Files, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_identifier;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReservedWordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public keyword(): KeywordContext | null {
        return this.getRuleContext(0, KeywordContext);
    }
    public Unset(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Unset, 0);
    }
    public boolean(): BooleanContext | null {
        return this.getRuleContext(0, BooleanContext);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_reservedWord;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterReservedWord) {
             listener.enterReservedWord(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitReservedWord) {
             listener.exitReservedWord(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitReservedWord) {
            return visitor.visitReservedWord(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Local(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Local, 0);
    }
    public Global(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Global, 0);
    }
    public Static(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Static, 0);
    }
    public If(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.If, 0);
    }
    public Else(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Else, 0);
    }
    public Loop(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Loop, 0);
    }
    public For(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.For, 0);
    }
    public While(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.While, 0);
    }
    public Until(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Until, 0);
    }
    public Break(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Break, 0);
    }
    public Continue(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Continue, 0);
    }
    public Goto(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Goto, 0);
    }
    public Return(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Return, 0);
    }
    public Switch(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Switch, 0);
    }
    public Case(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Case, 0);
    }
    public Try(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Try, 0);
    }
    public Catch(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Catch, 0);
    }
    public Finally(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Finally, 0);
    }
    public Throw(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Throw, 0);
    }
    public As(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.As, 0);
    }
    public VerbalAnd(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.VerbalAnd, 0);
    }
    public Contains(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Contains, 0);
    }
    public In(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.In, 0);
    }
    public Is(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Is, 0);
    }
    public VerbalNot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.VerbalNot, 0);
    }
    public VerbalOr(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.VerbalOr, 0);
    }
    public Super(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Super, 0);
    }
    public Unset(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Unset, 0);
    }
    public Instanceof(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Instanceof, 0);
    }
    public Import(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Import, 0);
    }
    public Export(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Export, 0);
    }
    public Delete(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Delete, 0);
    }
    public Yield(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Yield, 0);
    }
    public Async(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Async, 0);
    }
    public Await(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Await, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_keyword;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterKeyword) {
             listener.enterKeyword(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitKeyword) {
             listener.exitKeyword(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WS(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.WS, 0);
    }
    public EOL(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.EOL, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_s;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterS) {
             listener.enterS(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitS) {
             listener.exitS(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitS) {
            return visitor.visitS(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EosContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.EOF, 0);
    }
    public EOL(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.EOL, 0);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_eos;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterEos) {
             listener.enterEos(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitEos) {
             listener.exitEos(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitEos) {
            return visitor.visitEos(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
