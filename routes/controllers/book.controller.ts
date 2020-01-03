import { Router } from 'express';
import getBookValidation from '@Middleware/book/get/_validation';
import checkValidation from '@Middleware/common/checkValidation';
import getBook from '@Middleware/book/get/getBook';
import getBookCommentValidation from '@Middleware/book/comment/get/_validation';
import getBookComment from '@Middleware/book/comment/get/getBookComment';
import postBookCommentValidation from '@Middleware/book/comment/post/_validation';
import postBookComment from '@Middleware/book/comment/post/postBookComment';
import deleteBookCommentValidation from '@Middleware/book/comment/delete/_validation';
import deleteBookCommnet from '@Middleware/book/comment/delete/deleteBookComment';
import putBookCommentValidation from '@Middleware/book/comment/put/_validation';
import putBookComment from '@Middleware/book/comment/put/putBookComment';

const router: Router = Router();

router.get('/', getBookValidation);
router.get('/comment', getBookCommentValidation);
router.post('/comment', postBookCommentValidation);
router.put('/comment', putBookCommentValidation);
router.delete('/comment', deleteBookCommentValidation);

router.use(checkValidation);

router.get('/', getBook);
router.get('/comment', getBookComment);
router.post('/comment', postBookComment);
router.put('/comment', putBookComment);
router.delete('/comment', deleteBookCommnet);

export default router;