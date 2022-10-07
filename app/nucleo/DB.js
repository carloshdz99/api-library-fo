require('dotenv').config({
    path: "./.env",
});
const { Sequelize } = require('sequelize');
const { DB_USERNAME, DB_HOST, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

class DB {
    static connection(connection = null) {
        return new Sequelize('d81t0te26ppaec', 'pcrvhnvvgjjuhu', '8a62fe1820d2d7980ce4e5ab97fc6151fb53203e7c26fb8a012b6f4382617cd3', {
            host: 'ec2-34-194-73-236.compute-1.amazonaws.com',
            port: 5432,
            dialect: 'postgres',
            logging: false,
            dialectOptions: {
                ssl: {
                    require: true, // This will help you. But you will see nwe error
                    rejectUnauthorized: false // This line will fix new error
                },
            },
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
