const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema({
  name: String,
  description: String,
  active: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
});

const Social = mongoose.model("social", socialSchema);
module.exports = Social;
