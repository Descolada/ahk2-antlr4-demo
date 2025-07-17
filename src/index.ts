import * as Antlr4 from 'antlr4ng';
import { AutoHotkeyLexer } from './parser/AutoHotkeyLexer';
import { AutoHotkeyParser } from './parser/AutoHotkeyParser';
import Viz from "viz.js";
import { Module, render } from 'viz.js/full.render.js';


// Debounce timer ID
let debounceTimer: number | undefined;
const DEBOUNCE_DELAY = 500; // ms
const inputEl = document.getElementById('input') as HTMLTextAreaElement;
const graphEl = document.getElementById('graph')!;

class LexerErrorListener implements Antlr4.ANTLRErrorListener {
  public errors: string[] = [];
  syntaxError(_recognizer: any, _offendingSymbol: any,
              line: number, charPositionInLine: number,
              msg: string) {
    this.errors.push(`Lexing error at line ${line}:${charPositionInLine} – ${msg}`);
  }
    reportAmbiguity(_recognizer: any, _dfa: any, _startIndex: number, _stopIndex: number, _exact: boolean, _ambigAlts: any, _configs: any) { }
    reportAttemptingFullContext(_recognizer: any, _dfa: any, _startIndex: number, _stopIndex: number, _ambigAlts: any, _configs: any) { }
    reportContextSensitivity(_recognizer: any, _dfa: any, _startIndex: number, _stopIndex: number, _prediction: number, _configs: any) { }
}
class SyntaxErrorListener implements Antlr4.ANTLRErrorListener {
    public errors: string[] = [];
    syntaxError(_recognizer: any, _offendingSymbol: any, line: number, charPositionInLine: number, msg: string) {
        this.errors.push(`Parse error at line ${line}:${charPositionInLine} - ${msg}`);
    }
    reportAmbiguity(_recognizer: any, _dfa: any, _startIndex: number, _stopIndex: number, _exact: boolean, _ambigAlts: any, _configs: any) { }
    reportAttemptingFullContext(_recognizer: any, _dfa: any, _startIndex: number, _stopIndex: number, _ambigAlts: any, _configs: any) { }
    reportContextSensitivity(_recognizer: any, _dfa: any, _startIndex: number, _stopIndex: number, _prediction: number, _configs: any) { }
}

// Main parse-and-render function
function parseAndRender() {
    const code = editor.getValue();

    // Clear previous outputs
    graphEl.innerHTML = '';
    graphEl.textContent = '';

    try {
        // Lex
        const input = Antlr4.CharStream.fromString(code + '\n');
        let timerStart = performance.now();
        const lexer = new AutoHotkeyLexer(input);
        const lexErrors = new LexerErrorListener();
        lexer.removeErrorListeners();
        lexer.addErrorListener(lexErrors);

        const codeTokens = readTokens(lexer);

        let timerEnd = performance.now();
        console.log(`Lexing took ${(timerEnd - timerStart).toFixed(2)} ms`);

        timerStart = performance.now();
        // Parse
        var codeTokenSource = new Antlr4.ListTokenSource(codeTokens);
        var codeTokenStream = new Antlr4.CommonTokenStream(codeTokenSource);
        const parser = new AutoHotkeyParser(codeTokenStream);
        const errorListener = new SyntaxErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        const tree = parser.program();

        timerEnd = performance.now();
        console.log(`Parsing took ${(timerEnd - timerStart).toFixed(2)} ms`);

        if (errorListener.errors.length) {
            graphEl.textContent = errorListener.errors.join('\n');
            /*
            codeTokens.forEach((t) => {
                const name = parser.vocabulary.getSymbolicName(t.type) ?? t.type;
                console.log(`${name}: "${t.text}"`);
            });
            */
            return;
        }

        // Build DOT
        const lines: string[] = [];
        lines.push('digraph G {');
        lines.push('  graph [nodesep=0.2, ranksep=0.2, fontsize=10, fontname="monospace"];');
        lines.push('  node [fontsize=8, fontname="monospace"];');

        let id = 0;
        function addNode(node: Antlr4.ParseTree, parentId?: number) {
            const childCount = node.getChildCount();
            const isTerminal = childCount === 0;

            // Determine label content
            let labelContent: string;
            let ruleName: string;

            if (isTerminal) {
                const termNode = node as Antlr4.TerminalNode;
                const symbol = termNode.symbol;
                const type = symbol?.type;
                ruleName = type !== undefined ? parser.vocabulary.getSymbolicName(type) || '' : '';
                // Skip unwanted terminals
                if (ruleName === 'EOL' || ruleName === 'WS' || ruleName === 'EOF') {
                    return;
                }
                const text = termNode.getText();
                labelContent = `${ruleName}: \"${text}\"`;
            } else {
                // Non-terminals: context name without "Context"
                const ctx = node as Antlr4.ParserRuleContext;
                const ruleName = parser.ruleNames[ctx.ruleIndex];
                // Skip 's' rule if desired
                if (ruleName === 's' || ruleName === 'eos') {
                    return;
                }
                labelContent = ruleName;
            }

            // Serialize label safely
            const jsonLabel = JSON.stringify(labelContent);
            const myId = id++;
            lines.push(`  n${myId} [label=${jsonLabel}];`);
            if (parentId !== undefined) {
                lines.push(`  n${parentId} -> n${myId};`);
            }

            // Recurse into children
            for (let i = 0; i < childCount; i++) {
                const child = node.getChild(i)!;
                addNode(child, myId);
            }
        }
        addNode(tree);
        lines.push('}');
        const dot = lines.join('\n');

        // Render with Viz.js
        const viz = new Viz({ Module, render });
        viz.renderSVGElement(dot)
            .then((svg: SVGElement) => graphEl.appendChild(svg))
            .catch((e: any) => {
                graphEl.textContent = `Rendering the AST tree failed. This is usually because the tree was too large, but Viz.renderSVGElement returned the following error: ${e.toString()}`
                return;
            });

    } catch (e) {
        graphEl.textContent = e.message;
    }
}

