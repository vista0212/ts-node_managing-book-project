import { Request, Response, NextFunction } from 'express';
import User from '@Model/user.model';
import { catchDBError } from '@Lib/error';

const register = async (req: Request, res: Response, next: NextFunction) => {
    const id: User['id'] = req.body.id;
    const password: User['password'] = res.locals.temp.password;
    const name: User['name'] = req.body.name;
    const passwordKey: User['passwordKey'] = res.locals.temp.passwordKey;

    await User.create({
        id,
        password,
        passwordKey,
        name,
    }).catch(catchDBError(res));

    res.json({
        success: true,
    });
}

export default register;