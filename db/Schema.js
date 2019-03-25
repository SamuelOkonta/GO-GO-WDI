const mongoose = require('mongoose');

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const AnimeSchema = new Schema({
    name: {
        genre: String,
        language: String,
        required: true
    },
   
})

const GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

// Create models for each schema
const AnimeModel = mongoose.model('Anime', AnimeSchema)
const GenreModel = mongoose.model('Genre', GenreSchema)

// Export each model so they can be required elsewhere
module.exports = {
    AnimeModel: AnimeModel,
    GenreModel: GenreModel
}