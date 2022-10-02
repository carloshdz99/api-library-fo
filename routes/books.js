const { Router } = require('express');
const BooksController = require('../app/controllers/BookController');
const Call = require('../app/utils/Call');
const auth = require('../app/middlewares/auth');

const routes = Router();
routes.post('/request', [auth], Call(BooksController.requestbook));
routes.post('/', Call(BooksController.store));
routes.get('/', [auth], Call(BooksController.index));
routes.get('/:id', Call(BooksController.show));

module.exports = routes;
