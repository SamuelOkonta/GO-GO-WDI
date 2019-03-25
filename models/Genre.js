const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Genre = new Schema({
    type: String,
    description: String
    
})

module.exports = mongoose.model('Genre', Genre)