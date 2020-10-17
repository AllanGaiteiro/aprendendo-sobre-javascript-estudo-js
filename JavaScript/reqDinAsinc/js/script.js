function testediv() {
    document.getElementById('texto').innerHTML = '<p>Teste</p>'
}

function tratarEventConex(e) {
    if (e.target.readyState == 4) {
        if (e.target.status == 200){
            document.getElementById('Tabela').innerHTML = e.target.responseText
        }else if(e.target.status == 404){
        document.getElementById('Tabela').innerHTML = 'Erro 404'
        }
    }
    document.getElementById('Tabela').innerHTML = e.target.responseText
}
function consutTabel() {
    var req = new XMLHttpRequest()
    /// metodos 
    ///forma sincrona
    req.open('GET', 'http://localhost/reqDinAsinc/consult.txt', true)
    req.onreadystatechange = tratarEventConex
    req.send()


}
