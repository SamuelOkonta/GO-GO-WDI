
const express = require('express')
const router = express.Router()
const animeController = require('../controllers/animeController.js')
const genreController = require('../controllers/genreController')


// animeController Routes
router.get('/anime', animeController.index)
router.post('/anime', animeController.create)
router.get('/anime/:animeId', animeController.show)
router.put('/anime/:animeId', animeController.update)
router.delete('/anime/:animeId', animeController.delete)

// genreController


router.get('/genre', genreController.index)
router.post('/genre', genreController.create)
router.get('/genre/:genreId', genreController.show)
router.put('/genre/:genreId', genreController.update)
router.delete('/genre/:genreId', genreController.delete)

module.exports = router