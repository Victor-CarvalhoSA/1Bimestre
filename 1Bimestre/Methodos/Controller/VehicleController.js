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
      
        const nome = req.body.nome;
        const motor = req.body.motor;
        const portas = req.body.portas;
        const combustivel = req.body.combustivel;
        const ano_fab = req.body.ano_fab;
        const ano_mod = req.body.ano_mod;
        const placa = req.body.placa;

        let vehicle = await vehicles.findOne({placa});
        if(!vehicle){
            vehicle = await vehicles.create({nome,motor,portas,combustivel,ano_fab,ano_mod,placa});
        }
        return res.json(vehicle);
    },
    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let vehicle = await vehicle.findOne({_id : req.params.id});
        //edito os registros
        vehicle.nome = "Hericson Ramos Forti";
        vehicle.motor = "sis4web@teste.com";
        vehicle.portas = "teste123";
        vehicle.combustivel = "teste123";
        vehicle.ano_fab = "teste123";
        vehicle.ano_mod = "teste123";
        vehicle.placa = "teste123";
        vehicle = await vehicle.updateOne(vehicle);
        return res.json(vehicle);
    },
    async destroy(req, res){
        let vehicle = await vehicle.DestroyOne({_id : req.params_id});
        return res.json(vehicle);
    }
  };