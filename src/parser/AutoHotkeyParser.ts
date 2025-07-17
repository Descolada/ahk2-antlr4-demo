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
    public static readonly UnexpectedHotstringCharacter = 121;
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
    public static readonly WinActivateForce = 142;
    public static readonly NoTrayIcon = 143;
    public static readonly DirectiveSingleLineComment = 144;
    public static readonly UnexpectedDirectiveCharacter = 145;
    public static readonly TextWhitespace = 146;
    public static readonly Text = 147;
    public static readonly UnexpectedDirectiveTextCharacter = 148;
    public static readonly HotstringWhitespace = 149;
    public static readonly NoMouse = 150;
    public static readonly EndChars = 151;
    public static readonly HotstringOptions = 152;
    public static readonly UnexpectedHotstringOptionsCharacter = 153;
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
    public static readonly RULE_declaration = 15;
    public static readonly RULE_variableDeclarationList = 16;
    public static readonly RULE_variableDeclaration = 17;
    public static readonly RULE_functionStatement = 18;
    public static readonly RULE_expressionStatement = 19;
    public static readonly RULE_ifStatement = 20;
    public static readonly RULE_flowBlock = 21;
    public static readonly RULE_untilProduction = 22;
    public static readonly RULE_elseProduction = 23;
    public static readonly RULE_iterationStatement = 24;
    public static readonly RULE_forInParameters = 25;
    public static readonly RULE_continueStatement = 26;
    public static readonly RULE_breakStatement = 27;
    public static readonly RULE_returnStatement = 28;
    public static readonly RULE_switchStatement = 29;
    public static readonly RULE_caseBlock = 30;
    public static readonly RULE_caseClause = 31;
    public static readonly RULE_labelledStatement = 32;
    public static readonly RULE_gotoStatement = 33;
    public static readonly RULE_throwStatement = 34;
    public static readonly RULE_tryStatement = 35;
    public static readonly RULE_catchProduction = 36;
    public static readonly RULE_catchAssignable = 37;
    public static readonly RULE_catchClasses = 38;
    public static readonly RULE_finallyProduction = 39;
    public static readonly RULE_functionDeclaration = 40;
    public static readonly RULE_classDeclaration = 41;
    public static readonly RULE_classExtensionName = 42;
    public static readonly RULE_classTail = 43;
    public static readonly RULE_classElement = 44;
    public static readonly RULE_methodDefinition = 45;
    public static readonly RULE_propertyDefinition = 46;
    public static readonly RULE_classPropertyName = 47;
    public static readonly RULE_propertyGetterDefinition = 48;
    public static readonly RULE_propertySetterDefinition = 49;
    public static readonly RULE_fieldDefinition = 50;
    public static readonly RULE_formalParameterList = 51;
    public static readonly RULE_formalParameterArg = 52;
    public static readonly RULE_lastFormalParameterArg = 53;
    public static readonly RULE_arrayLiteral = 54;
    public static readonly RULE_propertyAssignment = 55;
    public static readonly RULE_propertyName = 56;
    public static readonly RULE_dereference = 57;
    public static readonly RULE_arguments = 58;
    public static readonly RULE_argument = 59;
    public static readonly RULE_expressionSequence = 60;
    public static readonly RULE_memberIndexArguments = 61;
    public static readonly RULE_singleExpression = 62;
    public static readonly RULE_primaryExpression = 63;
    public static readonly RULE_accessSuffix = 64;
    public static readonly RULE_memberDot = 65;
    public static readonly RULE_memberIdentifier = 66;
    public static readonly RULE_dynamicIdentifier = 67;
    public static readonly RULE_initializer = 68;
    public static readonly RULE_assignable = 69;
    public static readonly RULE_objectLiteral = 70;
    public static readonly RULE_functionHead = 71;
    public static readonly RULE_functionHeadPrefix = 72;
    public static readonly RULE_functionExpressionHead = 73;
    public static readonly RULE_fatArrowExpressionHead = 74;
    public static readonly RULE_functionBody = 75;
    public static readonly RULE_assignmentOperator = 76;
    public static readonly RULE_literal = 77;
    public static readonly RULE_boolean = 78;
    public static readonly RULE_numericLiteral = 79;
    public static readonly RULE_getter = 80;
    public static readonly RULE_setter = 81;
    public static readonly RULE_identifierName = 82;
    public static readonly RULE_identifier = 83;
    public static readonly RULE_reservedWord = 84;
    public static readonly RULE_keyword = 85;
    public static readonly RULE_s = 86;
    public static readonly RULE_eos = 87;

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
        "'winactivateforce'", "'notrayicon'", null, null, null, null, null, 
        null, "'NoMouse'", "'EndChars'"
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
        "UnexpectedHotstringCharacter", "PreprocessorDirectiveWS", "Digits", 
        "HotIf", "InputLevel", "SuspendExempt", "UseHook", "Hotstring", 
        "Include", "IncludeAgain", "DllLoad", "Requires", "SingleInstance", 
        "Persistent", "Warn", "ErrorStdOut", "ClipboardTimeout", "HotIfTimeout", 
        "MaxThreads", "MaxThreadsBuffer", "MaxThreadsPerHotkey", "WinActivateForce", 
        "NoTrayIcon", "DirectiveSingleLineComment", "UnexpectedDirectiveCharacter", 
        "TextWhitespace", "Text", "UnexpectedDirectiveTextCharacter", "HotstringWhitespace", 
        "NoMouse", "EndChars", "HotstringOptions", "UnexpectedHotstringOptionsCharacter"
    ];
    public static readonly ruleNames = [
        "program", "sourceElements", "sourceElement", "directive", "positionalDirective", 
        "generalDirective", "remap", "hotstring", "hotstringExpansion", 
        "hotkey", "statement", "blockStatement", "block", "statementList", 
        "variableStatement", "declaration", "variableDeclarationList", "variableDeclaration", 
        "functionStatement", "expressionStatement", "ifStatement", "flowBlock", 
        "untilProduction", "elseProduction", "iterationStatement", "forInParameters", 
        "continueStatement", "breakStatement", "returnStatement", "switchStatement", 
        "caseBlock", "caseClause", "labelledStatement", "gotoStatement", 
        "throwStatement", "tryStatement", "catchProduction", "catchAssignable", 
        "catchClasses", "finallyProduction", "functionDeclaration", "classDeclaration", 
        "classExtensionName", "classTail", "classElement", "methodDefinition", 
        "propertyDefinition", "classPropertyName", "propertyGetterDefinition", 
        "propertySetterDefinition", "fieldDefinition", "formalParameterList", 
        "formalParameterArg", "lastFormalParameterArg", "arrayLiteral", 
        "propertyAssignment", "propertyName", "dereference", "arguments", 
        "argument", "expressionSequence", "memberIndexArguments", "singleExpression", 
        "primaryExpression", "accessSuffix", "memberDot", "memberIdentifier", 
        "dynamicIdentifier", "initializer", "assignable", "objectLiteral", 
        "functionHead", "functionHeadPrefix", "functionExpressionHead", 
        "fatArrowExpressionHead", "functionBody", "assignmentOperator", 
        "literal", "boolean", "numericLiteral", "getter", "setter", "identifierName", 
        "identifier", "reservedWord", "keyword", "s", "eos",
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
            this.state = 180;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 176;
                this.sourceElements();
                this.state = 177;
                this.match(AutoHotkeyParser.EOF);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 179;
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
            this.state = 187;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    this.state = 187;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
                    case 1:
                        {
                        this.state = 182;
                        this.sourceElement();
                        this.state = 183;
                        this.eos();
                        }
                        break;
                    case 2:
                        {
                        this.state = 185;
                        this.match(AutoHotkeyParser.WS);
                        }
                        break;
                    case 3:
                        {
                        this.state = 186;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        break;
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 189;
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
            this.state = 197;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 191;
                this.classDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 192;
                this.directive();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 193;
                this.remap();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 194;
                this.hotstring();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 195;
                this.hotkey();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 196;
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
            this.state = 199;
            this.match(AutoHotkeyParser.Hashtag);
            this.state = 202;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.HotIf:
            case AutoHotkeyParser.InputLevel:
            case AutoHotkeyParser.SuspendExempt:
            case AutoHotkeyParser.UseHook:
            case AutoHotkeyParser.Hotstring:
                {
                this.state = 200;
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
            case AutoHotkeyParser.WinActivateForce:
            case AutoHotkeyParser.NoTrayIcon:
                {
                this.state = 201;
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
            this.state = 230;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.HotIf:
                localContext = new HotIfDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 204;
                this.match(AutoHotkeyParser.HotIf);
                this.state = 206;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                case 1:
                    {
                    this.state = 205;
                    this.singleExpression(0);
                    }
                    break;
                }
                }
                break;
            case AutoHotkeyParser.Hotstring:
                localContext = new HotstringDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 208;
                this.match(AutoHotkeyParser.Hotstring);
                this.state = 214;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case AutoHotkeyParser.EndChars:
                case AutoHotkeyParser.HotstringOptions:
                    {
                    this.state = 210;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 151) {
                        {
                        this.state = 209;
                        this.match(AutoHotkeyParser.EndChars);
                        }
                    }

                    this.state = 212;
                    this.match(AutoHotkeyParser.HotstringOptions);
                    }
                    break;
                case AutoHotkeyParser.NoMouse:
                    {
                    this.state = 213;
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
                this.state = 216;
                this.match(AutoHotkeyParser.InputLevel);
                this.state = 218;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 70 || _la === 71) {
                    {
                    this.state = 217;
                    this.numericLiteral();
                    }
                }

                }
                break;
            case AutoHotkeyParser.UseHook:
                localContext = new UseHookDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 220;
                this.match(AutoHotkeyParser.UseHook);
                this.state = 223;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case AutoHotkeyParser.DecimalLiteral:
                case AutoHotkeyParser.HexIntegerLiteral:
                    {
                    this.state = 221;
                    this.numericLiteral();
                    }
                    break;
                case AutoHotkeyParser.True:
                case AutoHotkeyParser.False:
                    {
                    this.state = 222;
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
                this.state = 225;
                this.match(AutoHotkeyParser.SuspendExempt);
                this.state = 228;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case AutoHotkeyParser.DecimalLiteral:
                case AutoHotkeyParser.HexIntegerLiteral:
                    {
                    this.state = 226;
                    this.numericLiteral();
                    }
                    break;
                case AutoHotkeyParser.True:
                case AutoHotkeyParser.False:
                    {
                    this.state = 227;
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
            this.state = 245;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Include:
            case AutoHotkeyParser.IncludeAgain:
            case AutoHotkeyParser.DllLoad:
            case AutoHotkeyParser.Requires:
                localContext = new TextualDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 232;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & 15) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 233;
                this.match(AutoHotkeyParser.Text);
                }
                break;
            case AutoHotkeyParser.Persistent:
                localContext = new PersistentDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 234;
                this.match(AutoHotkeyParser.Persistent);
                this.state = 236;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68 || _la === 69 || _la === 123) {
                    {
                    this.state = 235;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 68 || _la === 69 || _la === 123)) {
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
                this.state = 238;
                _la = this.tokenStream.LA(1);
                if(!(_la === 133 || _la === 135)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 147) {
                    {
                    this.state = 239;
                    this.match(AutoHotkeyParser.Text);
                    }
                }

                }
                break;
            case AutoHotkeyParser.ErrorStdOut:
            case AutoHotkeyParser.WinActivateForce:
            case AutoHotkeyParser.NoTrayIcon:
                localContext = new SingleDirectiveContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 242;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & 193) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
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
                this.state = 243;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & 31) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 244;
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
            this.state = 247;
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
            this.state = 249;
            this.match(AutoHotkeyParser.HotstringTrigger);
            this.state = 254;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 250;
                    this.match(AutoHotkeyParser.EOL);
                    this.state = 251;
                    this.match(AutoHotkeyParser.HotstringTrigger);
                    }
                    }
                }
                this.state = 256;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            this.state = 260;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 257;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                }
                this.state = 262;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            }
            this.state = 272;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                {
                this.state = 263;
                this.hotstringExpansion();
                }
                break;
            case 2:
                {
                this.state = 265;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 115) {
                    {
                    this.state = 264;
                    this.match(AutoHotkeyParser.EOL);
                    }
                }

                this.state = 267;
                this.functionDeclaration();
                }
                break;
            case 3:
                {
                this.state = 269;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
                case 1:
                    {
                    this.state = 268;
                    this.match(AutoHotkeyParser.EOL);
                    }
                    break;
                }
                this.state = 271;
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
            this.state = 274;
            _la = this.tokenStream.LA(1);
            if(!(_la === 119 || _la === 120)) {
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
            this.state = 276;
            this.match(AutoHotkeyParser.HotkeyTrigger);
            this.state = 281;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 277;
                    this.match(AutoHotkeyParser.EOL);
                    this.state = 278;
                    this.match(AutoHotkeyParser.HotkeyTrigger);
                    }
                    }
                }
                this.state = 283;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            }
            this.state = 287;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 284;
                    this.s();
                    }
                    }
                }
                this.state = 289;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            this.state = 292;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 22, this.context) ) {
            case 1:
                {
                this.state = 290;
                this.functionDeclaration();
                }
                break;
            case 2:
                {
                this.state = 291;
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
            this.state = 310;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 294;
                this.variableStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 295;
                this.ifStatement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 296;
                this.iterationStatement();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 297;
                this.continueStatement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 298;
                this.breakStatement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 299;
                this.returnStatement();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 300;
                this.labelledStatement();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 301;
                this.gotoStatement();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 302;
                this.switchStatement();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 303;
                this.throwStatement();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 304;
                this.tryStatement();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 305;
                this.functionDeclaration();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 306;
                if (!(this.isFunctionStatement())) {
                    throw this.createFailedPredicateException("this.isFunctionStatement()");
                }
                this.state = 307;
                this.functionStatement();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 308;
                this.blockStatement();
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 309;
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
            this.state = 312;
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
            this.state = 314;
            this.match(AutoHotkeyParser.OpenBrace);
            this.state = 318;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 315;
                    this.s();
                    }
                    }
                }
                this.state = 320;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            }
            this.state = 322;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                {
                this.state = 321;
                this.statementList();
                }
                break;
            }
            this.state = 324;
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
            this.state = 329;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 326;
                    this.statement();
                    this.state = 327;
                    this.match(AutoHotkeyParser.EOL);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 331;
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
            this.state = 333;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 341;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4026693641) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 2319) !== 0)) {
                {
                this.state = 337;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 334;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 339;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 340;
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
    public declaration(): DeclarationContext {
        let localContext = new DeclarationContext(this.context, this.state);
        this.enterRule(localContext, 30, AutoHotkeyParser.RULE_declaration);
        try {
            this.state = 345;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 343;
                this.classDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 344;
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
        this.enterRule(localContext, 32, AutoHotkeyParser.RULE_variableDeclarationList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 347;
            this.variableDeclaration();
            this.state = 358;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 13 || _la === 116) {
                {
                {
                this.state = 351;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
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
                this.match(AutoHotkeyParser.Comma);
                this.state = 355;
                this.variableDeclaration();
                }
                }
                this.state = 360;
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
        this.enterRule(localContext, 34, AutoHotkeyParser.RULE_variableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 361;
            this.assignable();
            this.state = 366;
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
                this.state = 362;
                this.assignmentOperator();
                this.state = 363;
                this.singleExpression(0);
                }
                break;
            case AutoHotkeyParser.PlusPlus:
            case AutoHotkeyParser.MinusMinus:
                {
                this.state = 365;
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
        this.enterRule(localContext, 36, AutoHotkeyParser.RULE_functionStatement);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            this.primaryExpression(0);
            this.state = 375;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 116) {
                {
                this.state = 370;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 369;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 372;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 374;
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
        this.enterRule(localContext, 38, AutoHotkeyParser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 377;
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
        this.enterRule(localContext, 40, AutoHotkeyParser.RULE_ifStatement);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 379;
            this.match(AutoHotkeyParser.If);
            this.state = 383;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 380;
                    this.s();
                    }
                    }
                }
                this.state = 385;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            }
            this.state = 386;
            this.singleExpression(0);
            this.state = 390;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 116) {
                {
                {
                this.state = 387;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 392;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 393;
            this.flowBlock();
            this.state = 395;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
            case 1:
                {
                this.state = 394;
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
        this.enterRule(localContext, 42, AutoHotkeyParser.RULE_flowBlock);
        try {
            let alternative: number;
            this.state = 404;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.EOL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 398;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 397;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 400;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 402;
                this.statement();
                }
                break;
            case AutoHotkeyParser.OpenBrace:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 403;
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
        this.enterRule(localContext, 44, AutoHotkeyParser.RULE_untilProduction);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 406;
            this.match(AutoHotkeyParser.EOL);
            this.state = 407;
            this.match(AutoHotkeyParser.Until);
            this.state = 411;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 408;
                    this.s();
                    }
                    }
                }
                this.state = 413;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 40, this.context);
            }
            this.state = 414;
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
        this.enterRule(localContext, 46, AutoHotkeyParser.RULE_elseProduction);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 416;
            this.match(AutoHotkeyParser.EOL);
            this.state = 417;
            this.match(AutoHotkeyParser.Else);
            this.state = 421;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 418;
                    this.s();
                    }
                    }
                }
                this.state = 423;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 41, this.context);
            }
            this.state = 424;
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
        this.enterRule(localContext, 48, AutoHotkeyParser.RULE_iterationStatement);
        let _la: number;
        try {
            let alternative: number;
            this.state = 529;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
            case 1:
                localContext = new SpecializedLoopStatementContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 426;
                this.match(AutoHotkeyParser.Loop);
                this.state = 427;
                (localContext as SpecializedLoopStatementContext)._type_ = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 15) !== 0))) {
                    (localContext as SpecializedLoopStatementContext)._type_ = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 431;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 428;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                    }
                    this.state = 433;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 42, this.context);
                }
                this.state = 434;
                this.singleExpression(0);
                this.state = 447;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 438;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 116) {
                            {
                            {
                            this.state = 435;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 440;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 441;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 443;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context) ) {
                        case 1:
                            {
                            this.state = 442;
                            this.singleExpression(0);
                            }
                            break;
                        }
                        }
                        }
                    }
                    this.state = 449;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 45, this.context);
                }
                this.state = 453;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 450;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 455;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 456;
                this.flowBlock();
                this.state = 458;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 47, this.context) ) {
                case 1:
                    {
                    this.state = 457;
                    this.untilProduction();
                    }
                    break;
                }
                this.state = 461;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
                case 1:
                    {
                    this.state = 460;
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
                this.state = 463;
                if (!(this.isValidLoopExpression())) {
                    throw this.createFailedPredicateException("this.isValidLoopExpression()");
                }
                this.state = 464;
                this.match(AutoHotkeyParser.Loop);
                this.state = 468;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 465;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                    }
                    this.state = 470;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
                }
                this.state = 478;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 51, this.context) ) {
                case 1:
                    {
                    this.state = 471;
                    this.singleExpression(0);
                    this.state = 475;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 472;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 477;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 480;
                this.flowBlock();
                this.state = 482;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 52, this.context) ) {
                case 1:
                    {
                    this.state = 481;
                    this.untilProduction();
                    }
                    break;
                }
                this.state = 485;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context) ) {
                case 1:
                    {
                    this.state = 484;
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
                this.state = 487;
                this.match(AutoHotkeyParser.While);
                this.state = 491;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 488;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                    }
                    this.state = 493;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 54, this.context);
                }
                this.state = 494;
                this.singleExpression(0);
                this.state = 498;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 495;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 500;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 501;
                this.flowBlock();
                this.state = 503;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context) ) {
                case 1:
                    {
                    this.state = 502;
                    this.untilProduction();
                    }
                    break;
                }
                this.state = 506;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 57, this.context) ) {
                case 1:
                    {
                    this.state = 505;
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
                this.state = 508;
                this.match(AutoHotkeyParser.For);
                this.state = 512;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 509;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                    }
                    this.state = 514;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
                }
                this.state = 515;
                this.forInParameters();
                this.state = 519;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 516;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 521;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 522;
                this.flowBlock();
                this.state = 524;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 60, this.context) ) {
                case 1:
                    {
                    this.state = 523;
                    this.untilProduction();
                    }
                    break;
                }
                this.state = 527;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
                case 1:
                    {
                    this.state = 526;
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
        this.enterRule(localContext, 50, AutoHotkeyParser.RULE_forInParameters);
        let _la: number;
        try {
            let alternative: number;
            this.state = 598;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Comma:
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
            case AutoHotkeyParser.As:
            case AutoHotkeyParser.Identifier:
            case AutoHotkeyParser.WS:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 532;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4026693641) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 271) !== 0)) {
                    {
                    this.state = 531;
                    this.assignable();
                    }
                }

                this.state = 546;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 537;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 116) {
                            {
                            {
                            this.state = 534;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 539;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 540;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 542;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4026693641) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 271) !== 0)) {
                            {
                            this.state = 541;
                            this.assignable();
                            }
                        }

                        }
                        }
                    }
                    this.state = 548;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
                }
                this.state = 552;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 549;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 554;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 555;
                this.match(AutoHotkeyParser.In);
                this.state = 559;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 556;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                    }
                    this.state = 561;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 68, this.context);
                }
                this.state = 562;
                this.singleExpression(0);
                }
                break;
            case AutoHotkeyParser.OpenParen:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 563;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 565;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4026693641) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 271) !== 0)) {
                    {
                    this.state = 564;
                    this.assignable();
                    }
                }

                this.state = 579;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 72, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 570;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 116) {
                            {
                            {
                            this.state = 567;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 572;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 573;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 575;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4026693641) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 271) !== 0)) {
                            {
                            this.state = 574;
                            this.assignable();
                            }
                        }

                        }
                        }
                    }
                    this.state = 581;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 72, this.context);
                }
                this.state = 585;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 582;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 587;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 588;
                this.match(AutoHotkeyParser.In);
                this.state = 592;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 589;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 115 || _la === 116)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        }
                    }
                    this.state = 594;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
                }
                this.state = 595;
                this.singleExpression(0);
                this.state = 596;
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
        this.enterRule(localContext, 52, AutoHotkeyParser.RULE_continueStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 600;
            this.match(AutoHotkeyParser.Continue);
            this.state = 604;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 116) {
                {
                {
                this.state = 601;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 606;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 612;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.True:
            case AutoHotkeyParser.False:
            case AutoHotkeyParser.DecimalLiteral:
            case AutoHotkeyParser.HexIntegerLiteral:
            case AutoHotkeyParser.Break:
            case AutoHotkeyParser.Do:
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
            case AutoHotkeyParser.In:
            case AutoHotkeyParser.Try:
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
            case AutoHotkeyParser.As:
            case AutoHotkeyParser.Unset:
            case AutoHotkeyParser.Static:
            case AutoHotkeyParser.Global:
            case AutoHotkeyParser.Local:
            case AutoHotkeyParser.Identifier:
            case AutoHotkeyParser.StringLiteral:
                {
                this.state = 607;
                this.propertyName();
                }
                break;
            case AutoHotkeyParser.OpenParen:
                {
                this.state = 608;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 609;
                this.propertyName();
                this.state = 610;
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
        this.enterRule(localContext, 54, AutoHotkeyParser.RULE_breakStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 614;
            this.match(AutoHotkeyParser.Break);
            this.state = 618;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 116) {
                {
                {
                this.state = 615;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 620;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 626;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.OpenParen:
                {
                this.state = 621;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 622;
                this.propertyName();
                this.state = 623;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            case AutoHotkeyParser.True:
            case AutoHotkeyParser.False:
            case AutoHotkeyParser.DecimalLiteral:
            case AutoHotkeyParser.HexIntegerLiteral:
            case AutoHotkeyParser.Break:
            case AutoHotkeyParser.Do:
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
            case AutoHotkeyParser.In:
            case AutoHotkeyParser.Try:
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
            case AutoHotkeyParser.As:
            case AutoHotkeyParser.Unset:
            case AutoHotkeyParser.Static:
            case AutoHotkeyParser.Global:
            case AutoHotkeyParser.Local:
            case AutoHotkeyParser.Identifier:
            case AutoHotkeyParser.StringLiteral:
                {
                this.state = 625;
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
        this.enterRule(localContext, 56, AutoHotkeyParser.RULE_returnStatement);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 628;
            this.match(AutoHotkeyParser.Return);
            this.state = 632;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 80, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 629;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                }
                this.state = 634;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 80, this.context);
            }
            this.state = 636;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 81, this.context) ) {
            case 1:
                {
                this.state = 635;
                this.singleExpression(0);
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
    public switchStatement(): SwitchStatementContext {
        let localContext = new SwitchStatementContext(this.context, this.state);
        this.enterRule(localContext, 58, AutoHotkeyParser.RULE_switchStatement);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 638;
            this.match(AutoHotkeyParser.Switch);
            this.state = 642;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 82, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 639;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                }
                this.state = 644;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 82, this.context);
            }
            this.state = 646;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 83, this.context) ) {
            case 1:
                {
                this.state = 645;
                this.singleExpression(0);
                }
                break;
            }
            this.state = 656;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
            case 1:
                {
                this.state = 651;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 648;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 653;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 654;
                this.match(AutoHotkeyParser.Comma);
                this.state = 655;
                this.literal();
                }
                break;
            }
            this.state = 661;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 115 || _la === 116) {
                {
                {
                this.state = 658;
                this.s();
                }
                }
                this.state = 663;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 664;
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
        this.enterRule(localContext, 60, AutoHotkeyParser.RULE_caseBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 666;
            this.match(AutoHotkeyParser.OpenBrace);
            this.state = 670;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 115 || _la === 116) {
                {
                {
                this.state = 667;
                this.s();
                }
                }
                this.state = 672;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 676;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 75 || _la === 76) {
                {
                {
                this.state = 673;
                this.caseClause();
                }
                }
                this.state = 678;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 679;
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
        this.enterRule(localContext, 62, AutoHotkeyParser.RULE_caseClause);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 690;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Case:
                {
                this.state = 681;
                this.match(AutoHotkeyParser.Case);
                this.state = 685;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 89, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 682;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                    }
                    this.state = 687;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 89, this.context);
                }
                this.state = 688;
                this.expressionSequence();
                }
                break;
            case AutoHotkeyParser.Default:
                {
                this.state = 689;
                this.match(AutoHotkeyParser.Default);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 695;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 116) {
                {
                {
                this.state = 692;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 697;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 698;
            this.match(AutoHotkeyParser.Colon);
            this.state = 707;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context) ) {
            case 1:
                {
                this.state = 702;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 92, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 699;
                        this.s();
                        }
                        }
                    }
                    this.state = 704;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 92, this.context);
                }
                this.state = 705;
                this.statementList();
                }
                break;
            case 2:
                {
                this.state = 706;
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
        this.enterRule(localContext, 64, AutoHotkeyParser.RULE_labelledStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 709;
            this.identifier();
            this.state = 710;
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
        this.enterRule(localContext, 66, AutoHotkeyParser.RULE_gotoStatement);
        let _la: number;
        try {
            this.state = 731;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 96, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 712;
                this.match(AutoHotkeyParser.Goto);
                this.state = 716;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 713;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 718;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 719;
                this.propertyName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 720;
                this.match(AutoHotkeyParser.Goto);
                this.state = 724;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 721;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 726;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 727;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 728;
                this.propertyName();
                this.state = 729;
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
        this.enterRule(localContext, 68, AutoHotkeyParser.RULE_throwStatement);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 733;
            this.match(AutoHotkeyParser.Throw);
            this.state = 737;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 734;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                }
                this.state = 739;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 97, this.context);
            }
            this.state = 741;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 98, this.context) ) {
            case 1:
                {
                this.state = 740;
                this.singleExpression(0);
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
    public tryStatement(): TryStatementContext {
        let localContext = new TryStatementContext(this.context, this.state);
        this.enterRule(localContext, 70, AutoHotkeyParser.RULE_tryStatement);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 743;
            this.match(AutoHotkeyParser.Try);
            this.state = 747;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 99, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 744;
                    this.s();
                    }
                    }
                }
                this.state = 749;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 99, this.context);
            }
            this.state = 750;
            this.statement();
            this.state = 754;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 100, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 751;
                    this.catchProduction();
                    }
                    }
                }
                this.state = 756;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 100, this.context);
            }
            this.state = 758;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 101, this.context) ) {
            case 1:
                {
                this.state = 757;
                this.elseProduction();
                }
                break;
            }
            this.state = 761;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 102, this.context) ) {
            case 1:
                {
                this.state = 760;
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
        this.enterRule(localContext, 72, AutoHotkeyParser.RULE_catchProduction);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 763;
            this.match(AutoHotkeyParser.EOL);
            this.state = 764;
            this.match(AutoHotkeyParser.Catch);
            this.state = 768;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 765;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                }
                this.state = 770;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 103, this.context);
            }
            this.state = 778;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4026693641) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 2319) !== 0)) {
                {
                this.state = 771;
                this.catchAssignable();
                this.state = 775;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 772;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 777;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 780;
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
        this.enterRule(localContext, 74, AutoHotkeyParser.RULE_catchAssignable);
        let _la: number;
        try {
            this.state = 857;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 118, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 782;
                this.catchClasses();
                this.state = 790;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
                case 1:
                    {
                    this.state = 786;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 783;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 788;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 789;
                    this.match(AutoHotkeyParser.As);
                    }
                    break;
                }
                this.state = 799;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 109, this.context) ) {
                case 1:
                    {
                    this.state = 795;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 792;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 797;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 798;
                    this.identifier();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 801;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 802;
                this.catchClasses();
                this.state = 810;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 111, this.context) ) {
                case 1:
                    {
                    this.state = 806;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 803;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 808;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 809;
                    this.match(AutoHotkeyParser.As);
                    }
                    break;
                }
                this.state = 819;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4026693641) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 2319) !== 0)) {
                    {
                    this.state = 815;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 812;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 817;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 818;
                    this.identifier();
                    }
                }

                this.state = 821;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                {
                this.state = 826;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 823;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 828;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 829;
                this.match(AutoHotkeyParser.As);
                }
                {
                this.state = 834;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 831;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 836;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 837;
                this.identifier();
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 838;
                this.match(AutoHotkeyParser.OpenParen);
                {
                this.state = 842;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 839;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 844;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 845;
                this.match(AutoHotkeyParser.As);
                }
                {
                this.state = 850;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 116) {
                    {
                    {
                    this.state = 847;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 852;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 853;
                this.identifier();
                }
                this.state = 855;
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
        this.enterRule(localContext, 76, AutoHotkeyParser.RULE_catchClasses);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 859;
            this.identifier();
            this.state = 870;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 120, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 863;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 860;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 865;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 866;
                    this.match(AutoHotkeyParser.Comma);
                    this.state = 867;
                    this.identifier();
                    }
                    }
                }
                this.state = 872;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 120, this.context);
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
        this.enterRule(localContext, 78, AutoHotkeyParser.RULE_finallyProduction);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 873;
            this.match(AutoHotkeyParser.EOL);
            this.state = 874;
            this.match(AutoHotkeyParser.Finally);
            this.state = 878;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 121, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 875;
                    this.s();
                    }
                    }
                }
                this.state = 880;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 121, this.context);
            }
            this.state = 881;
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
        this.enterRule(localContext, 80, AutoHotkeyParser.RULE_functionDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 883;
            this.functionHead();
            this.state = 887;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 115 || _la === 116) {
                {
                {
                this.state = 884;
                _la = this.tokenStream.LA(1);
                if(!(_la === 115 || _la === 116)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 889;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 890;
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
    public classDeclaration(): ClassDeclarationContext {
        let localContext = new ClassDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 82, AutoHotkeyParser.RULE_classDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 892;
            this.match(AutoHotkeyParser.Class);
            this.state = 896;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 116) {
                {
                {
                this.state = 893;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 898;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 899;
            this.identifier();
            this.state = 912;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 126, this.context) ) {
            case 1:
                {
                this.state = 901;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 900;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 903;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 116);
                this.state = 905;
                this.match(AutoHotkeyParser.Extends);
                this.state = 907;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 906;
                    this.match(AutoHotkeyParser.WS);
                    }
                    }
                    this.state = 909;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 116);
                this.state = 911;
                this.classExtensionName();
                }
                break;
            }
            this.state = 917;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 115 || _la === 116) {
                {
                {
                this.state = 914;
                this.s();
                }
                }
                this.state = 919;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 920;
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
        this.enterRule(localContext, 84, AutoHotkeyParser.RULE_classExtensionName);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 922;
            this.identifier();
            this.state = 927;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 923;
                this.match(AutoHotkeyParser.Dot);
                this.state = 924;
                this.identifier();
                }
                }
                this.state = 929;
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
        this.enterRule(localContext, 86, AutoHotkeyParser.RULE_classTail);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 930;
            this.match(AutoHotkeyParser.OpenBrace);
            this.state = 937;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4294967295) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 65535) !== 0)) {
                {
                this.state = 935;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case AutoHotkeyParser.True:
                case AutoHotkeyParser.False:
                case AutoHotkeyParser.DecimalLiteral:
                case AutoHotkeyParser.HexIntegerLiteral:
                case AutoHotkeyParser.Break:
                case AutoHotkeyParser.Do:
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
                case AutoHotkeyParser.In:
                case AutoHotkeyParser.Try:
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
                case AutoHotkeyParser.As:
                case AutoHotkeyParser.Unset:
                case AutoHotkeyParser.Static:
                case AutoHotkeyParser.Global:
                case AutoHotkeyParser.Local:
                case AutoHotkeyParser.Identifier:
                case AutoHotkeyParser.StringLiteral:
                    {
                    this.state = 931;
                    this.classElement();
                    this.state = 932;
                    this.match(AutoHotkeyParser.EOL);
                    }
                    break;
                case AutoHotkeyParser.EOL:
                    {
                    this.state = 934;
                    this.match(AutoHotkeyParser.EOL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 939;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 940;
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
        this.enterRule(localContext, 88, AutoHotkeyParser.RULE_classElement);
        let _la: number;
        try {
            this.state = 977;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 137, this.context) ) {
            case 1:
                localContext = new ClassMethodDeclarationContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 942;
                this.methodDefinition();
                }
                break;
            case 2:
                localContext = new ClassPropertyDeclarationContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 950;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 132, this.context) ) {
                case 1:
                    {
                    this.state = 943;
                    this.match(AutoHotkeyParser.Static);
                    this.state = 947;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 944;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 949;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 952;
                this.propertyDefinition();
                }
                break;
            case 3:
                localContext = new ClassFieldDeclarationContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 960;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 134, this.context) ) {
                case 1:
                    {
                    this.state = 953;
                    this.match(AutoHotkeyParser.Static);
                    this.state = 957;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 954;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 959;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                    break;
                }
                this.state = 962;
                this.fieldDefinition();
                this.state = 973;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 13 || _la === 116) {
                    {
                    {
                    this.state = 966;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 963;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 968;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 969;
                    this.match(AutoHotkeyParser.Comma);
                    this.state = 970;
                    this.fieldDefinition();
                    }
                    }
                    this.state = 975;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 4:
                localContext = new NestedClassDeclarationContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 976;
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
        this.enterRule(localContext, 90, AutoHotkeyParser.RULE_methodDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 979;
            this.functionHead();
            this.state = 980;
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
        this.enterRule(localContext, 92, AutoHotkeyParser.RULE_propertyDefinition);
        let _la: number;
        try {
            this.state = 1007;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 141, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 982;
                this.classPropertyName();
                this.state = 983;
                this.match(AutoHotkeyParser.Arrow);
                this.state = 984;
                this.singleExpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 986;
                this.classPropertyName();
                this.state = 990;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 987;
                    this.s();
                    }
                    }
                    this.state = 992;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 993;
                this.match(AutoHotkeyParser.OpenBrace);
                this.state = 1001;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    this.state = 1001;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case AutoHotkeyParser.Get:
                        {
                        this.state = 994;
                        this.propertyGetterDefinition();
                        this.state = 995;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        break;
                    case AutoHotkeyParser.Set:
                        {
                        this.state = 997;
                        this.propertySetterDefinition();
                        this.state = 998;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        break;
                    case AutoHotkeyParser.EOL:
                        {
                        this.state = 1000;
                        this.match(AutoHotkeyParser.EOL);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    this.state = 1003;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 16387) !== 0));
                this.state = 1005;
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
        this.enterRule(localContext, 94, AutoHotkeyParser.RULE_classPropertyName);
        let _la: number;
        try {
            this.state = 1023;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1009;
                this.propertyName();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1010;
                this.propertyName();
                this.state = 1011;
                this.match(AutoHotkeyParser.OpenBracket);
                this.state = 1013;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 28 || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 603979777) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 570294351) !== 0)) {
                    {
                    this.state = 1012;
                    this.formalParameterList();
                    }
                }

                this.state = 1018;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 1015;
                    this.s();
                    }
                    }
                    this.state = 1020;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1021;
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
        this.enterRule(localContext, 96, AutoHotkeyParser.RULE_propertyGetterDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1025;
            this.match(AutoHotkeyParser.Get);
            this.state = 1026;
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
        this.enterRule(localContext, 98, AutoHotkeyParser.RULE_propertySetterDefinition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1028;
            this.match(AutoHotkeyParser.Set);
            this.state = 1029;
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
        this.enterRule(localContext, 100, AutoHotkeyParser.RULE_fieldDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            {
            this.state = 1031;
            this.propertyName();
            this.state = 1036;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 20) {
                {
                {
                this.state = 1032;
                this.match(AutoHotkeyParser.Dot);
                this.state = 1033;
                this.propertyName();
                }
                }
                this.state = 1038;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
            this.state = 1039;
            this.match(AutoHotkeyParser.Assign);
            this.state = 1040;
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
        this.enterRule(localContext, 102, AutoHotkeyParser.RULE_formalParameterList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1053;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 147, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1042;
                    this.formalParameterArg();
                    this.state = 1046;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 1043;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 1048;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1049;
                    this.match(AutoHotkeyParser.Comma);
                    }
                    }
                }
                this.state = 1055;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 147, this.context);
            }
            this.state = 1056;
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
        this.enterRule(localContext, 104, AutoHotkeyParser.RULE_formalParameterArg);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1059;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 47) {
                {
                this.state = 1058;
                this.match(AutoHotkeyParser.BitAnd);
                }
            }

            this.state = 1061;
            this.identifier();
            this.state = 1065;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Assign:
                {
                this.state = 1062;
                this.match(AutoHotkeyParser.Assign);
                this.state = 1063;
                this.singleExpression(0);
                }
                break;
            case AutoHotkeyParser.QuestionMark:
                {
                this.state = 1064;
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
        this.enterRule(localContext, 106, AutoHotkeyParser.RULE_lastFormalParameterArg);
        let _la: number;
        try {
            this.state = 1072;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 151, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1067;
                this.formalParameterArg();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1069;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4026693641) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 271) !== 0)) {
                    {
                    this.state = 1068;
                    this.identifier();
                    }
                }

                this.state = 1071;
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
        this.enterRule(localContext, 108, AutoHotkeyParser.RULE_arrayLiteral);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1074;
            this.match(AutoHotkeyParser.OpenBracket);
            this.state = 1078;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 152, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1075;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                }
                this.state = 1080;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 152, this.context);
            }
            this.state = 1088;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532687490) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 63) !== 0)) {
                {
                this.state = 1081;
                this.arguments();
                this.state = 1085;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 1082;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1087;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1090;
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
    public propertyAssignment(): PropertyAssignmentContext {
        let localContext = new PropertyAssignmentContext(this.context, this.state);
        this.enterRule(localContext, 110, AutoHotkeyParser.RULE_propertyAssignment);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1092;
            this.memberIdentifier();
            this.state = 1096;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 115 || _la === 116) {
                {
                {
                this.state = 1093;
                _la = this.tokenStream.LA(1);
                if(!(_la === 115 || _la === 116)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 1098;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1099;
            this.match(AutoHotkeyParser.Colon);
            this.state = 1103;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 156, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1100;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                }
                this.state = 1105;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 156, this.context);
            }
            this.state = 1106;
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
        this.enterRule(localContext, 112, AutoHotkeyParser.RULE_propertyName);
        try {
            this.state = 1112;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1108;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1109;
                this.reservedWord();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1110;
                this.match(AutoHotkeyParser.StringLiteral);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1111;
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
        this.enterRule(localContext, 114, AutoHotkeyParser.RULE_dereference);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1114;
            this.match(AutoHotkeyParser.DerefStart);
            this.state = 1115;
            this.singleExpression(0);
            this.state = 1116;
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
        this.enterRule(localContext, 116, AutoHotkeyParser.RULE_arguments);
        let _la: number;
        try {
            let alternative: number;
            this.state = 1148;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 164, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1118;
                this.argument();
                this.state = 1131;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 160, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1122;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 116) {
                            {
                            {
                            this.state = 1119;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 1124;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1125;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 1127;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 159, this.context) ) {
                        case 1:
                            {
                            this.state = 1126;
                            this.argument();
                            }
                            break;
                        }
                        }
                        }
                    }
                    this.state = 1133;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 160, this.context);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1144;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                    case 1:
                        {
                        {
                        this.state = 1137;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 116) {
                            {
                            {
                            this.state = 1134;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 1139;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1140;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 1142;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 162, this.context) ) {
                        case 1:
                            {
                            this.state = 1141;
                            this.argument();
                            }
                            break;
                        }
                        }
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 1146;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 163, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
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
    public argument(): ArgumentContext {
        let localContext = new ArgumentContext(this.context, this.state);
        this.enterRule(localContext, 118, AutoHotkeyParser.RULE_argument);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1150;
            this.singleExpression(0);
            this.state = 1152;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 15 || _la === 28) {
                {
                this.state = 1151;
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
        this.enterRule(localContext, 120, AutoHotkeyParser.RULE_expressionSequence);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1154;
            this.singleExpression(0);
            this.state = 1165;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 167, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1158;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 116) {
                        {
                        {
                        this.state = 1155;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                        this.state = 1160;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    this.state = 1161;
                    this.match(AutoHotkeyParser.Comma);
                    this.state = 1162;
                    this.singleExpression(0);
                    }
                    }
                }
                this.state = 1167;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 167, this.context);
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
        this.enterRule(localContext, 122, AutoHotkeyParser.RULE_memberIndexArguments);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1168;
            this.match(AutoHotkeyParser.OpenBracket);
            this.state = 1172;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 168, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 1169;
                    this.s();
                    }
                    }
                }
                this.state = 1174;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 168, this.context);
            }
            this.state = 1182;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532687490) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 63) !== 0)) {
                {
                this.state = 1175;
                this.arguments();
                this.state = 1179;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 1176;
                    this.s();
                    }
                    }
                    this.state = 1181;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1184;
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
        let _startState = 124;
        this.enterRecursionRule(localContext, 124, AutoHotkeyParser.RULE_singleExpression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1214;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 173, this.context) ) {
            case 1:
                {
                localContext = new PreIncrementDecrementExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1187;
                (localContext as PreIncrementDecrementExpressionContext)._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 22 || _la === 23)) {
                    (localContext as PreIncrementDecrementExpressionContext)._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1188;
                (localContext as PreIncrementDecrementExpressionContext)._right = this.singleExpression(22);
                }
                break;
            case 2:
                {
                localContext = new UnaryExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1192;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 1189;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1194;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1195;
                (localContext as UnaryExpressionContext)._op = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 251658240) !== 0))) {
                    (localContext as UnaryExpressionContext)._op = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1196;
                (localContext as UnaryExpressionContext)._right = this.singleExpression(20);
                }
                break;
            case 3:
                {
                localContext = new VerbalNotExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1197;
                this.match(AutoHotkeyParser.VerbalNot);
                this.state = 1201;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 172, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1198;
                        this.match(AutoHotkeyParser.WS);
                        }
                        }
                    }
                    this.state = 1203;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 172, this.context);
                }
                this.state = 1204;
                (localContext as VerbalNotExpressionContext)._right = this.singleExpression(8);
                }
                break;
            case 4:
                {
                localContext = new AssignmentExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1205;
                (localContext as AssignmentExpressionContext)._left = this.primaryExpression(0);
                this.state = 1206;
                (localContext as AssignmentExpressionContext)._op = this.assignmentOperator();
                this.state = 1207;
                (localContext as AssignmentExpressionContext)._right = this.singleExpression(3);
                }
                break;
            case 5:
                {
                localContext = new FatArrowExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1209;
                this.fatArrowExpressionHead();
                this.state = 1210;
                this.match(AutoHotkeyParser.Arrow);
                this.state = 1211;
                this.singleExpression(2);
                }
                break;
            case 6:
                {
                localContext = new AtomExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1213;
                this.primaryExpression(0);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1353;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 191, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1351;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 190, this.context) ) {
                    case 1:
                        {
                        localContext = new PowerExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as PowerExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1216;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 1217;
                        (localContext as PowerExpressionContext)._op = this.match(AutoHotkeyParser.Power);
                        this.state = 1218;
                        (localContext as PowerExpressionContext)._right = this.singleExpression(21);
                        }
                        break;
                    case 2:
                        {
                        localContext = new MultiplicativeExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as MultiplicativeExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1219;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        {
                        this.state = 1220;
                        (localContext as MultiplicativeExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1879048192) !== 0))) {
                            (localContext as MultiplicativeExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1224;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 174, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                {
                                this.state = 1221;
                                _la = this.tokenStream.LA(1);
                                if(!(_la === 115 || _la === 116)) {
                                this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                }
                                }
                            }
                            this.state = 1226;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 174, this.context);
                        }
                        }
                        this.state = 1227;
                        (localContext as MultiplicativeExpressionContext)._right = this.singleExpression(20);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AdditiveExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as AdditiveExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1228;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        {
                        this.state = 1232;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 115 || _la === 116) {
                            {
                            {
                            this.state = 1229;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 115 || _la === 116)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1234;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1235;
                        (localContext as AdditiveExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 24 || _la === 25)) {
                            (localContext as AdditiveExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1239;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 176, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                {
                                this.state = 1236;
                                _la = this.tokenStream.LA(1);
                                if(!(_la === 115 || _la === 116)) {
                                this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                }
                                }
                            }
                            this.state = 1241;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 176, this.context);
                        }
                        }
                        this.state = 1242;
                        (localContext as AdditiveExpressionContext)._right = this.singleExpression(19);
                        }
                        break;
                    case 4:
                        {
                        localContext = new BitShiftExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as BitShiftExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1243;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 1244;
                        (localContext as BitShiftExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 7) !== 0))) {
                            (localContext as BitShiftExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1245;
                        (localContext as BitShiftExpressionContext)._right = this.singleExpression(18);
                        }
                        break;
                    case 5:
                        {
                        localContext = new BitAndExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as BitAndExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1246;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        {
                        this.state = 1250;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 115 || _la === 116) {
                            {
                            {
                            this.state = 1247;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 115 || _la === 116)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1252;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1253;
                        (localContext as BitAndExpressionContext)._op = this.match(AutoHotkeyParser.BitAnd);
                        this.state = 1257;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 178, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                {
                                this.state = 1254;
                                _la = this.tokenStream.LA(1);
                                if(!(_la === 115 || _la === 116)) {
                                this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                }
                                }
                            }
                            this.state = 1259;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 178, this.context);
                        }
                        }
                        this.state = 1260;
                        (localContext as BitAndExpressionContext)._right = this.singleExpression(17);
                        }
                        break;
                    case 6:
                        {
                        localContext = new BitXOrExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as BitXOrExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1261;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 1262;
                        (localContext as BitXOrExpressionContext)._op = this.match(AutoHotkeyParser.BitXOr);
                        this.state = 1263;
                        (localContext as BitXOrExpressionContext)._right = this.singleExpression(16);
                        }
                        break;
                    case 7:
                        {
                        localContext = new BitOrExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as BitOrExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1264;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 1265;
                        (localContext as BitOrExpressionContext)._op = this.match(AutoHotkeyParser.BitOr);
                        this.state = 1266;
                        (localContext as BitOrExpressionContext)._right = this.singleExpression(15);
                        }
                        break;
                    case 8:
                        {
                        localContext = new ConcatenateExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as ConcatenateExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1267;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1274;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.ConcatDot:
                            {
                            this.state = 1268;
                            this.match(AutoHotkeyParser.ConcatDot);
                            }
                            break;
                        case AutoHotkeyParser.WS:
                            {
                            this.state = 1270;
                            this.errorHandler.sync(this);
                            alternative = 1;
                            do {
                                switch (alternative) {
                                case 1:
                                    {
                                    {
                                    this.state = 1269;
                                    this.match(AutoHotkeyParser.WS);
                                    }
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                                }
                                this.state = 1272;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 179, this.context);
                            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1276;
                        (localContext as ConcatenateExpressionContext)._right = this.singleExpression(14);
                        }
                        break;
                    case 9:
                        {
                        localContext = new RegExMatchExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as RegExMatchExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1277;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 1278;
                        (localContext as RegExMatchExpressionContext)._op = this.match(AutoHotkeyParser.RegExMatch);
                        this.state = 1279;
                        (localContext as RegExMatchExpressionContext)._right = this.singleExpression(13);
                        }
                        break;
                    case 10:
                        {
                        localContext = new RelationalExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as RelationalExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1280;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1281;
                        (localContext as RelationalExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 15) !== 0))) {
                            (localContext as RelationalExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1282;
                        (localContext as RelationalExpressionContext)._right = this.singleExpression(12);
                        }
                        break;
                    case 11:
                        {
                        localContext = new EqualityExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as EqualityExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1283;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1284;
                        (localContext as EqualityExpressionContext)._op = this.tokenStream.LT(1);
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 15) !== 0))) {
                            (localContext as EqualityExpressionContext)._op = this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1285;
                        (localContext as EqualityExpressionContext)._right = this.singleExpression(11);
                        }
                        break;
                    case 12:
                        {
                        localContext = new LogicalAndExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as LogicalAndExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1286;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 1289;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.And:
                            {
                            this.state = 1287;
                            (localContext as LogicalAndExpressionContext)._op = this.match(AutoHotkeyParser.And);
                            }
                            break;
                        case AutoHotkeyParser.VerbalAnd:
                            {
                            this.state = 1288;
                            (localContext as LogicalAndExpressionContext)._op = this.match(AutoHotkeyParser.VerbalAnd);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1291;
                        (localContext as LogicalAndExpressionContext)._right = this.singleExpression(8);
                        }
                        break;
                    case 13:
                        {
                        localContext = new LogicalOrExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as LogicalOrExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1292;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1295;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.Or:
                            {
                            this.state = 1293;
                            (localContext as LogicalOrExpressionContext)._op = this.match(AutoHotkeyParser.Or);
                            }
                            break;
                        case AutoHotkeyParser.VerbalOr:
                            {
                            this.state = 1294;
                            (localContext as LogicalOrExpressionContext)._op = this.match(AutoHotkeyParser.VerbalOr);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 1297;
                        (localContext as LogicalOrExpressionContext)._right = this.singleExpression(7);
                        }
                        break;
                    case 14:
                        {
                        localContext = new CoalesceExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as CoalesceExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1298;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1299;
                        (localContext as CoalesceExpressionContext)._op = this.match(AutoHotkeyParser.NullCoalesce);
                        this.state = 1300;
                        (localContext as CoalesceExpressionContext)._right = this.singleExpression(5);
                        }
                        break;
                    case 15:
                        {
                        localContext = new TernaryExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as TernaryExpressionContext)._ternCond = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1301;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1305;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 115 || _la === 116) {
                            {
                            {
                            this.state = 1302;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 115 || _la === 116)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1307;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1308;
                        this.match(AutoHotkeyParser.QuestionMark);
                        this.state = 1312;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 184, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                {
                                this.state = 1309;
                                _la = this.tokenStream.LA(1);
                                if(!(_la === 115 || _la === 116)) {
                                this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                }
                                }
                            }
                            this.state = 1314;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 184, this.context);
                        }
                        this.state = 1315;
                        (localContext as TernaryExpressionContext)._ternTrue = this.singleExpression(0);
                        this.state = 1319;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 115 || _la === 116) {
                            {
                            {
                            this.state = 1316;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 115 || _la === 116)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1321;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1322;
                        this.match(AutoHotkeyParser.Colon);
                        this.state = 1326;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                {
                                this.state = 1323;
                                _la = this.tokenStream.LA(1);
                                if(!(_la === 115 || _la === 116)) {
                                this.errorHandler.recoverInline(this);
                                }
                                else {
                                    this.errorHandler.reportMatch(this);
                                    this.consume();
                                }
                                }
                                }
                            }
                            this.state = 1328;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 186, this.context);
                        }
                        this.state = 1329;
                        (localContext as TernaryExpressionContext)._ternFalse = this.singleExpression(4);
                        }
                        break;
                    case 16:
                        {
                        localContext = new PostIncrementDecrementExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as PostIncrementDecrementExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1331;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 1334;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.PlusPlus:
                            {
                            this.state = 1332;
                            (localContext as PostIncrementDecrementExpressionContext)._op = this.match(AutoHotkeyParser.PlusPlus);
                            }
                            break;
                        case AutoHotkeyParser.MinusMinus:
                            {
                            this.state = 1333;
                            this.match(AutoHotkeyParser.MinusMinus);
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        break;
                    case 17:
                        {
                        localContext = new IsExpressionContext(new SingleExpressionContext(parentContext, parentState));
                        (localContext as IsExpressionContext)._left = previousContext;
                        this.pushNewRecursionContext(localContext, _startState, AutoHotkeyParser.RULE_singleExpression);
                        this.state = 1336;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        {
                        this.state = 1340;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 115 || _la === 116) {
                            {
                            {
                            this.state = 1337;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 115 || _la === 116)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1342;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1343;
                        (localContext as IsExpressionContext)._op = this.match(AutoHotkeyParser.Is);
                        this.state = 1347;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 115 || _la === 116) {
                            {
                            {
                            this.state = 1344;
                            _la = this.tokenStream.LA(1);
                            if(!(_la === 115 || _la === 116)) {
                            this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                            }
                            this.state = 1349;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        }
                        this.state = 1350;
                        (localContext as IsExpressionContext)._right = this.primaryExpression(0);
                        }
                        break;
                    }
                    }
                }
                this.state = 1355;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 191, this.context);
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
        let _startState = 126;
        this.enterRecursionRule(localContext, 126, AutoHotkeyParser.RULE_primaryExpression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1368;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 192, this.context) ) {
            case 1:
                {
                localContext = new VarRefExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 1357;
                this.match(AutoHotkeyParser.BitAnd);
                this.state = 1358;
                this.primaryExpression(7);
                }
                break;
            case 2:
                {
                localContext = new IdentifierExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1359;
                this.identifier();
                }
                break;
            case 3:
                {
                localContext = new DynamicIdentifierExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1360;
                this.dynamicIdentifier();
                }
                break;
            case 4:
                {
                localContext = new LiteralExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1361;
                this.literal();
                }
                break;
            case 5:
                {
                localContext = new ArrayLiteralExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1362;
                this.arrayLiteral();
                }
                break;
            case 6:
                {
                localContext = new ObjectLiteralExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1363;
                this.objectLiteral();
                }
                break;
            case 7:
                {
                localContext = new ParenthesizedExpressionContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 1364;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 1365;
                this.expressionSequence();
                this.state = 1366;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1374;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 193, this.context);
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
                    this.state = 1370;
                    if (!(this.precpred(this.context, 8))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                    }
                    this.state = 1371;
                    this.accessSuffix();
                    }
                    }
                }
                this.state = 1376;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 193, this.context);
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
        this.enterRule(localContext, 128, AutoHotkeyParser.RULE_accessSuffix);
        let _la: number;
        try {
            this.state = 1392;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context) ) {
            case 1:
                localContext = new MemberAccessContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1377;
                (localContext as MemberAccessContext)._modifier = this.tokenStream.LT(1);
                _la = this.tokenStream.LA(1);
                if(!(_la === 16 || _la === 20)) {
                    (localContext as MemberAccessContext)._modifier = this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1378;
                this.memberIdentifier();
                }
                break;
            case 2:
                localContext = new IndexAccessContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1380;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 16) {
                    {
                    this.state = 1379;
                    (localContext as IndexAccessContext)._modifier = this.match(AutoHotkeyParser.QuestionMarkDot);
                    }
                }

                this.state = 1382;
                this.memberIndexArguments();
                }
                break;
            case 3:
                localContext = new FunctionCallAccessContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1384;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 16) {
                    {
                    this.state = 1383;
                    (localContext as FunctionCallAccessContext)._modifier = this.match(AutoHotkeyParser.QuestionMarkDot);
                    }
                }

                this.state = 1386;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 1388;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 532687490) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4292870145) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4294967295) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 63) !== 0)) {
                    {
                    this.state = 1387;
                    this.arguments();
                    }
                }

                this.state = 1390;
                this.match(AutoHotkeyParser.CloseParen);
                }
                break;
            case 4:
                localContext = new AllowUnsetAccessContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1391;
                (localContext as AllowUnsetAccessContext)._modifier = this.match(AutoHotkeyParser.QuestionMark);
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
        this.enterRule(localContext, 130, AutoHotkeyParser.RULE_memberDot);
        let _la: number;
        try {
            this.state = 1420;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 202, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1395;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 1394;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1397;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 115 || _la === 116);
                this.state = 1399;
                this.match(AutoHotkeyParser.Dot);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1400;
                this.match(AutoHotkeyParser.Dot);
                this.state = 1404;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 1401;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1406;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1410;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 1407;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1412;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1413;
                this.match(AutoHotkeyParser.QuestionMarkDot);
                this.state = 1417;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 1414;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1419;
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
        this.enterRule(localContext, 132, AutoHotkeyParser.RULE_memberIdentifier);
        try {
            this.state = 1426;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 203, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1422;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1423;
                this.dynamicIdentifier();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1424;
                this.keyword();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1425;
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
        this.enterRule(localContext, 134, AutoHotkeyParser.RULE_dynamicIdentifier);
        try {
            let alternative: number;
            this.state = 1445;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.True:
            case AutoHotkeyParser.False:
            case AutoHotkeyParser.DecimalLiteral:
            case AutoHotkeyParser.HexIntegerLiteral:
            case AutoHotkeyParser.Break:
            case AutoHotkeyParser.Do:
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
            case AutoHotkeyParser.In:
            case AutoHotkeyParser.Try:
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
            case AutoHotkeyParser.As:
            case AutoHotkeyParser.Unset:
            case AutoHotkeyParser.Static:
            case AutoHotkeyParser.Global:
            case AutoHotkeyParser.Local:
            case AutoHotkeyParser.Identifier:
            case AutoHotkeyParser.StringLiteral:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1428;
                this.propertyName();
                this.state = 1429;
                this.dereference();
                this.state = 1434;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        this.state = 1432;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.True:
                        case AutoHotkeyParser.False:
                        case AutoHotkeyParser.DecimalLiteral:
                        case AutoHotkeyParser.HexIntegerLiteral:
                        case AutoHotkeyParser.Break:
                        case AutoHotkeyParser.Do:
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
                        case AutoHotkeyParser.In:
                        case AutoHotkeyParser.Try:
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
                        case AutoHotkeyParser.As:
                        case AutoHotkeyParser.Unset:
                        case AutoHotkeyParser.Static:
                        case AutoHotkeyParser.Global:
                        case AutoHotkeyParser.Local:
                        case AutoHotkeyParser.Identifier:
                        case AutoHotkeyParser.StringLiteral:
                            {
                            this.state = 1430;
                            this.propertyName();
                            }
                            break;
                        case AutoHotkeyParser.DerefStart:
                            {
                            this.state = 1431;
                            this.dereference();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                    }
                    this.state = 1436;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 205, this.context);
                }
                }
                break;
            case AutoHotkeyParser.DerefStart:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1437;
                this.dereference();
                this.state = 1442;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 207, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        this.state = 1440;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case AutoHotkeyParser.True:
                        case AutoHotkeyParser.False:
                        case AutoHotkeyParser.DecimalLiteral:
                        case AutoHotkeyParser.HexIntegerLiteral:
                        case AutoHotkeyParser.Break:
                        case AutoHotkeyParser.Do:
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
                        case AutoHotkeyParser.In:
                        case AutoHotkeyParser.Try:
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
                        case AutoHotkeyParser.As:
                        case AutoHotkeyParser.Unset:
                        case AutoHotkeyParser.Static:
                        case AutoHotkeyParser.Global:
                        case AutoHotkeyParser.Local:
                        case AutoHotkeyParser.Identifier:
                        case AutoHotkeyParser.StringLiteral:
                            {
                            this.state = 1438;
                            this.propertyName();
                            }
                            break;
                        case AutoHotkeyParser.DerefStart:
                            {
                            this.state = 1439;
                            this.dereference();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                    }
                    this.state = 1444;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 207, this.context);
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
        this.enterRule(localContext, 136, AutoHotkeyParser.RULE_initializer);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1447;
            this.match(AutoHotkeyParser.Assign);
            this.state = 1448;
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
        this.enterRule(localContext, 138, AutoHotkeyParser.RULE_assignable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1450;
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
        this.enterRule(localContext, 140, AutoHotkeyParser.RULE_objectLiteral);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1452;
            this.match(AutoHotkeyParser.OpenBrace);
            this.state = 1456;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 115 || _la === 116) {
                {
                {
                this.state = 1453;
                this.s();
                }
                }
                this.state = 1458;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1479;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1 || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4294967295) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 32767) !== 0)) {
                {
                this.state = 1459;
                this.propertyAssignment();
                this.state = 1470;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 211, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1463;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 116) {
                            {
                            {
                            this.state = 1460;
                            this.match(AutoHotkeyParser.WS);
                            }
                            }
                            this.state = 1465;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1466;
                        this.match(AutoHotkeyParser.Comma);
                        this.state = 1467;
                        this.propertyAssignment();
                        }
                        }
                    }
                    this.state = 1472;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 211, this.context);
                }
                this.state = 1476;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 1473;
                    this.s();
                    }
                    }
                    this.state = 1478;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 1481;
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
        this.enterRule(localContext, 142, AutoHotkeyParser.RULE_functionHead);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1484;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 214, this.context) ) {
            case 1:
                {
                this.state = 1483;
                this.functionHeadPrefix();
                }
                break;
            }
            this.state = 1486;
            this.identifierName();
            this.state = 1487;
            this.match(AutoHotkeyParser.OpenParen);
            this.state = 1489;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28 || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 603979777) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 570294351) !== 0)) {
                {
                this.state = 1488;
                this.formalParameterList();
                }
            }

            this.state = 1491;
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
        this.enterRule(localContext, 144, AutoHotkeyParser.RULE_functionHeadPrefix);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1493;
            this.match(AutoHotkeyParser.Static);
            this.state = 1497;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 116) {
                {
                {
                this.state = 1494;
                this.match(AutoHotkeyParser.WS);
                }
                }
                this.state = 1499;
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
        this.enterRule(localContext, 146, AutoHotkeyParser.RULE_functionExpressionHead);
        let _la: number;
        try {
            this.state = 1509;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 219, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1500;
                this.functionHead();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1502;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 110) {
                    {
                    this.state = 1501;
                    this.functionHeadPrefix();
                    }
                }

                this.state = 1504;
                this.match(AutoHotkeyParser.OpenParen);
                this.state = 1506;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 28 || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 603979777) !== 0) || ((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 570294351) !== 0)) {
                    {
                    this.state = 1505;
                    this.formalParameterList();
                    }
                }

                this.state = 1508;
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
        this.enterRule(localContext, 148, AutoHotkeyParser.RULE_fatArrowExpressionHead);
        let _la: number;
        try {
            this.state = 1529;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 225, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1515;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 4294967283) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 16383) !== 0)) {
                    {
                    this.state = 1512;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 220, this.context) ) {
                    case 1:
                        {
                        this.state = 1511;
                        this.functionHeadPrefix();
                        }
                        break;
                    }
                    this.state = 1514;
                    this.identifierName();
                    }
                }

                this.state = 1517;
                this.match(AutoHotkeyParser.Multiply);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1519;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 222, this.context) ) {
                case 1:
                    {
                    this.state = 1518;
                    this.functionHeadPrefix();
                    }
                    break;
                }
                this.state = 1522;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 47) {
                    {
                    this.state = 1521;
                    this.match(AutoHotkeyParser.BitAnd);
                    }
                }

                this.state = 1524;
                this.identifierName();
                this.state = 1526;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 15) {
                    {
                    this.state = 1525;
                    this.match(AutoHotkeyParser.QuestionMark);
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1528;
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
        this.enterRule(localContext, 150, AutoHotkeyParser.RULE_functionBody);
        let _la: number;
        try {
            this.state = 1540;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.Arrow:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1531;
                this.match(AutoHotkeyParser.Arrow);
                this.state = 1532;
                this.singleExpression(0);
                }
                break;
            case AutoHotkeyParser.OpenBrace:
            case AutoHotkeyParser.EOL:
            case AutoHotkeyParser.WS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1536;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 115 || _la === 116) {
                    {
                    {
                    this.state = 1533;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 115 || _la === 116)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                    }
                    this.state = 1538;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1539;
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
        this.enterRule(localContext, 152, AutoHotkeyParser.RULE_assignmentOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1542;
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
        this.enterRule(localContext, 154, AutoHotkeyParser.RULE_literal);
        let _la: number;
        try {
            this.state = 1547;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case AutoHotkeyParser.True:
            case AutoHotkeyParser.False:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1544;
                this.boolean_();
                }
                break;
            case AutoHotkeyParser.DecimalLiteral:
            case AutoHotkeyParser.HexIntegerLiteral:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1545;
                this.numericLiteral();
                }
                break;
            case AutoHotkeyParser.Unset:
            case AutoHotkeyParser.StringLiteral:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1546;
                _la = this.tokenStream.LA(1);
                if(!(_la === 109 || _la === 114)) {
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
        this.enterRule(localContext, 156, AutoHotkeyParser.RULE_boolean);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1549;
            _la = this.tokenStream.LA(1);
            if(!(_la === 68 || _la === 69)) {
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
        this.enterRule(localContext, 158, AutoHotkeyParser.RULE_numericLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1551;
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
    public getter(): GetterContext {
        let localContext = new GetterContext(this.context, this.state);
        this.enterRule(localContext, 160, AutoHotkeyParser.RULE_getter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1553;
            this.match(AutoHotkeyParser.Get);
            this.state = 1554;
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
        this.enterRule(localContext, 162, AutoHotkeyParser.RULE_setter);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1556;
            this.match(AutoHotkeyParser.Set);
            this.state = 1557;
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
        this.enterRule(localContext, 164, AutoHotkeyParser.RULE_identifierName);
        try {
            this.state = 1561;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 229, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1559;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1560;
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
        this.enterRule(localContext, 166, AutoHotkeyParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1563;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4026693641) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 271) !== 0))) {
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
        this.enterRule(localContext, 168, AutoHotkeyParser.RULE_reservedWord);
        try {
            this.state = 1568;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 230, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1565;
                this.keyword();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1566;
                this.match(AutoHotkeyParser.Unset);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1567;
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
        this.enterRule(localContext, 170, AutoHotkeyParser.RULE_keyword);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1570;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 536547309) !== 0) || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 125) !== 0))) {
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
        this.enterRule(localContext, 172, AutoHotkeyParser.RULE_s);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1572;
            _la = this.tokenStream.LA(1);
            if(!(_la === 115 || _la === 116)) {
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
        this.enterRule(localContext, 174, AutoHotkeyParser.RULE_eos);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1574;
            _la = this.tokenStream.LA(1);
            if(!(_la === -1 || _la === 115)) {
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
        case 10:
            return this.statement_sempred(localContext as StatementContext, predIndex);
        case 24:
            return this.iterationStatement_sempred(localContext as IterationStatementContext, predIndex);
        case 62:
            return this.singleExpression_sempred(localContext as SingleExpressionContext, predIndex);
        case 63:
            return this.primaryExpression_sempred(localContext as PrimaryExpressionContext, predIndex);
        }
        return true;
    }
    private statement_sempred(localContext: StatementContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.isFunctionStatement();
        }
        return true;
    }
    private iterationStatement_sempred(localContext: IterationStatementContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.isValidLoopExpression();
        }
        return true;
    }
    private singleExpression_sempred(localContext: SingleExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 2:
            return this.precpred(this.context, 21);
        case 3:
            return this.precpred(this.context, 19);
        case 4:
            return this.precpred(this.context, 18);
        case 5:
            return this.precpred(this.context, 17);
        case 6:
            return this.precpred(this.context, 16);
        case 7:
            return this.precpred(this.context, 15);
        case 8:
            return this.precpred(this.context, 14);
        case 9:
            return this.precpred(this.context, 13);
        case 10:
            return this.precpred(this.context, 12);
        case 11:
            return this.precpred(this.context, 11);
        case 12:
            return this.precpred(this.context, 10);
        case 13:
            return this.precpred(this.context, 7);
        case 14:
            return this.precpred(this.context, 6);
        case 15:
            return this.precpred(this.context, 5);
        case 16:
            return this.precpred(this.context, 4);
        case 17:
            return this.precpred(this.context, 23);
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
        4,1,153,1577,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
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
        85,7,85,2,86,7,86,2,87,7,87,1,0,1,0,1,0,1,0,3,0,181,8,0,1,1,1,1,
        1,1,1,1,1,1,4,1,188,8,1,11,1,12,1,189,1,2,1,2,1,2,1,2,1,2,1,2,3,
        2,198,8,2,1,3,1,3,1,3,3,3,203,8,3,1,4,1,4,3,4,207,8,4,1,4,1,4,3,
        4,211,8,4,1,4,1,4,3,4,215,8,4,1,4,1,4,3,4,219,8,4,1,4,1,4,1,4,3,
        4,224,8,4,1,4,1,4,1,4,3,4,229,8,4,3,4,231,8,4,1,5,1,5,1,5,1,5,3,
        5,237,8,5,1,5,1,5,3,5,241,8,5,1,5,1,5,1,5,3,5,246,8,5,1,6,1,6,1,
        7,1,7,1,7,5,7,253,8,7,10,7,12,7,256,9,7,1,7,5,7,259,8,7,10,7,12,
        7,262,9,7,1,7,1,7,3,7,266,8,7,1,7,1,7,3,7,270,8,7,1,7,3,7,273,8,
        7,1,8,1,8,1,9,1,9,1,9,5,9,280,8,9,10,9,12,9,283,9,9,1,9,5,9,286,
        8,9,10,9,12,9,289,9,9,1,9,1,9,3,9,293,8,9,1,10,1,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,311,
        8,10,1,11,1,11,1,12,1,12,5,12,317,8,12,10,12,12,12,320,9,12,1,12,
        3,12,323,8,12,1,12,1,12,1,13,1,13,1,13,4,13,330,8,13,11,13,12,13,
        331,1,14,1,14,5,14,336,8,14,10,14,12,14,339,9,14,1,14,3,14,342,8,
        14,1,15,1,15,3,15,346,8,15,1,16,1,16,5,16,350,8,16,10,16,12,16,353,
        9,16,1,16,1,16,5,16,357,8,16,10,16,12,16,360,9,16,1,17,1,17,1,17,
        1,17,1,17,3,17,367,8,17,1,18,1,18,4,18,371,8,18,11,18,12,18,372,
        1,18,3,18,376,8,18,1,19,1,19,1,20,1,20,5,20,382,8,20,10,20,12,20,
        385,9,20,1,20,1,20,5,20,389,8,20,10,20,12,20,392,9,20,1,20,1,20,
        3,20,396,8,20,1,21,4,21,399,8,21,11,21,12,21,400,1,21,1,21,3,21,
        405,8,21,1,22,1,22,1,22,5,22,410,8,22,10,22,12,22,413,9,22,1,22,
        1,22,1,23,1,23,1,23,5,23,420,8,23,10,23,12,23,423,9,23,1,23,1,23,
        1,24,1,24,1,24,5,24,430,8,24,10,24,12,24,433,9,24,1,24,1,24,5,24,
        437,8,24,10,24,12,24,440,9,24,1,24,1,24,3,24,444,8,24,5,24,446,8,
        24,10,24,12,24,449,9,24,1,24,5,24,452,8,24,10,24,12,24,455,9,24,
        1,24,1,24,3,24,459,8,24,1,24,3,24,462,8,24,1,24,1,24,1,24,5,24,467,
        8,24,10,24,12,24,470,9,24,1,24,1,24,5,24,474,8,24,10,24,12,24,477,
        9,24,3,24,479,8,24,1,24,1,24,3,24,483,8,24,1,24,3,24,486,8,24,1,
        24,1,24,5,24,490,8,24,10,24,12,24,493,9,24,1,24,1,24,5,24,497,8,
        24,10,24,12,24,500,9,24,1,24,1,24,3,24,504,8,24,1,24,3,24,507,8,
        24,1,24,1,24,5,24,511,8,24,10,24,12,24,514,9,24,1,24,1,24,5,24,518,
        8,24,10,24,12,24,521,9,24,1,24,1,24,3,24,525,8,24,1,24,3,24,528,
        8,24,3,24,530,8,24,1,25,3,25,533,8,25,1,25,5,25,536,8,25,10,25,12,
        25,539,9,25,1,25,1,25,3,25,543,8,25,5,25,545,8,25,10,25,12,25,548,
        9,25,1,25,5,25,551,8,25,10,25,12,25,554,9,25,1,25,1,25,5,25,558,
        8,25,10,25,12,25,561,9,25,1,25,1,25,1,25,3,25,566,8,25,1,25,5,25,
        569,8,25,10,25,12,25,572,9,25,1,25,1,25,3,25,576,8,25,5,25,578,8,
        25,10,25,12,25,581,9,25,1,25,5,25,584,8,25,10,25,12,25,587,9,25,
        1,25,1,25,5,25,591,8,25,10,25,12,25,594,9,25,1,25,1,25,1,25,3,25,
        599,8,25,1,26,1,26,5,26,603,8,26,10,26,12,26,606,9,26,1,26,1,26,
        1,26,1,26,1,26,3,26,613,8,26,1,27,1,27,5,27,617,8,27,10,27,12,27,
        620,9,27,1,27,1,27,1,27,1,27,1,27,3,27,627,8,27,1,28,1,28,5,28,631,
        8,28,10,28,12,28,634,9,28,1,28,3,28,637,8,28,1,29,1,29,5,29,641,
        8,29,10,29,12,29,644,9,29,1,29,3,29,647,8,29,1,29,5,29,650,8,29,
        10,29,12,29,653,9,29,1,29,1,29,3,29,657,8,29,1,29,5,29,660,8,29,
        10,29,12,29,663,9,29,1,29,1,29,1,30,1,30,5,30,669,8,30,10,30,12,
        30,672,9,30,1,30,5,30,675,8,30,10,30,12,30,678,9,30,1,30,1,30,1,
        31,1,31,5,31,684,8,31,10,31,12,31,687,9,31,1,31,1,31,3,31,691,8,
        31,1,31,5,31,694,8,31,10,31,12,31,697,9,31,1,31,1,31,5,31,701,8,
        31,10,31,12,31,704,9,31,1,31,1,31,3,31,708,8,31,1,32,1,32,1,32,1,
        33,1,33,5,33,715,8,33,10,33,12,33,718,9,33,1,33,1,33,1,33,5,33,723,
        8,33,10,33,12,33,726,9,33,1,33,1,33,1,33,1,33,3,33,732,8,33,1,34,
        1,34,5,34,736,8,34,10,34,12,34,739,9,34,1,34,3,34,742,8,34,1,35,
        1,35,5,35,746,8,35,10,35,12,35,749,9,35,1,35,1,35,5,35,753,8,35,
        10,35,12,35,756,9,35,1,35,3,35,759,8,35,1,35,3,35,762,8,35,1,36,
        1,36,1,36,5,36,767,8,36,10,36,12,36,770,9,36,1,36,1,36,5,36,774,
        8,36,10,36,12,36,777,9,36,3,36,779,8,36,1,36,1,36,1,37,1,37,5,37,
        785,8,37,10,37,12,37,788,9,37,1,37,3,37,791,8,37,1,37,5,37,794,8,
        37,10,37,12,37,797,9,37,1,37,3,37,800,8,37,1,37,1,37,1,37,5,37,805,
        8,37,10,37,12,37,808,9,37,1,37,3,37,811,8,37,1,37,5,37,814,8,37,
        10,37,12,37,817,9,37,1,37,3,37,820,8,37,1,37,1,37,1,37,5,37,825,
        8,37,10,37,12,37,828,9,37,1,37,1,37,1,37,5,37,833,8,37,10,37,12,
        37,836,9,37,1,37,1,37,1,37,5,37,841,8,37,10,37,12,37,844,9,37,1,
        37,1,37,1,37,5,37,849,8,37,10,37,12,37,852,9,37,1,37,1,37,1,37,1,
        37,3,37,858,8,37,1,38,1,38,5,38,862,8,38,10,38,12,38,865,9,38,1,
        38,1,38,5,38,869,8,38,10,38,12,38,872,9,38,1,39,1,39,1,39,5,39,877,
        8,39,10,39,12,39,880,9,39,1,39,1,39,1,40,1,40,5,40,886,8,40,10,40,
        12,40,889,9,40,1,40,1,40,1,41,1,41,5,41,895,8,41,10,41,12,41,898,
        9,41,1,41,1,41,4,41,902,8,41,11,41,12,41,903,1,41,1,41,4,41,908,
        8,41,11,41,12,41,909,1,41,3,41,913,8,41,1,41,5,41,916,8,41,10,41,
        12,41,919,9,41,1,41,1,41,1,42,1,42,1,42,5,42,926,8,42,10,42,12,42,
        929,9,42,1,43,1,43,1,43,1,43,1,43,5,43,936,8,43,10,43,12,43,939,
        9,43,1,43,1,43,1,44,1,44,1,44,5,44,946,8,44,10,44,12,44,949,9,44,
        3,44,951,8,44,1,44,1,44,1,44,5,44,956,8,44,10,44,12,44,959,9,44,
        3,44,961,8,44,1,44,1,44,5,44,965,8,44,10,44,12,44,968,9,44,1,44,
        1,44,5,44,972,8,44,10,44,12,44,975,9,44,1,44,3,44,978,8,44,1,45,
        1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,5,46,989,8,46,10,46,12,46,
        992,9,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,4,46,1002,8,46,
        11,46,12,46,1003,1,46,1,46,3,46,1008,8,46,1,47,1,47,1,47,1,47,3,
        47,1014,8,47,1,47,5,47,1017,8,47,10,47,12,47,1020,9,47,1,47,1,47,
        3,47,1024,8,47,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,5,50,
        1035,8,50,10,50,12,50,1038,9,50,1,50,1,50,1,50,1,51,1,51,5,51,1045,
        8,51,10,51,12,51,1048,9,51,1,51,1,51,5,51,1052,8,51,10,51,12,51,
        1055,9,51,1,51,1,51,1,52,3,52,1060,8,52,1,52,1,52,1,52,1,52,3,52,
        1066,8,52,1,53,1,53,3,53,1070,8,53,1,53,3,53,1073,8,53,1,54,1,54,
        5,54,1077,8,54,10,54,12,54,1080,9,54,1,54,1,54,5,54,1084,8,54,10,
        54,12,54,1087,9,54,3,54,1089,8,54,1,54,1,54,1,55,1,55,5,55,1095,
        8,55,10,55,12,55,1098,9,55,1,55,1,55,5,55,1102,8,55,10,55,12,55,
        1105,9,55,1,55,1,55,1,56,1,56,1,56,1,56,3,56,1113,8,56,1,57,1,57,
        1,57,1,57,1,58,1,58,5,58,1121,8,58,10,58,12,58,1124,9,58,1,58,1,
        58,3,58,1128,8,58,5,58,1130,8,58,10,58,12,58,1133,9,58,1,58,5,58,
        1136,8,58,10,58,12,58,1139,9,58,1,58,1,58,3,58,1143,8,58,4,58,1145,
        8,58,11,58,12,58,1146,3,58,1149,8,58,1,59,1,59,3,59,1153,8,59,1,
        60,1,60,5,60,1157,8,60,10,60,12,60,1160,9,60,1,60,1,60,5,60,1164,
        8,60,10,60,12,60,1167,9,60,1,61,1,61,5,61,1171,8,61,10,61,12,61,
        1174,9,61,1,61,1,61,5,61,1178,8,61,10,61,12,61,1181,9,61,3,61,1183,
        8,61,1,61,1,61,1,62,1,62,1,62,1,62,5,62,1191,8,62,10,62,12,62,1194,
        9,62,1,62,1,62,1,62,1,62,5,62,1200,8,62,10,62,12,62,1203,9,62,1,
        62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,1215,8,62,1,
        62,1,62,1,62,1,62,1,62,1,62,5,62,1223,8,62,10,62,12,62,1226,9,62,
        1,62,1,62,1,62,5,62,1231,8,62,10,62,12,62,1234,9,62,1,62,1,62,5,
        62,1238,8,62,10,62,12,62,1241,9,62,1,62,1,62,1,62,1,62,1,62,1,62,
        5,62,1249,8,62,10,62,12,62,1252,9,62,1,62,1,62,5,62,1256,8,62,10,
        62,12,62,1259,9,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,
        1,62,4,62,1271,8,62,11,62,12,62,1272,3,62,1275,8,62,1,62,1,62,1,
        62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,1290,8,
        62,1,62,1,62,1,62,1,62,3,62,1296,8,62,1,62,1,62,1,62,1,62,1,62,1,
        62,5,62,1304,8,62,10,62,12,62,1307,9,62,1,62,1,62,5,62,1311,8,62,
        10,62,12,62,1314,9,62,1,62,1,62,5,62,1318,8,62,10,62,12,62,1321,
        9,62,1,62,1,62,5,62,1325,8,62,10,62,12,62,1328,9,62,1,62,1,62,1,
        62,1,62,1,62,3,62,1335,8,62,1,62,1,62,5,62,1339,8,62,10,62,12,62,
        1342,9,62,1,62,1,62,5,62,1346,8,62,10,62,12,62,1349,9,62,1,62,5,
        62,1352,8,62,10,62,12,62,1355,9,62,1,63,1,63,1,63,1,63,1,63,1,63,
        1,63,1,63,1,63,1,63,1,63,1,63,3,63,1369,8,63,1,63,1,63,5,63,1373,
        8,63,10,63,12,63,1376,9,63,1,64,1,64,1,64,3,64,1381,8,64,1,64,1,
        64,3,64,1385,8,64,1,64,1,64,3,64,1389,8,64,1,64,1,64,3,64,1393,8,
        64,1,65,4,65,1396,8,65,11,65,12,65,1397,1,65,1,65,1,65,5,65,1403,
        8,65,10,65,12,65,1406,9,65,1,65,5,65,1409,8,65,10,65,12,65,1412,
        9,65,1,65,1,65,5,65,1416,8,65,10,65,12,65,1419,9,65,3,65,1421,8,
        65,1,66,1,66,1,66,1,66,3,66,1427,8,66,1,67,1,67,1,67,1,67,5,67,1433,
        8,67,10,67,12,67,1436,9,67,1,67,1,67,1,67,5,67,1441,8,67,10,67,12,
        67,1444,9,67,3,67,1446,8,67,1,68,1,68,1,68,1,69,1,69,1,70,1,70,5,
        70,1455,8,70,10,70,12,70,1458,9,70,1,70,1,70,5,70,1462,8,70,10,70,
        12,70,1465,9,70,1,70,1,70,5,70,1469,8,70,10,70,12,70,1472,9,70,1,
        70,5,70,1475,8,70,10,70,12,70,1478,9,70,3,70,1480,8,70,1,70,1,70,
        1,71,3,71,1485,8,71,1,71,1,71,1,71,3,71,1490,8,71,1,71,1,71,1,72,
        1,72,5,72,1496,8,72,10,72,12,72,1499,9,72,1,73,1,73,3,73,1503,8,
        73,1,73,1,73,3,73,1507,8,73,1,73,3,73,1510,8,73,1,74,3,74,1513,8,
        74,1,74,3,74,1516,8,74,1,74,1,74,3,74,1520,8,74,1,74,3,74,1523,8,
        74,1,74,1,74,3,74,1527,8,74,1,74,3,74,1530,8,74,1,75,1,75,1,75,5,
        75,1535,8,75,10,75,12,75,1538,9,75,1,75,3,75,1541,8,75,1,76,1,76,
        1,77,1,77,1,77,3,77,1548,8,77,1,78,1,78,1,79,1,79,1,80,1,80,1,80,
        1,81,1,81,1,81,1,82,1,82,3,82,1562,8,82,1,83,1,83,1,84,1,84,1,84,
        3,84,1569,8,84,1,85,1,85,1,86,1,86,1,87,1,87,1,87,0,2,124,126,88,
        0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
        46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,
        90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
        126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
        158,160,162,164,166,168,170,172,174,0,25,1,0,129,132,2,0,68,69,123,
        123,2,0,133,133,135,135,2,0,136,136,142,143,1,0,137,141,1,0,119,
        120,1,0,110,112,1,0,22,23,1,0,84,87,1,0,115,116,2,0,15,15,28,28,
        1,0,24,27,1,0,28,30,1,0,24,25,1,0,35,37,1,0,38,41,1,0,42,45,2,0,
        16,16,20,20,2,0,14,14,52,66,2,0,109,109,114,114,1,0,68,69,1,0,70,
        71,6,0,73,73,76,76,84,87,90,90,101,108,113,113,7,0,72,72,74,75,77,
        83,88,89,91,100,106,106,108,112,1,1,115,115,1791,0,180,1,0,0,0,2,
        187,1,0,0,0,4,197,1,0,0,0,6,199,1,0,0,0,8,230,1,0,0,0,10,245,1,0,
        0,0,12,247,1,0,0,0,14,249,1,0,0,0,16,274,1,0,0,0,18,276,1,0,0,0,
        20,310,1,0,0,0,22,312,1,0,0,0,24,314,1,0,0,0,26,329,1,0,0,0,28,333,
        1,0,0,0,30,345,1,0,0,0,32,347,1,0,0,0,34,361,1,0,0,0,36,368,1,0,
        0,0,38,377,1,0,0,0,40,379,1,0,0,0,42,404,1,0,0,0,44,406,1,0,0,0,
        46,416,1,0,0,0,48,529,1,0,0,0,50,598,1,0,0,0,52,600,1,0,0,0,54,614,
        1,0,0,0,56,628,1,0,0,0,58,638,1,0,0,0,60,666,1,0,0,0,62,690,1,0,
        0,0,64,709,1,0,0,0,66,731,1,0,0,0,68,733,1,0,0,0,70,743,1,0,0,0,
        72,763,1,0,0,0,74,857,1,0,0,0,76,859,1,0,0,0,78,873,1,0,0,0,80,883,
        1,0,0,0,82,892,1,0,0,0,84,922,1,0,0,0,86,930,1,0,0,0,88,977,1,0,
        0,0,90,979,1,0,0,0,92,1007,1,0,0,0,94,1023,1,0,0,0,96,1025,1,0,0,
        0,98,1028,1,0,0,0,100,1031,1,0,0,0,102,1053,1,0,0,0,104,1059,1,0,
        0,0,106,1072,1,0,0,0,108,1074,1,0,0,0,110,1092,1,0,0,0,112,1112,
        1,0,0,0,114,1114,1,0,0,0,116,1148,1,0,0,0,118,1150,1,0,0,0,120,1154,
        1,0,0,0,122,1168,1,0,0,0,124,1214,1,0,0,0,126,1368,1,0,0,0,128,1392,
        1,0,0,0,130,1420,1,0,0,0,132,1426,1,0,0,0,134,1445,1,0,0,0,136,1447,
        1,0,0,0,138,1450,1,0,0,0,140,1452,1,0,0,0,142,1484,1,0,0,0,144,1493,
        1,0,0,0,146,1509,1,0,0,0,148,1529,1,0,0,0,150,1540,1,0,0,0,152,1542,
        1,0,0,0,154,1547,1,0,0,0,156,1549,1,0,0,0,158,1551,1,0,0,0,160,1553,
        1,0,0,0,162,1556,1,0,0,0,164,1561,1,0,0,0,166,1563,1,0,0,0,168,1568,
        1,0,0,0,170,1570,1,0,0,0,172,1572,1,0,0,0,174,1574,1,0,0,0,176,177,
        3,2,1,0,177,178,5,0,0,1,178,181,1,0,0,0,179,181,5,0,0,1,180,176,
        1,0,0,0,180,179,1,0,0,0,181,1,1,0,0,0,182,183,3,4,2,0,183,184,3,
        174,87,0,184,188,1,0,0,0,185,188,5,116,0,0,186,188,5,115,0,0,187,
        182,1,0,0,0,187,185,1,0,0,0,187,186,1,0,0,0,188,189,1,0,0,0,189,
        187,1,0,0,0,189,190,1,0,0,0,190,3,1,0,0,0,191,198,3,82,41,0,192,
        198,3,6,3,0,193,198,3,12,6,0,194,198,3,14,7,0,195,198,3,18,9,0,196,
        198,3,20,10,0,197,191,1,0,0,0,197,192,1,0,0,0,197,193,1,0,0,0,197,
        194,1,0,0,0,197,195,1,0,0,0,197,196,1,0,0,0,198,5,1,0,0,0,199,202,
        5,34,0,0,200,203,3,8,4,0,201,203,3,10,5,0,202,200,1,0,0,0,202,201,
        1,0,0,0,203,7,1,0,0,0,204,206,5,124,0,0,205,207,3,124,62,0,206,205,
        1,0,0,0,206,207,1,0,0,0,207,231,1,0,0,0,208,214,5,128,0,0,209,211,
        5,151,0,0,210,209,1,0,0,0,210,211,1,0,0,0,211,212,1,0,0,0,212,215,
        5,152,0,0,213,215,5,150,0,0,214,210,1,0,0,0,214,213,1,0,0,0,215,
        231,1,0,0,0,216,218,5,125,0,0,217,219,3,158,79,0,218,217,1,0,0,0,
        218,219,1,0,0,0,219,231,1,0,0,0,220,223,5,127,0,0,221,224,3,158,
        79,0,222,224,3,156,78,0,223,221,1,0,0,0,223,222,1,0,0,0,223,224,
        1,0,0,0,224,231,1,0,0,0,225,228,5,126,0,0,226,229,3,158,79,0,227,
        229,3,156,78,0,228,226,1,0,0,0,228,227,1,0,0,0,228,229,1,0,0,0,229,
        231,1,0,0,0,230,204,1,0,0,0,230,208,1,0,0,0,230,216,1,0,0,0,230,
        220,1,0,0,0,230,225,1,0,0,0,231,9,1,0,0,0,232,233,7,0,0,0,233,246,
        5,147,0,0,234,236,5,134,0,0,235,237,7,1,0,0,236,235,1,0,0,0,236,
        237,1,0,0,0,237,246,1,0,0,0,238,240,7,2,0,0,239,241,5,147,0,0,240,
        239,1,0,0,0,240,241,1,0,0,0,241,246,1,0,0,0,242,246,7,3,0,0,243,
        244,7,4,0,0,244,246,5,123,0,0,245,232,1,0,0,0,245,234,1,0,0,0,245,
        238,1,0,0,0,245,242,1,0,0,0,245,243,1,0,0,0,246,11,1,0,0,0,247,248,
        5,5,0,0,248,13,1,0,0,0,249,254,5,4,0,0,250,251,5,115,0,0,251,253,
        5,4,0,0,252,250,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,
        1,0,0,0,255,260,1,0,0,0,256,254,1,0,0,0,257,259,5,116,0,0,258,257,
        1,0,0,0,259,262,1,0,0,0,260,258,1,0,0,0,260,261,1,0,0,0,261,272,
        1,0,0,0,262,260,1,0,0,0,263,273,3,16,8,0,264,266,5,115,0,0,265,264,
        1,0,0,0,265,266,1,0,0,0,266,267,1,0,0,0,267,273,3,80,40,0,268,270,
        5,115,0,0,269,268,1,0,0,0,269,270,1,0,0,0,270,271,1,0,0,0,271,273,
        3,20,10,0,272,263,1,0,0,0,272,265,1,0,0,0,272,269,1,0,0,0,273,15,
        1,0,0,0,274,275,7,5,0,0,275,17,1,0,0,0,276,281,5,6,0,0,277,278,5,
        115,0,0,278,280,5,6,0,0,279,277,1,0,0,0,280,283,1,0,0,0,281,279,
        1,0,0,0,281,282,1,0,0,0,282,287,1,0,0,0,283,281,1,0,0,0,284,286,
        3,172,86,0,285,284,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,
        1,0,0,0,288,292,1,0,0,0,289,287,1,0,0,0,290,293,3,80,40,0,291,293,
        3,20,10,0,292,290,1,0,0,0,292,291,1,0,0,0,293,19,1,0,0,0,294,311,
        3,28,14,0,295,311,3,40,20,0,296,311,3,48,24,0,297,311,3,52,26,0,
        298,311,3,54,27,0,299,311,3,56,28,0,300,311,3,64,32,0,301,311,3,
        66,33,0,302,311,3,58,29,0,303,311,3,68,34,0,304,311,3,70,35,0,305,
        311,3,80,40,0,306,307,4,10,0,0,307,311,3,36,18,0,308,311,3,22,11,
        0,309,311,3,38,19,0,310,294,1,0,0,0,310,295,1,0,0,0,310,296,1,0,
        0,0,310,297,1,0,0,0,310,298,1,0,0,0,310,299,1,0,0,0,310,300,1,0,
        0,0,310,301,1,0,0,0,310,302,1,0,0,0,310,303,1,0,0,0,310,304,1,0,
        0,0,310,305,1,0,0,0,310,306,1,0,0,0,310,308,1,0,0,0,310,309,1,0,
        0,0,311,21,1,0,0,0,312,313,3,24,12,0,313,23,1,0,0,0,314,318,5,11,
        0,0,315,317,3,172,86,0,316,315,1,0,0,0,317,320,1,0,0,0,318,316,1,
        0,0,0,318,319,1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,321,323,3,
        26,13,0,322,321,1,0,0,0,322,323,1,0,0,0,323,324,1,0,0,0,324,325,
        5,12,0,0,325,25,1,0,0,0,326,327,3,20,10,0,327,328,5,115,0,0,328,
        330,1,0,0,0,329,326,1,0,0,0,330,331,1,0,0,0,331,329,1,0,0,0,331,
        332,1,0,0,0,332,27,1,0,0,0,333,341,7,6,0,0,334,336,5,116,0,0,335,
        334,1,0,0,0,336,339,1,0,0,0,337,335,1,0,0,0,337,338,1,0,0,0,338,
        340,1,0,0,0,339,337,1,0,0,0,340,342,3,32,16,0,341,337,1,0,0,0,341,
        342,1,0,0,0,342,29,1,0,0,0,343,346,3,82,41,0,344,346,3,80,40,0,345,
        343,1,0,0,0,345,344,1,0,0,0,346,31,1,0,0,0,347,358,3,34,17,0,348,
        350,5,116,0,0,349,348,1,0,0,0,350,353,1,0,0,0,351,349,1,0,0,0,351,
        352,1,0,0,0,352,354,1,0,0,0,353,351,1,0,0,0,354,355,5,13,0,0,355,
        357,3,34,17,0,356,351,1,0,0,0,357,360,1,0,0,0,358,356,1,0,0,0,358,
        359,1,0,0,0,359,33,1,0,0,0,360,358,1,0,0,0,361,366,3,138,69,0,362,
        363,3,152,76,0,363,364,3,124,62,0,364,367,1,0,0,0,365,367,7,7,0,
        0,366,362,1,0,0,0,366,365,1,0,0,0,366,367,1,0,0,0,367,35,1,0,0,0,
        368,375,3,126,63,0,369,371,5,116,0,0,370,369,1,0,0,0,371,372,1,0,
        0,0,372,370,1,0,0,0,372,373,1,0,0,0,373,374,1,0,0,0,374,376,3,116,
        58,0,375,370,1,0,0,0,375,376,1,0,0,0,376,37,1,0,0,0,377,378,3,120,
        60,0,378,39,1,0,0,0,379,383,5,91,0,0,380,382,3,172,86,0,381,380,
        1,0,0,0,382,385,1,0,0,0,383,381,1,0,0,0,383,384,1,0,0,0,384,386,
        1,0,0,0,385,383,1,0,0,0,386,390,3,124,62,0,387,389,5,116,0,0,388,
        387,1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,
        393,1,0,0,0,392,390,1,0,0,0,393,395,3,42,21,0,394,396,3,46,23,0,
        395,394,1,0,0,0,395,396,1,0,0,0,396,41,1,0,0,0,397,399,5,115,0,0,
        398,397,1,0,0,0,399,400,1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,
        401,402,1,0,0,0,402,405,3,20,10,0,403,405,3,24,12,0,404,398,1,0,
        0,0,404,403,1,0,0,0,405,43,1,0,0,0,406,407,5,115,0,0,407,411,5,89,
        0,0,408,410,3,172,86,0,409,408,1,0,0,0,410,413,1,0,0,0,411,409,1,
        0,0,0,411,412,1,0,0,0,412,414,1,0,0,0,413,411,1,0,0,0,414,415,3,
        124,62,0,415,45,1,0,0,0,416,417,5,115,0,0,417,421,5,77,0,0,418,420,
        3,172,86,0,419,418,1,0,0,0,420,423,1,0,0,0,421,419,1,0,0,0,421,422,
        1,0,0,0,422,424,1,0,0,0,423,421,1,0,0,0,424,425,3,20,10,0,425,47,
        1,0,0,0,426,427,5,88,0,0,427,431,7,8,0,0,428,430,5,116,0,0,429,428,
        1,0,0,0,430,433,1,0,0,0,431,429,1,0,0,0,431,432,1,0,0,0,432,434,
        1,0,0,0,433,431,1,0,0,0,434,447,3,124,62,0,435,437,5,116,0,0,436,
        435,1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,1,0,0,0,439,
        441,1,0,0,0,440,438,1,0,0,0,441,443,5,13,0,0,442,444,3,124,62,0,
        443,442,1,0,0,0,443,444,1,0,0,0,444,446,1,0,0,0,445,438,1,0,0,0,
        446,449,1,0,0,0,447,445,1,0,0,0,447,448,1,0,0,0,448,453,1,0,0,0,
        449,447,1,0,0,0,450,452,5,116,0,0,451,450,1,0,0,0,452,455,1,0,0,
        0,453,451,1,0,0,0,453,454,1,0,0,0,454,456,1,0,0,0,455,453,1,0,0,
        0,456,458,3,42,21,0,457,459,3,44,22,0,458,457,1,0,0,0,458,459,1,
        0,0,0,459,461,1,0,0,0,460,462,3,46,23,0,461,460,1,0,0,0,461,462,
        1,0,0,0,462,530,1,0,0,0,463,464,4,24,1,0,464,468,5,88,0,0,465,467,
        5,116,0,0,466,465,1,0,0,0,467,470,1,0,0,0,468,466,1,0,0,0,468,469,
        1,0,0,0,469,478,1,0,0,0,470,468,1,0,0,0,471,475,3,124,62,0,472,474,
        5,116,0,0,473,472,1,0,0,0,474,477,1,0,0,0,475,473,1,0,0,0,475,476,
        1,0,0,0,476,479,1,0,0,0,477,475,1,0,0,0,478,471,1,0,0,0,478,479,
        1,0,0,0,479,480,1,0,0,0,480,482,3,42,21,0,481,483,3,44,22,0,482,
        481,1,0,0,0,482,483,1,0,0,0,483,485,1,0,0,0,484,486,3,46,23,0,485,
        484,1,0,0,0,485,486,1,0,0,0,486,530,1,0,0,0,487,491,5,83,0,0,488,
        490,5,116,0,0,489,488,1,0,0,0,490,493,1,0,0,0,491,489,1,0,0,0,491,
        492,1,0,0,0,492,494,1,0,0,0,493,491,1,0,0,0,494,498,3,124,62,0,495,
        497,5,116,0,0,496,495,1,0,0,0,497,500,1,0,0,0,498,496,1,0,0,0,498,
        499,1,0,0,0,499,501,1,0,0,0,500,498,1,0,0,0,501,503,3,42,21,0,502,
        504,3,44,22,0,503,502,1,0,0,0,503,504,1,0,0,0,504,506,1,0,0,0,505,
        507,3,46,23,0,506,505,1,0,0,0,506,507,1,0,0,0,507,530,1,0,0,0,508,
        512,5,82,0,0,509,511,5,116,0,0,510,509,1,0,0,0,511,514,1,0,0,0,512,
        510,1,0,0,0,512,513,1,0,0,0,513,515,1,0,0,0,514,512,1,0,0,0,515,
        519,3,50,25,0,516,518,5,116,0,0,517,516,1,0,0,0,518,521,1,0,0,0,
        519,517,1,0,0,0,519,520,1,0,0,0,520,522,1,0,0,0,521,519,1,0,0,0,
        522,524,3,42,21,0,523,525,3,44,22,0,524,523,1,0,0,0,524,525,1,0,
        0,0,525,527,1,0,0,0,526,528,3,46,23,0,527,526,1,0,0,0,527,528,1,
        0,0,0,528,530,1,0,0,0,529,426,1,0,0,0,529,463,1,0,0,0,529,487,1,
        0,0,0,529,508,1,0,0,0,530,49,1,0,0,0,531,533,3,138,69,0,532,531,
        1,0,0,0,532,533,1,0,0,0,533,546,1,0,0,0,534,536,5,116,0,0,535,534,
        1,0,0,0,536,539,1,0,0,0,537,535,1,0,0,0,537,538,1,0,0,0,538,540,
        1,0,0,0,539,537,1,0,0,0,540,542,5,13,0,0,541,543,3,138,69,0,542,
        541,1,0,0,0,542,543,1,0,0,0,543,545,1,0,0,0,544,537,1,0,0,0,545,
        548,1,0,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,552,1,0,0,0,548,
        546,1,0,0,0,549,551,5,116,0,0,550,549,1,0,0,0,551,554,1,0,0,0,552,
        550,1,0,0,0,552,553,1,0,0,0,553,555,1,0,0,0,554,552,1,0,0,0,555,
        559,5,93,0,0,556,558,5,116,0,0,557,556,1,0,0,0,558,561,1,0,0,0,559,
        557,1,0,0,0,559,560,1,0,0,0,560,562,1,0,0,0,561,559,1,0,0,0,562,
        599,3,124,62,0,563,565,5,9,0,0,564,566,3,138,69,0,565,564,1,0,0,
        0,565,566,1,0,0,0,566,579,1,0,0,0,567,569,5,116,0,0,568,567,1,0,
        0,0,569,572,1,0,0,0,570,568,1,0,0,0,570,571,1,0,0,0,571,573,1,0,
        0,0,572,570,1,0,0,0,573,575,5,13,0,0,574,576,3,138,69,0,575,574,
        1,0,0,0,575,576,1,0,0,0,576,578,1,0,0,0,577,570,1,0,0,0,578,581,
        1,0,0,0,579,577,1,0,0,0,579,580,1,0,0,0,580,585,1,0,0,0,581,579,
        1,0,0,0,582,584,7,9,0,0,583,582,1,0,0,0,584,587,1,0,0,0,585,583,
        1,0,0,0,585,586,1,0,0,0,586,588,1,0,0,0,587,585,1,0,0,0,588,592,
        5,93,0,0,589,591,7,9,0,0,590,589,1,0,0,0,591,594,1,0,0,0,592,590,
        1,0,0,0,592,593,1,0,0,0,593,595,1,0,0,0,594,592,1,0,0,0,595,596,
        3,124,62,0,596,597,5,10,0,0,597,599,1,0,0,0,598,532,1,0,0,0,598,
        563,1,0,0,0,599,51,1,0,0,0,600,604,5,81,0,0,601,603,5,116,0,0,602,
        601,1,0,0,0,603,606,1,0,0,0,604,602,1,0,0,0,604,605,1,0,0,0,605,
        612,1,0,0,0,606,604,1,0,0,0,607,613,3,112,56,0,608,609,5,9,0,0,609,
        610,3,112,56,0,610,611,5,10,0,0,611,613,1,0,0,0,612,607,1,0,0,0,
        612,608,1,0,0,0,612,613,1,0,0,0,613,53,1,0,0,0,614,618,5,72,0,0,
        615,617,5,116,0,0,616,615,1,0,0,0,617,620,1,0,0,0,618,616,1,0,0,
        0,618,619,1,0,0,0,619,626,1,0,0,0,620,618,1,0,0,0,621,622,5,9,0,
        0,622,623,3,112,56,0,623,624,5,10,0,0,624,627,1,0,0,0,625,627,3,
        112,56,0,626,621,1,0,0,0,626,625,1,0,0,0,626,627,1,0,0,0,627,55,
        1,0,0,0,628,632,5,80,0,0,629,631,5,116,0,0,630,629,1,0,0,0,631,634,
        1,0,0,0,632,630,1,0,0,0,632,633,1,0,0,0,633,636,1,0,0,0,634,632,
        1,0,0,0,635,637,3,124,62,0,636,635,1,0,0,0,636,637,1,0,0,0,637,57,
        1,0,0,0,638,642,5,74,0,0,639,641,5,116,0,0,640,639,1,0,0,0,641,644,
        1,0,0,0,642,640,1,0,0,0,642,643,1,0,0,0,643,646,1,0,0,0,644,642,
        1,0,0,0,645,647,3,124,62,0,646,645,1,0,0,0,646,647,1,0,0,0,647,656,
        1,0,0,0,648,650,5,116,0,0,649,648,1,0,0,0,650,653,1,0,0,0,651,649,
        1,0,0,0,651,652,1,0,0,0,652,654,1,0,0,0,653,651,1,0,0,0,654,655,
        5,13,0,0,655,657,3,154,77,0,656,651,1,0,0,0,656,657,1,0,0,0,657,
        661,1,0,0,0,658,660,3,172,86,0,659,658,1,0,0,0,660,663,1,0,0,0,661,
        659,1,0,0,0,661,662,1,0,0,0,662,664,1,0,0,0,663,661,1,0,0,0,664,
        665,3,60,30,0,665,59,1,0,0,0,666,670,5,11,0,0,667,669,3,172,86,0,
        668,667,1,0,0,0,669,672,1,0,0,0,670,668,1,0,0,0,670,671,1,0,0,0,
        671,676,1,0,0,0,672,670,1,0,0,0,673,675,3,62,31,0,674,673,1,0,0,
        0,675,678,1,0,0,0,676,674,1,0,0,0,676,677,1,0,0,0,677,679,1,0,0,
        0,678,676,1,0,0,0,679,680,5,12,0,0,680,61,1,0,0,0,681,685,5,75,0,
        0,682,684,5,116,0,0,683,682,1,0,0,0,684,687,1,0,0,0,685,683,1,0,
        0,0,685,686,1,0,0,0,686,688,1,0,0,0,687,685,1,0,0,0,688,691,3,120,
        60,0,689,691,5,76,0,0,690,681,1,0,0,0,690,689,1,0,0,0,691,695,1,
        0,0,0,692,694,5,116,0,0,693,692,1,0,0,0,694,697,1,0,0,0,695,693,
        1,0,0,0,695,696,1,0,0,0,696,698,1,0,0,0,697,695,1,0,0,0,698,707,
        5,17,0,0,699,701,3,172,86,0,700,699,1,0,0,0,701,704,1,0,0,0,702,
        700,1,0,0,0,702,703,1,0,0,0,703,705,1,0,0,0,704,702,1,0,0,0,705,
        708,3,26,13,0,706,708,5,115,0,0,707,702,1,0,0,0,707,706,1,0,0,0,
        708,63,1,0,0,0,709,710,3,166,83,0,710,711,5,17,0,0,711,65,1,0,0,
        0,712,716,5,100,0,0,713,715,5,116,0,0,714,713,1,0,0,0,715,718,1,
        0,0,0,716,714,1,0,0,0,716,717,1,0,0,0,717,719,1,0,0,0,718,716,1,
        0,0,0,719,732,3,112,56,0,720,724,5,100,0,0,721,723,5,116,0,0,722,
        721,1,0,0,0,723,726,1,0,0,0,724,722,1,0,0,0,724,725,1,0,0,0,725,
        727,1,0,0,0,726,724,1,0,0,0,727,728,5,9,0,0,728,729,3,112,56,0,729,
        730,5,10,0,0,730,732,1,0,0,0,731,712,1,0,0,0,731,720,1,0,0,0,732,
        67,1,0,0,0,733,737,5,92,0,0,734,736,5,116,0,0,735,734,1,0,0,0,736,
        739,1,0,0,0,737,735,1,0,0,0,737,738,1,0,0,0,738,741,1,0,0,0,739,
        737,1,0,0,0,740,742,3,124,62,0,741,740,1,0,0,0,741,742,1,0,0,0,742,
        69,1,0,0,0,743,747,5,94,0,0,744,746,3,172,86,0,745,744,1,0,0,0,746,
        749,1,0,0,0,747,745,1,0,0,0,747,748,1,0,0,0,748,750,1,0,0,0,749,
        747,1,0,0,0,750,754,3,20,10,0,751,753,3,72,36,0,752,751,1,0,0,0,
        753,756,1,0,0,0,754,752,1,0,0,0,754,755,1,0,0,0,755,758,1,0,0,0,
        756,754,1,0,0,0,757,759,3,46,23,0,758,757,1,0,0,0,758,759,1,0,0,
        0,759,761,1,0,0,0,760,762,3,78,39,0,761,760,1,0,0,0,761,762,1,0,
        0,0,762,71,1,0,0,0,763,764,5,115,0,0,764,768,5,78,0,0,765,767,5,
        116,0,0,766,765,1,0,0,0,767,770,1,0,0,0,768,766,1,0,0,0,768,769,
        1,0,0,0,769,778,1,0,0,0,770,768,1,0,0,0,771,775,3,74,37,0,772,774,
        5,116,0,0,773,772,1,0,0,0,774,777,1,0,0,0,775,773,1,0,0,0,775,776,
        1,0,0,0,776,779,1,0,0,0,777,775,1,0,0,0,778,771,1,0,0,0,778,779,
        1,0,0,0,779,780,1,0,0,0,780,781,3,42,21,0,781,73,1,0,0,0,782,790,
        3,76,38,0,783,785,5,116,0,0,784,783,1,0,0,0,785,788,1,0,0,0,786,
        784,1,0,0,0,786,787,1,0,0,0,787,789,1,0,0,0,788,786,1,0,0,0,789,
        791,5,108,0,0,790,786,1,0,0,0,790,791,1,0,0,0,791,799,1,0,0,0,792,
        794,5,116,0,0,793,792,1,0,0,0,794,797,1,0,0,0,795,793,1,0,0,0,795,
        796,1,0,0,0,796,798,1,0,0,0,797,795,1,0,0,0,798,800,3,166,83,0,799,
        795,1,0,0,0,799,800,1,0,0,0,800,858,1,0,0,0,801,802,5,9,0,0,802,
        810,3,76,38,0,803,805,5,116,0,0,804,803,1,0,0,0,805,808,1,0,0,0,
        806,804,1,0,0,0,806,807,1,0,0,0,807,809,1,0,0,0,808,806,1,0,0,0,
        809,811,5,108,0,0,810,806,1,0,0,0,810,811,1,0,0,0,811,819,1,0,0,
        0,812,814,5,116,0,0,813,812,1,0,0,0,814,817,1,0,0,0,815,813,1,0,
        0,0,815,816,1,0,0,0,816,818,1,0,0,0,817,815,1,0,0,0,818,820,3,166,
        83,0,819,815,1,0,0,0,819,820,1,0,0,0,820,821,1,0,0,0,821,822,5,10,
        0,0,822,858,1,0,0,0,823,825,5,116,0,0,824,823,1,0,0,0,825,828,1,
        0,0,0,826,824,1,0,0,0,826,827,1,0,0,0,827,829,1,0,0,0,828,826,1,
        0,0,0,829,830,5,108,0,0,830,834,1,0,0,0,831,833,5,116,0,0,832,831,
        1,0,0,0,833,836,1,0,0,0,834,832,1,0,0,0,834,835,1,0,0,0,835,837,
        1,0,0,0,836,834,1,0,0,0,837,858,3,166,83,0,838,842,5,9,0,0,839,841,
        5,116,0,0,840,839,1,0,0,0,841,844,1,0,0,0,842,840,1,0,0,0,842,843,
        1,0,0,0,843,845,1,0,0,0,844,842,1,0,0,0,845,846,5,108,0,0,846,850,
        1,0,0,0,847,849,5,116,0,0,848,847,1,0,0,0,849,852,1,0,0,0,850,848,
        1,0,0,0,850,851,1,0,0,0,851,853,1,0,0,0,852,850,1,0,0,0,853,854,
        3,166,83,0,854,855,1,0,0,0,855,856,5,10,0,0,856,858,1,0,0,0,857,
        782,1,0,0,0,857,801,1,0,0,0,857,826,1,0,0,0,857,838,1,0,0,0,858,
        75,1,0,0,0,859,870,3,166,83,0,860,862,5,116,0,0,861,860,1,0,0,0,
        862,865,1,0,0,0,863,861,1,0,0,0,863,864,1,0,0,0,864,866,1,0,0,0,
        865,863,1,0,0,0,866,867,5,13,0,0,867,869,3,166,83,0,868,863,1,0,
        0,0,869,872,1,0,0,0,870,868,1,0,0,0,870,871,1,0,0,0,871,77,1,0,0,
        0,872,870,1,0,0,0,873,874,5,115,0,0,874,878,5,79,0,0,875,877,3,172,
        86,0,876,875,1,0,0,0,877,880,1,0,0,0,878,876,1,0,0,0,878,879,1,0,
        0,0,879,881,1,0,0,0,880,878,1,0,0,0,881,882,3,20,10,0,882,79,1,0,
        0,0,883,887,3,142,71,0,884,886,7,9,0,0,885,884,1,0,0,0,886,889,1,
        0,0,0,887,885,1,0,0,0,887,888,1,0,0,0,888,890,1,0,0,0,889,887,1,
        0,0,0,890,891,3,24,12,0,891,81,1,0,0,0,892,896,5,103,0,0,893,895,
        5,116,0,0,894,893,1,0,0,0,895,898,1,0,0,0,896,894,1,0,0,0,896,897,
        1,0,0,0,897,899,1,0,0,0,898,896,1,0,0,0,899,912,3,166,83,0,900,902,
        5,116,0,0,901,900,1,0,0,0,902,903,1,0,0,0,903,901,1,0,0,0,903,904,
        1,0,0,0,904,905,1,0,0,0,905,907,5,105,0,0,906,908,5,116,0,0,907,
        906,1,0,0,0,908,909,1,0,0,0,909,907,1,0,0,0,909,910,1,0,0,0,910,
        911,1,0,0,0,911,913,3,84,42,0,912,901,1,0,0,0,912,913,1,0,0,0,913,
        917,1,0,0,0,914,916,3,172,86,0,915,914,1,0,0,0,916,919,1,0,0,0,917,
        915,1,0,0,0,917,918,1,0,0,0,918,920,1,0,0,0,919,917,1,0,0,0,920,
        921,3,86,43,0,921,83,1,0,0,0,922,927,3,166,83,0,923,924,5,20,0,0,
        924,926,3,166,83,0,925,923,1,0,0,0,926,929,1,0,0,0,927,925,1,0,0,
        0,927,928,1,0,0,0,928,85,1,0,0,0,929,927,1,0,0,0,930,937,5,11,0,
        0,931,932,3,88,44,0,932,933,5,115,0,0,933,936,1,0,0,0,934,936,5,
        115,0,0,935,931,1,0,0,0,935,934,1,0,0,0,936,939,1,0,0,0,937,935,
        1,0,0,0,937,938,1,0,0,0,938,940,1,0,0,0,939,937,1,0,0,0,940,941,
        5,12,0,0,941,87,1,0,0,0,942,978,3,90,45,0,943,947,5,110,0,0,944,
        946,5,116,0,0,945,944,1,0,0,0,946,949,1,0,0,0,947,945,1,0,0,0,947,
        948,1,0,0,0,948,951,1,0,0,0,949,947,1,0,0,0,950,943,1,0,0,0,950,
        951,1,0,0,0,951,952,1,0,0,0,952,978,3,92,46,0,953,957,5,110,0,0,
        954,956,5,116,0,0,955,954,1,0,0,0,956,959,1,0,0,0,957,955,1,0,0,
        0,957,958,1,0,0,0,958,961,1,0,0,0,959,957,1,0,0,0,960,953,1,0,0,
        0,960,961,1,0,0,0,961,962,1,0,0,0,962,973,3,100,50,0,963,965,5,116,
        0,0,964,963,1,0,0,0,965,968,1,0,0,0,966,964,1,0,0,0,966,967,1,0,
        0,0,967,969,1,0,0,0,968,966,1,0,0,0,969,970,5,13,0,0,970,972,3,100,
        50,0,971,966,1,0,0,0,972,975,1,0,0,0,973,971,1,0,0,0,973,974,1,0,
        0,0,974,978,1,0,0,0,975,973,1,0,0,0,976,978,3,82,41,0,977,942,1,
        0,0,0,977,950,1,0,0,0,977,960,1,0,0,0,977,976,1,0,0,0,978,89,1,0,
        0,0,979,980,3,142,71,0,980,981,3,150,75,0,981,91,1,0,0,0,982,983,
        3,94,47,0,983,984,5,67,0,0,984,985,3,124,62,0,985,1008,1,0,0,0,986,
        990,3,94,47,0,987,989,3,172,86,0,988,987,1,0,0,0,989,992,1,0,0,0,
        990,988,1,0,0,0,990,991,1,0,0,0,991,993,1,0,0,0,992,990,1,0,0,0,
        993,1001,5,11,0,0,994,995,3,96,48,0,995,996,5,115,0,0,996,1002,1,
        0,0,0,997,998,3,98,49,0,998,999,5,115,0,0,999,1002,1,0,0,0,1000,
        1002,5,115,0,0,1001,994,1,0,0,0,1001,997,1,0,0,0,1001,1000,1,0,0,
        0,1002,1003,1,0,0,0,1003,1001,1,0,0,0,1003,1004,1,0,0,0,1004,1005,
        1,0,0,0,1005,1006,5,12,0,0,1006,1008,1,0,0,0,1007,982,1,0,0,0,1007,
        986,1,0,0,0,1008,93,1,0,0,0,1009,1024,3,112,56,0,1010,1011,3,112,
        56,0,1011,1013,5,7,0,0,1012,1014,3,102,51,0,1013,1012,1,0,0,0,1013,
        1014,1,0,0,0,1014,1018,1,0,0,0,1015,1017,3,172,86,0,1016,1015,1,
        0,0,0,1017,1020,1,0,0,0,1018,1016,1,0,0,0,1018,1019,1,0,0,0,1019,
        1021,1,0,0,0,1020,1018,1,0,0,0,1021,1022,5,8,0,0,1022,1024,1,0,0,
        0,1023,1009,1,0,0,0,1023,1010,1,0,0,0,1024,95,1,0,0,0,1025,1026,
        5,101,0,0,1026,1027,3,150,75,0,1027,97,1,0,0,0,1028,1029,5,102,0,
        0,1029,1030,3,150,75,0,1030,99,1,0,0,0,1031,1036,3,112,56,0,1032,
        1033,5,20,0,0,1033,1035,3,112,56,0,1034,1032,1,0,0,0,1035,1038,1,
        0,0,0,1036,1034,1,0,0,0,1036,1037,1,0,0,0,1037,1039,1,0,0,0,1038,
        1036,1,0,0,0,1039,1040,5,14,0,0,1040,1041,3,124,62,0,1041,101,1,
        0,0,0,1042,1046,3,104,52,0,1043,1045,5,116,0,0,1044,1043,1,0,0,0,
        1045,1048,1,0,0,0,1046,1044,1,0,0,0,1046,1047,1,0,0,0,1047,1049,
        1,0,0,0,1048,1046,1,0,0,0,1049,1050,5,13,0,0,1050,1052,1,0,0,0,1051,
        1042,1,0,0,0,1052,1055,1,0,0,0,1053,1051,1,0,0,0,1053,1054,1,0,0,
        0,1054,1056,1,0,0,0,1055,1053,1,0,0,0,1056,1057,3,106,53,0,1057,
        103,1,0,0,0,1058,1060,5,47,0,0,1059,1058,1,0,0,0,1059,1060,1,0,0,
        0,1060,1061,1,0,0,0,1061,1065,3,166,83,0,1062,1063,5,14,0,0,1063,
        1066,3,124,62,0,1064,1066,5,15,0,0,1065,1062,1,0,0,0,1065,1064,1,
        0,0,0,1065,1066,1,0,0,0,1066,105,1,0,0,0,1067,1073,3,104,52,0,1068,
        1070,3,166,83,0,1069,1068,1,0,0,0,1069,1070,1,0,0,0,1070,1071,1,
        0,0,0,1071,1073,5,28,0,0,1072,1067,1,0,0,0,1072,1069,1,0,0,0,1073,
        107,1,0,0,0,1074,1078,5,7,0,0,1075,1077,7,9,0,0,1076,1075,1,0,0,
        0,1077,1080,1,0,0,0,1078,1076,1,0,0,0,1078,1079,1,0,0,0,1079,1088,
        1,0,0,0,1080,1078,1,0,0,0,1081,1085,3,116,58,0,1082,1084,7,9,0,0,
        1083,1082,1,0,0,0,1084,1087,1,0,0,0,1085,1083,1,0,0,0,1085,1086,
        1,0,0,0,1086,1089,1,0,0,0,1087,1085,1,0,0,0,1088,1081,1,0,0,0,1088,
        1089,1,0,0,0,1089,1090,1,0,0,0,1090,1091,5,8,0,0,1091,109,1,0,0,
        0,1092,1096,3,132,66,0,1093,1095,7,9,0,0,1094,1093,1,0,0,0,1095,
        1098,1,0,0,0,1096,1094,1,0,0,0,1096,1097,1,0,0,0,1097,1099,1,0,0,
        0,1098,1096,1,0,0,0,1099,1103,5,17,0,0,1100,1102,7,9,0,0,1101,1100,
        1,0,0,0,1102,1105,1,0,0,0,1103,1101,1,0,0,0,1103,1104,1,0,0,0,1104,
        1106,1,0,0,0,1105,1103,1,0,0,0,1106,1107,3,124,62,0,1107,111,1,0,
        0,0,1108,1113,3,166,83,0,1109,1113,3,168,84,0,1110,1113,5,114,0,
        0,1111,1113,3,158,79,0,1112,1108,1,0,0,0,1112,1109,1,0,0,0,1112,
        1110,1,0,0,0,1112,1111,1,0,0,0,1113,113,1,0,0,0,1114,1115,5,1,0,
        0,1115,1116,3,124,62,0,1116,1117,5,2,0,0,1117,115,1,0,0,0,1118,1131,
        3,118,59,0,1119,1121,5,116,0,0,1120,1119,1,0,0,0,1121,1124,1,0,0,
        0,1122,1120,1,0,0,0,1122,1123,1,0,0,0,1123,1125,1,0,0,0,1124,1122,
        1,0,0,0,1125,1127,5,13,0,0,1126,1128,3,118,59,0,1127,1126,1,0,0,
        0,1127,1128,1,0,0,0,1128,1130,1,0,0,0,1129,1122,1,0,0,0,1130,1133,
        1,0,0,0,1131,1129,1,0,0,0,1131,1132,1,0,0,0,1132,1149,1,0,0,0,1133,
        1131,1,0,0,0,1134,1136,5,116,0,0,1135,1134,1,0,0,0,1136,1139,1,0,
        0,0,1137,1135,1,0,0,0,1137,1138,1,0,0,0,1138,1140,1,0,0,0,1139,1137,
        1,0,0,0,1140,1142,5,13,0,0,1141,1143,3,118,59,0,1142,1141,1,0,0,
        0,1142,1143,1,0,0,0,1143,1145,1,0,0,0,1144,1137,1,0,0,0,1145,1146,
        1,0,0,0,1146,1144,1,0,0,0,1146,1147,1,0,0,0,1147,1149,1,0,0,0,1148,
        1118,1,0,0,0,1148,1144,1,0,0,0,1149,117,1,0,0,0,1150,1152,3,124,
        62,0,1151,1153,7,10,0,0,1152,1151,1,0,0,0,1152,1153,1,0,0,0,1153,
        119,1,0,0,0,1154,1165,3,124,62,0,1155,1157,5,116,0,0,1156,1155,1,
        0,0,0,1157,1160,1,0,0,0,1158,1156,1,0,0,0,1158,1159,1,0,0,0,1159,
        1161,1,0,0,0,1160,1158,1,0,0,0,1161,1162,5,13,0,0,1162,1164,3,124,
        62,0,1163,1158,1,0,0,0,1164,1167,1,0,0,0,1165,1163,1,0,0,0,1165,
        1166,1,0,0,0,1166,121,1,0,0,0,1167,1165,1,0,0,0,1168,1172,5,7,0,
        0,1169,1171,3,172,86,0,1170,1169,1,0,0,0,1171,1174,1,0,0,0,1172,
        1170,1,0,0,0,1172,1173,1,0,0,0,1173,1182,1,0,0,0,1174,1172,1,0,0,
        0,1175,1179,3,116,58,0,1176,1178,3,172,86,0,1177,1176,1,0,0,0,1178,
        1181,1,0,0,0,1179,1177,1,0,0,0,1179,1180,1,0,0,0,1180,1183,1,0,0,
        0,1181,1179,1,0,0,0,1182,1175,1,0,0,0,1182,1183,1,0,0,0,1183,1184,
        1,0,0,0,1184,1185,5,8,0,0,1185,123,1,0,0,0,1186,1187,6,62,-1,0,1187,
        1188,7,7,0,0,1188,1215,3,124,62,22,1189,1191,7,9,0,0,1190,1189,1,
        0,0,0,1191,1194,1,0,0,0,1192,1190,1,0,0,0,1192,1193,1,0,0,0,1193,
        1195,1,0,0,0,1194,1192,1,0,0,0,1195,1196,7,11,0,0,1196,1215,3,124,
        62,20,1197,1201,5,98,0,0,1198,1200,5,116,0,0,1199,1198,1,0,0,0,1200,
        1203,1,0,0,0,1201,1199,1,0,0,0,1201,1202,1,0,0,0,1202,1204,1,0,0,
        0,1203,1201,1,0,0,0,1204,1215,3,124,62,8,1205,1206,3,126,63,0,1206,
        1207,3,152,76,0,1207,1208,3,124,62,3,1208,1215,1,0,0,0,1209,1210,
        3,148,74,0,1210,1211,5,67,0,0,1211,1212,3,124,62,2,1212,1215,1,0,
        0,0,1213,1215,3,126,63,0,1214,1186,1,0,0,0,1214,1192,1,0,0,0,1214,
        1197,1,0,0,0,1214,1205,1,0,0,0,1214,1209,1,0,0,0,1214,1213,1,0,0,
        0,1215,1353,1,0,0,0,1216,1217,10,21,0,0,1217,1218,5,32,0,0,1218,
        1352,3,124,62,21,1219,1220,10,19,0,0,1220,1224,7,12,0,0,1221,1223,
        7,9,0,0,1222,1221,1,0,0,0,1223,1226,1,0,0,0,1224,1222,1,0,0,0,1224,
        1225,1,0,0,0,1225,1227,1,0,0,0,1226,1224,1,0,0,0,1227,1352,3,124,
        62,20,1228,1232,10,18,0,0,1229,1231,7,9,0,0,1230,1229,1,0,0,0,1231,
        1234,1,0,0,0,1232,1230,1,0,0,0,1232,1233,1,0,0,0,1233,1235,1,0,0,
        0,1234,1232,1,0,0,0,1235,1239,7,13,0,0,1236,1238,7,9,0,0,1237,1236,
        1,0,0,0,1238,1241,1,0,0,0,1239,1237,1,0,0,0,1239,1240,1,0,0,0,1240,
        1242,1,0,0,0,1241,1239,1,0,0,0,1242,1352,3,124,62,19,1243,1244,10,
        17,0,0,1244,1245,7,14,0,0,1245,1352,3,124,62,18,1246,1250,10,16,
        0,0,1247,1249,7,9,0,0,1248,1247,1,0,0,0,1249,1252,1,0,0,0,1250,1248,
        1,0,0,0,1250,1251,1,0,0,0,1251,1253,1,0,0,0,1252,1250,1,0,0,0,1253,
        1257,5,47,0,0,1254,1256,7,9,0,0,1255,1254,1,0,0,0,1256,1259,1,0,
        0,0,1257,1255,1,0,0,0,1257,1258,1,0,0,0,1258,1260,1,0,0,0,1259,1257,
        1,0,0,0,1260,1352,3,124,62,17,1261,1262,10,15,0,0,1262,1263,5,48,
        0,0,1263,1352,3,124,62,16,1264,1265,10,14,0,0,1265,1266,5,49,0,0,
        1266,1352,3,124,62,15,1267,1274,10,13,0,0,1268,1275,5,21,0,0,1269,
        1271,5,116,0,0,1270,1269,1,0,0,0,1271,1272,1,0,0,0,1272,1270,1,0,
        0,0,1272,1273,1,0,0,0,1273,1275,1,0,0,0,1274,1268,1,0,0,0,1274,1270,
        1,0,0,0,1275,1276,1,0,0,0,1276,1352,3,124,62,14,1277,1278,10,12,
        0,0,1278,1279,5,46,0,0,1279,1352,3,124,62,13,1280,1281,10,11,0,0,
        1281,1282,7,15,0,0,1282,1352,3,124,62,12,1283,1284,10,10,0,0,1284,
        1285,7,16,0,0,1285,1352,3,124,62,11,1286,1289,10,7,0,0,1287,1290,
        5,50,0,0,1288,1290,5,97,0,0,1289,1287,1,0,0,0,1289,1288,1,0,0,0,
        1290,1291,1,0,0,0,1291,1352,3,124,62,8,1292,1295,10,6,0,0,1293,1296,
        5,51,0,0,1294,1296,5,99,0,0,1295,1293,1,0,0,0,1295,1294,1,0,0,0,
        1296,1297,1,0,0,0,1297,1352,3,124,62,7,1298,1299,10,5,0,0,1299,1300,
        5,33,0,0,1300,1352,3,124,62,5,1301,1305,10,4,0,0,1302,1304,7,9,0,
        0,1303,1302,1,0,0,0,1304,1307,1,0,0,0,1305,1303,1,0,0,0,1305,1306,
        1,0,0,0,1306,1308,1,0,0,0,1307,1305,1,0,0,0,1308,1312,5,15,0,0,1309,
        1311,7,9,0,0,1310,1309,1,0,0,0,1311,1314,1,0,0,0,1312,1310,1,0,0,
        0,1312,1313,1,0,0,0,1313,1315,1,0,0,0,1314,1312,1,0,0,0,1315,1319,
        3,124,62,0,1316,1318,7,9,0,0,1317,1316,1,0,0,0,1318,1321,1,0,0,0,
        1319,1317,1,0,0,0,1319,1320,1,0,0,0,1320,1322,1,0,0,0,1321,1319,
        1,0,0,0,1322,1326,5,17,0,0,1323,1325,7,9,0,0,1324,1323,1,0,0,0,1325,
        1328,1,0,0,0,1326,1324,1,0,0,0,1326,1327,1,0,0,0,1327,1329,1,0,0,
        0,1328,1326,1,0,0,0,1329,1330,3,124,62,4,1330,1352,1,0,0,0,1331,
        1334,10,23,0,0,1332,1335,5,22,0,0,1333,1335,5,23,0,0,1334,1332,1,
        0,0,0,1334,1333,1,0,0,0,1335,1352,1,0,0,0,1336,1340,10,9,0,0,1337,
        1339,7,9,0,0,1338,1337,1,0,0,0,1339,1342,1,0,0,0,1340,1338,1,0,0,
        0,1340,1341,1,0,0,0,1341,1343,1,0,0,0,1342,1340,1,0,0,0,1343,1347,
        5,95,0,0,1344,1346,7,9,0,0,1345,1344,1,0,0,0,1346,1349,1,0,0,0,1347,
        1345,1,0,0,0,1347,1348,1,0,0,0,1348,1350,1,0,0,0,1349,1347,1,0,0,
        0,1350,1352,3,126,63,0,1351,1216,1,0,0,0,1351,1219,1,0,0,0,1351,
        1228,1,0,0,0,1351,1243,1,0,0,0,1351,1246,1,0,0,0,1351,1261,1,0,0,
        0,1351,1264,1,0,0,0,1351,1267,1,0,0,0,1351,1277,1,0,0,0,1351,1280,
        1,0,0,0,1351,1283,1,0,0,0,1351,1286,1,0,0,0,1351,1292,1,0,0,0,1351,
        1298,1,0,0,0,1351,1301,1,0,0,0,1351,1331,1,0,0,0,1351,1336,1,0,0,
        0,1352,1355,1,0,0,0,1353,1351,1,0,0,0,1353,1354,1,0,0,0,1354,125,
        1,0,0,0,1355,1353,1,0,0,0,1356,1357,6,63,-1,0,1357,1358,5,47,0,0,
        1358,1369,3,126,63,7,1359,1369,3,166,83,0,1360,1369,3,134,67,0,1361,
        1369,3,154,77,0,1362,1369,3,108,54,0,1363,1369,3,140,70,0,1364,1365,
        5,9,0,0,1365,1366,3,120,60,0,1366,1367,5,10,0,0,1367,1369,1,0,0,
        0,1368,1356,1,0,0,0,1368,1359,1,0,0,0,1368,1360,1,0,0,0,1368,1361,
        1,0,0,0,1368,1362,1,0,0,0,1368,1363,1,0,0,0,1368,1364,1,0,0,0,1369,
        1374,1,0,0,0,1370,1371,10,8,0,0,1371,1373,3,128,64,0,1372,1370,1,
        0,0,0,1373,1376,1,0,0,0,1374,1372,1,0,0,0,1374,1375,1,0,0,0,1375,
        127,1,0,0,0,1376,1374,1,0,0,0,1377,1378,7,17,0,0,1378,1393,3,132,
        66,0,1379,1381,5,16,0,0,1380,1379,1,0,0,0,1380,1381,1,0,0,0,1381,
        1382,1,0,0,0,1382,1393,3,122,61,0,1383,1385,5,16,0,0,1384,1383,1,
        0,0,0,1384,1385,1,0,0,0,1385,1386,1,0,0,0,1386,1388,5,9,0,0,1387,
        1389,3,116,58,0,1388,1387,1,0,0,0,1388,1389,1,0,0,0,1389,1390,1,
        0,0,0,1390,1393,5,10,0,0,1391,1393,5,15,0,0,1392,1377,1,0,0,0,1392,
        1380,1,0,0,0,1392,1384,1,0,0,0,1392,1391,1,0,0,0,1393,129,1,0,0,
        0,1394,1396,7,9,0,0,1395,1394,1,0,0,0,1396,1397,1,0,0,0,1397,1395,
        1,0,0,0,1397,1398,1,0,0,0,1398,1399,1,0,0,0,1399,1421,5,20,0,0,1400,
        1404,5,20,0,0,1401,1403,7,9,0,0,1402,1401,1,0,0,0,1403,1406,1,0,
        0,0,1404,1402,1,0,0,0,1404,1405,1,0,0,0,1405,1421,1,0,0,0,1406,1404,
        1,0,0,0,1407,1409,7,9,0,0,1408,1407,1,0,0,0,1409,1412,1,0,0,0,1410,
        1408,1,0,0,0,1410,1411,1,0,0,0,1411,1413,1,0,0,0,1412,1410,1,0,0,
        0,1413,1417,5,16,0,0,1414,1416,7,9,0,0,1415,1414,1,0,0,0,1416,1419,
        1,0,0,0,1417,1415,1,0,0,0,1417,1418,1,0,0,0,1418,1421,1,0,0,0,1419,
        1417,1,0,0,0,1420,1395,1,0,0,0,1420,1400,1,0,0,0,1420,1410,1,0,0,
        0,1421,131,1,0,0,0,1422,1427,3,166,83,0,1423,1427,3,134,67,0,1424,
        1427,3,170,85,0,1425,1427,3,154,77,0,1426,1422,1,0,0,0,1426,1423,
        1,0,0,0,1426,1424,1,0,0,0,1426,1425,1,0,0,0,1427,133,1,0,0,0,1428,
        1429,3,112,56,0,1429,1434,3,114,57,0,1430,1433,3,112,56,0,1431,1433,
        3,114,57,0,1432,1430,1,0,0,0,1432,1431,1,0,0,0,1433,1436,1,0,0,0,
        1434,1432,1,0,0,0,1434,1435,1,0,0,0,1435,1446,1,0,0,0,1436,1434,
        1,0,0,0,1437,1442,3,114,57,0,1438,1441,3,112,56,0,1439,1441,3,114,
        57,0,1440,1438,1,0,0,0,1440,1439,1,0,0,0,1441,1444,1,0,0,0,1442,
        1440,1,0,0,0,1442,1443,1,0,0,0,1443,1446,1,0,0,0,1444,1442,1,0,0,
        0,1445,1428,1,0,0,0,1445,1437,1,0,0,0,1446,135,1,0,0,0,1447,1448,
        5,14,0,0,1448,1449,3,124,62,0,1449,137,1,0,0,0,1450,1451,3,166,83,
        0,1451,139,1,0,0,0,1452,1456,5,11,0,0,1453,1455,3,172,86,0,1454,
        1453,1,0,0,0,1455,1458,1,0,0,0,1456,1454,1,0,0,0,1456,1457,1,0,0,
        0,1457,1479,1,0,0,0,1458,1456,1,0,0,0,1459,1470,3,110,55,0,1460,
        1462,5,116,0,0,1461,1460,1,0,0,0,1462,1465,1,0,0,0,1463,1461,1,0,
        0,0,1463,1464,1,0,0,0,1464,1466,1,0,0,0,1465,1463,1,0,0,0,1466,1467,
        5,13,0,0,1467,1469,3,110,55,0,1468,1463,1,0,0,0,1469,1472,1,0,0,
        0,1470,1468,1,0,0,0,1470,1471,1,0,0,0,1471,1476,1,0,0,0,1472,1470,
        1,0,0,0,1473,1475,3,172,86,0,1474,1473,1,0,0,0,1475,1478,1,0,0,0,
        1476,1474,1,0,0,0,1476,1477,1,0,0,0,1477,1480,1,0,0,0,1478,1476,
        1,0,0,0,1479,1459,1,0,0,0,1479,1480,1,0,0,0,1480,1481,1,0,0,0,1481,
        1482,5,12,0,0,1482,141,1,0,0,0,1483,1485,3,144,72,0,1484,1483,1,
        0,0,0,1484,1485,1,0,0,0,1485,1486,1,0,0,0,1486,1487,3,164,82,0,1487,
        1489,5,9,0,0,1488,1490,3,102,51,0,1489,1488,1,0,0,0,1489,1490,1,
        0,0,0,1490,1491,1,0,0,0,1491,1492,5,10,0,0,1492,143,1,0,0,0,1493,
        1497,5,110,0,0,1494,1496,5,116,0,0,1495,1494,1,0,0,0,1496,1499,1,
        0,0,0,1497,1495,1,0,0,0,1497,1498,1,0,0,0,1498,145,1,0,0,0,1499,
        1497,1,0,0,0,1500,1510,3,142,71,0,1501,1503,3,144,72,0,1502,1501,
        1,0,0,0,1502,1503,1,0,0,0,1503,1504,1,0,0,0,1504,1506,5,9,0,0,1505,
        1507,3,102,51,0,1506,1505,1,0,0,0,1506,1507,1,0,0,0,1507,1508,1,
        0,0,0,1508,1510,5,10,0,0,1509,1500,1,0,0,0,1509,1502,1,0,0,0,1510,
        147,1,0,0,0,1511,1513,3,144,72,0,1512,1511,1,0,0,0,1512,1513,1,0,
        0,0,1513,1514,1,0,0,0,1514,1516,3,164,82,0,1515,1512,1,0,0,0,1515,
        1516,1,0,0,0,1516,1517,1,0,0,0,1517,1530,5,28,0,0,1518,1520,3,144,
        72,0,1519,1518,1,0,0,0,1519,1520,1,0,0,0,1520,1522,1,0,0,0,1521,
        1523,5,47,0,0,1522,1521,1,0,0,0,1522,1523,1,0,0,0,1523,1524,1,0,
        0,0,1524,1526,3,164,82,0,1525,1527,5,15,0,0,1526,1525,1,0,0,0,1526,
        1527,1,0,0,0,1527,1530,1,0,0,0,1528,1530,3,146,73,0,1529,1515,1,
        0,0,0,1529,1519,1,0,0,0,1529,1528,1,0,0,0,1530,149,1,0,0,0,1531,
        1532,5,67,0,0,1532,1541,3,124,62,0,1533,1535,7,9,0,0,1534,1533,1,
        0,0,0,1535,1538,1,0,0,0,1536,1534,1,0,0,0,1536,1537,1,0,0,0,1537,
        1539,1,0,0,0,1538,1536,1,0,0,0,1539,1541,3,24,12,0,1540,1531,1,0,
        0,0,1540,1536,1,0,0,0,1541,151,1,0,0,0,1542,1543,7,18,0,0,1543,153,
        1,0,0,0,1544,1548,3,156,78,0,1545,1548,3,158,79,0,1546,1548,7,19,
        0,0,1547,1544,1,0,0,0,1547,1545,1,0,0,0,1547,1546,1,0,0,0,1548,155,
        1,0,0,0,1549,1550,7,20,0,0,1550,157,1,0,0,0,1551,1552,7,21,0,0,1552,
        159,1,0,0,0,1553,1554,5,101,0,0,1554,1555,3,112,56,0,1555,161,1,
        0,0,0,1556,1557,5,102,0,0,1557,1558,3,112,56,0,1558,163,1,0,0,0,
        1559,1562,3,166,83,0,1560,1562,3,168,84,0,1561,1559,1,0,0,0,1561,
        1560,1,0,0,0,1562,165,1,0,0,0,1563,1564,7,22,0,0,1564,167,1,0,0,
        0,1565,1569,3,170,85,0,1566,1569,5,109,0,0,1567,1569,3,156,78,0,
        1568,1565,1,0,0,0,1568,1566,1,0,0,0,1568,1567,1,0,0,0,1569,169,1,
        0,0,0,1570,1571,7,23,0,0,1571,171,1,0,0,0,1572,1573,7,9,0,0,1573,
        173,1,0,0,0,1574,1575,7,24,0,0,1575,175,1,0,0,0,231,180,187,189,
        197,202,206,210,214,218,223,228,230,236,240,245,254,260,265,269,
        272,281,287,292,310,318,322,331,337,341,345,351,358,366,372,375,
        383,390,395,400,404,411,421,431,438,443,447,453,458,461,468,475,
        478,482,485,491,498,503,506,512,519,524,527,529,532,537,542,546,
        552,559,565,570,575,579,585,592,598,604,612,618,626,632,636,642,
        646,651,656,661,670,676,685,690,695,702,707,716,724,731,737,741,
        747,754,758,761,768,775,778,786,790,795,799,806,810,815,819,826,
        834,842,850,857,863,870,878,887,896,903,909,912,917,927,935,937,
        947,950,957,960,966,973,977,990,1001,1003,1007,1013,1018,1023,1036,
        1046,1053,1059,1065,1069,1072,1078,1085,1088,1096,1103,1112,1122,
        1127,1131,1137,1142,1146,1148,1152,1158,1165,1172,1179,1182,1192,
        1201,1214,1224,1232,1239,1250,1257,1272,1274,1289,1295,1305,1312,
        1319,1326,1334,1340,1347,1351,1353,1368,1374,1380,1384,1388,1392,
        1397,1404,1410,1417,1420,1426,1432,1434,1440,1442,1445,1456,1463,
        1470,1476,1479,1484,1489,1497,1502,1506,1509,1512,1515,1519,1522,
        1526,1529,1536,1540,1547,1561,1568
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
export class SingleDirectiveContext extends GeneralDirectiveContext {
    public constructor(ctx: GeneralDirectiveContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ErrorStdOut(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.ErrorStdOut, 0);
    }
    public WinActivateForce(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.WinActivateForce, 0);
    }
    public NoTrayIcon(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.NoTrayIcon, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterSingleDirective) {
             listener.enterSingleDirective(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitSingleDirective) {
             listener.exitSingleDirective(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitSingleDirective) {
            return visitor.visitSingleDirective(this);
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
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
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
export class PostIncrementDecrementExpressionContext extends SingleExpressionContext {
    public _left?: SingleExpressionContext;
    public _op?: Token | null;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public MinusMinus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.MinusMinus, 0);
    }
    public PlusPlus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.PlusPlus, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPostIncrementDecrementExpression) {
             listener.enterPostIncrementDecrementExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPostIncrementDecrementExpression) {
             listener.exitPostIncrementDecrementExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPostIncrementDecrementExpression) {
            return visitor.visitPostIncrementDecrementExpression(this);
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
export class PreIncrementDecrementExpressionContext extends SingleExpressionContext {
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public MinusMinus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.MinusMinus, 0);
    }
    public PlusPlus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.PlusPlus, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterPreIncrementDecrementExpression) {
             listener.enterPreIncrementDecrementExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitPreIncrementDecrementExpression) {
             listener.exitPreIncrementDecrementExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitPreIncrementDecrementExpression) {
            return visitor.visitPreIncrementDecrementExpression(this);
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
export class UnaryExpressionContext extends SingleExpressionContext {
    public _op?: Token | null;
    public _right?: SingleExpressionContext;
    public constructor(ctx: SingleExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public singleExpression(): SingleExpressionContext {
        return this.getRuleContext(0, SingleExpressionContext)!;
    }
    public Minus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Minus, 0);
    }
    public Plus(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Plus, 0);
    }
    public Not(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Not, 0);
    }
    public BitNot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.BitNot, 0);
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
        if(listener.enterUnaryExpression) {
             listener.enterUnaryExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitUnaryExpression) {
             listener.exitUnaryExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitUnaryExpression) {
            return visitor.visitUnaryExpression(this);
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
export class IsExpressionContext extends SingleExpressionContext {
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
    public Is(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Is, 0);
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
        if(listener.enterIsExpression) {
             listener.enterIsExpression(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitIsExpression) {
             listener.exitIsExpression(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitIsExpression) {
            return visitor.visitIsExpression(this);
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
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return AutoHotkeyParser.RULE_accessSuffix;
    }
    public override copyFrom(ctx: AccessSuffixContext): void {
        super.copyFrom(ctx);
    }
}
export class FunctionCallAccessContext extends AccessSuffixContext {
    public _modifier?: Token | null;
    public constructor(ctx: AccessSuffixContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public OpenParen(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.OpenParen, 0)!;
    }
    public CloseParen(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.CloseParen, 0)!;
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public QuestionMarkDot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.QuestionMarkDot, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterFunctionCallAccess) {
             listener.enterFunctionCallAccess(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitFunctionCallAccess) {
             listener.exitFunctionCallAccess(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitFunctionCallAccess) {
            return visitor.visitFunctionCallAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MemberAccessContext extends AccessSuffixContext {
    public _modifier?: Token | null;
    public constructor(ctx: AccessSuffixContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public memberIdentifier(): MemberIdentifierContext {
        return this.getRuleContext(0, MemberIdentifierContext)!;
    }
    public QuestionMarkDot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.QuestionMarkDot, 0);
    }
    public Dot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.Dot, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterMemberAccess) {
             listener.enterMemberAccess(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitMemberAccess) {
             listener.exitMemberAccess(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitMemberAccess) {
            return visitor.visitMemberAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class AllowUnsetAccessContext extends AccessSuffixContext {
    public _modifier?: Token | null;
    public constructor(ctx: AccessSuffixContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public QuestionMark(): antlr.TerminalNode {
        return this.getToken(AutoHotkeyParser.QuestionMark, 0)!;
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterAllowUnsetAccess) {
             listener.enterAllowUnsetAccess(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitAllowUnsetAccess) {
             listener.exitAllowUnsetAccess(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitAllowUnsetAccess) {
            return visitor.visitAllowUnsetAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IndexAccessContext extends AccessSuffixContext {
    public _modifier?: Token | null;
    public constructor(ctx: AccessSuffixContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public memberIndexArguments(): MemberIndexArgumentsContext {
        return this.getRuleContext(0, MemberIndexArgumentsContext)!;
    }
    public QuestionMarkDot(): antlr.TerminalNode | null {
        return this.getToken(AutoHotkeyParser.QuestionMarkDot, 0);
    }
    public override enterRule(listener: AutoHotkeyParserListener): void {
        if(listener.enterIndexAccess) {
             listener.enterIndexAccess(this);
        }
    }
    public override exitRule(listener: AutoHotkeyParserListener): void {
        if(listener.exitIndexAccess) {
             listener.exitIndexAccess(this);
        }
    }
    public override accept<Result>(visitor: AutoHotkeyParserVisitor<Result>): Result | null {
        if (visitor.visitIndexAccess) {
            return visitor.visitIndexAccess(this);
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
