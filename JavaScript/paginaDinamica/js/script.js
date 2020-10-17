function selecionaTp(p) {
    if (p == 'pf') {
        /// pessoa fisica
        document.getElementById('dadosPf').style.visibility = 'visible'
        document.getElementById('dadosPj').style.visibility = 'hidden'
    }else {
        //// pessoa juridica
        document.getElementById('dadosPf').style.visibility = 'hidden'
        document.getElementById('dadosPj').style.visibility = 'visible'
    }
}

function inicPag() {
    document.getElementById('formDados').reset()
}