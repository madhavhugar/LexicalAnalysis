import { NonLexicalWordModel, INonLexicalWord } from './NonLexicalWord';
import nonLexicalWords from './nonLexicalWords';

export function getNonLexicalWords(): Promise<string[]> {
  return NonLexicalWordModel
    .find((err, res) => new Promise((resolve, reject) => {
      if (err) {
        return reject;
      }
      return resolve(res);
    }))
    .then((words: INonLexicalWord[]) => {
      return words.map(word => (word.value));
    });
}

export function getNonLexicalWordsFromLocal(): string[] {
  return nonLexicalWords;
}
