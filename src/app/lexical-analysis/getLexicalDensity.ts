import log from 'winston';
import {
  ILexicalComplexityInput,
  ILexicalComplexityOutput } from './interfaces';
import validateInput from './validateInput';
import { preProcessTextToWords } from './preProcessText';
import getOverallLexicalDensity from './getOverallLexicalDensity';
import getSentenceLexicalDensity from './getSentenceLexicalDensity';

export default async function getLexicalDensity(input: ILexicalComplexityInput): Promise<ILexicalComplexityOutput> {
  log.info('LexicalDensity: computing overall lexical density');
  const processedWords = preProcessTextToWords(input.inputText);
  const wordCount = processedWords.length;
  validateInput(input.inputText.length, wordCount);

  const overallLexicalDensity = await getOverallLexicalDensity(processedWords);
  if (!input.verbose) {
    return { overallLexicalDensity };
  }
  const sentenceLexicalDensity = await getSentenceLexicalDensity(input.inputText);
  return {
    overallLexicalDensity,
    sentenceLexicalDensity,
  };
}
