import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import User from '@Model/user.model';
import { throwError } from '@Lib/error';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token: string | string[] = req.headers.access_token;
    const secretKey: string = process.env.ACCESS_TOKEN_SECRET;

    try {
    const decodedToken = await jwt.verify(token as string, secretKey);

    res.locals.user = decodedToken;

    next();
    } catch (error) {
        switch (error.name) {
            case 'TokenExpiredError':
                throwError(res, 'Token_Expired', '토큰이 만료되었습니다.');
                break;
            case 'JsonWebTokenError':
                throwError(res, 'Wrong_Data', '잘못된 요청입니다.');
            default:
                throwError(res, 'Unhandled_Error', '알 수 없는 오류입니다.');
        }
    }
}

export default verifyToken;