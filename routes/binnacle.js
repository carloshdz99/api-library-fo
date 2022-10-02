const { Router } = require('express');
const BinnalceController = require('../app/controllers/BinnacleController');
const Call = require('../app/utils/Call');
const auth = require('../app/middlewares/auth');

const routes = Router();
routes.get('/', [auth], Call(BinnalceController.index));

module.exports = routes;
