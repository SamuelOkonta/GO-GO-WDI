const Anime = require('../models/Anime.js')
const Genre = require('../models/Genre.js')
require('dotenv').config()
const mongoose = require('mongoose')

if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
} else {
    mongoose.connect('mongodb://localhost/idea-board')
}

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ', err)
    process.exit(-1)
})

mongoose.connection.once('open', () => {
    console.log("Mongoose has connected to MongoDB")
})

// using Promises
 const genre1 = new Genre({
     name: 'Action'
 })
const genre2 = new Genre ({
    name: 'Mecha'
})
const genre3 = new Genre ({
    name: 'Adventure'
})
const genre4 = new Genre ({
    name: 'Drama'
})
const genre5 = new Genre ({
    name: 'Science Fiction'
})
const genre6 = new Genre ({
    name: "Shounen"
})
const genre7 = new Genre ({
    name: 'Fantasy'
})
const genre8 = new Anime ({
    name: 'Romance'
})

const slime = new Anime ({
    name: 'That Time I Got Reincarnated as a Slime',
    language: 'Japanese',
    episodes: 24,
    genre: [genre7]
})

const gundam = new Anime ({
    name: 'Mobile Suit GUNDAM Iron Blooded Orphans',
    language: 'Japanese',
    episodes: 50,
    genre: [genre2]
})

const darling = new Anime ({
    name: 'DARLING in the FRANXX',
    language: 'Japanese',
    episodes: 24,
    genre: [genre8]
})

const titan = new Anime ({
    name: 'Attack on Titan',
    language: 'Japanese',
    episodes: 49,
    genre: [genre1]
})

const chaika = new Anime ({
    name: 'Chaika -The Coffin Princess',
    language: 'Japanese',
    episodes: 22,
    genre: [genre3]
})

const count = new Anime ({
    name: 'Gankutsuou',
    language: 'Japanese',
    episodes: 24,
    genre: [genre5]
})

const kobe = new Anime ({
    name: 'Slam Dunk',
    language: 'Japanese',
    episodes: 101,
    genre: [genre4]
})

const dio = new Anime ({
    name: 'JoJo\'s Bizarre Adventure',
    language: 'Japanese',
    episodes: 135,
    genre: [genre6]
})




Anime.deleteMany()
.then(() => slime.save())
.then(() => gundam.save())
.then(() => darling.save())
.then(() => titan.save())
.then(() => chaika.save())
.then(() => count.save())
.then(() => kobe.save())
.then(() => dio.save())


    