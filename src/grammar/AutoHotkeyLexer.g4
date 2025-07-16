/*
 * The MIT License (MIT)
 *
 * This file is based on the ANTLR4 grammar for Javascript (https://github.com/antlr/grammars-v4/tree/master/javascript/javascript),
 * but very heavily modified by Descolada (modified for Keysharp use). 
 * 
 * List of authors and contributors for the Javascript grammar:
 * Copyright (c) 2014 by Bart Kiers (original author) and Alexandre Vitorelli (contributor -> ported to CSharp)
 * Copyright (c) 2017-2020 by Ivan Kochurkin (Positive Technologies):
    added ECMAScript 6 support, cleared and transformed to the universal grammar.
 * Copyright (c) 2018 by Juan Alvarez (contributor -> ported to Go)
 * Copyright (c) 2019 by Student Main (contributor -> ES2020)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

lexer grammar AutoHotkeyLexer;

@header {
    import { AutoHotkeyLexerBase } from "./AutoHotkeyLexerBase";
}

channels {
    ERROR,
    COMMENT
}

options {
    superClass = AutoHotkeyLexerBase;
    caseInsensitive = true;
}

tokens {
    DerefStart,
    DerefEnd
}

SingleLineBlockComment  : '/*' ~[\r\n\u2028\u2029]*? '*/' -> skip;
MultiLineComment  : '/*' .*? '*/' -> type(EOL);
SingleLineComment : ';' ~[\r\n\u2028\u2029]* [\r\n\u2028\u2029] {this.IsCommentPossible()}? -> type(EOL);

// First try consuming a hotstring 

HotstringLiteralTrigger
    : HotstringTriggerPart {this.IsBOS() && this.IsHotstringLiteral()}? -> pushMode(HOTSTRING_MODE), type(HotstringTrigger)
    ;
// These two are separated because I couldn't figure out how to conditionally pushMode(HOTSTRING_MODE)
HotstringTrigger
    : HotstringTriggerPart {this.IsBOS() && !this.IsHotstringLiteral()}?
    ;

// If no hotstring is matchable, try matching a remap
RemapKey:
    HotkeyModifier* HotkeyCharacter (WhiteSpace+ '&' WhiteSpace+ HotkeyCharacter)? '::' HotkeyModifierKey* HotkeyCharacter {this.IsBOS() && this.IsValidRemap()}?;

// Otherwise just match a hotkey trigger
HotkeyTrigger:
    HotkeyModifier* HotkeyCharacter (WhiteSpace+ '&' WhiteSpace+ HotkeyCharacter)? (WhiteSpace+ 'up')? '::' {this.IsBOS()}?;

OpenBracket                : '[' {this.ProcessOpenBracket();};
CloseBracket               : ']' {this.ProcessCloseBracket();};
OpenParen                  : '(' {this.ProcessOpenParen();};
CloseParen                 : ')' {this.ProcessCloseParen();};
OpenBrace                  : '{'; // {this.ProcessOpenBrace();};
CloseBrace                 : '}'; // {this.ProcessCloseBrace();};
Comma                      : ',';
Assign                     : ':=';
QuestionMark               : '?';
QuestionMarkDot            : '?.';
Colon                      : ':';
DoubleColon                : '::';
Ellipsis                   : '...';
Dot                        : '.';
ConcatDot                  : (WS | EOL)+ '.' (WS | EOL)+; // Keep Dot and ConcatDot separate for easier parsing
PlusPlus                   : '++';
MinusMinus                 : '--';
Plus                       : '+';
Minus                      : '-';
BitNot                     : '~';
Not                        : '!';
Multiply                   : '*';
Divide                     : '/';
IntegerDivide              : '//';
Modulus                    : '%' {this.ProcessDeref();};
Power                      : '**';
NullCoalesce               : '??';
Hashtag                    : '#' -> mode(DIRECTIVE_MODE);
RightShiftArithmetic       : '>>';
LeftShiftArithmetic        : '<<';
RightShiftLogical          : '>>>';
LessThan                   : '<';
MoreThan                   : '>';
LessThanEquals             : '<=';
GreaterThanEquals          : '>=';
Equals_                    : '=';
NotEquals                  : '!=';
IdentityEquals             : '==';
IdentityNotEquals          : '!==';
RegExMatch                 : '~=';
BitAnd                     : '&';
BitXOr                     : '^';
BitOr                      : '|';
And                        : '&&';
Or                         : '||';
MultiplyAssign             : '*=';
DivideAssign               : '/=';
ModulusAssign              : '%=';
PlusAssign                 : '+=';
MinusAssign                : '-=';
LeftShiftArithmeticAssign  : '<<=';
RightShiftArithmeticAssign : '>>=';
RightShiftLogicalAssign    : '>>>=';
IntegerDivideAssign        : '//=';
ConcatenateAssign          : '.=';
BitAndAssign               : '&=';
BitXorAssign               : '^=';
BitOrAssign                : '|=';
PowerAssign                : '**=';
NullishCoalescingAssign    : '??=';
Arrow                      : '=>';

