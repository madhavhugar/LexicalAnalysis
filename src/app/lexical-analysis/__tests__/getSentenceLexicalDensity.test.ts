import getSentenceLexicalDensity from '../getSentenceLexicalDensity';

jest.mock('../../models/getNonLexicalWords');

describe('getSentenceLexicalDensity', () => {
  it('should return the sentence lexical density', async () => {
    const inputText = 'Kim loves going. to  the. cinema';
    const got = await getSentenceLexicalDensity(inputText);
    const wanted = [1, 0, 1];
    expect(got).toEqual(wanted);
  });
});