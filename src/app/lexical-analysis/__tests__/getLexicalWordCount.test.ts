import getLexicalWordCount from '../getLexicalWordCount';

jest.mock('../../models/getNonLexicalWords');

describe('getLexicalWordCount', () => {
  it('should compute the count of non lexical words in a given list', async () => {
    const inputWords = ['kim', 'loves', 'going', 'to', 'the', 'cinema'];
    const got = await getLexicalWordCount(inputWords);
    const wanted = 4;
    expect(got).toEqual(wanted);
  });
});
