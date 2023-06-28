const Planets = require('../data/index')

const getPlanets = async(req,res) => {
    const planets = await Planets.list()
    res.status(200).json(planets)
}

module.exports = getPlanets;