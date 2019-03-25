const User = require('../models/User.js')


const userController = {
    index: (req, res) => {
       
        res.render('index')
    },
    secret: (req, res) => {
        
    }
}


module.exports = userController