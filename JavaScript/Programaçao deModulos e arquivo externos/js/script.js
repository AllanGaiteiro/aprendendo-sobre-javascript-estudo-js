/*var x = 20;
/// fora presisa de ;
(function(){
    /// vantage
    var x = 10
    console.log(x)

    
})()

console.log(x)
*/


(function () {
    var divRelog = null
    function retornaHora() {
        var relog = new Date
        var h = relog.getHours()
        var min = relog.getMinutes()
        var seg = relog.getSeconds()
        if (h < 10) {
            h = `0${h}`
        }
        if (min < 10) {
            min = `0${min}`
        }
        if (seg < 10) {
            seg = `0${seg}`
        }
        return `${h}:${min}:${seg}`

    }
    function loop() {
        if (divRelog != null) {
            divRelog.innerHTML = `<h1>${retornaHora()}</h1>`
            setTimeout(loop, 1000)
        } else {
            alert('deu erro')
        }

        
    }
    function inicializa_pagina() {
        divRelog = document.getElementById('relog')
        divRelog.innerHTML = `<h1>${retornaHora()}</h1>`
        setTimeout(loop, 1000)
    }
    window.addEventListener('load', inicializa_pagina)
})()

