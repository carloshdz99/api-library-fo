const psql = require('sequelize');
const db = require('../app/nucleo/DB');

// const { Routes, User } = require('./indexModels');

const RolsSchema = {
    id: {
        type: psql.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    }
}

class Rols extends psql.Model {
    // static associate() {
    //     this.hasMany(Routes, {
    //         foreignKey: 'id_rol',
    //         as: 'routes',
    //     });
    //     this.hasMany(User, {
    //         foreignKey: 'id_rol',
    //         as: 'users',
    //     });
    // }
}

Rols.init(RolsSchema, {
    timestamps: false,
    sequelize: db.connection(),
    tableName: 'lb.rols',
});

module.exports = Rols;
