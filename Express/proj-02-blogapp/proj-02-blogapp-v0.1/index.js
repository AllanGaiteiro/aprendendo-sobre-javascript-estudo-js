// Carregando modulos
    const express = require('express');
    const handlebars  = require('express-handlebars');
    const bodyparser = require('body-parser');
    const app = express();
    //const mongose = require('mongoose');
// Configuraçoes
    // bodyparser
        app.use(bodyparser.urlencoded({extended: true}))
        app.use(bodyparser.json())
    // handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Mongose    
// Rotas
    
// Outros
const PORT = 3001
app.listen(PORT, ()=> {
    console.log('Servidor Rodando')
})