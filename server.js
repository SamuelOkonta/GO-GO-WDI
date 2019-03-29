const express = require('express')
const logger = require('morgan')
const app = express()
const routes = require('./routes/index.js')
const bodyParser = require ('body-parser')

//require express, logger, app and my routes

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../client/build')))
app.use(bodyParser.json())

app.use('/api/v1', routes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})

const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})
