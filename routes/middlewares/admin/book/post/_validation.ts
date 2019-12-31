import { ValidationChain, body } from 'express-validator';

const postBookValidation: ValidationChain[] = [
  body('category').isString().custom((val => ['총류', '철학' , '종류' , '사회과학' , '순수과학' , '기술과학' , '예술' , '언어' , '문학' , '역사'].includes(val))),
  body('title').isString(),
  body('author').isString(),
  body('translator').isString().optional(),
];

export default postBookValidation;