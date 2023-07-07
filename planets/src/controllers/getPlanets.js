const Planets = require('../data/index')
const axios = require('axios')

const getPlanets = async(req,res) => {
    const planets = await axios('http://database:7004/Planets')
    res.status(200).json(planets.data)
}

module.exports = getPlanets;