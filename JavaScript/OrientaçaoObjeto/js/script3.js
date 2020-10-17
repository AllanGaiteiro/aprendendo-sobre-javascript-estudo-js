var formulario = new form.Cadastro()

var limpFormulario = function (){
    document.getElementById('nome').value = ' '
    document.getElementById('sobrenome').value = ' '
}
var adicionar = function (){
    var nome = document.getElementById('nome')
    var sobrenome = document.getElementById('sobrenome')
    var resultado = document.getElementById('res')
    
    formulario.addPessoa(nome.value, sobrenome.value)
    limpFormulario()
    resultado.innerHTML = formulario.getPessoaTexto()
    //alert('add')
}
var remover = function (){
    var nome = document.getElementById('nome')
    var sobrenome = document.getElementById('sobrenome')
    var resultado = document.getElementById('res')
    
    formulario.removePessoa(nome.value, sobrenome.value)
    limpFormulario()
    resultado.innerHTML = formulario.getPessoaTexto()
    //alert('remov')
}
