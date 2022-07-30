const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  {
    collection: "Users",
  }
);
module.exports = mongoose.model("user", userSchema);
