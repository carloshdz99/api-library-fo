const psql = require('sequelize');
const db = require('../app/nucleo/DB');

// const { Binnacle } = require('./indexModels');

const StatesSchema = {
    id: {
        type: psql.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
}

class States extends psql.Model {
    // static associate() {
    //     this.hasMany(Binnacle, {
    //         foreignKey: 'id_state',
    //         as: 'binnacles',
    //     });
    // }
}

States.init(StatesSchema, {
    timestamps: false,
    sequelize: db.connection(),
    tableName: 'lb.states',
});

module.exports = States;
