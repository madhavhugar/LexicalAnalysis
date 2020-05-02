import mongoose from 'mongoose';
import { connectDB } from '../src/app/utils/db-connect';
import { NonLexicalWordModel } from '../src/app/models/NonLexicalWord';
import nonLexicalWords from '../src/app/models/nonLexicalWords';

connectDB();

const db = mongoose.connection;
db.once('open', () => {
  const uniqueWords = new Set(nonLexicalWords);
  const documents = [...uniqueWords].map(word => ({ value: word }));

  NonLexicalWordModel.create(documents, (err) => {
    if (err) { throw(err); }
    console.log(`Seeded non-lexical words`);
    db.close();
  });
});
