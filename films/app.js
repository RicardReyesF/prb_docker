const express = require('express');
const morgan = require('morgan');
const route = require('./src/routes/index')

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use(route);



module.exports = server;