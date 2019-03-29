const Anime = require('../models/Anime.js')
const Genre = require('../models/Genre.js')


const slime = new Anime ({
    name: 'That Time I Got Reincarnated as a Slime',
    language: 'Japanese',
    episodes: 24,
    image: 'https://img1.ak.crunchyroll.com/i/spire4/15a59c8efa8ea6cccb53fff530c2f1921548272848_full.jpg'
     
})


const gundam = new Anime ({
    name: 'MOBILE SUIT GUNDAM 00',
    language: 'Japanese',
    episodes: 50,
    image: 'https://img1.ak.crunchyroll.com/i/spire1/07074b150c56e91b313f93b8b246c0451489010084_full.jpg'
})

const darling = new Anime ({
    name: 'DARLING in the FRANXX',
    language: 'Japanese',
    episodes: 24,
    image: 'https://img1.ak.crunchyroll.com/i/spire4/e8e3c09f8450c3d8a90a03e2198688f61515484130_full.jpg'
})

const titan = new Anime ({
    name: 'Attack on Titan',
    language: 'Japanese',
    episodes: 49,
    image: 'https://img1.ak.crunchyroll.com/i/spire1/78916dd5588a8ff3cd244e5deca7aa781532559376_full.jpg'
})

const chaika = new Anime ({
    name: 'Chaika -The Coffin Princess',
    language: 'Japanese',
    episodes: 22,
    image: 'https://img1.ak.crunchyroll.com/i/spire2/23298af0a3c30f54877fcabaaeaf06481396999865_full.jpg'
})

const count = new Anime ({
    name: 'Gankutsuou',
    language: 'Japanese',
    episodes: 24,
    image: 'https://img1.ak.crunchyroll.com/i/spire4/8d1de125068d1f7f18dacab8c72b54741424476276_full.jpg'
})

const kobe = new Anime ({
    name: 'Slam Dunk',
    language: 'Japanese',
    episodes: 101,
    image: 'https://img1.ak.crunchyroll.com/i/spire4/f26a43ba646fa169a232726fe578d0cd1279145968_full.jpg'
})

const dio = new Anime ({
    name: 'JoJo\'s Bizarre Adventure',
    language: 'Japanese',
    episodes: 135,
    image: 'https://img1.ak.crunchyroll.com/i/spire3/04b29833ccaaf2ee6bda1d08f2f02ecf1539039197_full.jpg'
})


// using Promises
const genre1 = new Genre({
     genreName: 'Action',
     anime: [titan]
})
const genre2 = new Genre ({
    genreName: 'Mecha',
    anime: [gundam]
})
const genre3 = new Genre ({
    genreName: 'Adventure',
    anime: [chaika]
})
const genre4 = new Genre ({
    genreName: 'Drama',
    anime: [kobe]
})
const genre5 = new Genre ({
    genreName: 'Science Fiction',
    anime: [count]
})
const genre6 = new Genre ({
    genreName: "Shounen",
    anime: [dio]
})
const genre7 = new Genre ({
    genreName: 'Fantasy',
    anime: [slime]
})
const genre8 = new Genre ({
    genreName: 'Romance',
    anime: [darling]
})





// model 1 = Genre 
// model 2 = Anime 
// NAme Uniq and name

Genre.deleteMany({})
.then(()=>{ Anime.deleteMany({})})
.then(()=>{Genre.insertMany([ genre1, genre3, genre4, genre5, genre6, genre2, genre7, genre8 ])})
.then(() => genre1.save())
.then(() => genre2.save())
.then(() => genre3.save())
.then(() => genre4.save())
.then(() => genre5.save())
.then(() => genre6.save())
.then(() => genre7.save())
.then(() => genre8.save())
console.log("DATA REDONE ")

   



    