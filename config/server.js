const express = require('express');
const { createServer } = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsConfig = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

class Server {
    constructor() {
        this.app = express();
        this.server = createServer(this.app);
        this.port = process.env.PORT || 8080;
        this.host = process.env.HOST || 'localhost';
        this.middlewares();
    }

    middlewares() {
        this.app.use(cors(corsConfig));
        this.app.use(express.static('public'));
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json());
    }

    start() {
        this.server.listen(this.port, this.host, () => {
            console.log(`http://localhost:${this.port}`);
        })
    }
}

module.exports = new Server();
