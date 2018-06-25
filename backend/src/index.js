import mongoose from 'mongoose';
import usersRoute from './routes/users';
const fastify = require('fastify')()

mongoose.connect('mongodb://mongodb/takemetour');


fastify.register(usersRoute)
// Run the server!
fastify.listen(3030 ,'0.0.0.0' ,(err , addess)=>{
    if(err){
        console.log(err)
    }

    console.log('running')
})