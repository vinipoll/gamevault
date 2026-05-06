import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const AdminLog = sequelize.define('AdminLog',
    {
        id:             { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        adminId:        { type: DataTypes.INTEGER, allowNull: false, field: 'admin_id' },
        action:         { type: DataTypes.STRING, allowNull: false }, // Ex: "DELETE_GAME", "BLOCK_USER"
        targetId:       { type: DataTypes.INTEGER, allowNull: true, field: 'target_id' },
        details:        { type: DataTypes.TEXT, allowNull: true }
    },
    {
        timestamps: true,
        tableName: 'admin_logs'
    }
);

export default AdminLog;