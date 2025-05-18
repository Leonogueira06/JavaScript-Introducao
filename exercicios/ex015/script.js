function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fAno = document.querySelector('input#ano')
    var res = document.querySelector('div#resultado')

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[Error] verifique os dados e tente novamente')
    }else{
        var fSex = document.getElementsByName('sex')
        var idade = ano - number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
    }
    
}