function contar(){
    let inicio = document.getElementById('inicio') 
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Impossivel executar a contagem')
    }else{
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} `
            }  
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} `
            }
        }
        

    }
}