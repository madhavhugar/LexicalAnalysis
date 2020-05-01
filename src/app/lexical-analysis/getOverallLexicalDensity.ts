import getLexicalWordCount from './getLexicalWordCount';

export default function getOverallLexicalDensity(words: string[]): number {
  const lexicalWordCount = getLexicalWordCount(words);
  const wordCount = words.length;
  const lexicalDensity = lexicalWordCount / wordCount;

  return Number(lexicalDensity.toFixed(2));
}
