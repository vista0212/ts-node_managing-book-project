import { Request, Response, NextFunction } from 'express';
import User from '@Model/user.model';
import { catchDBError, throwError } from '@Lib/error';

const userExistCheck = async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.body.id;

    const user: User = await User.findOne({
        where: {
            id,
        }
    }).catch(catchDBError(res));
    
    if(req.url == '/register') {
        if(user) {
            throwError(res, 'Exist_Data', '존재하는 아이디입니다.');
        }
        next();
    }
    
    if(req.url == '/login') {
        if(!user) {
            throwError(res, 'Wrong_Data', '잘못된 아이디 혹은 비밀번호입니다.');
        }
        res.locals.user = user;
        next();
    }
}

export default userExistCheck;