/// Null Literals
NullLiteral: 'null';
Unset: 'unset';

/// Boolean Literals
True: 'true';
False: 'false';

/// Numeric Literals

DecimalLiteral:
    DecimalIntegerLiteral '.' [0-9] [0-9_]* ExponentPart?
    | '.' [0-9] [0-9_]* ExponentPart? {this.IsValidDotDecimal()}?
    | DecimalIntegerLiteral ExponentPart?
;
HexIntegerLiteral    : '0x' [0-9a-f] HexDigit*;
OctalIntegerLiteral  : '0' [0-7]+;
OctalIntegerLiteral2 : '0o' [0-7] [_0-7]*;
BinaryIntegerLiteral : '0b' [01] [_01]*;
BigHexIntegerLiteral     : '0x' [0-9a-f] HexDigit* 'n';
BigOctalIntegerLiteral   : '0o' [0-7] [_0-7]* 'n';
BigBinaryIntegerLiteral  : '0b' [01] [_01]* 'n';
BigDecimalIntegerLiteral : DecimalIntegerLiteral 'n';

/// Keywords
Break      : 'break';
Do         : 'do';
Instanceof : 'instanceof';
Switch     : 'switch';
Case       : 'case';
Default    : 'default';
Else       : 'else';
Catch      : 'catch';
Finally    : 'finally';
Return     : 'return';
Continue   : 'continue';
For        : 'for';
While      : 'while';
// For Loop keywords allow optional trailing commas because AHK allows it
Parse      : 'parse';
Reg        : 'reg';
Read       : 'read';
Files      : 'files';
Loop       : 'loop';
Until      : 'until';
This       : 'this';
If         : 'if';
Throw      : 'throw';
Delete     : 'delete';
In         : 'in';
Try        : 'try';
Yield      : 'yield';
Is         : 'is';
Contains   : 'contains';
VerbalAnd  : 'and';
VerbalNot  : 'not';
VerbalOr   : 'or';
Goto       : 'goto';
Get        : 'get';
Set        : 'set';

/// Reserved Words
Class   : 'class';
Enum    : 'enum';
Extends : 'extends';
Super   : 'super';
Base    : 'base';
Export  : 'export';
Import  : 'import';
From    : 'from';
As      : 'as';

Async : 'async';
Await : 'await';

Static : 'static';
Global : 'global';
Local  : 'local';

/// Identifier Names and Identifiers
Identifier: IdentifierStart IdentifierPart*;

