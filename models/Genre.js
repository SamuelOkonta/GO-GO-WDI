const mongoose = require('../db/connection.js')
const {GenreSchema} = require('../db/Schema')


module.exports = mongoose.model('Genre', GenreSchema)