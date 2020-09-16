const express = require('express');
const server = express();
const dotenv = require('dotenv').config();

//Configurações 
server.use(express.json());//permitir resp ao cliente em formato json

//Rotas
server.use(require('./src/routes'));


server.listen(process.env.PORT);
console.log(`Instacia do servidor iniciado na porta ${process.env.PORT}.`);
