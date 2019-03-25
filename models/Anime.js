const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Anime = new Schema({
    name: String,
    genre: String,
    rating: Number,
    release: Number,
    plot: String

    
})

module.exports = mongoose.model('Anime', Anime)