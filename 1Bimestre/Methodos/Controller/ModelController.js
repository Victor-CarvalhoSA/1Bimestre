const models = require('../Model/ModelModel')

module.exports = {
    async index(req,res){
        //busca todos os registros
        let models = await models.find();
      return res.json(models);
    },
    async show(req, res){

        let model = await models.findOne({_id : req.params_id});
      return res.json(model);
    },
    async store(req, res){
      
        const nome = req.body.nome;

        let model = await models.findOne({nome});
        if(!model){
            model = await models.create({nome});
        }
        return res.json(model);
    },
    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let model = await models.findOne({_id : req.params.id});
        //edito os registros
        model.nome = "Hericson Ramos Forti";
        model.email = "sis4web@teste.com";
        model.senha = "teste123";
        model = await models.updateOne(model);
        return res.json(model);
    },
    async destroy(req, res){
        let model = await models.DestroyOne({_id : req.params_id});
        return res.json(model);
    }
  };