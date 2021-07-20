const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  name: String,
  description: String,
  active: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
  project:{ type: mongoose.Schema.ObjectId, ref: "project" },
  index:Number
});

const Status = mongoose.model("status", statusSchema);

module.exports = Status;
