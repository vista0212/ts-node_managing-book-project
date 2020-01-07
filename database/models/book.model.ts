import { Model, DataTypes, BelongsTo, HasMany } from 'sequelize';

import { sequelize } from '../index';

import User from './user.model';
import BookComment from './bookComment.model';
import BookLike from './bookLike.model';

export default class Book extends Model<Book> {
  public static associations: {
    user: BelongsTo<Book, User>;
    bookComment: HasMany<Book, BookComment>;
    bookLike: HasMany<Book, BookLike>;
  };

  public user: User;
  public bookComment: BookComment[];
  public bookLike: BookLike[];

  public pk: number;
  public user_pk: string;
  public category: string;
  public title: string;
  public description: string;
  public author: string;
  public translator: string | null;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Book.init({
  pk: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: true,
  },
  user_pk: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  translator: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  tableName: 'books',
});