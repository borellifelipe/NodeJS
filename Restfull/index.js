// carreguei o modulo do expres 
const express = require('express');
// importando minha rota do index e users
const routesIndex = require('./routes/index.js');
const routesUser = require('./routes/users.js');

// app recebe o express
const app = express();

// Chamando todas as rotas com o use
app.use(routesIndex); 
app.use('/users', routesUser);

// agora eu digo para o meu servidor ficar escutando as requisições
// na porta 3000 e o endereço ip 
const port = 3000;
const adressIp = '127.0.0.1';

// listen recebe a posta e o endereço ip, depois executa uma função.
app.listen(port, adressIp, () => {
    console.log(`Servidor rodando na porta: ${port} no ip: ${adressIp}`);
});