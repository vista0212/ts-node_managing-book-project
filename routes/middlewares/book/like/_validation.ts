import { ValidationChain, body } from 'express-validator';

const postBookLikeValidation: ValidationChain[] = [
  body('book_pk').isInt()
];

export default postBookLikeValidation;