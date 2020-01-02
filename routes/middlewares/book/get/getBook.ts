import { Request, Response, NextFunction } from 'express';
import Book from '@Model/book.model';
import { Op } from 'sequelize';
import { deleteUndefiend } from '@Lib/deleteUndefined';
import { catchDBError } from '@Lib/error';
import BookComment from '@Model/bookComment.model';

const getBook = async (req: Request, res: Response, next: NextFunction) => {
  const book_pk: Book['pk'] | undefined = req.query.book_pk;
  const category: Book['category'] | undefined = req.query.category;
  const title_keyword: string | undefined = req.query.title_keyword;
  const author_keyword: string | undefined = req.query.author_keyword;
  const translator_keyword: string | undefined = req.query.translator_keyword;

  const whereClause = {
    pk: book_pk,
    category,
    title: title_keyword ? { 
      [Op.iLike] : `%${title_keyword}%` 
    } : undefined,
    author: author_keyword ? {
      [Op.iLike] : `%${author_keyword}%`
    } : undefined,
    translator: translator_keyword ? {
      [Op.iLike] : `%${translator_keyword}%`
    } : undefined,
  };


  deleteUndefiend(whereClause);


  const book: Book[] = await Book.findAll({
    where: whereClause,
    include: [
      {
        model: BookComment,
        as: 'bookComment',
      }
    ]
  }).catch(catchDBError(res));

  res.json({
    success: true,
    data: {
      book: book.map((val: Book) => ({
        pk: val.pk,
        category: val.category,
        title: val.title,
        description: val.description,
        author: val.author,
        translator: val.translator || null,
        createdAt: val.createdAt,
        updatedAt: val.updatedAt,
        comment: val.bookComment.map((val: BookComment) => ({
          pk: val.pk,
          book_pk: val.book_pk,
          user_pk: val.user_pk,
          name: val.name,
          content: val.content,
          createdAt: val.createdAt,
          updatedAt: val.updatedAt,
        })),
      })),
    },
  })
} 

export default getBook;