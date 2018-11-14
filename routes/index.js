const express = require('express')
const Joke = require('../models/Joke')

const router = express.Router()

//Get all jokes
router.get('/', async (request, response, next) => {
    try {
        let allJoke = await Joke.find({})
        response.json(allJoke)
    } catch(error) {
        next(error)
    }
})

//Add joke from request body
router.post('/', async (request, response, next) => {
    let newJoke = new Joke({
        joke: request.body.joke
    })

    try {
        const savedJoke = await newJoke.save()
        response.json({
            status: 'OK',
            joke: savedJoke
        })
    } catch(error) {
        next(error)
    }
})

//Get specific joke from ID
router.get('/:id', async (request, response, next) => {
    const id = request.params.id
    try {
        let joke = await Joke.find({ _id: id })
        response.json(joke)
    } catch(error) {
        next(error)
    }
})

//Delete joke from ID
router.delete('/:id', async (request, response, next) => {
    const id = request.params.id
    try {
        let deletedJoke = await Joke.deleteOne({ _id: id })
        response.json(deletedJoke)
    } catch(error) {
        next(error)
    }
})

//Like joke
router.post('/:id/like', async (request, response, next) => {
    const id = request.params.id
    const ip = request.ip
    try {
        const joke = await Joke.findOne({ _id: id})
        if (joke.like.includes(ip)) {
            response.send('You have already liked to joke!!')
            return
        }

        joke.dislike = joke.dislike.filter( dislikeIp => dislikeIp !== ip)
        joke.like.push(ip)
        await joke.save()
        response.json({
            status: 'OK',
            joke: joke
        })
    } catch(error) {
        next(error)
    }
})

//Dislike joke
router.post('/:id/dislike', async (request, response, next) => {
    const id = request.params.id
    const ip = request.ip
    try {
        const joke = await Joke.findOne({ _id: id})
        if (joke.dislike.includes(ip)) {
            response.send('You have already disliked to joke!!')
            return
        }

        joke.like = joke.like.filter( likeIp => likeIp !== ip)
        joke.dislike.push(ip)
        await joke.save()
        response.json({
            status: 'OK',
            joke: joke
        })
    } catch(error) {
        next(error)
    }
})

module.exports = router