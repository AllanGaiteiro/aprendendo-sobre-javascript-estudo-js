const mongoose = require('mongoose')



// ele cria um banco se nao tiver
mongoose.connect("mongodb://localhost/testeBanco").then(
    () => {
        console.log('banco de dados encontrado ...')
    }).catch(
        (err) => {
            console.log('falha ao encontrar o banco de dados: '+ err)
        })
//// pra criar pelo terminal
// é so usar o 
//>use nomebanco 


// model - Usuarios
// definindo o model
const UserSchema = mongoose.Schema({
    nome: {
        type: String,/// tipo do atriibuto
        require: true, /// se o campo é obrigatorio ou nao
    },
    sobrenome: {
        type: String,/// tipo do atriibuto
        require: true, /// se o campo é obrigatorio ou nao
    },
    email: {
        type: String,/// tipo do atriibuto
        require: true, /// se o campo é obrigatorio ou nao
    },
    idade: {
        type: Number,/// tipo do atriibuto
        require: true, /// se o campo é obrigatorio ou nao
    },
    pais: {
        type: String
    }
})
////////// Collection ///////

// "collection" e o nome da tabela do dados
// exemplo nesse caso o usuario é a "collection"

mongoose.model('users', UserSchema)


