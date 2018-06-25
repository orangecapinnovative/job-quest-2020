import mongoose from 'mongoose';

const model = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  joke: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  dislike: {
    type: Number,
    default: 0,
  },
  listUser: {
    type: Array,
  },
});
export default mongoose.model('jokes', model);
