import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { throwError } from '@Lib/error';

const checkValidation = (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if(error.array().length) {
        console.log(error.array());
        throwError(res, 'Wrong_Data', '잘못된 데이터 형식입니다.');
    }
    next();
}

export default checkValidation;