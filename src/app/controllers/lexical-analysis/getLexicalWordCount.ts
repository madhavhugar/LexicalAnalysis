import getNonLexicalWords from '../../models/getNonLexicalWords';

export default function getLexicalWordCount(words: string[]): number {
  const nonLexicalWords = getNonLexicalWords();
  return words
    .filter(word => !nonLexicalWords.includes(word))
    .length;
}