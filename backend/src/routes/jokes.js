import model from '../models/jokes';
import jwtVerify from '../utils/jwtVerify';

export default (fastify, opt, next) => {
    fastify.get('/', async (req, res) => {
        const token = req.headers.authorization.replace('Bearer ', '');
        jwtVerify(token);
        const data = await model.find({});
        res.status(200).send(data)
    })
    fastify.get('/:id', async (req, res) => {
        const data = await model.findById(req.params.id)

        res.status(200).send(data)
    })
    fastify.post('/', async (req, res) => {
        const token = req.headers.authorization.replace('Bearer ', '');
        const {userId} = jwtVerify(token);
        const data = await model.insertMany({
            userId: userId,
            joke: req.body.joke
        })
        res.status(200).send(data)
    })
    fastify.delete('/:id', async (req, res) => {
        try {
            const token = req.headers.authorization.replace('Bearer ', '');
            jwtVerify(token);
            await model.findByIdAndRemove(req.params.id)
            res.status(200).send('removed!');
        } catch (error) {
            throw Error(error)
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