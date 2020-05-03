import { getNonLexicalWords } from '../models/getNonLexicalWords';

export default async function getLexicalWordCount(words: string[]): Promise<number> {
  const nonLexicalWords = await getNonLexicalWords();
  return words
    .filter(word => !nonLexicalWords.includes(word))
    .length;
}