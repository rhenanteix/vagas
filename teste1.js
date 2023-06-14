var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    var name =  req.query.name;


    if (!name) {
        return res.status(400).send("Usuário não encontrado!")
    }
    var usuario = data.find(x => x.name === name)
    res.send(usuario)

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};