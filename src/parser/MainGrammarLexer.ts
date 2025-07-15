// Generated from c:/Users/minip/source/repos/ahk2-antlr4-demo/src/grammar/MainGrammar.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class MainGrammarLexer extends antlr.Lexer {
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

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'and'", "'or'", "'not'", "'='", "','", "';'", "'('", "')'", 
        "'{'", "'}'"
    ];

    public static readonly symbolicNames = [
        null, "AND", "OR", "NOT", "EQ", "COMMA", "SEMI", "LPAREN", "RPAREN", 
        "LCURLY", "RCURLY", "INT", "ID", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "AND", "OR", "NOT", "EQ", "COMMA", "SEMI", "LPAREN", "RPAREN", "LCURLY", 
        "RCURLY", "INT", "ID", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, MainGrammarLexer._ATN, MainGrammarLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "MainGrammar.g4"; }

    public get literalNames(): (string | null)[] { return MainGrammarLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return MainGrammarLexer.symbolicNames; }
    public get ruleNames(): string[] { return MainGrammarLexer.ruleNames; }

    public get serializedATN(): number[] { return MainGrammarLexer._serializedATN; }

    public get channelNames(): string[] { return MainGrammarLexer.channelNames; }

    public get modeNames(): string[] { return MainGrammarLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,13,71,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,1,0,
        1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,
        1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,4,10,54,8,10,11,10,12,10,55,
        1,11,1,11,5,11,60,8,11,10,11,12,11,63,9,11,1,12,4,12,66,8,12,11,
        12,12,12,67,1,12,1,12,0,0,13,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
        17,9,19,10,21,11,23,12,25,13,1,0,4,1,0,48,57,3,0,65,90,95,95,97,
        122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,12,13,32,32,73,0,1,1,0,
        0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
        0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
        0,23,1,0,0,0,0,25,1,0,0,0,1,27,1,0,0,0,3,31,1,0,0,0,5,34,1,0,0,0,
        7,38,1,0,0,0,9,40,1,0,0,0,11,42,1,0,0,0,13,44,1,0,0,0,15,46,1,0,
        0,0,17,48,1,0,0,0,19,50,1,0,0,0,21,53,1,0,0,0,23,57,1,0,0,0,25,65,
        1,0,0,0,27,28,5,97,0,0,28,29,5,110,0,0,29,30,5,100,0,0,30,2,1,0,
        0,0,31,32,5,111,0,0,32,33,5,114,0,0,33,4,1,0,0,0,34,35,5,110,0,0,
        35,36,5,111,0,0,36,37,5,116,0,0,37,6,1,0,0,0,38,39,5,61,0,0,39,8,
        1,0,0,0,40,41,5,44,0,0,41,10,1,0,0,0,42,43,5,59,0,0,43,12,1,0,0,
        0,44,45,5,40,0,0,45,14,1,0,0,0,46,47,5,41,0,0,47,16,1,0,0,0,48,49,
        5,123,0,0,49,18,1,0,0,0,50,51,5,125,0,0,51,20,1,0,0,0,52,54,7,0,
        0,0,53,52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,22,
        1,0,0,0,57,61,7,1,0,0,58,60,7,2,0,0,59,58,1,0,0,0,60,63,1,0,0,0,
        61,59,1,0,0,0,61,62,1,0,0,0,62,24,1,0,0,0,63,61,1,0,0,0,64,66,7,
        3,0,0,65,64,1,0,0,0,66,67,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,
        69,1,0,0,0,69,70,6,12,0,0,70,26,1,0,0,0,4,0,55,61,67,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!MainGrammarLexer.__ATN) {
            MainGrammarLexer.__ATN = new antlr.ATNDeserializer().deserialize(MainGrammarLexer._serializedATN);
        }

        return MainGrammarLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(MainGrammarLexer.literalNames, MainGrammarLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return MainGrammarLexer.vocabulary;
    }

    private static readonly decisionsToDFA = MainGrammarLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}