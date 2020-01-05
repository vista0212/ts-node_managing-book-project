import { ValidationChain, body } from 'express-validator';

const BookCommentReportValidation: ValidationChain[] = [
  body('book_pk').isInt(),
  body('comment_pk').isInt(),
  body('content').isString(),
];

export default BookCommentReportValidation;