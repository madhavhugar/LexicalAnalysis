import getOverallLexicalDensity from './getOverallLexicalDensity';
import {
  preProcessTextToSentences,
  preProcessTextToWords } from './preProcessText';

export default async function (text: string): Promise<number[]> {
  const processedWords = preProcessTextToSentences(text)
    .map(sentence => preProcessTextToWords(sentence));
  const densityPromises = processedWords.map(word => getOverallLexicalDensity(word));
  return Promise.all(densityPromises);
}
