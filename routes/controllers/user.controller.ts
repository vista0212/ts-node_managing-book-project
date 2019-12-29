import { Router } from 'express';
import registerValidation from '@Middleware/user/register/_validation';
import checkValidation from '@Middleware/common/checkValidation';
import userExistCheck from '@Middleware/user/userExistCheck';
import register from '@Middleware/user/register/register';

const router: Router = Router();

router.post('/register', registerValidation);

router.use(checkValidation);

router.post('/register', userExistCheck, register);

export default router;