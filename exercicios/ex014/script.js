
function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours() -10
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} : ${min}`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#B8633C'
    } else if (hora >=12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#4e4848'
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#441244'
    }
}


