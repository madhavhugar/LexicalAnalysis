import getLexicalDensity from '../getLexicalDensity';
// import largeInputText from './__stubs__/largeInputText';

describe('getLexicalDensity', () => {
  it('should compute lexical density', () => {
    const inputText = 'Kim loves going to  the cinema';
    const got = getLexicalDensity(inputText);
    const wanted = 0.67;
    expect(got).toEqual(wanted);
  });

  it('should throw type error when input text is invalid', () => {
    // TODO: work on failing test case
    // expect(getLexicalDensity(largeInputText)).toThrow(new TypeError('blah'));
  });
});