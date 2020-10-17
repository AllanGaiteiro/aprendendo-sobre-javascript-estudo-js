var texto = document.getElementById('txt').innerHTML

//var res = texto.match('Allan') /// com capslock// case sensitive

/// modificadores : i = sem case // g = todas as ocorencias // m = nao armanezar em array

//var res = texto.match(/a/g)// g = todas as ocorencias /
//var res = texto.match(/[^A|i]/ig) 
// ^ menos oq voce pediu
//var res = texto.match(/[a-c]/ig) // alfabetico entre um e outro 

/// \d = numerais
/// \D = nao numerais
//var res = texto.match(/[\d]/ig)
////////////////////////////////////////
//document.write(res.length + ' vez</br>')

//document.write('primeira letra encontrada: ' + res[0])
//var res = texto.search(/d/i)//procurar e posisionar  posisao 
//document.write('posisao = ' + res)
//var res = texto.replace(/ /ig,'_')// substituir 


/*
var res1 = texto.charAt(1)
var res2 = texto.charCodeAt(res1)//o codigo do caracter
var res3 = String.fromCharCode(res2)// ? deu erro
document.write( 'posisao: ' +res1+ ' codigo: '+ res2 + ' resposta: '+ res3)
*/

/*
var txt = ', tenho 23 anos e sou de Sargitario.'
var txt2 = ' Gosto de jogar jogos'
var res = texto.concat(txt + txt2)// concatena 
document.write(res)
*/

/////////////////////////////////////////////////////

//var res = texto.indexOf('a')// posisao se nao encontra -1
/*var res2 = texto.lastIndexOf('a')
if (res2 < 0) {
    document.write('nao encontrou')
} else {
   document.write(res2) 
}
*/

/*
var texto2 = 'Allan de Souza Gaiteiro'
var res= texto.localeCompare(texto2)

//0 iguais
//!0 diferentes
if (res == 0){
    document.write('sao iguais')
}  else {
    document.write('diferentes')
}

*/
/*
var res = texto.slice(9,14)// pegar uma parte do texto pos inicial e pos final
var res2 = texto.split(' ') /// divide em partes 
var res3 = texto.substr(9,5)//posisao inicial e tamanho
var res4 = texto.toLocaleLowerCase()//minusculo
var res5 = texto.toLocaleUpperCase()// maiusculo

var num = 15
var res6 = texto.toLocaleUpperCase().substr(9,5)// muito zica
var res7 = num.toString()// transformar em string
var res = num.toString()

/// conversao de base ///

var bin = num.toString(2)
var oct = num.toString(8)
var hex = num.toString(16)

document.write(res+'</br>')
document.write(bin+'</br>')
document.write(oct+'</br>')
document.write(hex+'</br>')
*/

var texto = '         Allan de souza gaiteiro'

var res = texto.trim()// eliminar espasso no inicio e no fim 

alert(res)