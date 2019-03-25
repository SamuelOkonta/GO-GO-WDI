
const Genre = require('../models/genreController.js')

const GenreController = {
    index: async (req, res) => {
        try {
            const Genres = await Genre.find({})
            res.json(Genres)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const GenreId = req.params.id
            const Genre = await Genre.findById(GenreId)
            res.json(Genre)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newGenre = req.body
          const savedGenre = await Genre.create(newGenre)
          res.json(savedGenre)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
          const GenreId = req.params.id
          const updatedGenre = req.body
          const savedGenre = await Genre.findByIdAndUpdate(GenreId, updatedGenre, {new: true})
          res.json(savedGenre)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const GenreId = req.params.id
          const deletedGenre = await Genre.findByIdAndRemove(GenreId)
          res.json(deletedGenre)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = GenreController