import mongoose from 'mongoose';
import usersRoute from './routes/users';
import jokeRoute from './routes/jokes';

const cors = require('cors');
const fastify = require('fastify')();

fastify.use(cors());
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
