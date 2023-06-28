const Films = require('../data')

const getFilms = async (req,res) => {
    const films = await Films.list();
    res.status(200).json(films);
}

module.exports = getFilms;