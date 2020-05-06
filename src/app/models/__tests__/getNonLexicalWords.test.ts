import { getNonLexicalWords } from '../getNonLexicalWords';
import nonLexicalWords from './__stubs__/nonLexicalWords';

jest.mock('../NonLexicalWord');

describe('getNonLexicalWords', () => {
  it('should fetch words from MongoDB and transform it to array of non lexical words', async () => {
    const words = await getNonLexicalWords();
    expect(words).toEqual(nonLexicalWords);
  });
});