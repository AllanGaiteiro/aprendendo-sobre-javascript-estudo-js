const mongoose = require('mongoose')



// ele cria um banco se nao tiver
mongoose.connect("mongodb://localhost/testeBanco").then(
    () => {
        console.log('deu certo')
    }).catch(
        () => {
            console.log('nao deu certo')
        })
//// pra criar pelo terminal
    // é so usar o 
    //>use nomebanco 
