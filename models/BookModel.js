const psql = require('sequelize');
const db = require('../app/nucleo/DB');

// const { Binnacle, Genre } = require('./indexModels');

const BookSchema = {
    id: {
        type: psql.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
    author: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
    publish_year: {
        type: psql.Sequelize.DATE,
        allowNull: false,
    },
    genre: {
        type: psql.Sequelize.STRING,
        allowNull: false,
    },
    stock: {
        type: psql.Sequelize.INTEGER,
        allowNull: 0,
    },
};

class Book extends psql.Model {
    // static associate() {
    //     this.hasMany(Binnacle, {
    //         foreignKey: 'id_book',
    //         as: 'books',
    //     });
    //     this.belongsTo(Genre, {
    //         foreignKey: 'genre',
    //         as: 'genre',
    //     });
    // }
}

Book.init(BookSchema, {
    timestamps: false,
    sequelize: db.connection(),
    tableName: 'lb.books',
});

module.exports = Book;
