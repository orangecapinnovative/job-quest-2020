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
    fastify.post('/', async (req, res) => {
        const data = await model.insertMany({
            userId: req.body.userId,
            joke: req.body.joke
        })
        res.status(200).send(data)
    })
    fastify.delete('/:id', async (req, rest) => {
        try {
            await model.findByIdAndRemove(req.params.id)
            res.status(200).send('removed!');
        } catch (error) {
            throw Error('joke not found')
        }
    })

    fastify.post('/:id/like', async (req, res) => {
        try {
            const data = await model.findOne({
                _id: req.params.id,
                listUser: req.body.userId

            })
            if (data == null) {
                await model.updateOne({
                    _id: req.params.id
                }, {
                    $inc: {
                        like: 1
                    },
                    $push: {
                        listUser: req.body.userId
                    }
                })
                res.send('liked!')
            } else if (data != null) {
                res.send('protecting spamming')
            }
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    })
    next()
}