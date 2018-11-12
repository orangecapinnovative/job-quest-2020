const express = require('express')
const Joke = require('../models/Joke')
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
            error: error.toString()
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
            error: error.toString()
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
            error: error.toString()
        })
    }
})

router.post('/:id/like', async (request, response) => {
    const id = request.params.id
    const ip = request.ip
    try {
        const joke = await Joke.findOne({ _id: id})
        if (joke.like.includes(ip)) {
            return response.send('You have already liked to joke!!')
        }

        joke.like.push(ip)
        await joke.save()
        return response.json({
            status: 'OK',
            joke: joke
        })
    } catch(err) {
        return response.json({
            error: err.toString()
        })
    }
})

module.exports = router