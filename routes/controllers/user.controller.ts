import { Router } from 'express';
import registerValidation from '@Middleware/user/register/_validation';
import checkValidation from '@Middleware/common/checkValidation';
import userExistCheck from '@Middleware/user/userExistCheck';
import register from '@Middleware/user/register/register';
import loginValidation from '@Middleware/user/login/_validation';
import passwordEncryption from '@Middleware/user/passwordEncryption';
import login from '@Middleware/user/login/login';
import issueToken from '@Middleware/jwt/issueToken';

const router: Router = Router();

router.post('/register', registerValidation);
router.post('/login', loginValidation);

router.use(checkValidation);

router.post('/register', userExistCheck, passwordEncryption, register);
router.post('/login', userExistCheck, passwordEncryption, login, issueToken);

export default router;