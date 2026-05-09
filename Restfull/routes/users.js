let NeDB = require ('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload:true
});










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

         db.insert(req.body, (err, user)=>{

            if (err){
                console.log('error: $(err}');
                res.status(400).json({
                });
            } else {
                res.status(200).json(user);    
            }
         });
    })
};