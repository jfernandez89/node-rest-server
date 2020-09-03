const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is a required field"],
  },
  email: {
    type: String,
    required: [true, "Email is a required field"],
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
  },
  image: {
    type: String,
    required: false,
  },
  role: {
    default: "USER_ROLE",
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
