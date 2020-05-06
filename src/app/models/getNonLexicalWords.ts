import { NonLexicalWordModel } from './NonLexicalWord';
import nonLexicalWords from './nonLexicalWords';

export function getNonLexicalWords(): Promise<String[]> {
  return NonLexicalWordModel
    .find()
    .exec()
    .then(words => words.map(word => (word.value)));
}

export function getNonLexicalWordsFromLocal(): string[] {
  return nonLexicalWords;
}
