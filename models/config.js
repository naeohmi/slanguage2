const axios = require('axios');
const promise = require('bluebird');
const options = { promiseLib: promise };
const pgp = require('pg-promise')(options)
const connectionString = 'postgres://naeohmi@localhost:5432/slanguage2';
const db = pgp(process.env.DATABASE_URL || connectionString);

module.exports = {
    db: db,
    axios: axios,
}