function contar () {
    
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {

        res.innerHTML = `Impossível contar`
    } else {
        /*alert('Tudo ok')*/

    }

    res.innerHTML = `Contando <br>`

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)

if (p<=0) {

    window.alert ('Função indisponível')

    p=1
}

if (i<f) {
    for (let c=i; c<=f; c+=p) {
        res.innerHTML += `${c} \u{1F499}`
    } 
} else {
    for (let c=i; c>=f; c-=p) {
        res.innerHTML += `${c} \u{1F499}`
    }
}

}