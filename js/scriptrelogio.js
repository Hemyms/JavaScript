function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if(hora == 1){
        msg.innerHTML = `Agora são ${hora} hora`
    }else if(hora >= 0){
        msg.innerHTML = `Agora são ${hora} horas`
    }
    
    
    if( hora >= 0 && hora < 6){
        img.src = './image/madrugada.png'
        document.body.style.background = '#373737'
    }else if(hora >= 6 && hora < 12){
        img.src = 'image/manha.png'
        document.body.style.background = '#6b5d65'
    }else if(hora >= 12 && hora < 18) {
        img.src = 'image/tarde.png'
        document.body.style.background = '#58655f'
    }else {
        img.src = 'image/noite.png'
        document.body.style.background = '#332437'
    }
}