const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Blog = new Schema({
  name: {type:String},
  desc: {type:String,maxLength:1000},
  img: String
},{
  timestamps:true
});
module.exports = mongoose.model('Blog',Blog);