const { Schema } = require('mongoose');

const Films = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters: [{type: String, ref: "Characters"}],
    planets: [{type: String, ref: "Planets"}]
})


Films.statics.list = async function () {
    return await this.find().populate('characters',['_id','name']).populate('planets',['_id','name']);
};

Films.statics.get = async function (id) {
    return await this.findById(id).populate('characters',['_id','name']).populate('planets',['_id','name']);
};

Films.statics.insert = async function(film) {
    return await this.create(film)
}




module.exports = Films

