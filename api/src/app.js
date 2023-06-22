const express = require('express'); // framework escrito en JS, alojado en Nodejs.Estructuras base para aplic web
const cookieParser = require('cookie-parser'); // maneja cookie a traves de express
const bodyParser = require('body-parser');  // agrega a nuestra request el campo body en express
const morgan = require('morgan'); // middleware de nivel de solicitud Http. conecta aplicaciones. para logging
const routes = require('./routes/index.js'); // rutas basicas en express

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes); // utiliza barra para definir las rutas

// Error catching endware. 
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
