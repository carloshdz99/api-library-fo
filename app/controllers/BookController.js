const { Op } = require('sequelize');
const { Book, Genre, Binnacle } = require('../../models/indexModels');
const HttpCode = require('../../config/httpCode');

class BookController {
    static async store(req, res) {
        const { title, author, publish_year, genre, stock } = req.body;

        const book = await Book.create({
            title, author, publish_year, genre, stock,
        });

        return res.status(HttpCode.Http_Created).json(book);
    }

    static async index(req, res) {
        const { title, author, genre } = req.query;

        const filtro = {};
        const filtroGenre = {};

        if (genre) {
            filtroGenre.name = {
                [Op.iLike]: `%${genre}%`,
            };
        }

        if (title) {
            filtro.title = {
                [Op.iLike]: `%${title}%`,
            };
        }

        if (author) {
            filtro.author = {
                [Op.iLike]: `%${author}%`,
            };
        }

        const books = await Book.findAll({
            attributes: ['id', 'title', 'author', 'publish_year', 'stock'],
            include: [
                {
                    model: Genre,
                    as: 'genrer',
                    where: filtroGenre,
                }
            ],
            where: filtro,
        });

        return res.status(HttpCode.Http_Ok).json(books);
    }

    static async show(req, res) {
        const book = await Book.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'title', 'author', 'publish_year', 'stock'],
            include: [
                {
                    model: Genre,
                    as: 'genrer'
                }
            ],
        });

        if (!book) return res.status(HttpCode.Http_Not_Found).json({ error: 'No se encontro el libro' });

        return res.status(HttpCode.Http_Ok).json(book);
    }

    static async requestbook(req, res) {
        const { id_book, id_state, id_user } = req.body;
        const { id, id_rol } = req.user;

        const book = await Book.findOne({
            where: { id: id_book },
        });

        if (!book) return res.status(HttpCode.Http_Not_Found).json({ error: 'No se encontro el libro' });

        const binnacleBook = await Binnacle.findOne({
            where: {
                id_book,
                id_user: id_rol === 1 ? id_user : id,
            }
        });

        if (binnacleBook) {
            if (binnacleBook.id_state === id_state) {
                return res.status(HttpCode.Http_Conflict).json({ msg: `El usuario ya ha ${id_state === 1 ? 'solicitado' : 'retornado '} el libro`});
            }

            await book.update({ stock: book.stock + 1 });
            await binnacleBook.update({ returned: true, id_state });
            return res.status(HttpCode.Http_Created).json(binnacleBook);
        }

        await book.update({ stock: book.stock - 1 });
        const binnacle = await Binnacle.create({
            id_book,
            id_user: id,
            id_state,
            returned: false,
        });


        return res.status(HttpCode.Http_Created).json(binnacle);
    }
}

module.exports = BookController;
