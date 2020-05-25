const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
 const cors = require('cors');

const app = express();
const port = 3000;
const hostname = "192.168.100.85";

mongoose.connect('mongodb+srv://Victor:b4hk22@cluster0-db3bp.mongodb.net/Biqueira?retryWrites=true&w=majority', 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port,hostname,()=>{
    console.log(`Servidor rodando na porta ${port} em ${hostname}`);
})