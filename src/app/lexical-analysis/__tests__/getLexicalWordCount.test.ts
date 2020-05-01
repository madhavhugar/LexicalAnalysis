import getLexicalWordCount from '../getLexicalWordCount';

describe('getLexicalWordCount', () => {
  it('should compute the count of non lexical words in a given list', () => {
    const inputWords = ['kim', 'loves', 'going', 'to', 'the', 'cinema'];
    const got = getLexicalWordCount(inputWords);
    const wanted = 4;
    expect(got).toEqual(wanted);
  });
});
