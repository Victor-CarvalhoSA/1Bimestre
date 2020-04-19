//Busca a  bibioteca http
const http = require('http');
//faz a requisição do request
const request = require('request');
//Faz a Requisição do File Server
const fs = require('fs');
const adresses = require('../Model/Adress')

module.exports = {
  async index(req,res){
      //busca todos os registros
      let adresses = await adresses.find();
    return res.json(adresses);
  },
  async show(req, res){

      let adress = await adresses.findOne({_id : req.params_id});
    return res.json(adress);
  },
  async store(req, res){
    request('http://viacep.com.br/ws/'+ req.body.cep +'/json/', async function (error, response, body) {
    console.log('error:', error); // Print o erro que ocorreu
    console.log('statusCode:', response && response.statusCode); // Imprima o código de status da resposta se uma resposta foi recebida
    
    //Json vem como String simples// Json vem como texto puro
    console.log('body:', body); // imprime o Json recebido

    //Transforma o Json de texto puro para um Objeto
    //Assim a gente pode usar data.logradouro
    var data = JSON.parse(body)
    const cep = data.cep;
    const logradouro = data.logradouro;
    const complemento = data.complemento;
    const bairro = data.bairro;
    const localidade = data.localidade;
    const uf = data.uf;
    const ibge = data.igbe;
    let {user_id} = req.headers;
    let aux = await adresses.create({cep,logradouro,complemento,bairro,localidade,uf,ibge, user_id});
    return res.json(aux);
  });
},
  //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
  async update(req, res){
      //recuperando o registro
      let adress = await adresses.findOne({_id : req.params.id});
      //edito os registros
      adress.nome = "Hericson Ramos Forti";
      adress.email = "sis4web@teste.com";
      adress.senha = "teste123";
      adress = await adresses.updateOne(adress);
      return res.json(adress);
  },
  async destroy(req, res){
      let adress = await adresses.DestroyOne({_id : req.params_id});
      return res.json(adress);
  },
};