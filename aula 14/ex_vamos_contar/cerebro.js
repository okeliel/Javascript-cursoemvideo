/*


###########################################################################
Para informar a impossibilidade da utilização do PASSO 0, faça: 

if (p <= 0) {
            window.alert (`Impossível utilizar o PASSO 0, considere o passo 1.`)
            p = 1
        }

        OU ENTÃO...
            window.alert('[ERRO GRAVE]')
###########################################################################

###########################################################################
O CONTADOR(c) irá começar do INÍCIO(i) e, enquanto o CONTADOR(c) for MENOR ou igual ao FIM(f), o CONTADOR(c) irá receber ele mesmo MAIS(+=) o PASSO(p).
###########################################################################

###########################################################################
O CONTADOR(c) irá começar do INÍCIO(i) e, enquanto o CONTADOR(c) for MAIOR ou IGUAL ao FIM(f), o CONTADOR(c) irá receber ele mesmo MENOS(-=) o PASSO(p).
###########################################################################



ADIOCIONANDO EMOJIS

1.Procure por unicode emoji list
2.copie um código, exemplo: U+1F600
3.No JS, escreva assim \u{1F449}
4. Retire o U do código no JS e adicione \u na frente

*/

function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


    /*TESTANDO O CÓDIGO*/
        if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lengh == 0) {
        /*window.alert('[ERRO GRAVE]')*/
        res.innerHTML = `Impossível Contar`
        } else {
    /*alert ('Tudo ok')*/  /*teste de funcionalidade*/

        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert (`Impossível utilizar o PASSO 0, considere o passo 1.`)
            p = 1
        }
        if (i < f) {
            /*O código abaixo só funciona se o INÍCIO for maior que o FIM*/ 
            for ( let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }    
        } else {
            /*O código abaixo só funciona se o INÍCIO for menor que o FIM*/
            for (let c = i; c >= f; c -= p ) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

