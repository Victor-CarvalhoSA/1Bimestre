const vehicles = require('../Model/VehicleModel')

module.exports = {
    async index(req,res){
        //busca todos os registros
        let vehicles = await vehicle.find();
      return res.json(vehicles);
    },
    async show(req, res){

        let vehicle = await vehicle.findOne({_id : req.params_id});
      return res.json(vehicle);
    },
    async store(req, res){
        
        let vehicle = await vehicles.findOne({_id});
        const nome = req.body.nome;
        const motor = req.body.motor;
        const portas = req.body.portas;
        const combustivel = req.body.combustivel;
        const ano_fab = req.body.ano_fab;
        const ano_mod = req.body.ano_mod;
        const placa = req.body.placa;
        const thumb = req.file.filename;
        const marca_id = req.body.marca_id;
        const modelo_id = req.body.modelo_id;

        if(!vehicle){
            vehicle = await vehicles.create({nome,motor,portas,combustivel,ano_fab,ano_mod,placa,thumb,marca_id,modelo_id});
        }
        return res.json(vehicle);
    },
    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let vehicle = await vehicle.findOne({_id : req.params_id});
        //edito os registros
        vehicle.nome = req.body.nome;
        vehicle.motor = req.body.motor;
        vehicle.portas = req.body.portas;
        vehicle.combustivel = req.body.combustivel;
        vehicle.ano_fab = req.body.ano_fab;
        vehicle.ano_mod = req.body.ano_mod;
        vehicle.placa = req.body.placa;
        vehicle.thumb = req.file.filename;
        vehicle.marca_id = req.body.marca_id;
        vehicle.modelo_id = req.body.modelo_id;
        vehicle = await vehicle.updateOne(vehicle);
        return res.json(vehicle);
    },
    async destroy(req, res){
        let vehicle = await vehicle.DestroyOne({_id : req.params_id});
        return res.json(vehicle);
    }
  };