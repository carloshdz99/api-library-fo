const UserModel = require('../../models/UserModel');

const store = async (req, res) => {
    const usuario = await UserModel.create(req.body);

    return res.status(201).json(usuario);
}

const index = async (req, res) => {
    const usuarios = await UserModel.findAll({
        attributes: ['id', 'firstname', 'lastname', 'email']
    });

    return res.status(200).json(usuarios);
}

module.exports = {
    store,
    index,
};
