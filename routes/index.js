const express = require('express')
const Joke = require('../models/joke')
const db = require('../db/mongoose')

const router = express.Router()

//Get all jokes
router.get('/', (request, response) => {
    let id = request.query.id
    if (id) {
        Joke.find({ _id: id }, (error, jokes) => {
            if (error) {
                return response.json({
                    status: 'Not Found',
                    error: error
                })
            } else {
                return response.json(jokes)
            }
        })
    } else {
        Joke.find({}, (error, jokes) => {
            return response.json(jokes)
        })
    }
})


//Add joke from request body
router.post('/', (request, response) => {
    let newJoke = new Joke({
        joke: request.body.joke
    })
    newJoke.save()
        .then((resolve) => {
        return response.json({
            status: 'OK',
            joke: newJoke
        })
    }).catch((reject) => {
        return response.json({
            status: 'Error',
            error: reject.error
        })
    })
})


module.exports = router