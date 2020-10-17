///console.log('ola mundo')

var fs = require('fs')

console.log('assy antes')
fs.readFile('./file/file.pdf', 'UTF-8', function (err, data) {
    if (err) {
        throw err
    }
    console.log('assy executado')
})

console.log('assy depois')

console.log('sy antes')
var data = fs.readFileSync('./file/file.pdf', 'UTF-8')
console.log('sy executado')

console.log('sy depois')