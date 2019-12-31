import { Request, Response, NextFunction } from 'express';
import User from '@Model/user.model';
import { catchDBError, throwError } from '@Lib/error';

const getUserFromToken = async (req: Request, res: Response, next: NextFunction) => {
  const user_pk: string = res.locals.user.pk;

  const user: User = await User.findOne({
    where: {
      pk: user_pk,
    }
  }).catch(catchDBError(res));

  if(!user) {
    throwError(res, 'Not_Found', '존재하지 않는 유저입니다.');
  }

  res.locals.user = user;

  next();
};

export default getUserFromToken;