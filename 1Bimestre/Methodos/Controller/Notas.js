const Notas = require('../Model/Nota');

module.exports = {
    async index(req, res){
        //busca todos os registros
        let notas = await Notas.find() ;
        return res.json(notas);
    },

    async show(req, res){
        let notas = await Notas.findOne({ User_id : req.params.id });
        //let notas = await Notas.find({ user_id: mongoose.Types.ObjectId(req.params_id)});
        return res.json(notas) ;
    },

    async store(req, res){
        await Notas.create({
            user_id : req.body.user_id,
            materia_id : req.body.materia_id,
            bimestre1 : req.body.bimestre1,
            bimestre2 : req.body.bimestre2,
            bimestre3 : req.body.bimestre3,
            bimestre4 : req.body.bimestre4
        });
        return res.status(200).json({success : "Notas Cadastradas com Sucesso!"})
    },

    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let notas = await Notas.findOne({ _id : req.params.id});
        console.log(notas);
        notas.user_id = req.body.user_id,
        notas.materia_id = req.body.materia_id,
        notas.bimestre1 = req.body.bimestre1;
        notas.bimestre2 = req.body.bimestre2;
        notas.bimestre3 = req.body.bimestre3;
        notas.bimestre4 = req.body.bimestre4;
        // //edito os registro 
        await Notas.updateOne({ _id: req.params_id}, notas).then(result => {
            res.status(200).json({ message: "Notas atualizadas com sucesso!"});
        });
        console.log(notas);
    }, 

    async destroy(req, res){
        await Notas.deleteOne({ _id : req.params.id });
        return res.status(200).json({success : "Notas destruidas"});
    }
  };