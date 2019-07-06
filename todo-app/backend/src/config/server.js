const express = require('express')
const server = express()
const allowCors = require('./cors')

const bodyParser = require('body-parser')

const port = 3003

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
  console.log(`Backend is runing on port ${port}.`)
})

module.exports = server