import { ValidationChain, body } from 'express-validator';
import { id, password, name } from '@Lib/regexp.json';

const registerValidation: ValidationChain[] = [
    body('id').isString().matches(id),
    body('password').isString().matches(password),
    body('name').isString().matches(name)
];

export default registerValidation;