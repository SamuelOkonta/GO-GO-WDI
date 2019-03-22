const Genre = require('../models/Genre.js')


const genreController = {
    index: (req, res) => {
       
        res.render('index')
    },
    secret: (req, res) => {
        
    }
}


module.exports = genreController