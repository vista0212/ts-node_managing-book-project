import { Model, DataTypes, HasMany } from 'sequelize';

import { sequelize } from '../index';

import Book from './book.model';
import BookComment from './bookComment.model';
import BookLike from './bookLike.model';

export default class User extends Model<User> {
    public static associations: {
        book: HasMany<User, Book>;
        bookComment: HasMany<User, BookComment>;
        bookLike: HasMany<User, BookLike>;
    };

    public book: Book[];
    public bookComment: BookComment[];
    public bookLike: BookLike[];

    public pk: string;
    public id: string;
    public password: string;
    public passwordKey: string;
    public admin: boolean;
    public name: string;

    public readonly createdAt: Date;
    public readonly updatedAt: Date;
}

User.init({
    pk: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    passwordKey: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'users',
});