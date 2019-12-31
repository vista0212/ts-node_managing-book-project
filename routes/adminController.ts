import { Router } from 'express';
import postBookValidation from '@Middleware/admin/book/post/_validation';
import checkValidation from '@Middleware/common/checkValidation';
import verifyToken from '@Middleware/jwt/verifyToken';
import getUserFromToken from '@Middleware/jwt/getUserFromToken';
import checkAdmin from '@Middleware/admin/common/checkAdmin';
import postBook from '@Middleware/admin/book/post/postBook';

const router: Router = Router();

router.use(verifyToken, getUserFromToken, checkAdmin);

router.post('/book', postBookValidation);

router.use(checkValidation);

router.post('/book', postBook);

export default router;