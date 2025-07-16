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

parser grammar AutoHotkeyParser;

@header {
    import { AutoHotkeyParserBase } from "./AutoHotkeyParserBase";
}

options {
    tokenVocab = AutoHotkeyLexer;
    superClass = AutoHotkeyParserBase;
}

program
    : sourceElements EOF
    | EOF
    ;

sourceElements
    : (sourceElement eos
    | WS
    | EOL)+
    ;

sourceElement
    : classDeclaration
    | directive
    | remap
    | hotstring
    | hotkey
    | statement
    ;

directive
    : Hashtag (positionalDirective | generalDirective)
    ;

// Non-positional directives are handled elsewhere, mainly in PreReader.cs
positionalDirective
    : HotIf singleExpression?                           # HotIfDirective
    | Hotstring (EndChars? HotstringOptions | NoMouse)  # HotstringDirective
    | InputLevel numericLiteral?                        # InputLevelDirective
    | UseHook (numericLiteral | boolean)?               # UseHookDirective
    | SuspendExempt (numericLiteral | boolean)?         # SuspendExemptDirective
    ;

generalDirective
    : ( Include
      | IncludeAgain
      | DllLoad
      | Requires) Text                       # TextualDirective
    | Persistent (True | False | Digits)?    # PersistentDirective
    | ( Warn
      | SingleInstance) Text?                # OptionalTextualDirective
    | ErrorStdOut                            # ErrorStdOutDirective
    | ( HotIfTimeout
      | MaxThreads
      | MaxThreadsBuffer
      | MaxThreadsPerHotkey
      | ClipboardTimeout) Digits             # NumericDirective
    ;

remap
    : RemapKey
    ;

hotstring
    : HotstringTrigger (EOL HotstringTrigger)* WS* (hotstringExpansion | EOL? functionDeclaration | EOL? statement)
    ;

hotstringExpansion
    : HotstringSingleLineExpansion
    | HotstringMultiLineExpansion
    ;

hotkey
    : HotkeyTrigger (EOL HotkeyTrigger)* s* (functionDeclaration | statement)
    ;

statement
    : variableStatement
    | ifStatement
    | iterationStatement
    | continueStatement
    | breakStatement
    | returnStatement
    | labelledStatement
    | gotoStatement
    | switchStatement
    | throwStatement
    | tryStatement
    | functionDeclaration
    | functionStatement
    | blockStatement
    | expressionStatement
    ;

blockStatement
    : block
    ;

block
    : '{' s* statementList? '}'
    ;

// Only to be used inside of a block, cannot meet EOF
statementList
    : (statement EOL)+
    ;

variableStatement
    : (Global | Local | Static) (WS* variableDeclarationList)?
    ;

declaration
    : classDeclaration
    | functionDeclaration
    ;

variableDeclarationList
    : variableDeclaration (WS* ',' variableDeclaration)*
    ;

variableDeclaration
    : assignable (assignmentOperator singleExpression | op = ('++' | '--'))?
    ;

functionStatement
    : primaryExpression (WS+ arguments)?
    ;

expressionStatement
    : expressionSequence
    ;

// For maximum performance there should be two separate statement rules, one with possible
// dangling `else` and one without. That would require duplicating all flow rules though, so
// currently it's not done.
ifStatement
    : If s* singleExpression WS* flowBlock elseProduction?
    ;

flowBlock
    : EOL+ statement
    | block // OTB block, other one is handled with statement
    ;

untilProduction
    : EOL Until s* singleExpression 
    ;

elseProduction
    : EOL Else s* statement 
    ;

iterationStatement
    : Loop type = (Files | Read | Reg | Parse) WS* singleExpression (WS* ',' singleExpression?)* WS* flowBlock untilProduction? elseProduction?  # SpecializedLoopStatement
    | {this.isValidLoopExpression()}? Loop WS* (singleExpression WS*)? flowBlock untilProduction? elseProduction?      # LoopStatement
    | While WS* singleExpression WS* flowBlock untilProduction? elseProduction?       # WhileStatement
    | For WS* forInParameters WS* flowBlock untilProduction? elseProduction?          # ForInStatement
    ;

forInParameters
    : assignable? (WS* ',' assignable?)* WS* In WS* singleExpression
    | '(' assignable? (WS* ',' assignable?)* (WS | EOL)* In (WS | EOL)* singleExpression ')'
    ;

continueStatement
    : Continue WS* (propertyName | '(' propertyName ')')?
    ;

breakStatement
    : Break WS* ('(' propertyName ')' | propertyName)?
    ;

returnStatement
    : Return WS* singleExpression?
    ;

switchStatement
    : Switch WS* singleExpression? (WS* ',' literal)? s* caseBlock
    ;

caseBlock
    : '{' s* caseClause* '}'
    ;

