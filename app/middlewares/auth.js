const jwt = require('jsonwebtoken');
const { User } = require('../../models/indexModels');
const HttpCode = require('../../config/httpCode');

const auth = async (req, res, next) => {
    try {
        let { authorization } = req.headers;
        if (!authorization) throw new NoAuthException();

        authorization = authorization.split(' ');
        if (authorization.length < 2) return res.status(HttpCode.Http_Unauthorized).json({ error: 'No autorizado' });

        const token = authorization[1];
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({
            where: {
                id,
            }
        });

        if (!user) return res.status(HttpCode.Http_Unauthorized).json({ error: 'No autorizado' });

        req.user = user;

        next();
    } catch (err) {
        console.log(err);
    }
}

module.exports = auth;
