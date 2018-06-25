import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import usersRoute from './routes/users';
import jokeRoute from './routes/jokes';
import { JWT_SECRET } from './config';

const fastify = require('fastify')();

mongoose.connect('mongodb://mongodb/takemetour');

// routes
fastify.register(usersRoute);
fastify.register(jokeRoute);
// Run the server!
fastify.listen(3030, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('running');
});
