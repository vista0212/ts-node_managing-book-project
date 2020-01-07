import { Request, Response, NextFunction } from 'express';
import User from '@Model/user.model';
import Book from '@Model/book.model';
import { catchDBError, throwError } from '@Lib/error';
import BookLike from '@Model/bookLike.model';

const postBookLike = async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  const book_pk: Book['pk'] = req.body.book_pk;

  const book: Book = await Book.findOne({
    where: {
      pk: book_pk,
    },
  }).catch(catchDBError(res));

  if(!book) {
    throwError(res, 'Wrong_Data', '잘못된 요청 데이터');
  };

  await BookLike.findOne({
    where: {
      user_pk: user.pk,
      book_pk
    },
  }).catch(catchDBError(res)) ?
  await BookLike.destroy({
    where: {
      user_pk: user.pk,
      book_pk,
    },
  }) :
  await BookLike.create({
    user_pk: user.pk,
    book_pk,
  });

  res.json({
    success: true,
  });
};

export default postBookLike;