import { Router } from 'express';

import userController from '@Controller/user.controller';
import bookController from '@Controller/book.controller';
import verifyToken from '@Middleware/jwt/verifyToken';
import getUserFromToken from '@Middleware/jwt/getUserFromToken';

const router: Router = Router();

router.use('/user', userController);

router.use(verifyToken, getUserFromToken);

router.use('/book', bookController);

export default router;