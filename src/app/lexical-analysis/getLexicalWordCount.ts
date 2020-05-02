import { getNonLexicalWordsFromLocal } from '../models/getNonLexicalWords';

export default function getLexicalWordCount(words: string[]): number {
  const nonLexicalWords = getNonLexicalWordsFromLocal();
  return words
    .filter(word => !nonLexicalWords.includes(word))
    .length;
}