import { Response } from 'express';
import { ErrorTypes } from "@Lib/types";
import Errors from '@Lib/errors'

export const catchDBError = (res: Response) => (error: Error) => {
    
    console.log(error);

    throw res.status(Errors.Database_Error.code).json({
        success: false,
        name: Errors.Database_Error.name,
        code: Errors.Database_Error.code,
        message: '알 수 없는 데이터베이스 에러',
    });
}

export const throwError = (res: Response, name: ErrorTypes, message: string) => {
    throw res.status(Errors[name].code).json({
        success: false,
        name: Errors[name].name,
        code: Errors[name].code,
        message,
    });
}