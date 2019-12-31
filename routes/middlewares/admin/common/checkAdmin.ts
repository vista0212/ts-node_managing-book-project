import { Request, Response, NextFunction } from 'express';
import User from '@Model/user.model';
import { throwError } from '@Lib/error';

const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;

  if(!user.admin) {
    throwError(res, 'Forbidden', '권한이 없습니다.');
  }

  next();
}

export default checkAdmin;