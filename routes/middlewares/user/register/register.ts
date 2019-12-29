import { Request, Response, NextFunction } from 'express';
import User from '@Model/user.model';
import { catchDBError } from '@Lib/error';

const register = async (req: Request, res: Response, next: NextFunction) => {
    const id: User['id'] = req.body.id;
    const password: User['password'] = req.body.password;
    const name: User['name'] = req.body.name;

    await User.create({
        id,
        password,
        passwordKey: '1',
        name,
    }).catch(catchDBError(res));

    res.json({
        success: true,
    });
}

export default register;