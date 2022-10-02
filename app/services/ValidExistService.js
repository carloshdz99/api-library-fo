const { Sequelize, Op } = require("sequelize");

class ValidExistService {
    static async exist(model, column, msg = '', input) {
        const id = await model.findOne({
            where: Sequelize.where(
                Sequelize.fn('unaccent', Sequelize.col(column)), {
                [Op.iLike]: `%${input}%`
            })
        });

        if (id) {
            return true;
        }

        return false;
    }
}

module.exports = ValidExistService;
