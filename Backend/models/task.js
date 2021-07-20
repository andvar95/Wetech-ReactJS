const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    img: String,
    name: String,
    description: String,
    difficulty: Number,
    importance: Number,
    urgency: Number,
    team: { type: mongoose.Schema.ObjectId, ref: "team" },
    sprint: { type: mongoose.Schema.ObjectId, ref: "sprint" },
    usersId: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
    historial: [],
    status: String,
    stats: { type: mongoose.Schema.ObjectId, ref: "stats" },
    tags: [{
        name: String,
        color: String
    }],
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
});
const Task = mongoose.model("task", taskSchema);
module.exports = Task;