module.exports = {
    send: (err, ref, res, code = 400) =>{
        console.log(`erro: ${err}`);
        res.status(400).json({ 
            error: err 
        });
    }
};