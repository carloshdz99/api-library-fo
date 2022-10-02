const { Router } = require('express');
const UserController = require('../app/controllers/UserController');
const Call = require('../app/utils/Call');
const auth = require('../app/middlewares/auth');

const routes = Router();
routes.post('/', Call(UserController.store));
routes.get('/rols', Call(UserController.rols))
routes.get('/routes', [auth], Call(UserController.routes));
routes.get('/', Call(UserController.index));

module.exports = routes;