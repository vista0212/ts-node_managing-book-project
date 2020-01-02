import { Request, Response, NextFunction } from 'express';

import Book from '@Model/book.model';
import BookComment from '@Model/bookComment.model';
import { catchDBError } from '@Lib/error';

const getBookComment = async (req: Request, res: Response, next: NextFunction) => {
  const book_pk: Book['pk'] = req.query.book_pk;

  const comment: BookComment[] = await BookComment.findAll({
    where: {
      book_pk,
    },
  }).catch(catchDBError(res));

  res.json({
    success: true,
    data: {
      comment,
    },
  });
}

export default getBookComment;