// @ts-ignore: CodeMirror is loaded via <script> in the page
const editor = (window as any).CodeMirror.fromTextArea(inputEl, {
    lineNumbers: true,
    mode: "text/plain",
    theme: "default",
});

// Set up debounced event listener on textarea
editor.on('change', () => {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(() => parseAndRender(), DEBOUNCE_DELAY);
});

// Initial render on page load
parseAndRender();

function readTokens(lexer: AutoHotkeyLexer): Antlr4.Token[] {
    const tokenStream = new Antlr4.CommonTokenStream(lexer);
    tokenStream.fill();
    const tokens = tokenStream.getTokens();

    const codeTokens: Antlr4.Token[] = [];
    let index = 0;

    // skip any leading WS
    while (index < tokens.length && tokens[index].type === AutoHotkeyLexer.WS) {
        index++;
    }

    const ERROR_CHANNEL = AutoHotkeyLexer.channelNames.indexOf("ERROR");

    // by default we include everything except hidden‐channel tokens
    while (index < tokens.length) {
        let tk = tokens[index];
        
        let shouldAdd = true;
        let skipAdvance = false;

        // skip purely hidden tokens (comments, directive‑mode hidden WS, etc.)
        if (tk.channel === Antlr4.Lexer.HIDDEN) {
            index++;
            continue;
        } else if (tk.channel === ERROR_CHANNEL) {
            // Show in the graph area and skip parsing
            if (tk.text === "\"" || tk.text === "'")
                throw new Error(`Error: Unterminated string literal at ${tk.line}:${tk.column}`);
            throw new Error(`Lexing error at ${tk.line}:${tk.column} - unexpected '${tk.text}'`);
        }

        switch (tk.type) {
            case AutoHotkeyLexer.OpenBrace:
                PopWhitespaces(codeTokens, /*allowLinebreaks*/ false);
                break;

            case AutoHotkeyLexer.OpenParen:
                index = SkipWhitespaces(tokens, codeTokens, index);
                break;

            case AutoHotkeyLexer.Comma:
                index = SkipWhitespaces(tokens, codeTokens, index);
                PopEOLs(codeTokens);
                break;

            case AutoHotkeyLexer.CloseParen:
                PopWhitespaces(codeTokens, /*allowLinebreaks*/ true);
                break;
            // arithmetic / bitwise operators
            case AutoHotkeyLexer.Multiply:
                PopWhitespaces(codeTokens, /*allowLinebreaks*/ true);
                break;

            case AutoHotkeyLexer.EOL: {
                PopWhitespaces(codeTokens, /*allowLinebreaks*/ true);
                index = SkipWhitespaces(tokens, codeTokens, index);
                break;
            }

            case AutoHotkeyLexer.Dot:
            case AutoHotkeyLexer.Assign:
            case AutoHotkeyLexer.Divide:
            case AutoHotkeyLexer.IntegerDivide:
            case AutoHotkeyLexer.Power:
            case AutoHotkeyLexer.NullCoalesce:
            case AutoHotkeyLexer.RightShiftArithmetic:
            case AutoHotkeyLexer.LeftShiftArithmetic:
            case AutoHotkeyLexer.RightShiftLogical:
            case AutoHotkeyLexer.LessThan:
            case AutoHotkeyLexer.MoreThan:
            case AutoHotkeyLexer.LessThanEquals:
            case AutoHotkeyLexer.GreaterThanEquals:
            case AutoHotkeyLexer.Equals_:
            case AutoHotkeyLexer.NotEquals:
            case AutoHotkeyLexer.IdentityEquals:
            case AutoHotkeyLexer.IdentityNotEquals:
            case AutoHotkeyLexer.RegExMatch:
            case AutoHotkeyLexer.BitXOr:
            case AutoHotkeyLexer.BitOr:
            case AutoHotkeyLexer.And:
            case AutoHotkeyLexer.Or:
            case AutoHotkeyLexer.VerbalAnd:
            case AutoHotkeyLexer.VerbalOr:
            case AutoHotkeyLexer.MultiplyAssign:
            case AutoHotkeyLexer.DivideAssign:
            case AutoHotkeyLexer.ModulusAssign:
            case AutoHotkeyLexer.PlusAssign:
            case AutoHotkeyLexer.MinusAssign:
            case AutoHotkeyLexer.LeftShiftArithmeticAssign:
            case AutoHotkeyLexer.RightShiftArithmeticAssign:
            case AutoHotkeyLexer.RightShiftLogicalAssign:
            case AutoHotkeyLexer.IntegerDivideAssign:
            case AutoHotkeyLexer.ConcatenateAssign:
            case AutoHotkeyLexer.BitAndAssign:
            case AutoHotkeyLexer.BitXorAssign:
            case AutoHotkeyLexer.BitOrAssign:
            case AutoHotkeyLexer.PowerAssign:
            case AutoHotkeyLexer.NullishCoalescingAssign:
            case AutoHotkeyLexer.QuestionMarkDot:
            case AutoHotkeyLexer.Arrow:
                PopWhitespaces(codeTokens, /*allowLinebreaks*/ true);
                index = SkipWhitespaces(tokens, codeTokens, index);
                break;

            case AutoHotkeyLexer.Loop: {
                // if next is WS + a keyword, consume them
                var condition = false;
                if (tokens[index + 1]?.type === AutoHotkeyLexer.WS) {
                    const t2 = tokens[index + 2]?.type;
                    if (
                        t2 === AutoHotkeyLexer.Files ||
                        t2 === AutoHotkeyLexer.Parse ||
                        t2 === AutoHotkeyLexer.Read ||
                        t2 === AutoHotkeyLexer.Reg
                    ) {
                        index += 2;
                        codeTokens.push(tk);
                        tk = tokens[index];
                        condition = tk.type === AutoHotkeyLexer.Not || tk.type === AutoHotkeyLexer.VerbalNot;
                        break;
                    }
                }
                codeTokens.push(tk);
                if (tokens[index + 1].type == AutoHotkeyLexer.Comma)
                    index++;
                AddWhitespaces(tokens, codeTokens, index, condition);
                shouldAdd = false;
                // fallthrough to adding the Loop token
                break;
            }

            // a bunch of statement‐like keywords get extra whitespace inserted
            case AutoHotkeyLexer.Try:
            case AutoHotkeyLexer.If:
            case AutoHotkeyLexer.Catch:
            case AutoHotkeyLexer.Finally:
            case AutoHotkeyLexer.As:
            case AutoHotkeyLexer.For:
            case AutoHotkeyLexer.Switch:
            case AutoHotkeyLexer.Case:
            case AutoHotkeyLexer.Default:
            case AutoHotkeyLexer.While:
            case AutoHotkeyLexer.Until:
            case AutoHotkeyLexer.Else:
            case AutoHotkeyLexer.Goto:
            case AutoHotkeyLexer.Throw:
            case AutoHotkeyLexer.Static:
            case AutoHotkeyLexer.Not:
            case AutoHotkeyLexer.VerbalNot:
                codeTokens.push(tk);
                index = AddWhitespaces(tokens, codeTokens, index, /*linebreaksOnNot*/ tk.type === AutoHotkeyLexer.Not || tk.type === AutoHotkeyLexer.VerbalNot);
                shouldAdd = false;
                break;

            case AutoHotkeyLexer.CloseBrace:
                {
                    let i = PopWhitespaces(codeTokens, /*allowLinebreaks=*/ true);
                    // ensure a trailing EOL after a close‑brace
                    const eolToken = Antlr4.CommonToken.fromType(AutoHotkeyLexer.EOL, '\n');
                    if (codeTokens[i]?.type !== AutoHotkeyLexer.EOL) {
                        codeTokens.push(eolToken);
                    }
                    codeTokens.push(tk);
                    i = index;
                    let eolPresent = false;
                    while (++i < tokens.length) {
                        if (tokens[i].type == AutoHotkeyLexer.WS)
                            index++;
                        else if (tokens[i].type == AutoHotkeyLexer.EOL) {
                            eolPresent = true;
                            break;
                        }
                        else
                            break;
                    }
                    if (!eolPresent) {
                        codeTokens.push(eolToken);
                    }
                    shouldAdd = false;
                }
                break;

            default:
                break;
        }

        if (shouldAdd)
            codeTokens.push(tk);
        if (!skipAdvance)
            index++;
    }

    // strip any remaining WS / EOL at the very front
    while (
        codeTokens.length &&
        (codeTokens[0].type === AutoHotkeyLexer.WS ||
            codeTokens[0].type === AutoHotkeyLexer.EOL)
    ) {
        codeTokens.shift();
    }

    return codeTokens;
}

