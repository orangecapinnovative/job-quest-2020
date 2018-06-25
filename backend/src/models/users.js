import mongoose from 'mongoose';

const model = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});
export default mongoose.model('users', model);
