//console.log('ola mundo!');
console.log('Gerenciado Financeiro')
var cliente = 'Allan'

console.log(`Cliente: ${cliente}`)

var valProduct = 100
var valDiscount = 37


var discountFunc = require("./modules/calDiscount")///require chamar modulos

var finale = discountFunc(valProduct,valDiscount)

console.log(`valor final do produto ${finale}`)