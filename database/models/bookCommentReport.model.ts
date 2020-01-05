import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../index';

export default class BookCommentReport extends Model<BookCommentReport> {

  public pk: number;
  public user_pk: string;
  public book_pk: number;
  public comment_pk: number;
  public content: string;
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