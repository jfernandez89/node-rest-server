const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Enum
let validRoles = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} is not a valid role",
};

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required:  [true, "Name is a required field"],
  },
  email: {
    type: String,
    unique: true,
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
    type: String,
    default: "USER_ROLE",
    enum: validRoles,
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

// Plugin configuration //
userSchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

module.exports = mongoose.model("User", userSchema);
