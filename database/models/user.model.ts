import { Model, DataTypes, HasMany } from 'sequelize';

import { sequelize } from '../index';
import Book from './book.model';

export default class User extends Model<User> {
    public static associations: {
        books: HasMany<User, Book>;
    };

    public pk: string;
    public id: string;
    public password: string;
    public passwordKey: string;
    public admin: boolean;
    public name: string;

    public books: Book[];

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