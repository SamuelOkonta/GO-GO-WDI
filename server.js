const express = require('express')
const logger = require('morgan')
const app = express()
const routes = require('./routes/index.js')

//require express, logger, app and my routes

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/client/build`))

app.use('/api/v1', routes)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001
// had a little trouble with this as my app kept listening on port 3000
// this happened even though I changed my ports in the root and the client,,
// to port 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})
