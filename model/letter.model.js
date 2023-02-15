const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const letterSchema = new Schema(
  {
    name: { type: String, default: "yes" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("letter", letterSchema);
