const mongoose = require("mongoose");

/* renombrar*/

const projectSchema = new mongoose.Schema({
    name: String,
    img:{type:String,default:'http://localhost:3001/uploads/img/projectDefault.jpeg'},
    description: String,
    active: { type: Boolean, default: true },
    members: [{
        userId: { type: mongoose.Schema.ObjectId, ref: "user" },
        Role: { type: mongoose.Schema.ObjectId, ref: "role" },
        score:{type:Number,default:0}
    }],
    tags:[],
    status:[{
        name:String,
        index:Number
    }],
    date: { type: Date, default: Date.now },
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;