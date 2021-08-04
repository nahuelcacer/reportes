const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/personal", {useNewUrlParser: true});

var personal_schema = new Schema({
    nombre: String,
    cbu: String,
    fecha: String,
    import: Number


});


var Personal = mongoose.model("Personal", personal_schema);
module.exports.Personal = Personal;


