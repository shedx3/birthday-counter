const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    date: { type: Date, default: new Date() },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