/// String Literals
MultilineStringLiteral:
    ('"' (WhiteSpace ';' ~[\r\n]* | ~["\r\n]*) ContinuationSection+ '"' 
    | '\'' (WhiteSpace ';' ~[\r\n]* | ~['\r\n]*)  ContinuationSection+ '\'') {this.ProcessStringLiteral();} -> type(StringLiteral)
;
StringLiteral:
    ('"' DoubleStringCharacter* '"' | '\'' SingleStringCharacter* '\'') {this.ProcessStringLiteral();}
;

EOL: LineBreak {this.ProcessEOL();};
WS: WhiteSpace {this.ProcessWS();};

UnexpectedCharacter : . -> channel(ERROR);

mode HOTSTRING_MODE;
HotstringEOL: LineBreak -> type(EOL), popMode;
HotstringOpenBrace: '{' {this.ProcessHotstringOpenBrace();} -> type(OpenBrace), popMode;
HotstringWhitespaces: WhiteSpace+ -> channel(HIDDEN);
HotstringMultiLineExpansion: ContinuationSection -> popMode;
HotstringSingleLineExpansion:  (~[;`\r\n {] | '`' EscapeSequence) RawString? -> popMode;
HotstringUnexpectedCharacter: . -> channel(ERROR);

mode DIRECTIVE_MODE;
PreprocessorDirectiveWS: WhiteSpace              -> channel(HIDDEN);
Digits                 : [0-9]+;
// Positional Directives
HotIf : 'hotif';
InputLevel : 'inputlevel';
SuspendExempt : 'suspendexempt';
UseHook : 'usehook';
Hotstring : 'hotstring';
// General Directives
Include                : 'include'              -> mode(DIRECTIVE_TEXT);
IncludeAgain           : 'includeagain'         -> mode(DIRECTIVE_TEXT);
DllLoad                : 'dllload'              -> mode(DIRECTIVE_TEXT);
Requires               : 'requires'             -> mode(DIRECTIVE_TEXT);
SingleInstance         : 'singleinstance'       -> mode(DIRECTIVE_TEXT);
Persistent             : 'persistent';
Warn                   : 'warn'                 -> mode(DIRECTIVE_TEXT);
ErrorStdOut            : 'errorstdout';
ClipboardTimeout       : 'clipboardtimeout';
HotIfTimeout           : 'hotiftimeout';
MaxThreads             : 'maxthreads';
MaxThreadsBuffer       : 'maxthreadsbuffer';
MaxThreadsPerHotkey    : 'maxthreadsperhotkey';
DirectiveString:
    '"' ~('"' | [\r\n\u0085\u2028\u2029])* '"'  -> type(StringLiteral)
;
DirectiveTrue          : 'true'                 -> type(True);
DirectiveFalse         : 'false'                -> type(False);
DirectiveSingleLineComment:
    ' ;' ~[\r\n\u0085\u2028\u2029]*             -> channel(HIDDEN)
;
DirectiveNewline: LineBreak                     -> type(EOL), mode(DEFAULT_MODE);

mode DIRECTIVE_TEXT;
TextWhitespace : WhiteSpace                     -> channel(HIDDEN);
Text          : ~[\t \r\n\u0085\u2028\u2029] ~[\r\n\u0085\u2028\u2029]+;
TextNewline   : LineBreak                       -> type(EOL), mode(DEFAULT_MODE);

mode HOTSTRING_OPTIONS;
HotstringWhitespace : WhiteSpace    -> channel(HIDDEN);
NoMouse : 'NoMouse'                 -> mode(DEFAULT_MODE);
EndChars : 'EndChars';
HotstringOptions : RawString {this.ProcessHotstringOptions();} -> mode(DEFAULT_MODE);

// Fragment rules

fragment HotstringTriggerPart:
    Colon Options? Colon Trigger DoubleColon;

fragment HotstringOptionCharacter
    : [*?bcortsxz] ' '* '0'?
    | 'c1' 
    | 'si' | 'sp' | 'se' 
    | 'p' [0-9]+ 
    | 'k' ' '* '-' ' '* [0-9]+
    ;
fragment Options:
    HotstringOptionCharacter+;
fragment Trigger:
    (':'? NonColonStringCharacter | ';' {this._input.index == 0 || this._input.LA(-1) != ' '.charCodeAt(0)}?)+;

fragment WhiteSpace: [\t\u000B\u000C\u0020\u00A0]+;

fragment DoubleStringCharacter: ~["`] | '`' EscapeSequence;

fragment SingleStringCharacter: ~['`] | '`' EscapeSequence;

fragment NonColonStringCharacter: ~[;:`\r\n] | '`' EscapeSequence;

fragment RawStringCharacter
    : ~[`\t\n\r\u2028\u2029\f ] ';'         // Match semicolon only if not preceded by whitespace
    | ~[;`\r\n\u2028\u2029]                 // Match any character except semicolon, newline, or carriage return
    | '`' EscapeSequence       // Match escape sequences starting with backtick
    ;

fragment AnyCharacter: .;

fragment RawString: RawStringCharacter+;

fragment EscapeSequence:
    CharacterEscapeSequence
    | '0' // no digit ahead! TODO
    | HexEscapeSequence
    | UnicodeEscapeSequence
    | ExtendedUnicodeEscapeSequence
;

fragment CharacterEscapeSequence: SingleEscapeCharacter | NonEscapeCharacter;

fragment HexEscapeSequence: 'x' HexDigit HexDigit;

fragment UnicodeEscapeSequence:
    'u' HexDigit HexDigit HexDigit HexDigit
    | 'u' '{' HexDigit HexDigit+ '}'
;

fragment ExtendedUnicodeEscapeSequence: 'u' '{' HexDigit+ '}';

fragment SingleEscapeCharacter: [`;:'"bfnrtvsa];

fragment NonEscapeCharacter: ~[`;:'"bfnrtvsa0-9xu\r\n];

fragment EscapeCharacter: SingleEscapeCharacter | [0-9] | [xu];

fragment LineBreak: [\r\n\u2028\u2029]+;

fragment HexDigit: [_0-9a-f];

fragment DecimalIntegerLiteral: '0' | [1-9] [0-9_]*;

fragment IntegerLiteral: Minus? DecimalIntegerLiteral;

fragment ExponentPart: 'e' [+-]? [0-9_]+;

fragment IdentifierPart: IdentifierStart | [\p{Mn}] | [\p{Nd}] | [\p{Pc}] | '\u200C' | '\u200D';

fragment IdentifierStart: [\p{L}] | [$_] | '\\' UnicodeEscapeSequence;

fragment ContinuationSection: LineBreak WhiteSpace? '(' .*? LineBreak WhiteSpace? ')' WhiteSpace?;

fragment HotkeyModifierKey: [#!^+<>];

fragment HotkeyModifier: HotkeyModifierKey | [*~$];

fragment HotkeyCharacter 
    : 'NumpadEnter'
    | 'Delete'
    | 'Del'
    | 'Insert'
    | 'Ins'
    | 'Clear'
    | 'Up'
    | 'Down'
    | 'Left'
    | 'Right'
    | 'Home'
    | 'End'
    | 'PgUp'
    | 'PgDn'
    | 'Numpad0'
    | 'Numpad1'
    | 'Numpad2'
    | 'Numpad3'
    | 'Numpad4'
    | 'Numpad5'
    | 'Numpad6'
    | 'Numpad7'
    | 'Numpad8'
    | 'Numpad9'
    | 'NumpadMult'
    | 'NumpadDiv'
    | 'NumpadAdd'
    | 'NumpadSub'
    | 'NumpadDot'
    | 'Numlock'
    | 'ScrollLock'
    | 'CapsLock'
    | 'Escape'
    | 'Esc'
    | 'Tab'
    | 'Space'
    | 'Backspace'
    | 'BS'
    | 'Enter'
    | 'NumpadDel'
    | 'NumpadIns'
    | 'NumpadClear'
    | 'NumpadUp'
    | 'NumpadDown'
    | 'NumpadLeft'
    | 'NumpadRight'
    | 'NumpadHome'
    | 'NumpadEnd'
    | 'NumpadPgUp'
    | 'NumpadPgDn'
    | 'PrintScreen'
    | 'CtrlBreak'
    | 'Pause'
    | 'Help'
    | 'Sleep'
    | 'AppsKey'
    | 'LControl'
    | 'RControl'
    | 'LCtrl'
    | 'RCtrl'
    | 'LShift'
    | 'RShift'
    | 'LAlt'
    | 'RAlt'
    | 'LWin'
    | 'RWin'
    | 'Control'
    | 'Ctrl'
    | 'Alt'
    | 'Shift'
    | 'F1'
    | 'F2'
    | 'F3'
    | 'F4'
    | 'F5'
    | 'F6'
    | 'F7'
    | 'F8'
    | 'F9'
    | 'F10'
    | 'F11'
    | 'F12'
    | 'F13'
    | 'F14'
    | 'F15'
    | 'F16'
    | 'F17'
    | 'F18'
    | 'F19'
    | 'F20'
    | 'F21'
    | 'F22'
    | 'F23'
    | 'F24'
    | 'LButton'
    | 'RButton'
    | 'MButton'
    | 'XButton1'
    | 'XButton2'
    | 'WheelDown'
    | 'WheelUp'
    | 'WheelLeft'
    | 'WheelRight'
    | 'Browser_Back'
    | 'Browser_Forward'
    | 'Browser_Refresh'
    | 'Browser_Stop'
    | 'Browser_Search'
    | 'Browser_Favorites'
    | 'Browser_Home'
    | 'Volume_Mute'
    | 'Volume_Down'
    | 'Volume_Up'
    | 'Media_Next'
    | 'Media_Prev'
    | 'Media_Stop'
    | 'Media_Play_Pause'
    | 'Launch_Mail'
    | 'Launch_Media'
    | 'Launch_App1'
    | 'Launch_App2'
    | 'AltTab'
    | 'ShiftAltTab'
    | ~[`\r\n\u2028\u2029 ]   // Match any character except semicolon, newline, carriage return, or whitespace
    | '`' EscapeSequence?       // Match escape sequences starting with backtick (or just backtick)
    ;

fragment HotkeyCombinatorCharacter: '&';
