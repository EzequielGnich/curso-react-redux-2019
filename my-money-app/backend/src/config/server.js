const bodyParser = require('body-parser')
const express = require('express')
const server = express()

const port = process.env.PORT || 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function () {
  console.log(`Backend is running on port ${port}`)
})
