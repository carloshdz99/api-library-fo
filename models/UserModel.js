const psql = require('sequelize');
const db = require('../app/nucleo/DB');

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
    idRol: {
        field: 'id_rol',
        type: psql.Sequelize.INTEGER,
        references: {
            model: 'lb.rols',
            key: 'id',
        },
        allowNull: false,
    }
};

class User extends psql.Model {

}

User.init(UsersSchema, {
    timestamps: false,
    tableName: 'lb.users',
    sequelize: db.connection(),
})

module.exports = User;
