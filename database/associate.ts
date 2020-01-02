import User from "@Model/user.model";
import Book from "@Model/book.model";
import BookComment from "@Model/bookComment.model";

import { Sequelize } from "sequelize/types";

export const associate = () => {
  User.hasMany(Book, {
    sourceKey: 'pk',
    foreignKey: 'user_pk',
    as: 'book',
  });

  User.hasMany(BookComment, {
    sourceKey: 'pk',
    foreignKey: 'user_pk',
    as: 'bookComment',
  });

  Book.hasMany(BookComment, {
    sourceKey: 'pk',
    foreignKey: 'book_pk',
    as: 'bookComment',
  });

  Book.belongsTo(User, {
    foreignKey: 'user_pk',
    as: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  BookComment.belongsTo(Book, {
    foreignKey: 'book_pk',
    as: 'book',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  BookComment.belongsTo(User, {
    foreignKey: 'user_pk',
    as: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
}