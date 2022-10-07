const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({
    path: "./.env",
});
const routesApi = require('./routes/api');

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', routesApi);

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
