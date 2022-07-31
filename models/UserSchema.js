const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roles = {
  0: "SuperAdmin",
  1: "patient",
  2: "Doctor",
  3: "Hosptial",
};

let userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
   
    },
    role: {
      type: String,
      required: true,
    
    },
  },
  {
    collection: "Users",
  }
);
module.exports = mongoose.model("user", userSchema);
