module.exports = (app)=>{
    app.get('/users', (req, res)=>{
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                id: 1,
                name: "Felipe",
                email: "felipe.borelli@saipos.com",
                admin: "Não"
            }]
        })
    });
 
    app.post('/users/admin', (req, res)=>{
         res.json(req.body);
    })
};