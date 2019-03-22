
const express = require('express')
const router = express.Router()
// const applicationController = require('../controllers/applicationController')
const animeController = require('../controller/animeController.js')
const userController = require('../controllers/userController.js')
const genreController = require('../controllers/genreController')



router.get('/', animeController.index)
router.get('/new', animeController.new)
router.post('/', animeController.create)
router.get('/anime/:animeId', animeController.show)
router.get('/anime/:animeId/edit', animeController.edit)
router.put('/anime/:animeId', animeController.update)
router.delete('/anime/:animeId', animeController.delete)