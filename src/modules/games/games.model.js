import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const Game = sequelize.define('Game',
    {
        id:             { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title:          { type: DataTypes.STRING, allowNull: false },
        description:    { type: DataTypes.TEXT, allowNull: true },
        genre:          { type: DataTypes.STRING, allowNull: false },
        releaseDate:    { type: DataTypes.DATEONLY, allowNull: true, field: 'release_date' },
        coverImage:     { type: DataTypes.STRING, defaultValue: 'default-game.png', field: 'cover_image' },
        developer:      { type: DataTypes.STRING, allowNull: true }
    },
    {
        timestamps: true,
        tableName: 'games'
    }
);

export default Game;