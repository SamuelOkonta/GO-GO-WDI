const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    language: String,
    episodes: Number,
    image: String,
})

const GenreSchema = new Schema({
    genreName: {
        type: String,
        required: true,
        unique: true
    },
    anime : [AnimeSchema]
});




module.exports = {
    AnimeSchema: AnimeSchema,
    GenreSchema: GenreSchema
}