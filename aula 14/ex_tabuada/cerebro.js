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
/*
- É possível utilizar tanto o "for" quanto o "while".

- Para criar um elemento dentro do JS, utilize:
let item = document.createElement('option'). O 'option' é apenas um dos elementos.

- Isso é a parte de dentro do option: item.text = `${n} x ${c} = ${n*c}`

- O item.value = `tab${c}` faz com que seja possível saber qual item foi selecionado.

*/
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

        }
    }
}

/*

Crie uma função chamada tabuada.

Pegue o elemento do HTML com id txtn e guarde na variável num.

Pegue o elemento do HTML com id seltab e guarde na variável tab.

Se o valor digitado no campo estiver vazio,
mostre uma mensagem de alerta dizendo “Tente Novamente!”.

Caso contrário:

Converta o valor digitado em um número e guarde na variável n.

Crie um contador chamado c, começando em 1.

Limpe o conteúdo atual da área onde a tabuada será exibida.

Enquanto o contador c for menor ou igual a 10:

Crie um elemento do tipo option.

Defina o texto da opção no formato:
n × c = resultado.

Defina o valor interno da opção como tab + contador.

Adicione a opção criada dentro do elemento da tabuada.

Aumente o contador em 1.

Fim do loop.

Fim da condição.

Fim da função.

*/
