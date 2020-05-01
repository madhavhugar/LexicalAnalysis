import log from 'winston';
import preProcessTextToWords from './preProcessTextToWords';
import getLexicalWordCount from './getLexicalWordCount';


function getLexicalDensity(text: string): number {
  const MAX_CHARACTER_LIMIT = 1000;
  const MAX_WORD_LIMIT = 100;
  try {
    const invalidInputError = new TypeError(
      `Provide text with word limit of ${MAX_WORD_LIMIT} ` +
      `and characted limit of ${MAX_CHARACTER_LIMIT}`,
      );
    if (text.length > MAX_CHARACTER_LIMIT) throw invalidInputError;

    const processedWords = preProcessTextToWords(text);
    const wordCount = processedWords.length;

    if (wordCount > MAX_WORD_LIMIT) throw invalidInputError;

    const lexicalWordCount = getLexicalWordCount(processedWords);
    const lexicalDensity = lexicalWordCount / wordCount;

    return Number(lexicalDensity.toFixed(2));
  } catch (error) {
    log.error('LexicalAnalysis: get lexical density', { error });
    throw error;
  }
}

export default getLexicalDensity;
