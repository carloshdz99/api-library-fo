const psql = require('sequelize');
const db = require('../app/nucleo/DB');

//const { Rols } = require('./indexModels');

const RoutesSchema = {
    id: {
        type: psql.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
    route: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
    id_rol: {
        type: psql.Sequelize.INTEGER,
        allowNull: false,
    }
}

class Routes extends psql.Model {
    // static associate() {
    //     this.belongsTo(Rols, {
    //         foreignKey: 'id_rol',
    //         as: 'rol',
    //     });
    // }
}

Routes.init(RoutesSchema, {
    timestamps: false,
    sequelize: db.connection(),
    tableName: 'lb.routes',
});

module.exports = Routes;
