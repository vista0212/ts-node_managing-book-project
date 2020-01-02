import { Model, DataTypes, BelongsTo } from 'sequelize';

import { sequelize } from '../index';

import User from './user.model';
import Book from './book.model';

export default class BookComment extends Model<BookComment> {
  public static associations: {
    book: BelongsTo<BookComment, Book>;
    user: BelongsTo<BookComment, User>;
  }

  public user: User;
  public book: Book;

  public pk: number;
  public book_pk: Book['pk'];
  public user_pk: User['pk'];
  public name: User['name'];
  public content: string;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

BookComment.init({
  pk: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  book_pk: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  user_pk: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'bookComments',
});