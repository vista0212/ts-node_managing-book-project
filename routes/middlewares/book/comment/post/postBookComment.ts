import { Request, Response, NextFunction } from 'express';

import BookComment from '@Model/bookComment.model';
import Book from '@Model/book.model';
import { throwError, catchDBError } from '@Lib/error';
import User from '@Model/user.model';

const postBookComment = async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  const book_pk: Book['pk'] = req.body.book_pk;
  const content: BookComment['content'] = req.body.content;

  const book: Book = await Book.findOne({
    where: { pk: book_pk, },
  }).catch(catchDBError(res));

  if(!book) {
    throwError(res, 'Wrong_Data', '잘못된 요청 데이터입니다.');
  }

  const comment: BookComment = await BookComment.create({
    user_pk: user.pk,
    book_pk,
    name: user.name,
    content,
  }).catch(catchDBError(res));

  res.json({
    success: true,
    data: {
      comment,
    },
  });
};

export default postBookComment;