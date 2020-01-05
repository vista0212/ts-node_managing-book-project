import { Request, Response, NextFunction } from 'express';
import Book from '@Model/book.model';
import BookComment from '@Model/bookComment.model';
import { throwError, catchDBError } from '@Lib/error';
import BookCommentReport from '@Model/bookCommentReport.model';
import User from '@Model/user.model';

const bookCommentReport = async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  const book_pk: Book['pk'] = req.body.book_pk;
  const comment_pk: BookComment['pk'] = req.body.comment_pk;
  const content: BookCommentReport['content'] = req.body.content;

  const comment = await BookComment.findOne({
    where: {
      pk: comment_pk,
      book_pk,
    },
  });

  if(!comment) {
    throwError(res, 'Wrong_Data', '잘못된 요청 데이터입니다.');
  };

  const result: BookCommentReport = await BookCommentReport.create({
    user_pk: user.pk,
    book_pk,
    comment_pk,
    content,
  }).catch(catchDBError(res));

  res.json({
    success: true,
    data: {
      result,
    }
  })
};

export default bookCommentReport;
