// carreguei o modulo do expres 
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// app recebe o express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

consign()
    .include('routes').include('utils').into(app);

// agora eu digo para o meu servidor ficar escutando as requisições
// na porta 3000 e o endereço ip 
const port = 3000;
const adressIp = '127.0.0.1';

// listen recebe a posta e o endereço ip, depois executa uma função.
app.listen(port, adressIp, () => {
    console.log(`Servidor rodando na porta: ${port} no ip: ${adressIp}`);
});