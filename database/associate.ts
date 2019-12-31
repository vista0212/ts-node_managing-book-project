import User from "@Model/user.model";
import Book from "@Model/book.model";

User.hasMany(Book, {
  sourceKey: 'pk',
  foreignKey: 'user_pk',
  as: 'book',
});

Book.belongsTo(User, {
  foreignKey: 'user_pk',
  as: 'user',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});