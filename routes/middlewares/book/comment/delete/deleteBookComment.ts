import { Request, Response, NextFunction } from 'express';
import Book from '@Model/book.model';
import BookComment from '@Model/bookComment.model';
import { catchDBError, throwError } from '@Lib/error';
import User from '@Model/user.model';

const deleteBookCommnet = async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  const book_pk: Book['pk'] = req.query.book_pk;
  const comment_pk: BookComment['pk'] = req.query.book_pk;

  const book: Book = await Book.findOne({
    where: { pk: book_pk }
  }).catch(catchDBError(res));

  if(!book) {
    throwError(res, 'Wrong_Data', '잘못된 요청 데이터입니다.');
  }

  const comment: BookComment = await BookComment.findOne({
    where: { pk: comment_pk },
  }).catch(catchDBError(res));

  if(!comment) {
    throwError(res, 'Wrong_Data', '잘못된 요청 데이터입니다.');
  }

  if(comment.user_pk !== user.pk) {
    throwError(res, 'Forbidden', '권한이 없습니다.');
  }

  comment.destroy();

  res.json({
    success: true,
  });
};

export default deleteBookCommnet;