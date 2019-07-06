const mongoose = require('mongoose')
const restful = require('node-restful')

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = restful.model('Todo', todoSchema)