const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    lastname: String,
    age: { Number},
    mail:String,
    currentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', User);