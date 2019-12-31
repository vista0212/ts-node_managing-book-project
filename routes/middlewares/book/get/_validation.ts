import { ValidationChain, query } from 'express-validator';

const getBookValidation: ValidationChain[] = [
  query('book_pk').isInt().optional(),
  query('category').isString().custom((val => val === '총류' || '철학' || '종교' || '사회과학' || '순수과학' || '기술과학' || '예술' || '언어' || '문학' || '역사')).optional(),
  query('title_keyword').isString().optional(),
  query('author_keyword').isString().optional(),
  query('translator_keyword').isString().optional(),
]

export default getBookValidation;