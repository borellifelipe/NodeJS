// carreguei o modulo do http 
const http = require('http');

// Criei o servidor
// server é a variavel que recebe a criação do meu servidor
// http.createServer criado meu servidor, como parametro eu recebo a 
// requisição que estou fazendo e o response a resposta do servidor
// nos consoles vejo a url que fiz a requisição e o motodo usado ( post, put, delete or get)
let server = http.createServer((req, res)=>{
    console.log('url:', req.url)
    console.log('url:', req.method)
    
    // neste switch estou analisando a url que foi acessada no navegador
    // caso seja apenas localhost:3000
    // aparece na tela o ola mundo
    switch (req.url){
        case '/':
            // aqui estou definindo status caso caia aqui 200 'ok'
            res.statusCode = 200
            // aqui estou informando qual tipo de conteudo o navegador vai receber
            // text/html diz que ele vai receber uma pagina htmpl
            res.setHeader('Content-Type', 'text/html')
            // aqui é o corpo da resposta que o navegador vai receber
            res.end('<h1>Bora para cima</h1>')
            break;
        // neste caso se foi acessado localhost:3000/users vai receber o json 
        case '/users':
            // aqui estou definindo status caso caia aqui 200 'ok'
            res.statusCode = 200
            // aqui estou dizendo que o tipo do conteudo recebi vai ser um json
            res.setHeader('Content-Type', 'application/json');
            // aqui estou recebendo meu json
            // JSON.stringify converte o objeto em uma string no formato JSON
            // users é um array com as informações do meu usuário (id, name, email)
            res.end(JSON.stringify({
                users: [{
                    id: 1,
                    name: "Felipe",
                    email: "felipe.borelli@saipos.com"
                }]
            }))
            break;
    }
})
// carreguei o modulo do expres 
const express = require('express');

// app recebe o express
const app = express();

// agora eu não preciso criar o servidor o express mesmo cria
// quando o navegador acessar a rota localhost:3000 vai fazer um get da informação
app.get('/',(req, res)=>{
      // aqui estou definindo status caso caia aqui 200 'ok'
      res.statusCode = 200
      // aqui estou informando qual tipo de conteudo o navegador vai receber
      // text/html diz que ele vai receber uma pagina htmpl
      res.setHeader('Content-Type', 'text/html')
      // aqui é o corpo da resposta que o navegador vai receber
      res.end('<h1>Olá</h1>')
});


// quando o navegador acessar a rota localhost:3000/users vai fazer um get da informação
app.get('/users', (req, res)=>{
      // aqui estou definindo status caso caia aqui 200 'ok'
      res.statusCode = 200
      // aqui estou dizendo que o tipo do conteudo recebi vai ser um json
      res.setHeader('Content-Type', 'application/json');
      // aqui estou recebendo meu json
      // com o express ao inves de usar o JSONstringify posso deixar res.json 
      // users é um array com as informações do meu usuário (id, name, email)
      res.json({
          users: [{
              id: 1,
              name: "Felipe",
              email: "felipe.borelli@saipos.com"
          }]
      })
});
   
// agora eu digo para o meu servidor ficar escutando as requisições
// na porta 3000 e o endereço ip 
const port = 3000;
const adressIp = '127.0.0.1';

app.listen(port, adressIp, () => {
    console.log(`Servidor rodando na porta: ${port} no ip: ${adressIp}`);
});