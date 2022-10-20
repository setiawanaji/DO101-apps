require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Hello World, latihan update")
})

const PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080
app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`)
})