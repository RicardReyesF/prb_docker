const Films = require('../data')
const axios = require('axios')

const getFilms = async (req,res) => {
    const films = await axios('http://database:7004/Films');
    res.status(200).json(films.data);
}

module.exports = getFilms;