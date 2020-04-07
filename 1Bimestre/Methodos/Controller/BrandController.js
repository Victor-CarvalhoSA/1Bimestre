const brands = require('../Model/BrandModel')

module.exports = {
    async index(req,res){
        //busca todos os registros
        let brands = await brands.find();
      return res.json(brands);
    },
    async show(req, res){

        let brand = await brands.findOne({_id : req.params_id});
      return res.json(brand);
    },
    async store(req, res){
      
        const nome = req.body.nome;

        let brand = await brands.findOne({nome});
        if(!brand){
            brand = await brands.create({nome});
        }
        return res.json(brand);
    },
    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let brand = await brands.findOne({_id : req.params.id});
        //edito os registros
        brand.nome = "Hericson Ramos Forti";
        brand = await brands.updateOne(brand);
        return res.json(brand);
    },
    async destroy(req, res){
        let brand = await brands.DestroyOne({_id : req.params_id});
        return res.json(brand);
    }
  };