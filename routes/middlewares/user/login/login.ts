import { Request, Response, NextFunction } from 'express';
import User from '@Model/user.model';
import { throwError } from '@Lib/error';

const login = (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  const password = res.locals.temp.password;

  if(user.password !== password) {
    throwError(res, 'Wrong_Data', '아이디 혹은 비밀번호가 불일치합니다.');
  }

  res.locals.user = {
    pk: user.pk,
    id: user.id,
    name: user.name,
    admin: user.admin,
    password,
    passwordKey: res.locals.temp.passwordKey,
  };

  next();
}

export default login;