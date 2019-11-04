const app= require('./app');
require('./database')

app.listen(app.get('port'),()=>{
    console.log("el servidor acaba de ser levantado en el puerto",app.get('port'));   
})