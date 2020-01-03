import { ValidationChain, body } from 'express-validator';

const putBookCommentValidation: ValidationChain[] = [
  body('book_pk').isInt(),
  body('comment_pk').isInt(),
  body('content').isString(),
];

export default putBookCommentValidation;