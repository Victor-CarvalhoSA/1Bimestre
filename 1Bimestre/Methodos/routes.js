//Vendor
const express = require('express');
const multer = require('multer')


//Solicitação dos nossos arquivos do MVC e config
const UploadConfig = require('./config/upload');
const UserController = require('./Controller/User');
const VehicleController = require('./Controller/VehicleController');
const ModelController = require('./Controller/ModelController');
const BrandController = require('./Controller/BrandController');
const Address = require('./Controller/Adress');
const MateriaController    = require('./Controller/Materia');
const ProtocoloController    = require('./Controller/Protocolo');
const NotaController    = require('./Controller/Notas');

const routes = express.Router();
const upload = multer(UploadConfig);

//Index = Listagem
//Show = visualizar os dados gravados
//Store = Gravar
//Destroy = Delete
//app.get('/', (req, res) => res.send('Hello World!'))
routes.get('/',function(req, res){
    res.send("Hello word");
})

//este exemplo de get onde traz um usuario com base no id passado
routes.get('/users', UserController.index);
routes.post('/users/login', UserController.login);
routes.get('/users/:id', UserController.show);
routes.post('/users', upload.single('thumb'), UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id',UserController.destroy);
//routes.post('/users', UserController.store);

//Get => Buscar info -- Select para listagem de infos
//req.query = acessar a query ou params (filtros)
//localhost:3000/?idade=37&sexo=M

//Methodo POST // Create -- Gravação
//Formulario de login e senha  por exemplo
// vai enviar o login e a senha no corpo da requisição

//Mehodo PUT é usado para fazer o update para atualizar os dados do banco de dados
// localhost:3000/users/5

//Methodo Delete - Serve para deletar um registro
routes.get('/models', ModelController.index);
routes.get('/models/:id', ModelController.show);
routes.post('/models', ModelController.store);
routes.put('/models/:id', ModelController.update);
routes.delete('/models/:id',ModelController.destroy);

routes.get('/brands', BrandController.index);
routes.get('/brands/:id', BrandController.show);
routes.post('/brands', upload.single('thumb'), BrandController.store);
routes.put('/brands/:id', upload.single('thumb'), BrandController.update);
routes.delete('/brands/:id',BrandController.destroy);

routes.get('/vehicle', VehicleController.index);
routes.get('/vehicle/:id', VehicleController.show);
routes.post('/vehicle', upload.single('thumb'), VehicleController.store);
routes.put('/vehicle/:id', VehicleController.update);
routes.delete('/vehicle/:id',VehicleController.destroy);

routes.get('/materia',          MateriaController.index);
routes.get('/materia/:id',      MateriaController.show);
routes.post('/materia',         MateriaController.store);
routes.put('/materia/:id',      MateriaController.update);
routes.delete('/materia/:id',   MateriaController.destroy);

routes.get('/protocolo',          ProtocoloController.index);
routes.get('/protocolo/:id',      ProtocoloController.show);
routes.post('/protocolo',         ProtocoloController.store);
routes.put('/protocolo/:id',      ProtocoloController.update);
routes.delete('/protocolo/:id',   ProtocoloController.destroy);

routes.get('/adress', Address.index);
routes.get('/adress/:id', Address.show);
routes.post('/adress', Address.store);
routes.put('/adress/:id', Address.update);
routes.delete('/adress/:id',Address.destroy);

//routes.get('/nota', NotaController.index);
//routes.get('/nota/:id', NotaController.show);
//routes.post('/nota', NotaController.store);
//routes.put('/nota/:id', NotaController.update);
//routes.delete('/nota/:id',NotaController.destroy);

module.exports = routes;