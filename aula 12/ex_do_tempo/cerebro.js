function carregar () {

   var msg = document.getElementById ('msg')
   var img = document.getElementById('imagem')

   var data = new Date ()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas`

   var hora = 10
   
   if (hora >= 0 && hora < 12) {
      //BOMDIA
      document.body.style.background = '#4787CA'
      img.src = 'imagens/dia.png'
   } else if (hora >= 12 && hora < 18) {
      // BOATARDE
      img.src = 'imagens/tarde.png'
      document.body.style.background = '#DD8E4C'
   } else {
      // BOANOITE
      img.src = 'imagens/noite.png'
      document.body.style.background = '#674E7B'
   }

}