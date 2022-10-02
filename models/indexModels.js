const Book = require('./BookModel');
const Binnacle = require('./BinnacleModel');
const Genre = require('./GenresModel');
const Rols = require('./RolsModel');
const Routes = require('./RoutesModel');
const States = require('./StatesModel');
const User = require('./UserModel');

// book
Book.hasMany(Binnacle, {
    foreignKey: 'id_book',
    as: 'books',
});
Book.belongsTo(Genre, {
    foreignKey: 'genre',
    as: 'genrer',
});

// binnacle
Binnacle.belongsTo(Book, {
    foreignKey: 'id_book',
    as: 'book',
});
Binnacle.belongsTo(States, {
    foreignKey: 'id_state',
    as: 'state',
});
Binnacle.belongsTo(User, {
    foreignKey: 'id_user',
    as: 'user',
});


// user
User.belongsTo(Rols, {
    foreignKey: 'id_rol',
    as: 'rol',
});
User.hasMany(Binnacle, {
    foreignKey: 'id_user',
    as: 'binnacles',
});

// genre
Genre.hasMany(Book, {
    foreignKey: 'genre',
    as: 'books',
});

// rols
Rols.hasMany(Routes, {
    foreignKey: 'id_rol',
    as: 'routes',
});
Rols.hasMany(User, {
    foreignKey: 'id_rol',
    as: 'users',
});

// routes
Routes.belongsTo(Rols, {
    foreignKey: 'id_rol',
    as: 'rol',
});

// states
States.hasMany(Binnacle, {
    foreignKey: 'id_state',
    as: 'binnacles',
});

// users

// Genre.associate();
// Rols.associate();
//Routes.associate();
// States.associate();
//User.associate();

module.exports = {
    Book,
    Binnacle,
    Genre,
    Rols,
    Routes,
    States,
    User,
}
