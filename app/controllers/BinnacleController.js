const { Book, Genre, Binnacle, User } = require('../../models/indexModels');
const HttpCode = require('../../config/httpCode');

class BinnalceController {
    static async index(req, res) {
        const { returned } = req.query;
        const { id, id_rol } = req.user;

        const filter = { returned }

        if (id_rol === 2) {
            filter.id_user = id;
        }


        const binnacles = await Binnacle.findAll({
            include: [
                {
                    model: Book,
                    as: 'book',
                    include: [
                        {
                            model: Genre,
                            as: 'genrer'
                        }
                    ]
                },
                {
                    model: User,
                    as: 'user',
                    attributes: ['id', 'firstname', 'lastname', 'email'],
                },
            ],
            where: filter,
        });

        return res.status(HttpCode.Http_Ok).json(binnacles);
    }
}

module.exports = BinnalceController;
