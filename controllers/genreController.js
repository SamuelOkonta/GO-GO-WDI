const Genre = require('../models/Genre')

const GenreController = {
    index: async (req, res) => {
        try {
            const GenreAll = await Genre.find({})
            res.json(GenreAll)
        } catch (err) {
            console.log(err)
        }
    },
show: (req, res) => {
  Genre.findById(req.params.genreId).then(genre => {
    res.json(genre)
  })
},
    // create: async (req, res) => {
    //     try {
    //       const newGenre = req.body
    //       const savedGenre = await Genre.create(newGenre)
    //       res.json(savedGenre)
    //     } catch (err) {
    //       console.log(err)
    //       res.status(500).json(err)
    //     }
    // },
    create: (req, res) => {
const newGenre = new Genre(req.body.genre)
console.log(newGenre)
newGenre.save()
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