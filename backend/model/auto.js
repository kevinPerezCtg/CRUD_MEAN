//Importamos mongoose
const mongoose = require('mongoose')

//Generamos modelo del esquema
const esquemaAuto = new mongoose.Schema({
    marca:String,
    modelo:Number,
    color:String,
    precio:Number,
    fechaRegistro:{
        type:Date,
        default:Date.now
    }
})

//Creamos el exports
const Auto = mongoose.model("auto",esquemaAuto)
module.exports = Auto