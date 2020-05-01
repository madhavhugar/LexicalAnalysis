import getOverallLexicalDensityMock from '../getOverallLexicalDensity';
import getLexicalDensity from '../getLexicalDensity';
import exceedCharacterInputText from './__stubs__/exceedCharacterInputText';
import exceedWordInputText from './__stubs__/exceedWordInputText';

describe('getLexicalDensity', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should delegate non-verbose lexical density computation', () => {
    const inputText = 'Kim loves going to  the cinema';
    const got = getLexicalDensity({ inputText });
    const wanted = {
      overallLexicalDensity: 0.67,
    };
    expect(got).toEqual(wanted);
  });

  it('should delegate verbose lexical density computation', () => {
    const inputText = 'Kim loves going. to  the. cinema';
    const verbose = true;
    const got = getLexicalDensity({ inputText, verbose });
    const wanted = {
      overallLexicalDensity: 0.67,
      sentenceLexicalDensity: [1, 0, 1],
    };
    expect(got).toEqual(wanted);
  });

  it('should throw type error when input text is invalid', () => {
    expect(() => { getLexicalDensity({ inputText: exceedCharacterInputText }); })
      .toThrow();
    expect(() => { getLexicalDensity({ inputText: exceedWordInputText }); })
      .toThrow();
  });
});