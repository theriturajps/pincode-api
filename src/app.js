const express = require('express')
const morgan = require('morgan')
const path = require('path')
const allPincode = require('./routes/allPincode.routes.js')
const createPincode = require('./routes/createPincode.routes.js')

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public'))) // Static files

app.get('/doc', (req, res) => {
  res.sendFile('doc.html', { root: path.join(__dirname, '..', 'public') })
})

app.get('/', (req, res) => {
  res.sendFile('home.html', { root: path.join(__dirname, '..', 'public') })
})

app.use('/dev/api/v1', allPincode)
app.use('/dev/api/v1', createPincode)

module.exports = app
