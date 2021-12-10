function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('ERROR! Digite um dado valido!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            document.body.style.background = 'lightblue'
            if(idade >= 0 && idade <11){
                img.setAttribute('src', 'images/m.crianca.png')

            }else if(idade < 18){
                img.setAttribute('src', 'images/m.adolescente.png')

            }else if (idade < 50){
                img.setAttribute('src', 'images/m.adulto.png')
            
            }else{
                img.setAttribute('src', 'images/m.velho.png')
            }



        }else if (fsex[1].checked){
            genero = "Mulher"
            document.body.style.background = 'pink'
            if(idade >= 0 && idade <11){
                img.setAttribute('src', 'images/f.crianca.png')

            }else if(idade < 18){
                img.setAttribute('src', 'images/f.adolescente.png')

            }else if (idade < 50){
                img.setAttribute('src', 'images/f.adulto.png')
            
            }else{
                img.setAttribute('src', 'images/f.velha.png')
            }
        }
        res.innerHTML = `<p> Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}