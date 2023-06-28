const { Router } = require('express');
const server = require('../../app');
const controller = require('../controllers')

const router = Router();

router.get('/planets',controller.getPlanet)


module.exports = router;
