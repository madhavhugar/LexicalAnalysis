import getOverallLexicalDensity from './getOverallLexicalDensity';
import {
  preProcessTextToSentences,
  preProcessTextToWords } from './preProcessText';

export default function (text: string): number[] {
  return preProcessTextToSentences(text)
    .map(sentence => preProcessTextToWords(sentence))
    .map(sentenceWords => getOverallLexicalDensity(sentenceWords));
}
