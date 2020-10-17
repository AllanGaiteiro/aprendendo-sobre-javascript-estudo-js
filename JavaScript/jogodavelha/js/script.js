
/////////////////Declaraçoes de variaveis////////////////
var jogo = []
var tabuleiro = []
var qmJoga = 0 // 0 jogador 1 cpu
var verif
var jogando = true
var nivel = 1
var jogadaCpu = 1
var qmComeca = 1

function cpuJoga() {

    if (jogando) {
        var l, c
        if (nivel == 1) {
            do {
                l = Math.round(Math.random() * 2)
                c = Math.round(Math.random() * 2)
            } while (jogo[l][c] != '');
            jogo[l][c] = 'O'
        } else if (nivel == 2) {
            /// nivel 2
            var contLater = 0
            var contHoriz = 0
            c = 0
            for (l = 0; l < 3; l++) {
                if (jogo[l][c] == 'X') {
                    contHoriz++
                }
                if (contHoriz == 2) {
                    if (jogo[l][0] == '') {
                        jogo[l][0] = 'O'
                    } else if (jogo[l][1] == '') {
                        jogo[l][1] = 'O'
                    } else if (jogo[l][2] == '') {
                        jogo[l][2] = 'O'
                    }
                    atualTabuleiro()
                    verif = verifVitoria()
                    if (verif != '') {
                        alert(verif + 'venceu')
                        jogando = false
                    }
                    //alert(qmJoga)
                    qmJoga = 0
                } else if(qmJoga == 1){
                    contHoriz = 0
                    for (c = 0; c < 3; c++) {
                        if (jogo[l][c] == 'X') {
                            contLater++
                        }
                        if (contLater == 2) {
                            if (jogo[0][c] == '') {
                                jogo[0][c] = 'O'
                            } else if (jogo[1][c] == '') {
                                jogo[1][c] = 'O'
                            } else if (jogo[2][c] == '') {
                                jogo[2][c] = 'O'
                            }
                            atualTabuleiro()
                            verif = verifVitoria()
                            if (verif != '') {
                                alert(verif + 'venceu')
                                jogando = false
                            }
                            //alert(qmJoga)
                            qmJoga = 0
                        }else{
                            contLater = 0
                        }
                    }
                }
            }
            if (qmJoga == 1) {
                do {
                    l = Math.round(Math.random() * 2)
                    c = Math.round(Math.random() * 2)
                } while (jogo[l][c] != '');
                jogo[l][c] = 'O'
                atualTabuleiro()
                verif = verifVitoria()
                if (verif != '') {
                    alert(verif + 'venceu')
                    jogando = false
                }
                //alert(qmJoga)
                qmJoga = 0
            }


        }

    }


}

function verifVitoria() {
    //linhas
    for (var l = 0; l < 3; l++) {
        if (jogo[l][0] == jogo[l][1] && jogo[l][1] == jogo[l][2]) {
            return jogo[l][0]
        }
    }
    ////coluna
    for (var c = 0; c < 3; c++) {
        if (jogo[0][c] == jogo[1][c] && jogo[1][c] == jogo[2][c]) {
            return jogo[0][c]
        }
    }
    ////Diagonal
    if (jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2]) {
        return jogo[1][1]
    }
    if (jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0]) {
        return jogo[1][1]
    }
    return ''

}
function jogar(p) {
    if (jogando && qmJoga == 0) {
        switch (p) {
            case 1:
                if (jogo[0][0] == '') {
                    jogo[0][0] = 'X'
                    qmJoga = 1
                }
                break;
            case 2:
                if (jogo[0][1] == '') {
                    jogo[0][1] = 'X'
                    qmJoga = 1
                }
                break;
            case 3:
                if (jogo[0][2] == '') {
                    jogo[0][2] = 'X'
                    qmJoga = 1
                }
                break;
            case 4:
                if (jogo[1][0] == '') {
                    jogo[1][0] = 'X'
                    qmJoga = 1
                }
                break;
            case 5:
                if (jogo[1][1] == '') {
                    jogo[1][1] = 'X'
                    qmJoga = 1
                }
                break;
            case 6:
                if (jogo[1][2] == '') {
                    jogo[1][2] = 'X'
                    qmJoga = 1
                }
                break;
            case 7:
                if (jogo[2][0] == '') {
                    jogo[2][0] = 'X'
                    qmJoga = 1
                }
                break;
            case 8:
                if (jogo[2][1] == '') {
                    jogo[2][1] = 'X'
                    qmJoga = 1
                }
                break;
            case 9:
                if (jogo[2][2] == '') {
                    jogo[2][2] = 'X'
                    qmJoga = 1
                }
                break;
            default:
                break;
        }
        if (qmJoga == 1) {
            verif = verifVitoria()
            if (verif != '') {
                alert(verif + 'venceu')
                jogando = false
            }
            atualTabuleiro()
            cpuJoga()
        }


    }

}
function atualTabuleiro() {
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            if (jogo[l][c] == 'X') {
                tabuleiro[l][c].innerHTML = 'X'
                tabuleiro[l][c].style.cursor = 'default'
            } else if (jogo[l][c] == 'O') {
                tabuleiro[l][c].innerHTML = 'O'
                tabuleiro[l][c].style.cursor = 'default'
            } else {
                tabuleiro[l][c].innerHTML = ''
                tabuleiro[l][c].style.cursor = 'pointer'
            }

        }
    }
}
function iniciar() {
    jogando = true
    jogadaCpu = 1
    jogo = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
    tabuleiro = [
        [document.getElementById('p1'), document.getElementById('p2'), document.getElementById('p3')],
        [document.getElementById('p4'), document.getElementById('p5'), document.getElementById('p6')],
        [document.getElementById('p7'), document.getElementById('p8'), document.getElementById('p9')]
    ]
    atualTabuleiro()
    if (qmComeca == 1) {
        qmComeca = 0
        qmJoga = qmComeca
        document.getElementById('divQmComeça').innerHTML = 'Quem Começa: Jogador'
    } else {
        qmComeca = 1
        qmJoga = qmComeca
        document.getElementById('divQmComeça').innerHTML = 'Quem Começa: CPU'
        cpuJoga()
    }
}

window.addEventListener('load', iniciar)