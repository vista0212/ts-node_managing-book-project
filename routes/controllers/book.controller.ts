import { Router } from 'express';
import getBookValidation from '@Middleware/book/get/_validation';
import checkValidation from '@Middleware/common/checkValidation';
import getBook from '@Middleware/book/get/getBook';

const router: Router = Router();

router.get('/', getBookValidation)

router.use(checkValidation)

router.get('/', getBook);

export default router;