import { Request, Response, NextFunction } from 'express';
import Book from '@Model/book.model';
import BookComment from '@Model/bookComment.model';
import { catchDBError, throwError } from '@Lib/error';

const putBookComment = async (req: Request, res: Response, next: NextFunction) => {
  const book_pk: Book['pk'] = req.body.book_pk; 
  const comment_pk: BookComment['pk'] = req.body.comment_pk;
  const content: BookComment['content'] = req.body.content;

  const book: Book = await Book.findOne({
    where: { pk: book_pk, }
  }).catch(catchDBError(res));

  if(!book) {
    throwError(res, 'Wrong_Data', '잘못된 요청 데이터입니다,');
  };

  const comment: BookComment = await BookComment.findOne({
    where: { 
      pk: comment_pk,
      book_pk,
    },
  });

  if(!comment) {
    throwError(res, 'Wrong_Data', '잘못된 요청 데이터입니다.');
  };

  comment.update({ content, });

  res.json({
    success: true,
    data: {
      comment,
    }
  });
};

export default putBookComment;