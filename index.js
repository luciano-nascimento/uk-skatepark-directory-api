const express = require('express')
const app = express()
const { port, dbURI } = require('./config/environment')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('./lib/logger')
const router = require('./config/router')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) return console.log(err)
  console.log('MONGO CONNECTED!')
})

app.use(bodyParser.json())

app.use(logger)

app.use('/api',router)

app.listen(port, () => console.log(`Express is up and running on ${port}`))