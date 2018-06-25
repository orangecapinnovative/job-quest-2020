import model from '../models/jokes';

export default (fastify, opt, next) => {
    fastify.get('/', async (req, res) => {
        const data = await model.find({});
        res.status(200).send(data)
    })
    fastify.get('/:id', async (req, rest) => {
        const data = await model.findById(req.params.id)
        
        res.status(200).send(data)
    })
    fastify.post('/', async(req , res)=>{
        const data = await model.insertMany({
            userId: req.body.userId,
            joke: req.body.joke
        })
        res.status(200).send(data)
    })
    next()
}