const mongoose = require('mongoose')
const Schema = mongoose.Schema
const counter = require('./counter')

const Joke = new Schema({
    joke: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Joke', Joke)