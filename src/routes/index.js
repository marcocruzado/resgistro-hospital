const { Router } = require('express');
const Pacientes = require('../model/Pacientes');
const router = Router();



router.get('/', async(req, res) => {
    const pacientes= await Pacientes.find();
//res.send(pacientes)  
res.render('index.ejs',{pacientes})
})


router.get('/registrar', (req, res) => {
    res.render('registrar.ejs')
})



router.post('/registrar', (req, res) => {
    const newPaciente = new Pacientes({
        Dni: req.body.Dni,
        Nombre: req.body.Nombre,
        ApePat: req.body.ApePat,
        ApeMat: req.body.ApeMat,
        Edad: req.body.Edad,
        Enfermedad: req.body.Enfermedad,
        Sexo: req.body.Sexo,
        Distrito: req.body.Distrito
    })
    newPaciente.save();
    
    console.log(newPaciente);
    
    
 res.redirect('/')
})


router.delete('/:id', async(req,res)=>{
 
    const paciente = await Pacientes.findByIdAndDelete(req.params.id)
res.json({
    message:"paciente eliminado",
    paciente
})

})


module.exports = router;