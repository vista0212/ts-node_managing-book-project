import { Request, Response, NextFunction } from 'express';
import Book from '@Model/book.model';
import { Op } from 'sequelize';
import { deleteUndefiend } from '@Lib/deleteUndefined';
import { catchDBError } from '@Lib/error';

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
      [Op.iLike] : '%' + title_keyword + '%' 
    } : undefined,
    author: author_keyword ? {
      [Op.iLike] : '%' + author_keyword + '%'
    } : undefined,
    translator: translator_keyword ? {
      [Op.iLike] : '%' + translator_keyword + '%'
    } : undefined,
  };


  deleteUndefiend(whereClause);


  const book: Book[] = await Book.findAll({
    where: whereClause,
  }).catch(catchDBError(res));

  res.json({
    success: true,
    data: {
      book,
    }
  })
} 

export default getBook;