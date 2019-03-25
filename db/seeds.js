const Anime = require('../models/Anime.js')
const Genre = require('../models/Genre.js')
  
// using Promises
Anime.deleteMany().then(() => {
    const luke = new Anime({name: 'Inuyasha', })
    return luke.save()
  }).then(() => {
    const darth = new Anime({name: 'Darth Vader', })
    return darth.save()
  })