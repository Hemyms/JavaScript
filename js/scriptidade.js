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
                img.setAttribute('src', 'image/m.crianca.png')

            }else if(idade < 18){
                img.setAttribute('src', 'image/m.adolescente.png')

            }else if (idade < 50){
                img.setAttribute('src', 'image/m.adulto.png')
            
            }else{
                img.setAttribute('src', 'image/m.velho.png')
            }



        }else if (fsex[1].checked){
            genero = "Mulher"
            document.body.style.background = 'pink'
            if(idade >= 0 && idade <11){
                img.setAttribute('src', 'image/f.crianca.png')

            }else if(idade < 18){
                img.setAttribute('src', 'image/f.adolescente.png')

            }else if (idade < 50){
                img.setAttribute('src', 'image/f.adulto.png')
            
            }else{
                img.setAttribute('src', 'image/f.velha.png')
            }
        }
        res.innerHTML = `<p> Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}