const { Genre } = require('../../models/indexModels');
const HttpCode = require('../../config/httpCode');

class GenreController {
    static async index(req, res) {
        const genre = await Genre.findAll({
            attributes: ['id', 'name'],
        });

        return res.status(HttpCode.Http_Ok).json(genre);
    }
}

module.exports = GenreController;
