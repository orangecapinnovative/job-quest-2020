import model from '../models/users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
    JWT_SECRET
} from '../config';
export default (fastify, opts, next) => {
    fastify.get('/users/:id', async (req, res) => {
        const data = await model.findById(req.params.id);
        res.send(data)
    })
    fastify.post('/users', async (req, res) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const data = await model.insertMany({
            username: req.body.username,
            password: hash
        })
        res.status(200).send('Register Complete!')
    })

    fastify.post('/auth', async (req, res) => {
        try {
            const data = await model.findOne({
                username: req.body.username
            })
            if (data != null && bcrypt.compareSync(req.body.password, data.password)) {
                const token = jwt.sign({
                    userId: data._id,
                }, JWT_SECRET)
                res.send({
                    token
                })
            } else if (data == null) {
                res.status(400).send({
                    error: 'Cannot found this username'
                })
            } else {
                res.status(400).send({
                    error: 'Wrong Password'
                })
            }
            throw new Error('Service Error')
        } catch (error) {
            throw new Error(error)
        }
    })
    next();
}