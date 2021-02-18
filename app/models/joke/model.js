const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  name: { type: String, required: true },
  detail: { type: String, required: true },
  like: { type: Number, default: 0 },
  dislike: { type: Number, default: 0 },
  createdAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model("Joke", jokeSchema, "Joke");
