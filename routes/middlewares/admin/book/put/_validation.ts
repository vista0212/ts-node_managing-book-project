import { ValidationChain, body } from 'express-validator';

const putBookValidation: ValidationChain[] = [
  body('book_pk').isInt(),
  body('category').isString().optional(),
  body('title').isString().optional(),
  body('description').isString().optional(),
  body('author').isString().optional(),
  body('translator').isString().optional(),
];

export default putBookValidation;
