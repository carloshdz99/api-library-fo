require('dotenv').config({
    path: "./.env",
});
const { Sequelize } = require('sequelize');
const { DB_USERNAME, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

class DB {
    static connection(connection = null) {
        return new Sequelize('d9mmkq080bbodk', 'yyfftgmmrurqni', 'f9e907c556904e5394504696faff7b93f58cd7535a2d39f34aeb4057c2848413', {
            host: 'ec2-3-230-122-20.compute-1.amazonaws.com',
            port: 5432,
            dialect: 'postgres',
            logging: false,
        });
    }

    static async testing(connection = null) {
        try {
            await this.connection(connection).authenticate();
            return true;
        } catch (e) {
            return false;
        }
    }
}

module.exports = DB;
