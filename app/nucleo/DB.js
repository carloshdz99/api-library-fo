require('dotenv').config({
    path: "./.env",
});
const { Sequelize } = require('sequelize');
const { DB_USERNAME, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

class DB {
    static connection(connection = null) {
        return new Sequelize(DB_DATABASE, DB_USERNAME,DB_PASSWORD, {
            host: DB_HOST,
            port: DB_PORT,
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
