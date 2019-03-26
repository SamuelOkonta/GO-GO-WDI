const Anime = require('../models/Anime.js')
const Genre = require('../models/Genre.js')
  
// using Promises
Anime.deleteMany().then(() => {
    const Inuyasha = new Anime({name: 'Inuyasha', })
    return Inuyasha.save()
  }).then(() => {
    const darth = new Anime({name: 'Darth Vader', })
    return darth.save()
  })

  Genre.deleteMany().then(() => {
    const Inuyasha = new Genre({name: 'Inuyasha', })
    return Inuyasha.save()
  }).then(() => {
    const darth = new Genre({name: 'Darth Vader', })
    return darth.save()
  })
  