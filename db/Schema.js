const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const AnimeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    language: String,
    episodes: Number,
    genre: [GenreSchema]
    
   
})



module.exports = {
    AnimeSchema: AnimeSchema,
    GenreSchema: GenreSchema
}