import { Router } from 'express';

import userController from '@Controller/user.controller';
import bookController from '@Controller/book.controller';
import verifyToken from '@Middleware/jwt/verifyToken';

const router: Router = Router();

router.use('/user', userController);

router.use(verifyToken)

router.use('/book', bookController);


export default router;