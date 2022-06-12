const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const hash = require("../helpers/hash");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

// password hashing section
userSchema.pre("save", function (next) {
  if (this.password) this.password = hash(this.password);
  next();
});

// validate password
userSchema.methods.validatePassword = function (pass) {
  return bcrypt.compare(pass, this.password);
};

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
