const { Router } = require('express');
const userRoutes = require('./users');
const bookRoutes = require('./books');
const authRoutes = require('./login');
const binnacleRoutes = require('./binnacle');
const genreRoutes = require('./genre');

const routes = Router();
routes.get('/', () => {
    console.log("entro jajaajja");
})

//users
routes.use('/users', userRoutes)
//books
routes.use('/books', bookRoutes);
//auth
routes.use('/auth', authRoutes);
// binnacle
routes.use('/binnacle', binnacleRoutes);
// genre
routes.use('/genre', genreRoutes);

module.exports = routes;
