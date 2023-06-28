const Character = require('../data')

const getCharacters = async (req,res) => {
    const characters = await Character.list()
    res.status(200).json(characters)

}

module.exports = getCharacters