// Helpers (direct port of your C# PopWhitespaces / SkipWhitespaces logic)

function PopWhitespaces(
    codeTokens: Antlr4.Token[],
    allowLinebreaks = true
): number {
    let i = codeTokens.length - 1;
    while (i >= 0) {
        const ct = codeTokens[i];
        if (
            ct.type === AutoHotkeyLexer.WS ||
            (allowLinebreaks && ct.type === AutoHotkeyLexer.EOL)
        ) {
            codeTokens.pop();
            i--;
        } else {
            break;
        }
    }
    return i;
}

function SkipWhitespaces(
    allTokens: Antlr4.Token[],
    codeTokens: Antlr4.Token[],
    startIndex: number
): number {
    let idx = startIndex;
    while (++idx < allTokens.length) {
        const t = allTokens[idx];
        if (t.type === AutoHotkeyLexer.WS) {
            startIndex++;
        } else {
            break;
        }
    }
    return startIndex;
}

function PopEOLs(codeTokens: Antlr4.Token[]) {
    // remove any EOL tokens at the end of codeTokens
    while (
        codeTokens.length &&
        codeTokens[codeTokens.length - 1].type === AutoHotkeyLexer.EOL
    ) {
        codeTokens.pop();
    }
}

function AddWhitespaces(
    allTokens: Antlr4.Token[],
    codeTokens: Antlr4.Token[],
    startIndex: number,
    condition: boolean
): number {
    let i = startIndex;
    while (++i < allTokens.length) {
        const t = allTokens[i];

        // If it's an EOL and condition is true, skip it
        if (t.type === AutoHotkeyLexer.EOL && condition) {
            startIndex++;
        }
        // If it’s a plain whitespace token, keep it
        else if (t.type === AutoHotkeyLexer.WS) {
            codeTokens.push(t);
            startIndex++;
        }
        // Otherwise stop
        else {
            break;
        }
    }
    return startIndex;
}