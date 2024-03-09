const mongoose = require("mongoose");

const personaSchema = mongoose.Schema({
    nombre: String,
    años: Number
}) 
module.exports = mongoose.model("Persona",personaSchema);