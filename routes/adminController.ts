import { Router } from 'express';

import postBookValidation from '@Middleware/admin/book/post/_validation';
import deleteBookValidation from '@Middleware/admin/book/delete/_validation';
import checkValidation from '@Middleware/common/checkValidation';

import verifyToken from '@Middleware/jwt/verifyToken';
import getUserFromToken from '@Middleware/jwt/getUserFromToken';
import checkAdmin from '@Middleware/admin/common/checkAdmin';

import postBook from '@Middleware/admin/book/post/postBook';
import deleteBook from '@Middleware/admin/book/delete/deleteBook';

const router: Router = Router();

router.use(verifyToken, getUserFromToken, checkAdmin);

router.post('/book', postBookValidation);
router.delete('/book', deleteBookValidation);

router.use(checkValidation);

router.post('/book', postBook);
router.delete('/book', deleteBook);

export default router;