const { Router } = require('express');
const LoginController = require('../app/controllers/LoginController');
const Call = require('../app/utils/Call');

const routes = Router();
routes.post('/login', Call(LoginController.login))
routes.post('/refresh', Call(LoginController.resfresTokenValid))

module.exports = routes;
