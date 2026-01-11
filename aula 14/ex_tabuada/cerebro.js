function tabuada () {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    /*-------------------------------*/

    /* Se não houver nenhum número na tabuada, haverá um aviso.*/

    if (num.value.length == 0) {
        window.alert('Tente Novamente!')

    /*---------------------------------*/    

    /*O tab.innerHTML = '' apaga a tabuada anterior quando um novo número é digitado.  */
    } else {
        let n = Number (num.value)
        let c = 1
        tab.innerHTML = ''
/*-------------------------------------*/
/*Procure o significado do código abaixo! */
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

            /*O item.value = `tab${c}` faz com que seja possível a seleção na tabuada.*/
        }
    }
}