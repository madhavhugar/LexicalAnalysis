import getLexicalWordCount from './getLexicalWordCount';

export default async function getOverallLexicalDensity(words: string[]): Promise<number> {
  const lexicalWordCount = await getLexicalWordCount(words);
  const wordCount = words.length;
  const lexicalDensity = lexicalWordCount / wordCount;

  return Number(lexicalDensity.toFixed(2));
}
