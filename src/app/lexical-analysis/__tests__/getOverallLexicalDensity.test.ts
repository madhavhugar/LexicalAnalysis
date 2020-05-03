import getOverallLexicalDensity from '../getOverallLexicalDensity';

jest.mock('../../models/getNonLexicalWords');

describe('getOverallLexicalDensity', () => {
  it('should compute lexical density', async () => {
    const words = ['kim', 'loves', 'going', 'to', 'the', 'cinema'];
    const got = await getOverallLexicalDensity(words);
    const wanted = 0.67;
    expect(got).toEqual(wanted);
  });
});