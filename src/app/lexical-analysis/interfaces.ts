export interface ILexicalComplexityInput {
  inputText: string;
  verbose?: boolean;
}

export interface ILexicalComplexityOutput {
  overallLexicalDensity: number;
  sentenceLexicalDensity?: number[];
}
