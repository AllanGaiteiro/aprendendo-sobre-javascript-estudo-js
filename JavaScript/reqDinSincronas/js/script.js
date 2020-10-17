function testediv() {
    document.getElementById('texto').innerHTML = '<p>Teste</p>'
}


function consutTabel() {
    var req = new XMLHttpRequest()
    /// metodos 
    ///forma sincrona
    req.open('GET','http://localhost/reqDinSincronas/consult.txt',false)
    req.send()
    document.getElementById('Tabela').innerHTML = req.responseText

}
