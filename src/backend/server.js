const path = require('path')
const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')

require('dotenv').config()

const defaults = require.main.require('./defaults')
const siteRoutes = require.main.require('./routes/siteRoutes')

const app = express()
app.use('/', siteRoutes)
app.use(helmet())
app.set('trust proxy', 1)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '..', 'frontend', 'html'))

const getTimeForConsole = () => new Date(Date.now()).toLocaleString() + ':'

mongoose.connect(defaults.db.address, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  app.listen(defaults.site.port, () => {
    console.log(getTimeForConsole(), `${defaults.site.name}: http://localhost:${defaults.site.port}`)
  })
})
