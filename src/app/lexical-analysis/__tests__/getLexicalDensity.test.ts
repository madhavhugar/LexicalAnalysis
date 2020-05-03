import getLexicalDensity from '../getLexicalDensity';
import exceedCharacterInputText from './__stubs__/exceedCharacterInputText';
import exceedWordInputText from './__stubs__/exceedWordInputText';

jest.mock('../../models/getNonLexicalWords');

describe('getLexicalDensity', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should delegate non-verbose lexical density computation', async () => {
    const inputText = 'Kim loves going to  the cinema';
    const got = await getLexicalDensity({ inputText });
    const wanted = {
      overallLexicalDensity: 0.67,
    };
    expect(got).toEqual(wanted);
  });

  it('should delegate verbose lexical density computation', async () => {
    const inputText = 'Kim loves going. to  the. cinema';
    const verbose = true;
    const got = await getLexicalDensity({ inputText, verbose });
    const wanted = {
      overallLexicalDensity: 0.67,
      sentenceLexicalDensity: [1, 0, 1],
    };
    expect(got).toEqual(wanted);
  });

  it('should throw type error when input text character limit is exceeded', () => {
    expect(getLexicalDensity({ inputText: exceedCharacterInputText }))
      .rejects
      .toThrow();
    });
  it('should throw type error when input text word limit is exceeded', () => {
    expect(getLexicalDensity({ inputText: exceedWordInputText }))
      .rejects
      .toThrow();

  });
});