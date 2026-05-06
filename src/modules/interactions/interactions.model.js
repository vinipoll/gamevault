import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const Interaction = sequelize.define('Interaction',
    {
        id:             { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        userId:         { type: DataTypes.INTEGER, allowNull: false, field: 'user_id' },
        gameId:         { type: DataTypes.INTEGER, allowNull: false, field: 'game_id' },
        isFavorite:     { type: DataTypes.BOOLEAN, defaultValue: false, field: 'is_favorite' },
        rating:         { type: DataTypes.INTEGER, validate: { min: 1, max: 5 }, allowNull: true },
        comment:        { type: DataTypes.TEXT, allowNull: true }
    },
    {
        timestamps: true,
        tableName: 'interactions',
        indexes: [
            { fields: ['user_id'] },
            { fields: ['game_id'] }
        ]
    }
);

export default Interaction;