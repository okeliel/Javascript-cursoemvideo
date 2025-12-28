function  carregar () {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')

    var data = new Date ()
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    var hora= 20

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/dia2.png'
        document.body.style.background = '#4787CA'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde2.png'
        document.body.style.background = '#DD8E4C'
    } else {
        img.src = 'imagens/noite2.png'
        document.body.style.background = '#674E7B'
    }

}