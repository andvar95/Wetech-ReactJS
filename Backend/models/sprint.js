const mongoose = require("mongoose");

const sprintSchema = new mongoose.Schema({
    name: String,
    description: String,
    active: { type: Boolean, default: true },
    project: { type: mongoose.Schema.ObjectId, ref: "project" },
    date: { type: Date, default: Date.now },
});

const Sprint = mongoose.model("sprint", sprintSchema);

module.exports = Sprint;