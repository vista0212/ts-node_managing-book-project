import { Request, Response, NextFunction } from 'express';
import User from '@Model/user.model';
import Book from '@Model/book.model';

const postBook = async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  const category: Book['category'] = req.body.category;
  const title: Book['title'] = req.body.title;
  const author: Book['author'] = req.body.author;
  const translator: Book['translator'] = req.body.translator || undefined;

  const book = await Book.create({
    user_pk: user.pk,
    category,
    title,
    author,
    translator,
  });

  res.json({
    success: true,
    data: {
      book,
    }
  })
}

export default postBook;