caseClause
    : (Case WS* expressionSequence | Default) WS* ':' (s* statementList | EOL)
    ;

labelledStatement
    : identifier ':'
    ;

gotoStatement
    : Goto WS* propertyName
    | Goto WS* '(' propertyName ')'
    ;

throwStatement
    : Throw WS* singleExpression?
    ;

tryStatement
    : Try s* statement catchProduction* elseProduction? finallyProduction?
    ;

catchProduction
    : EOL Catch WS* (catchAssignable WS*)? flowBlock
    ;

catchAssignable
    : catchClasses (WS* As)? (WS* identifier)?
    | '(' catchClasses (WS* As)? (WS* identifier)? ')'
    | (WS* As) (WS* identifier)
    | '(' (WS* As) (WS* identifier) ')'
    ;

catchClasses
    : identifier (WS* ',' identifier)*
    ;

finallyProduction
    : EOL Finally s* statement 
    ;

functionDeclaration
    : functionHead functionBody
    ;

classDeclaration
    : Class WS* identifier (WS+ Extends WS+ classExtensionName)? s* classTail
    ;

classExtensionName
    : identifier ('.' identifier)*
    ;

classTail
    : '{' (classElement EOL | EOL)* '}'
    ;

classElement
    : methodDefinition                                            # ClassMethodDeclaration
    | (Static WS*)? propertyDefinition                            # ClassPropertyDeclaration
    | (Static WS*)? fieldDefinition (WS* ',' fieldDefinition)*    # ClassFieldDeclaration
    | classDeclaration                                            # NestedClassDeclaration
    ;

methodDefinition
    : functionHead functionBody
    ;

propertyDefinition
    : classPropertyName '=>' singleExpression
    | classPropertyName s* '{' (propertyGetterDefinition EOL | propertySetterDefinition EOL | EOL)+ '}'
    ;

classPropertyName
    : propertyName
    | propertyName '[' formalParameterList? s* ']'
    ;

propertyGetterDefinition
    : Get functionBody
    ;

propertySetterDefinition
    : Set functionBody
    ;

fieldDefinition
    : (propertyName ('.' propertyName)*) ':=' singleExpression
    ;

formalParameterList
    : (formalParameterArg WS* ',')* lastFormalParameterArg
    ;

formalParameterArg
    : BitAnd? identifier (':=' singleExpression | QuestionMark)?
    ;

lastFormalParameterArg
    : formalParameterArg
    | identifier? Multiply
    ;

arrayLiteral
    : '[' (WS | EOL)* (arguments (WS | EOL)*)? ']'
    ;

propertyAssignment
    : memberIdentifier (WS | EOL)* ':' (WS | EOL)* singleExpression
    ;

propertyName
    : identifier
    | reservedWord
    | StringLiteral // Multi-line strings not supported
    | numericLiteral
    ;

dereference
    : DerefStart singleExpression DerefEnd
    ;

arguments
    : argument (WS* ',' argument?)*
    | (WS* ',' argument?)+
    ;

argument
    : singleExpression (Multiply | QuestionMark)?
    ;

expressionSequence
    : singleExpression (WS* ',' singleExpression)*
    ;

memberIndexArguments
    : '[' s* (arguments s*)? ']'
    ;

singleExpression
    : left = singleExpression '++'                                                 # PostIncrementExpression
    | left = singleExpression '--'                                                 # PostDecreaseExpression
    | '++' right = singleExpression                                                # PreIncrementExpression
    | '--' right = singleExpression                                                # PreDecreaseExpression
    | <assoc = right> left = singleExpression op ='**' right = singleExpression      # PowerExpression
    | '-' right = singleExpression                                                 # UnaryMinusExpression
    | '!' WS* right = singleExpression                                             # NotExpression
    | '+' right = singleExpression                                                 # UnaryPlusExpression
    | '~' right = singleExpression                                                 # BitNotExpression
    | left = singleExpression (op = ('*' | '/' | '//') (WS | EOL)*) right = singleExpression  # MultiplicativeExpression
    | left = singleExpression (op = ('+' | '-') (WS | EOL)*) right = singleExpression   # AdditiveExpression
    | left = singleExpression op = ('<<' | '>>' | '>>>') right = singleExpression              # BitShiftExpression
    | left = singleExpression ((WS | EOL)* op = '&' (WS | EOL)*) right = singleExpression      # BitAndExpression
    | left = singleExpression op = '^' right = singleExpression                                # BitXOrExpression
    | left = singleExpression op = '|' right = singleExpression                                # BitOrExpression
    | left = singleExpression (ConcatDot | WS+) right = singleExpression                       # ConcatenateExpression
    | left = singleExpression op = '~=' right = singleExpression                               # RegExMatchExpression
    | left = singleExpression op = ('<' | '>' | '<=' | '>=') right = singleExpression          # RelationalExpression
    | left = singleExpression op = ('=' | '!=' | '==' | '!==') right = singleExpression        # EqualityExpression
    | left = singleExpression ((WS | EOL)* op = Is (WS | EOL)*) right = primaryExpression      # IsExpression
    | VerbalNot WS* right = singleExpression                                                         # VerbalNotExpression
    | left = singleExpression (op = '&&' | op = VerbalAnd) right = singleExpression  # LogicalAndExpression
    | left = singleExpression (op = '||' | op = VerbalOr) right = singleExpression   # LogicalOrExpression
    | <assoc = right> left = singleExpression op = '??' right = singleExpression                               # CoalesceExpression
    | <assoc = right> ternCond = singleExpression (WS | EOL)* '?' (WS | EOL)* ternTrue = singleExpression (WS | EOL)* ':' (WS | EOL)* ternFalse = singleExpression # TernaryExpression
    | <assoc = right> left = primaryExpression op = assignmentOperator right = singleExpression          # AssignmentExpression
    | fatArrowExpressionHead '=>' singleExpression             # FatArrowExpression
    | primaryExpression                                        # AtomExpression
    ;

