const express = require('express')
const Joke = require('../models/joke')
const db = require('../db/mongoose')

const router = express.Router()

//Get all jokes
router.get('/', async (request, response) => {
    try {
        let allJoke = await Joke.find({})
        return response.json(allJoke)
    } catch(error) {
        return response.json({
            status: 'Error',
            Error: error.toString()
        })
    }
})


//Add joke from request body
router.post('/', async (request, response) => {
    let newJoke = new Joke({
        joke: request.body.joke
    })

    try {
        const savedJoke = await newJoke.save()
        return response.json({
            status: 'OK',
            joke: savedJoke
        })
    } catch(error) {
        return response.json({
            status: 'Error',
            error: error.toString()
        })
    }
})

//Get specific joke from ID
router.get('/:id', async (request, response) => {
    const id = request.params.id
    try {
        let joke = await Joke.find({ _id: id })
        return response.json(joke)
    } catch(error) {
        return response.json({
            status: 'Error',
            Error: error.toString()
        })
    }
})

//Delete joke from ID
router.delete('/:id', async (request, response) => {
    const id = request.params.id
    try {
        let deletedJoke = await Joke.deleteOne({ _id: id })
        return response.json(deletedJoke)
    } catch(error) {
        return response.json({
            status: 'Error',
            Error: error.toString()
        })
    }
})

module.exports = router