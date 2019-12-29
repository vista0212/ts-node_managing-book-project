import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../index';

export default class User extends Model<User> {
    

    public pk: string;
    public id: string;
    public password: string;
    public passwordKey: string;
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
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'users',
});