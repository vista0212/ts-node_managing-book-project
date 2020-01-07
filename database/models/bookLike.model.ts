import { Model, DataTypes, BelongsTo } from 'sequelize';

import { sequelize } from '../index';
import User from './user.model';
import Book from './book.model';

export default class BookLike extends Model<BookLike> {
  public static associations: {
    user: BelongsTo<BookLike, User>;
    book: BelongsTo<BookLike, Book>;
  }

  public user: User;
  public book: Book;

  public pk: number;
  public user_pk: string;
  public book_pk: number;
};

BookLike.init({
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
}, {
  sequelize,
  tableName: 'bookLikes',
});