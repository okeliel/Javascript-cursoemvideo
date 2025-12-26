function verificar () {
    
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.querySelector ('div#res')
    
    if (fano.value.length == 0 ||  fano.value > ano) {
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var img = document.createElement('img')

        img.setAttribute('id','foto')

        if (fsexo[0].checked) {

            gênero = 'Homem'
            if (idade >= 0 && idade < 10) /*criança*/{
            img.setAttribute('src','baby_boy.png')
            } else if (idade < 21) /*jovem*/ {
            img.setAttribute('src' , 'teen_boy.png')
            } else if (idade < 50 ) /*adulto*/ {
            img.setAttribute('src' , 'adult_boy.png')
            } else {
            img.setAttribute('src', 'old_boy.png') /*idoso*/ 
            }
        }   else if (fsexo [1]. checked) {

            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) /*criança*/ {
                img.setAttribute('src' , 'baby_girl.png')
            } else if (idade < 21) /*jovem*/ {
            img.setAttribute('src' , 'teen_girl.png')
            } else if (idade < 50) {
                img.setAttribute('src' , 'adult_girl.png')
            } else {
                img.setAttribute ('src' , 'old_girl.png')
            }
        } 

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)

        img.style.width = "180px";
        img.style.height = "180px";

        img.style.display = "block";
        img.style.marginLeft = "auto";
        img.style.marginRight = "auto";
    }
}