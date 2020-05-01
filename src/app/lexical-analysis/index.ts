import { Request, Response, Router } from 'express';
import { ILexicalComplexityInput } from './interfaces';
import getLexicalDensity from './getLexicalDensity';

export const lexicalRouter = Router();

lexicalRouter.post('/', (req: Request, res: Response) => {
  if (!req.body.input_text) return {};
  const lexicalInput: ILexicalComplexityInput = {
    inputText: req.body.input_text,
    verbose: (req.query.mode === 'verbose'),
  };
  const densities = getLexicalDensity(lexicalInput);
  res.json({
    overall_ld: densities.overallLexicalDensity,
    sentence_ld: densities.sentenceLexicalDensity,
  });
});

