const express = require('express');
const morgan = require('morgan');

const app = express();

//configuracionesi
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//middlewears
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//rutas
app.use(require('./routes/index'));
//archivos estaticos
app.use(express.static(__dirname + '/public'));

module.exports = app;