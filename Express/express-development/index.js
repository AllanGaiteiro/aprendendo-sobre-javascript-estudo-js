// Carregando modulos
    const express = require('express');
    const handlebars  = require('express-handlebars');
    const bodyparser = require('body-parser');
    const app = express();    
    const admin = require('./routes/admin')
    const path = require('path')//trabalhar com diretorio
    //const mongose = require('mongoose');
// Configuraçoes
    // bodyparser
        app.use(bodyparser.urlencoded({extended: true}))
        app.use(bodyparser.json())
    // handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Mongose
        // Em Breve
    // Public
        app.use(express.static(path.join(__dirname, 'public')))// caminho absoluta para o 'public'   
// Rotas
    // rota padrao
    app.get('/', (req, res) => {
        res.send('Pagina Geral')
    })

    app.use('/admin', admin)  
// Outros
const PORT = 3001
app.listen(PORT, ()=> {
    console.log('Servidor Rodando')
})