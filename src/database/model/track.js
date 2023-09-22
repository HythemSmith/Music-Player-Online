const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Track_Info = new Schema({
    title: String,
    body: String,
    date: Date
  });

module.exports = mongoose.model('track_info', Track_Info)