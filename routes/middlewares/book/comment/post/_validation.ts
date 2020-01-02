import { ValidationChain, body } from 'express-validator';

const postBookCommentValidation: ValidationChain[] = [
  body('book_pk').isInt(),
  body('content').isString(),
];

export default postBookCommentValidation;