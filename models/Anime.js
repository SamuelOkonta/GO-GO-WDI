const mongoose = require('../db/connection.js')
const {AnimeSchema} = require ('../db/Schema') 

    

module.exports = mongoose.model('Anime', AnimeSchema)