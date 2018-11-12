const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Joke = new Schema({
    joke: {
        type: String,
        required: true
    },
    like: {
        type: [String]
    },
    dislike: {
        type: [String]
    }
})

module.exports = mongoose.model('Joke', Joke)