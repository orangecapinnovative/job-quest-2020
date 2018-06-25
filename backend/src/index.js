import mongoose from 'mongoose';
import usersRoute from './routes/users';
import jokeRoute from './routes/jokes';

const fastify = require('fastify')();

mongoose.connect('mongodb://mongodb/takemetour');

// routes
fastify.register(usersRoute);
fastify.register(jokeRoute);
// Run the server!
fastify.listen(3030, '0.0.0.0', (err, addess) => {
  if (err) {
    console.log(err);
  }

  console.log('running');
});
