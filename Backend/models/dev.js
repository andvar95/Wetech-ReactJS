const mongoose = require("mongoose");


//por el momento dejar esto vacio aun no se que colocar aqui
const devSchema = new mongoose.Schema({
    CV: { type: String, required: false },
    portfolio: { type: String },
    xp: [{
        enterprise: { type: String, required: true },
        startDate: { type: Date, required: true },
        leftDate: { type: Date, required: true },
        description: { type: String, required: true },
        position: { type: String, required: true }

    }],
    userId: { type: mongoose.Schema.ObjectId, ref: 'user', }
});

const Dev = mongoose.model("dev", devSchema);

module.exports = Dev;