import preProcessTextToWords from '../preProcessTextToWords';

describe('preProcessTextToWords', () => {
  describe('preProcessTextToWords', () => {
    it('should preprocess the input text into list of valid words', () => {
      const inputTest = 'Kim loves going to  the cinema';
      const got = preProcessTextToWords(inputTest);
      const expected = ['kim', 'loves', 'going', 'to', 'the', 'cinema'];
      expect(got).toEqual(expected);
    });

    it('should should not return special characters as words', () => {
      const inputTest = '* loves going to {} the } par&k';
      const got = preProcessTextToWords(inputTest);
      const expected = ['loves', 'going', 'to', 'the', 'park'];
      expect(got).toEqual(expected);
    });
  });
});
