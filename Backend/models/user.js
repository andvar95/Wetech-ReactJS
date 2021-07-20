const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new mongoose.Schema({
    avatar: {
        type: String,
        default: "http://localhost:3001/uploads/userDefault.jpeg",
    },
    name: String,
    description: String,
    password: { type: String }, //{ type: String, select: false },
    email: { type: String, unique: true },
    tags: [{ type: mongoose.Schema.ObjectId, ref: "tag" }],
    social: [],
    position: String,
    isEnterprise: { type: Boolean, default: false },
    phone: String,
    role: { type: mongoose.Schema.ObjectId, ref: "role" },
    active: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    address: String,
    salary: { type: Number, default: 0 }
});

userSchema.methods.generateJWT = function() {
    return jwt.sign({
            _id: this._id,
            name: this.name,
            email: this.email,
            role: this.role,
            iat: moment().unix(),
        },
        process.env.SECRET_KEY_JWT
    );
};

const User = mongoose.model("user", userSchema);
module.exports = User;