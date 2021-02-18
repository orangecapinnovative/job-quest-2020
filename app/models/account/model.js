const moongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = moongoose.Schema;

const accountSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  action: [
    {
      jokeId: { type: Schema.Types.ObjectId, ref: "Joke" },
      status: { type: Schema.Types.Boolean },
    },
  ],
});

accountSchema.pre("save", function (next) {
  var account = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      next(err);
    }

    bcrypt.hash(account.password, salt, (err, hash) => {
      account.password = hash;
      next();
    });
  });
});

module.exports = moongoose.model("Account", accountSchema, "Account");
