import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const User = sequelize.define('User',
    {
        id:             { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        username:       { type: DataTypes.STRING, allowNull: false, unique: 'idx_unique_username' },
        email:          { type: DataTypes.STRING, allowNull: false, unique: 'idx_unique_email', validate: { isEmail: true } },
        password:       { type: DataTypes.STRING, allowNull: false },
        isAdmin:        { type: DataTypes.BOOLEAN, defaultValue: false },
        isBlocked:      { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
        timestamps: true,
        tableName: 'users',
        indexes: [
            { unique: true, fields: ['username'], name: 'idx_unique_username' },
            { unique: true, fields: ['email'], name: 'idx_unique_email' }
        ]
    }
);

export default User;