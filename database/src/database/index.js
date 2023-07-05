const mongoose = require('mongoose')
const { MONGO_URI } = require('../config/envs')

const conn = mongoose.createConnection( MONGO_URI );

module.exports = {
Characters: conn.model('Characters', require('./schemas/characterSchema')),
Films : conn.model('Films', require('./schemas/filmsSchema') ),
Planets: conn.model('Planets', require('./schemas/planetsSchema')),
}

