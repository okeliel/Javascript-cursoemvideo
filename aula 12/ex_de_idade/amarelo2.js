function verificar() {

    /*window.alert('Função em desenvolvimento!')*/ 
            /*primeiro teste*/
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano') /*fano = formulário ano*/
    var res = document.querySelector('div#res') /*res = resultado*/
    
    if (fano.value.length == 0 || Number (fano.value) > ano ) {
        /*window.alert('[ERRO] Verifique os dados e tente novamente!')*/ /*segundo teste*/
    } else {
        /*window.alert('Tudo OK!')*/ /*terceiro teste*/

        var fsexo = document.getElementsByName('radsex') /*fsexo = formulário sexo*/


        var idade = ano - Number (fano.value)

        /*res.innerHTML = `Idade calculada: ${idade} anos.`*/
        /*quarto teste*/

        var img = document.createElement('img')
        img.setAttribute('id','foto') 
        /*cria o elemento img semelhante ao html com o id foto*/

        if (fsexo[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) /*criança*/ {
            img.setAttribute('src','baby_boy.png')    
            } else if (idade < 21) /*Jovem*/ {
            img.setAttribute('src', 'teen_boy.png')    
            } else if (idade < 50) /*adulto*/ {
                img.setAttribute('src', 'adult_boy.png')
            } else {
                img.setAttribute('src' , 'old_boy.png') /*idoso*/

            }     
            
        } else if (fsexo [1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) /*criança*/ {
                img.setAttribute('src' , 'baby_girl.png')
            } else if (idade < 21) /*Jovem*/ {
                img.setAttribute('src' , 'teen_girl.png')
            } else if (idade < 50) /*Adulto*/ {
                img.setAttribute('src' , 'adult_girl.png')
            } else {
                img.setAttribute('src' , 'old_girl.png') /*idosa*/
            }
        }
        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) /*Não pode estar acima do innerHTML*/
    
        res.style.textAlign = 'center'
        
    

        img.style.width = "180px";
        img.style.height = "180px";

        img.style.display = "block";
        img.style.marginLeft = "auto";
        img.style.marginRight = "auto";
    }
    
}