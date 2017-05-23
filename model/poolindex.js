const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userData = new Schema({
  index: { type:Number },
  area: String
})

module.exports = userData
