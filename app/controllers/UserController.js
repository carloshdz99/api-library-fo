const UserModel = require('../../models/UserModel');
const HttpCode = require('../../config/httpCode');
const bcryptjs = require('bcryptjs');
const Rols = require('../../models/RolsModel');
const { Routes} = require('../../models/indexModels');

class UserController {
    static async store(req, res) {
        const { firstname, lastname, email, id_rol } = req.body;

        const salt = bcryptjs.genSaltSync();
        const passwordcrypt = bcryptjs.hashSync(id_rol === 1 ? 'librarian' : 'student', salt);

        const usuario = await UserModel.create({
            firstname, lastname, email, password: passwordcrypt, id_rol
        });

        return res.status(HttpCode.Http_Created).json(usuario);
    }

    static async index(req, res) {
        const usuarios = await UserModel.findAll({
            attributes: ['id', 'firstname', 'lastname', 'email']
        });

        return res.status(HttpCode.Http_Ok).json(usuarios);
    }

    static async rols(req, res) {
        const rols = await Rols.findAll();

        return res.status(HttpCode.Http_Ok).json(rols);
    }

    static async routes(req, res) {
        const routes = await Routes.findAll({
            where: {
                id_rol: req.user.id
            },
        });

        return res.status(HttpCode.Http_Ok).json(routes);
    }
}

module.exports = UserController;
