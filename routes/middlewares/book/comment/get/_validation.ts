import { ValidationChain, query } from 'express-validator';

const getBookCommentValidation: ValidationChain[] = [
  query('book_pk').isInt(),
];

export default getBookCommentValidation;