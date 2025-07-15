// Generated from c:/Users/minip/source/repos/ahk2-antlr4-demo/src/grammar/MainGrammar.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./MainGrammarParser.js";
import { StatContext } from "./MainGrammarParser.js";
import { DefContext } from "./MainGrammarParser.js";
import { ExprContext } from "./MainGrammarParser.js";
import { FuncContext } from "./MainGrammarParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MainGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class MainGrammarVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `MainGrammarParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `MainGrammarParser.stat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStat?: (ctx: StatContext) => Result;
    /**
     * Visit a parse tree produced by `MainGrammarParser.def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef?: (ctx: DefContext) => Result;
    /**
     * Visit a parse tree produced by `MainGrammarParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `MainGrammarParser.func`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc?: (ctx: FuncContext) => Result;
}

