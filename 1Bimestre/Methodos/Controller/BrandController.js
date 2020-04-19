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
        const thumb = req.file.filename;

        let brand = await brands.findOne({nome});
        if(!brand){
            brand = await brands.create({nome,thumb});
        }
        return res.json(brand);
    },
    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        //let brand = await brands.findOne({_id : req.params.id});
        let brand = {};
        //edito os registros
        brand.nome = req.body.nome;
        brand.thumb = req.file.filename;
        brand = await brands.updateOne({_id : req.params.id}, {brand});
        return res.json(brand);
    },
    async destroy(req, res){
        let brand = await brands.DestroyOne({_id : req.params_id});
        return res.json(brand);
    }
  };