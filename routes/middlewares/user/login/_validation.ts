import { ValidationChain, body } from 'express-validator';

const loginValidation: ValidationChain[] = [
    body('id').isString(),
    body('password').isString(),
]

export default loginValidation;