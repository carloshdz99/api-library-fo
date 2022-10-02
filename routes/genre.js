const { Router } = require('express');
const GenreController = require('../app/controllers/GenreController');
const Call = require('../app/utils/Call');

const routes = Router();
routes.get('/', Call(GenreController.index));

module.exports = routes;
