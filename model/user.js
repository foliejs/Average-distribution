const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userData = new Schema({
  _userId: Schema.ObjectId,
  area: String,
  name: {type:String,default:''},
  password: {type:String,default:''},
  createdTime:{type:Date,default:Date.now()}
})

module.exports = userData
