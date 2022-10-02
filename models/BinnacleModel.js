const psql = require('sequelize');
const db = require('../app/nucleo/DB');

const BinnacleSchema = {
    id: {
        type: psql.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_book: {
        type: psql.Sequelize.INTEGER,
        allowNull: false,
    },
    id_user: {
        type: psql.Sequelize.INTEGER,
        allowNull: false,
    },
    id_state: {
        type: psql.Sequelize.INTEGER,
        allowNull: false,
    },
    returned: {
        type: psql.Sequelize.BOOLEAN,
    },
}

class Binnacle extends psql.Model {
}

Binnacle.init(BinnacleSchema, {
    timestamps: false,
    sequelize: db.connection(),
    tableName: 'lb.binnacle',
});

module.exports = Binnacle;
