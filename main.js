const Server = require('./config/server');
const routesApi = require('./routes/api');

class Main {
    constructor() {
        this.server = Server;
        this.server.start();
        this.routes();
    }

    routes() {
        this.server.app.use('/api/v1', routesApi);
        this.server.app.use('/*', () => {
            console.log('no se encontro la ruta');
        })
    }
}

module.exports = Main;
