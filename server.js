require('dotenv').config()
const express = require('express')
const app = require('./src/app.js')
const PORT = process.env.PORT || 3000
const connectDB = require('./src/db/connection.js')

app.use(express.json())

connectDB()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
