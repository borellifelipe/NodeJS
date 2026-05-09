module.exports = (app)=>{
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
                email: "felipe.borelli@saipos.com",
                admin: "Não"
            }]
        })
    });
    
    // definindo uma rota para usuarios admin
    app.get('/users/admin', (req, res)=>{
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
                email: "felipe.borelli@saipos.com",
                admin: "Sim"
            }]
        })
    })
};