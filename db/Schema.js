const mongoose = require('mongoose');

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
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
    // genres: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'GenreSchema'
    // }]
   
})


// Export each model so they can be required elsewhere
module.exports = {
    AnimeSchema: AnimeSchema,
    GenreSchema: GenreSchema
}