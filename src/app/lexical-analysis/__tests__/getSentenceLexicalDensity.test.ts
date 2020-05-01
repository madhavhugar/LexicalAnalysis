import getSentenceLexicalDensity from '../getSentenceLexicalDensity';

describe('getSentenceLexicalDensity', () => {
  it('should return the sentence lexical density', () => {
    const inputText = 'Kim loves going. to  the. cinema';
    const got = getSentenceLexicalDensity(inputText);
    const wanted = [1, 0, 1];
    expect(got).toEqual(wanted);
  });
});