
//// Aprendendo////////
/// Objeto//////////
var cor = {
    azul:'blue',
    vermelho:'red',
    amarelo:'yellow',
    preto: 'black',
    branco: 'white'
}

cor.azulClaro= 'AxulClaro'
//alert(/*cores.preto + ' '+ */cor.azulClaro + ' '+ cor.preto)




/////////////////
/////// Classes //////

/* errado 
var cores = new Object()
var Obect = function (){
    this.azul = 'blue'
    this.vermelho = 'red'
    this.amarelo = 'yellow'
    this.preto = 'black'
    this.branco = 'white'
}*/

var pessoa = function (argumento) {
    //var privado =  'privado'
    //this.publico = 'publico'
    var self = this
    self.nome = argumento
    self.intervalo = function (){
        setInterval(function (){
            alert(self.nome)
        }, 2000)/// chamada de CallBack perde o contexto this
    }
}
/// tenq vir depois //
var bruno = new pessoa('bruno')


//////////////////////////
/*
alert("privado: " + bruno.privado)// nao aparece
alert('publico: ' + bruno.publico)//aparece
*/
////////////////////////
//alert(bruno.nome)

alert(bruno.intervalo())
//////////////////