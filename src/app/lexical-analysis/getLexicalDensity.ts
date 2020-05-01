import log from 'winston';
import {
  ILexicalComplexityInput,
  ILexicalComplexityOutput } from './interfaces';
import validateInput from './validateInput';
import { preProcessTextToWords } from './preProcessText';
import getOverallLexicalDensity from './getOverallLexicalDensity';
import getSentenceLexicalDensity from './getSentenceLexicalDensity';

export default function getLexicalDensity(input: ILexicalComplexityInput): ILexicalComplexityOutput {
  log.info('LexicalDensity: computing overall lexical density');
  const processedWords = preProcessTextToWords(input.inputText);
  const wordCount = processedWords.length;
  validateInput(input.inputText.length, wordCount);

  const overallLexicalDensity = getOverallLexicalDensity(processedWords);
  if (!input.verbose) {
    return { overallLexicalDensity };
  }
  const sentenceLexicalDensity = getSentenceLexicalDensity(input.inputText);
  return {
    overallLexicalDensity,
    sentenceLexicalDensity,
  };
}
