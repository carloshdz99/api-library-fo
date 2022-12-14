const psql = require('sequelize');
const db = require('../app/nucleo/DB');

// const { Rols, Binnacle } = require('./indexModels');

const UsersSchema = {
    id: {
        type: psql.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
    id_rol: {
        type: psql.Sequelize.INTEGER,
        allowNull: false,
    }
};

class User extends psql.Model {
    // static associate() {
    //     this.belongsTo(Rols, {
    //         foreignKey: 'id_rol',
    //         as: 'rol',
    //     });
    //     this.hasMany(Binnacle, {
    //         foreignKey: 'id_user',
    //         as: 'binnacles',
    //     });
    // }
}

User.init(UsersSchema, {
    timestamps: false,
    tableName: 'lb.users',
    sequelize: db.connection(),
})

module.exports = User;
