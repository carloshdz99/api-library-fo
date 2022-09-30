require('dotenv').config({
  path: "./.env",
});

const { DB_USERNAME, DB_HOST, DB_PASSWORD, DB_DATABASE } = process.env;

const config = {
  "development": {
    "username": DB_USERNAME || "postgres",
    "password": DB_PASSWORD || "123456",
    "database": DB_DATABASE || "library",
    "host": DB_HOST || "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME || "postgres",
    "password": DB_PASSWORD || "123456",
    "database": DB_DATABASE || "library",
    "host": DB_HOST || "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME || "postgres",
    "password": DB_PASSWORD || "123456",
    "database": DB_DATABASE || "library",
    "host": DB_HOST || "localhost",
    "dialect": "postgres"
  }
};

module.exports = config;
