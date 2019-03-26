
const Anime = require('../models/Anime.js')

const animeController = {
    index: async (req, res) => {
        try {
            await Anime.find({})
            res.json(Anime)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const AnimeId = req.params.id
            const Anime = await Anime.findById(AnimeId)
            res.json(Anime)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newAnime = req.body
          const savedAnime = await Anime.create(newAnime)
          res.json(savedAnime)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
          const AnimeId = req.params.id
          const updatedAnime = req.body
          const savedAnime = await Anime.findByIdAndUpdate(AnimeId, updatedAnime, {new: true})
          res.json(savedAnime)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const AnimeId = req.params.id
          const deletedAnime = await Anime.findByIdAndRemove(AnimeId)
          res.json(deletedAnime)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = animeController