primaryExpression
    : primaryExpression accessSuffix                                       # AccessExpression
    | BitAnd primaryExpression                                             # VarRefExpression
    | identifier                                                           # IdentifierExpression
    | dynamicIdentifier                                                    # DynamicIdentifierExpression
    | literal                                                              # LiteralExpression
    | arrayLiteral                                                         # ArrayLiteralExpression
    | objectLiteral                                                        # ObjectLiteralExpression
    | '(' expressionSequence ')'                                           # ParenthesizedExpression
    ;

accessSuffix
    : modifier = ('.' | '?.') memberIdentifier
    | (modifier = '?.')? memberIndexArguments
    | '(' arguments? ')'
    ;

memberDot
    : (WS | EOL)+ '.'
    | '.' (WS | EOL)*
    | (WS | EOL)* '?.' (WS | EOL)*
    ;

memberIdentifier
    : identifier
    | dynamicIdentifier
    | keyword
    | literal
    ;

// A combination of identifiers and derefs, such as `a%b%`
dynamicIdentifier
    : propertyName dereference (propertyName | dereference)*
    | dereference (propertyName | dereference)*
    ;

initializer
    : ':=' singleExpression
    ;

assignable
    : identifier
    ;

objectLiteral
    : '{' s* (propertyAssignment (WS* ',' propertyAssignment)* s*)? '}'
    ;

functionHead
    : functionHeadPrefix? identifierName '(' formalParameterList? ')'
    ;

functionHeadPrefix
    : Static WS*
    ;

functionExpressionHead
    : functionHead
    | functionHeadPrefix? '(' formalParameterList? ')'
    ;

fatArrowExpressionHead
    : (functionHeadPrefix? identifierName)? Multiply 
    | functionHeadPrefix? BitAnd? identifierName QuestionMark?
    | functionExpressionHead
    ;

functionBody
    : '=>' singleExpression
    | (WS | EOL)* block
    ;

assignmentOperator
    : (':='
    | '%='
    | '+='
    | '-='
    | '*='
    | '/='
    | '//='
    | '.='
    | '|='
    | '&='
    | '^='
    | '>>='
    | '<<='
    | '>>>='
    | '**='
    | '??=')
    ;

literal
    : boolean
    | numericLiteral
    | (Unset
    | StringLiteral)
    ;

boolean : 
    (True
    | False);

numericLiteral
    : (DecimalLiteral
    | HexIntegerLiteral)
    ;

getter
    : Get propertyName
    ;

setter
    : Set propertyName
    ;

identifierName
    : identifier
    | reservedWord
    ;

identifier
    : (Identifier
    | Default
    | This
//    | Class // AHK v2.1 actually allows assignment like `class := 1`, but it seems unwise
    | Enum
    | Extends
    | Super
    | Base
    | Get
    | Set
    | As
    | Class
    | Do
    | Parse
    | Reg
    | Read
    | Files)
    ;

// None of these can be used as a variable name
reservedWord
    : keyword
    | Unset
    | boolean
    ;

keyword
    : (Local
    | Global
    | Static
    | If
    | Else
    | Loop
    | For
    | While
    | Until
    | Break
    | Continue
    | Goto
    | Return
    | Switch
    | Case
    | Try
    | Catch
    | Finally
    | Throw
    | As
    | VerbalAnd
    | Contains
    | In
    | Is
    | VerbalNot
    | VerbalOr
    | Super
    | Unset)
    ;

s
    : WS
    | EOL
    ;

eos
    : EOF
    | EOL
    ;