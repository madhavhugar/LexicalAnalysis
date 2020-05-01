import getOverallLexicalDensity from '../getOverallLexicalDensity';

describe('getOverallLexicalDensity', () => {
  it('should compute lexical density', () => {
    const words = ['kim', 'loves', 'going', 'to', 'the', 'cinema'];
    const got = getOverallLexicalDensity(words);
    const wanted = 0.67;
    expect(got).toEqual(wanted);
  });
});