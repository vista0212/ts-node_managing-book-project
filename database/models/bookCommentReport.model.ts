import { Model, DataTypes, BelongsTo } from 'sequelize';

import { sequelize } from '../index';
import User from './user.model';
import Book from './book.model';
import BookComment from './bookComment.model';

export default class BookCommentReport extends Model<BookCommentReport> {
  public static associations: {
    user: BelongsTo<BookCommentReport, User>;
    book: BelongsTo<BookCommentReport, Book>;
    bookComment: BelongsTo<BookCommentReport, BookComment>;
  }

  public user: User;
  public book: Book;
  public bookComment: BookComment;

  public pk: number;
  public user_pk: string;
  public book_pk: number;
  public comment_pk: number;
  public content: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
};

BookCommentReport.init({
  pk: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_pk: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  book_pk: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  comment_pk: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'bookCommentReports',
});