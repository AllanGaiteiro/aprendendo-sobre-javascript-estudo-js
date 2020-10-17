
function consutTabel(tab) {
    var req = new XMLHttpRequest()
    /// metodos 
    ///forma assincrono
    req.open('GET', tab, true)
    req.onreadystatechange = function () {
        if (e.target.readyState == 4) {
            if (e.target.status == 200) {
                document.getElementById('Tabela').innerHTML = e.target.responseText
            } else if (e.target.status == 404) {
                document.getElementById('Tabela').innerHTML = 'Erro 404'
            }
        }

    }
    req.send()
}


function consultProduto() {

}
