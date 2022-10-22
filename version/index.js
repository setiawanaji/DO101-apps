require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("This is version 1 of the app.")
})

const PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080
app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`)
})