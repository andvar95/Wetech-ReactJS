const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name: String,
    img: {type:String,default:'http://localhost:3001/uploads/img/teamDefault.jpeg'},
    description: String,
    members: [{ type: mongoose.Schema.ObjectId, ref: "user" }],
    active: { type: Boolean, default: true },
    project: { type: mongoose.Schema.ObjectId, ref: "project" },
    date: { type: Date, default: Date.now },
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;