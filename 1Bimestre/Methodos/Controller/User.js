const User = require('../Model/User')

module.exports = {
    async index(req,res){
        //busca todos os registros
        let users = await User.find();
      return res.json(users);
    },
    async show(req, res){

        let user = await User.findOne({_id : req.params_id});
      return res.json(user);
    },
    async store(req, res){
      
        const nome = req.body.nome;
        const senha = req.body.senha;
        const email = req.body.email;
        const status = req.body.status;
        const idade = req.body.idade;

        let user = await User.findOne({email});
        if(!user){
            user = await User.create({nome,senha,email,status,idade});
        }
        return res.json(user);
    },
    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let user = await User.findOne({_id : req.params.id});
        //edito os registros
        user.nome = "Hericson Ramos Forti";
        user.email = "sis4web@teste.com";
        user.senha = "teste123";
        user = await User.updateOne(user);
        return res.json(user);
    },
    async destroy(req, res){
        let user = await User.DestroyOne({_id : req.params_id});
        return res.json(user);
    }
  };