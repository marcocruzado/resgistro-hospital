const mongoose= require('mongoose');


mongoose.connect('mongodb://localhost/marco-linux',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("la base de datos se conecto como servicio")
)
.catch((e)=>console.log(e)
)