const Character = require('../data')
const axios = require('axios');

const getCharacters = async (req,res) => {
    const characters = await axios('http://database:7004/Characters')
    return res.status(200).json(characters.data)

}

module.exports = getCharacters