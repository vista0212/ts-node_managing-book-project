import { ValidationChain, query } from 'express-validator';

const deleteBookCommentValidation: ValidationChain[] = [
  query('book_pk').isInt(),
  query('comment_pk').isInt(),
];

export default deleteBookCommentValidation;