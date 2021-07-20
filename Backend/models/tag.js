const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: String,
  color: String,
  type:String,
  active: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
});

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;
