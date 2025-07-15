// Generated from c:/Users/minip/source/repos/ahk2-antlr4-demo/src/grammar/MainGrammar.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./MainGrammarParser.js";
import { StatContext } from "./MainGrammarParser.js";
import { DefContext } from "./MainGrammarParser.js";
import { ExprContext } from "./MainGrammarParser.js";
import { FuncContext } from "./MainGrammarParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MainGrammarParser`.
 */
export class MainGrammarListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `MainGrammarParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `MainGrammarParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `MainGrammarParser.stat`.
     * @param ctx the parse tree
     */
    enterStat?: (ctx: StatContext) => void;
    /**
     * Exit a parse tree produced by `MainGrammarParser.stat`.
     * @param ctx the parse tree
     */
    exitStat?: (ctx: StatContext) => void;
    /**
     * Enter a parse tree produced by `MainGrammarParser.def`.
     * @param ctx the parse tree
     */
    enterDef?: (ctx: DefContext) => void;
    /**
     * Exit a parse tree produced by `MainGrammarParser.def`.
     * @param ctx the parse tree
     */
    exitDef?: (ctx: DefContext) => void;
    /**
     * Enter a parse tree produced by `MainGrammarParser.expr`.
     * @param ctx the parse tree
     */
    enterExpr?: (ctx: ExprContext) => void;
    /**
     * Exit a parse tree produced by `MainGrammarParser.expr`.
     * @param ctx the parse tree
     */
    exitExpr?: (ctx: ExprContext) => void;
    /**
     * Enter a parse tree produced by `MainGrammarParser.func`.
     * @param ctx the parse tree
     */
    enterFunc?: (ctx: FuncContext) => void;
    /**
     * Exit a parse tree produced by `MainGrammarParser.func`.
     * @param ctx the parse tree
     */
    exitFunc?: (ctx: FuncContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

