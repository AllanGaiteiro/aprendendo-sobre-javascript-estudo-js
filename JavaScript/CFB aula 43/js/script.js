/*
var i = 0
var images =
    [
        '1146.jpg', 'image1.jpg', 'noite.jpg', 'tarde.jpg' /// nomes antigos
    ]

var img = document.querySelector('img')

function tradeImg() {
    if (i < images.length) {
        img.src = `images/${images[i]}` 
        i++   
    }else if (i >= images.length ) {
        i = 0
    }
    setTimeout(tradeImg, 5000)
 
}

tradeImg()
*/
var slide

var images = []
var tmp
var countdir = false
var countesq = false
var imgAtual
var maxiImg
var tmptroca
var vtempo
var vload
var contag
var load
var porcetcarg
function carregar() {
    for (var i = 0; i < 4; i++) {
        var img = new Image()
        img.src = `images/sl${i}.jpg`
        images.push(img)
    }
}

function iniciar() {
    carregar()
    imgAtual = 0
    maxiImg = images.length - 1
    slide = document.querySelector('div#slide')
    load = document.querySelector('div#divCarreg')
    carregarImg(imgAtual)
    tmptroca = 400
    contag = 0

    contagem()
}
function contagem() {
    porcetcarg = ((contag - (imgAtual * tmptroca)) / (tmptroca / 100))
    load.style.width = `${porcetcarg}%`
    if (contag >= tmptroca * 4) {
        //alert(countag)
        contag = 0
    } else if (contag < 0) {
        contag = tmptroca * 3
    } else {
        contag++

    }
    imgAtual = Math.floor(contag / tmptroca)
    switch (imgAtual) {
        case 0:
            //alert(`0`)
            carregarImg(imgAtual)
            break;
        case 1:
            //alert(`1`)
            carregarImg(imgAtual)
            break;
        case 2:
            //alert(`2`)
            carregarImg(imgAtual)
            break;
        case 3:
            //alert(`3`)
            carregarImg(imgAtual)
            break;
        default:
            break;
    }
    requestAnimationFrame(contagem)
}
function carregarImg(img) {
    slide.style.backgroundImage = `url('${images[img].src}')`

}

var dir = document.querySelector('button#dir').addEventListener('click', function () {
    contag += tmptroca
})

var esq = document.querySelector('button#esq').addEventListener('click', function () {
    contag += -tmptroca
})

iniciar()