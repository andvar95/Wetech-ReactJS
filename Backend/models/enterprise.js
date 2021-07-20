const mongoose = require("mongoose");

/* renombrar*/

const enterpriseSchema = new mongoose.Schema({
    members: [{ type: mongoose.Schema.ObjectId, ref: 'user' }],
    userId: { type: mongoose.Schema.ObjectId, ref: 'user', unique: true },
    stats: { type: mongoose.Schema.ObjectId, ref: 'statsEnterprise' }, //reputacion, hacer encuestas a los progmadores para llenar esto y rankear empresas
    // projects: [{ type: mongoose.Schema.ObjectId, ref: 'project' }],
});

const Enterprise = mongoose.model("enterprise", enterpriseSchema);

module.exports = Enterprise;