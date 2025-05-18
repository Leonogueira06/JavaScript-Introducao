function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fAno = document.querySelector('input#ano')
    var res = document.querySelector('div#resultado')

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[Error] verifique os dados e tente novamente')
    }else{
        var fSex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        if (fSex[0].checked){
            genero = 'Homem'
            if (idade < 10 && idade >= 0){
                img.setAttribute('src', 'imagens/homem-crianca.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/homem-adolescente.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            }else{
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
        }else if(fSex[1].checked){
            genero = 'Mulher'
            if (idade < 10 && idade >= 0){
                img.setAttribute('src', 'imagens/mulher-crianca.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'imagens/mulher-adolescente.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            }else{
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }


}