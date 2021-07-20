const mongoose = require("mongoose");

//YYYY-MM-DD
const statsSchema = new mongoose.Schema({
  time: Number,
  score:Number,
  active: { type: Boolean, default: true },
  dateInit: { type: Date },
  dateFinish: { type: Date},
  dateExpected: { type: Date},
  Date: { type: Date,default:Date.now}
});

const Stats = mongoose.model("stats", statsSchema);

module.exports = Stats;
