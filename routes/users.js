const { Router } = require('express');
const { store, index } = require('../app/controllers/UserController');
const Call = require('../app/utils/Call');

const routes = Router();
routes.post('/', Call(store));
routes.get('/', Call(index))

module.exports = routes;