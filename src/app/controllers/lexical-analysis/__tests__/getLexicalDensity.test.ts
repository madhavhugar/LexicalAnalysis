import getLexicalDensity from '../getLexicalDensity';
import exceedCharacterInputText from './__stubs__/exceedCharacterInputText';
import exceedWordInputText from './__stubs__/exceedWordInputText';

describe('getLexicalDensity', () => {
  it('should compute lexical density', () => {
    const inputText = 'Kim loves going to  the cinema';
    const got = getLexicalDensity(inputText);
    const wanted = 0.67;
    expect(got).toEqual(wanted);
  });

  it('should throw type error when input text is invalid', () => {
    expect(() => { getLexicalDensity(exceedCharacterInputText); })
      .toThrow();
    expect(() => { getLexicalDensity(exceedWordInputText); })
      .toThrow();
  });
});