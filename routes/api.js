const { Router } = require('express');
const userRoutes = require('./users');

const routes = Router();
routes.get('/', () => {
    console.log("entro jajaajja");
})

//users
routes.use('/users', userRoutes)

module.exports = routes;
