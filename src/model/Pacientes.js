const {Schema,model}= require('mongoose');


const PacientesSchema= new Schema({
    Dni:String,
    Nombre:String,
    ApePat: String,
    ApeMat:String,
    Edad:Number,
    Enfermedad:String,
    Sexo:String,
    Distrito:String,
})

module.exports=model('Pacientes',PacientesSchema); 