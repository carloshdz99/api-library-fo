const psql = require('sequelize');
const db = require('../app/nucleo/DB');

// const { Book } = require('./indexModels');

const GenreSchema = {
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

class Genre extends psql.Model {
    // static associate() {
    //     this.hasMany(Book, {
    //         foreignKey: 'genre',
    //         as: 'books',
    //     });
    // }
}

Genre.init(GenreSchema, {
    timestamps: false,
    sequelize: db.connection(),
    tableName: 'lb.genres',
});

module.exports = Genre;
