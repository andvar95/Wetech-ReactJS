const mongoose = require("mongoose");


//por el momento dejar esto vacio aun no se que colocar aqui
const recruiterSchema = new mongoose.Schema({

});

const Recruiter = mongoose.model("recruiter", recruiterSchema);

module.exports = Recruiter;