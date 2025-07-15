import { CharStream, CommonTokenStream } from 'antlr4ng';
import { MainGrammarLexer }      from './parser/MainGrammarLexer';
import { MainGrammarParser }     from './parser/MainGrammarParser';

// Grab UI elements
const inputEl  = document.getElementById('input')  as HTMLTextAreaElement;
const outputEl = document.getElementById('output') as HTMLPreElement;
const btn      = document.getElementById('go')     as HTMLButtonElement;

btn.addEventListener('click', () => {
  const text = inputEl.value;
  const chars = CharStream.fromString(text);
  const lexer = new MainGrammarLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new MainGrammarParser(tokens);

  // entry rule — adjust to your grammar’s start symbol:
  const tree = parser.program();

  outputEl.textContent = parser.ruleNames.toString();
});