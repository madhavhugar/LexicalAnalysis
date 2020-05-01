export default function (characterCount: number, wordCount: number) {
  const MAX_CHARACTER_LIMIT = 1000;
  const MAX_WORD_LIMIT = 100;

  const invalidInputError = new TypeError(
    `Provide text with word limit of ${MAX_WORD_LIMIT} ` +
    `and characted limit of ${MAX_CHARACTER_LIMIT}`,
    );
  if (characterCount > MAX_CHARACTER_LIMIT) throw invalidInputError;
  if (wordCount > MAX_WORD_LIMIT) throw invalidInputError;
}
