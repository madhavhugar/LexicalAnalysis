import nonLexicalWordsMongoDB from './__stubs__/nonLexicalWordsMongoDB';

export const NonLexicalWordModel = {
  find: jest.fn(() => ({ exec: jest.fn(async () => nonLexicalWordsMongoDB) }))
};
