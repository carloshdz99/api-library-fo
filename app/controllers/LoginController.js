const HttpCode = require('../../config/httpCode');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const { User } = require('../../models/indexModels');

class LoginController {
    static async login(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email', 'id_rol', 'password'],
            where: {
                email,
            }
        });

        if (!user) {
            return res.status(HttpCode.Http_Unauthorized).json({ error: 'Credenciales no validas' });
        }

        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(HttpCode.Http_Unauthorized).json({ error: 'Credenciales no validas' });
        }

        const token = await jwt.sign({
            id: user.id,
            email: user.email,
            id_rol: user.id_rol,
        }, process.env.SECRET_KEY, {
            expiresIn: '60m',
        });

        const refreshToken = await jwt.sign({
            id: user.id,
        }, process.env.SECRET_KEY, {
            expiresIn: '240m',
        });

        return res.status(HttpCode.Http_Ok).json({
            token,
            refreshToken,
            firstname: user.firstname,
            lastname: user.lastname, 
            email: user.email,
            rol: user.id_rol,
        });
    }

    static async resfresTokenValid(req, res) {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(HttpCode.Http_Ok).json({
                token: null,
                refreshToken: null,
            });
        }

        const { id, exp } = jwt.verify(refreshToken, process.env.SECRET_KEY);
        const user = await User.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email', 'id_rol'],
            where: {
                id,
            }
        });

        const now = moment().tz('America/El_Salvador').format();
        const nowValue = moment(now).valueOf();

        if (nowValue > (exp * 1000)) {
            return res.status(HttpCode.Http_Ok).json({
                token: null,
                refreshToken: null,
            });
        }

        const token = await jwt.sign({
            id: user.id,
            email: user.email,
            id_rol: user.id_rol,
        }, process.env.SECRET_KEY, {
            expiresIn: '60m',
        });

        const refreshTokenNew = await jwt.sign({
            id: user.id,
        }, process.env.SECRET_KEY, {
            expiresIn: '240m',
        });

        return res.status(HttpCode.Http_Ok).json({
            token,
            refreshToken: refreshTokenNew,
            firstname: user.firstname,
            lastname: user.lastname, 
            email: user.email,
            rol: user.id_rol,
        });
    }
}

module.exports = LoginController;
