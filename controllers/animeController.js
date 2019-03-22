const Anime = require('../models/Anime.js')


const animeController = {
    index: (req, res) => {
       
        res.render('index')
    },
    secret: (req, res) => {
        
    }
}


module.exports = animeController