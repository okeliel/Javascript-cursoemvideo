function verificar() {

/*window.alert('oi')*/

    var data = new Date ()
    var ano = data.getFullYear()

    var fano = document.querySelector('div#ano')
    var res = document.querySelector('div#res')


    if (
    fano.value.length == 0 || Number(fano.value) > ano) {

    } else {
        var fsexo = document.getElementsByName('radsex') 

        var idade = ano - Number(fano.value)

        var img = document.createElement('img')
        img.setAtribute('id', 'foto')

        if (fsexo[0].checked) {

            gênero = 'Homem'
            if (idade >= 0 && idade < 10) /*child*/ {
                img.setAttribute('src', 'baby_boy.png')
            } else if (idade < 21 ) /*young*/ {
                img.setAttribute('src', 'teen_boy.png')
        } else if (idade < 50) /*adult*/ {
            img.setAttribute('src', 'adult_boy.png')
        } else {
            img.setAttribute('src', old_boy.png) /*old*/
        }
        


    }

    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)

 
    
    }
}