import { Request, Response, NextFunction } from 'express';

import Book from '@Model/book.model';
import { catchDBError, throwError } from '@Lib/error';

const putBook = async (req: Request, res: Response, next: NextFunction) => {
  const book_pk: Book['pk'] = req.body.book_pk;
  const category: Book['category'] | undefined = req.body.category;
  const title: Book['title'] | undefined = req.body.title;
  const description: Book['description'] | undefined = req.body.description;
  const author: Book['author'] | undefined = req.body.author;
  const translator: Book['translator'] = req.body.translator;

  const book = await Book.findOne({
    where: { pk: book_pk, }
  }).catch(catchDBError(res));

  if(!book) {
    throwError(res, 'Wrong_Data', '잘못된 요청 데이터입니다.');
  };

  await book.update({
    category,
    title,
    description,
    author,
    translator,
  });

  res.json({
    success: true,
    data: {
      book,
    }
  });
};

export default putBook;
