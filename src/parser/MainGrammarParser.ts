// Generated from c:/Users/minip/source/repos/ahk2-antlr4-demo/src/grammar/MainGrammar.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { MainGrammarListener } from "./MainGrammarListener.js";
import { MainGrammarVisitor } from "./MainGrammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class MainGrammarParser extends antlr.Parser {
    public static readonly AND = 1;
    public static readonly OR = 2;
    public static readonly NOT = 3;
    public static readonly EQ = 4;
    public static readonly COMMA = 5;
    public static readonly SEMI = 6;
    public static readonly LPAREN = 7;
    public static readonly RPAREN = 8;
    public static readonly LCURLY = 9;
    public static readonly RCURLY = 10;
    public static readonly INT = 11;
    public static readonly ID = 12;
    public static readonly WS = 13;
    public static readonly RULE_program = 0;
    public static readonly RULE_stat = 1;
    public static readonly RULE_def = 2;
    public static readonly RULE_expr = 3;
    public static readonly RULE_func = 4;

    public static readonly literalNames = [
        null, "'and'", "'or'", "'not'", "'='", "','", "';'", "'('", "')'", 
        "'{'", "'}'"
    ];

    public static readonly symbolicNames = [
        null, "AND", "OR", "NOT", "EQ", "COMMA", "SEMI", "LPAREN", "RPAREN", 
        "LCURLY", "RCURLY", "INT", "ID", "WS"
    ];
    public static readonly ruleNames = [
        "program", "stat", "def", "expr", "func",
    ];

    public get grammarFileName(): string { return "MainGrammar.g4"; }
    public get literalNames(): (string | null)[] { return MainGrammarParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return MainGrammarParser.symbolicNames; }
    public get ruleNames(): string[] { return MainGrammarParser.ruleNames; }
    public get serializedATN(): number[] { return MainGrammarParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, MainGrammarParser._ATN, MainGrammarParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, MainGrammarParser.RULE_program);
        try {
            this.state = 16;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 10;
                this.stat();
                this.state = 11;
                this.match(MainGrammarParser.EOF);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 13;
                this.def();
                this.state = 14;
                this.match(MainGrammarParser.EOF);
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
    public stat(): StatContext {
        let localContext = new StatContext(this.context, this.state);
        this.enterRule(localContext, 2, MainGrammarParser.RULE_stat);
        try {
            this.state = 26;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 18;
                this.match(MainGrammarParser.ID);
                this.state = 19;
                this.match(MainGrammarParser.EQ);
                this.state = 20;
                this.expr(0);
                this.state = 21;
                this.match(MainGrammarParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 23;
                this.expr(0);
                this.state = 24;
                this.match(MainGrammarParser.SEMI);
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
    public def(): DefContext {
        let localContext = new DefContext(this.context, this.state);
        this.enterRule(localContext, 4, MainGrammarParser.RULE_def);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 28;
            this.match(MainGrammarParser.ID);
            this.state = 29;
            this.match(MainGrammarParser.LPAREN);
            this.state = 30;
            this.match(MainGrammarParser.ID);
            this.state = 35;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 31;
                this.match(MainGrammarParser.COMMA);
                this.state = 32;
                this.match(MainGrammarParser.ID);
                }
                }
                this.state = 37;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 38;
            this.match(MainGrammarParser.RPAREN);
            this.state = 39;
            this.match(MainGrammarParser.LCURLY);
            this.state = 43;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6152) !== 0)) {
                {
                {
                this.state = 40;
                this.stat();
                }
                }
                this.state = 45;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 46;
            this.match(MainGrammarParser.RCURLY);
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

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 6;
        this.enterRecursionRule(localContext, 6, MainGrammarParser.RULE_expr, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 54;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                {
                this.state = 49;
                this.match(MainGrammarParser.ID);
                }
                break;
            case 2:
                {
                this.state = 50;
                this.match(MainGrammarParser.INT);
                }
                break;
            case 3:
                {
                this.state = 51;
                this.func();
                }
                break;
            case 4:
                {
                this.state = 52;
                this.match(MainGrammarParser.NOT);
                this.state = 53;
                this.expr(3);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 64;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 62;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
                    case 1:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, MainGrammarParser.RULE_expr);
                        this.state = 56;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 57;
                        this.match(MainGrammarParser.AND);
                        this.state = 58;
                        this.expr(3);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExprContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, MainGrammarParser.RULE_expr);
                        this.state = 59;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 60;
                        this.match(MainGrammarParser.OR);
                        this.state = 61;
                        this.expr(2);
                        }
                        break;
                    }
                    }
                }
                this.state = 66;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
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
    public func(): FuncContext {
        let localContext = new FuncContext(this.context, this.state);
        this.enterRule(localContext, 8, MainGrammarParser.RULE_func);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 67;
            this.match(MainGrammarParser.ID);
            this.state = 68;
            this.match(MainGrammarParser.LPAREN);
            this.state = 69;
            this.expr(0);
            this.state = 74;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 5) {
                {
                {
                this.state = 70;
                this.match(MainGrammarParser.COMMA);
                this.state = 71;
                this.expr(0);
                }
                }
                this.state = 76;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 77;
            this.match(MainGrammarParser.RPAREN);
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
        case 3:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        case 1:
            return this.precpred(this.context, 1);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,13,80,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,0,1,
        0,1,0,1,0,3,0,17,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,27,8,1,
        1,2,1,2,1,2,1,2,1,2,5,2,34,8,2,10,2,12,2,37,9,2,1,2,1,2,1,2,5,2,
        42,8,2,10,2,12,2,45,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,55,8,
        3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,63,8,3,10,3,12,3,66,9,3,1,4,1,4,1,
        4,1,4,1,4,5,4,73,8,4,10,4,12,4,76,9,4,1,4,1,4,1,4,0,1,6,5,0,2,4,
        6,8,0,0,84,0,16,1,0,0,0,2,26,1,0,0,0,4,28,1,0,0,0,6,54,1,0,0,0,8,
        67,1,0,0,0,10,11,3,2,1,0,11,12,5,0,0,1,12,17,1,0,0,0,13,14,3,4,2,
        0,14,15,5,0,0,1,15,17,1,0,0,0,16,10,1,0,0,0,16,13,1,0,0,0,17,1,1,
        0,0,0,18,19,5,12,0,0,19,20,5,4,0,0,20,21,3,6,3,0,21,22,5,6,0,0,22,
        27,1,0,0,0,23,24,3,6,3,0,24,25,5,6,0,0,25,27,1,0,0,0,26,18,1,0,0,
        0,26,23,1,0,0,0,27,3,1,0,0,0,28,29,5,12,0,0,29,30,5,7,0,0,30,35,
        5,12,0,0,31,32,5,5,0,0,32,34,5,12,0,0,33,31,1,0,0,0,34,37,1,0,0,
        0,35,33,1,0,0,0,35,36,1,0,0,0,36,38,1,0,0,0,37,35,1,0,0,0,38,39,
        5,8,0,0,39,43,5,9,0,0,40,42,3,2,1,0,41,40,1,0,0,0,42,45,1,0,0,0,
        43,41,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,43,1,0,0,0,46,47,5,
        10,0,0,47,5,1,0,0,0,48,49,6,3,-1,0,49,55,5,12,0,0,50,55,5,11,0,0,
        51,55,3,8,4,0,52,53,5,3,0,0,53,55,3,6,3,3,54,48,1,0,0,0,54,50,1,
        0,0,0,54,51,1,0,0,0,54,52,1,0,0,0,55,64,1,0,0,0,56,57,10,2,0,0,57,
        58,5,1,0,0,58,63,3,6,3,3,59,60,10,1,0,0,60,61,5,2,0,0,61,63,3,6,
        3,2,62,56,1,0,0,0,62,59,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,
        1,0,0,0,65,7,1,0,0,0,66,64,1,0,0,0,67,68,5,12,0,0,68,69,5,7,0,0,
        69,74,3,6,3,0,70,71,5,5,0,0,71,73,3,6,3,0,72,70,1,0,0,0,73,76,1,
        0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,76,74,1,0,0,0,77,
        78,5,8,0,0,78,9,1,0,0,0,8,16,26,35,43,54,62,64,74
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!MainGrammarParser.__ATN) {
            MainGrammarParser.__ATN = new antlr.ATNDeserializer().deserialize(MainGrammarParser._serializedATN);
        }

        return MainGrammarParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(MainGrammarParser.literalNames, MainGrammarParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return MainGrammarParser.vocabulary;
    }

    private static readonly decisionsToDFA = MainGrammarParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stat(): StatContext | null {
        return this.getRuleContext(0, StatContext);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(MainGrammarParser.EOF, 0)!;
    }
    public def(): DefContext | null {
        return this.getRuleContext(0, DefContext);
    }
    public override get ruleIndex(): number {
        return MainGrammarParser.RULE_program;
    }
    public override enterRule(listener: MainGrammarListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: MainGrammarListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: MainGrammarVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MainGrammarParser.ID, 0);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(MainGrammarParser.EQ, 0);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(MainGrammarParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return MainGrammarParser.RULE_stat;
    }
    public override enterRule(listener: MainGrammarListener): void {
        if(listener.enterStat) {
             listener.enterStat(this);
        }
    }
    public override exitRule(listener: MainGrammarListener): void {
        if(listener.exitStat) {
             listener.exitStat(this);
        }
    }
    public override accept<Result>(visitor: MainGrammarVisitor<Result>): Result | null {
        if (visitor.visitStat) {
            return visitor.visitStat(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode[];
    public ID(i: number): antlr.TerminalNode | null;
    public ID(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MainGrammarParser.ID);
    	} else {
    		return this.getToken(MainGrammarParser.ID, i);
    	}
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(MainGrammarParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(MainGrammarParser.RPAREN, 0)!;
    }
    public LCURLY(): antlr.TerminalNode {
        return this.getToken(MainGrammarParser.LCURLY, 0)!;
    }
    public RCURLY(): antlr.TerminalNode {
        return this.getToken(MainGrammarParser.RCURLY, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MainGrammarParser.COMMA);
    	} else {
    		return this.getToken(MainGrammarParser.COMMA, i);
    	}
    }
    public stat(): StatContext[];
    public stat(i: number): StatContext | null;
    public stat(i?: number): StatContext[] | StatContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatContext);
        }

        return this.getRuleContext(i, StatContext);
    }
    public override get ruleIndex(): number {
        return MainGrammarParser.RULE_def;
    }
    public override enterRule(listener: MainGrammarListener): void {
        if(listener.enterDef) {
             listener.enterDef(this);
        }
    }
    public override exitRule(listener: MainGrammarListener): void {
        if(listener.exitDef) {
             listener.exitDef(this);
        }
    }
    public override accept<Result>(visitor: MainGrammarVisitor<Result>): Result | null {
        if (visitor.visitDef) {
            return visitor.visitDef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode | null {
        return this.getToken(MainGrammarParser.ID, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MainGrammarParser.INT, 0);
    }
    public func(): FuncContext | null {
        return this.getRuleContext(0, FuncContext);
    }
    public NOT(): antlr.TerminalNode | null {
        return this.getToken(MainGrammarParser.NOT, 0);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(MainGrammarParser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(MainGrammarParser.OR, 0);
    }
    public override get ruleIndex(): number {
        return MainGrammarParser.RULE_expr;
    }
    public override enterRule(listener: MainGrammarListener): void {
        if(listener.enterExpr) {
             listener.enterExpr(this);
        }
    }
    public override exitRule(listener: MainGrammarListener): void {
        if(listener.exitExpr) {
             listener.exitExpr(this);
        }
    }
    public override accept<Result>(visitor: MainGrammarVisitor<Result>): Result | null {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FuncContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(MainGrammarParser.ID, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(MainGrammarParser.LPAREN, 0)!;
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(MainGrammarParser.RPAREN, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(MainGrammarParser.COMMA);
    	} else {
    		return this.getToken(MainGrammarParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return MainGrammarParser.RULE_func;
    }
    public override enterRule(listener: MainGrammarListener): void {
        if(listener.enterFunc) {
             listener.enterFunc(this);
        }
    }
    public override exitRule(listener: MainGrammarListener): void {
        if(listener.exitFunc) {
             listener.exitFunc(this);
        }
    }
    public override accept<Result>(visitor: MainGrammarVisitor<Result>): Result | null {
        if (visitor.visitFunc) {
            return visitor.visitFunc(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
