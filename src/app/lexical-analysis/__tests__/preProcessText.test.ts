import {
  preProcessTextToWords,
  preProcessTextToSentences } from '../preProcessText';

describe('preProcessText', () => {
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

  describe('preProcessTextToSentences', () => {
    it('should preprocess the input text into list of valid words', () => {
      let inputTest = 'Kim loves going to  the cinema. There she goes. Calling my name';
      let got = preProcessTextToSentences(inputTest);
      let expected = ['kim loves going to  the cinema', ' there she goes', ' calling my name'];
      expect(got).toEqual(expected);

      inputTest = 'Kim loves going to the cinema.jhghj.hh.';
      got = preProcessTextToSentences(inputTest);
      expected = ['kim loves going to the cinema', 'jhghj', 'hh'];
      expect(got).toEqual(expected);
    });

    it('should should not return special characters as words', () => {
      const inputTest = '* loves going to {} the } par&k. . There she goes. Calling my name';
      const got = preProcessTextToSentences(inputTest);
      const expected = [' loves going to  the  park', ' there she goes', ' calling my name'];
      expect(got).toEqual(expected);
    });
  });
});
