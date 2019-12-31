import { Model, DataTypes, BelongsTo } from 'sequelize';
import { sequelize } from '../index';
import User from './user.model';

export default class Book extends Model<Book> {
  public static associations: {
    user: BelongsTo<Book, User>;
  };

  public pk: number;
  public user_pk: string;
  public category: string;
  public title: string;
  public author: string;
  public translator: string | null;

  public user: User;

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
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
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