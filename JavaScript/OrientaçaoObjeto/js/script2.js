var form = {}

form.Pessoa = function (nome,sobrenome){
    var self = this
    self.nome = nome
    self.sobrenome = sobrenome
}
form.Cadastro = function (){
    var self = this
    var pessoaList = []
    
    var findIndicePessoa = function (nome,sobrenome){
        for(var i in pessoaList){
            if (pessoaList[i].nome == nome && pessoaList[i].sobrenome == sobrenome) {
                return 1
            }
        }
        return - 1
    }
    self.addPessoa = function (nome,sobrenome) {
        pessoaList.push(new form.Pessoa(nome,sobrenome))
        
    }
    self.removePessoa = function (nome,sobrenome){
        var index = findIndicePessoa(nome,sobrenome)
        if (index < 0) {
            return pessoaList.splice[index,1]
        }

    }
    self.getPessoa = function (nome,sobrenome){
        var index = findIndicePessoa(nome,sobrenome)
        if (index < 0)
            return
        return pessoaList[index]
        return null
    }
    self.getPessoaTexto = function (){
        var resultado = ''
        for(var i in pessoaList){
            resultado += pessoaList[i].nome + " " + pessoaList[i].sobrenome + '</br>'
        }
        return resultado
    }

}

