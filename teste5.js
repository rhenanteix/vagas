

module.exports = function(req, res){
    
    const name = req.query.name;

    let count = 0;
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            count++;
        }
    }

    res.send("O usuário" + name + "foi lido" + count + "vezes.");

};