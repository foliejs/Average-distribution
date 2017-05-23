const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userData = new Schema({
  index: { type:String },
  area: String
})

module.exports = userData
