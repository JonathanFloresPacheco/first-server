const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //voy a entender las peticiones http
const morgan = require('morgan');
const routes = require('./routes/index');
const path = require('path');
//settings
const port = process.env.PORT || 3000;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);
app.set('views',path.join(__dirname,'views'));//nos muestra la ruta 
app.set('view engine','ejs');//estamos diciendo que  lel template que va ocupar es ejs

//middlewares tratan objetos o informacion que llega del navegador
app.set('appName','MI second server');//Settings permite agregar variables
app.use(morgan('dev'));
app.use((req,res,next)=>{
    console.log(`${req.url} - ${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); //Debemos entender que nos manda el navegador y lo manda con la url
//routes
app.use('/',routes);
app.get('*', (req, res) => {
    res.end('Not found!');
});

//static files
//Le decimosa que tenemos nuestro servidor de archivos estatico
app.use(express.static(path.join(__dirname,'public')));

//start server
app.listen(port, () =>{
 console.log(`listening on http://localhost:${port}`)
 console.log('App:',app.get('appName'))
});
