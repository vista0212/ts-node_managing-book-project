import { Request, Response, NextFunction } from 'express';
import User from '@Model/user.model';
import Book from '@Model/book.model';
import { catchDBError } from '@Lib/error';

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  const book_pk: Book['pk'] = req.query.book_pk;

  await Book.destroy({
    where: {
      pk: book_pk,
    }
  }).catch(catchDBError(res));

  res.json({
    success: true,
  });
};

export default deleteBook;