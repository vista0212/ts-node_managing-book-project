import { ValidationChain, query } from 'express-validator';

const deleteBookValidation: ValidationChain[] = [query('book_pk').isInt()];

export default deleteBookValidation;