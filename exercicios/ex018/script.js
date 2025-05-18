let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) > 0 && Number(n) < 101){ 
        return true
    }else{
        return false
    }
}

function inLista(n, i){
    if(i.indexOf(Number(n)) != -1){
        return true 
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    num.focus() 
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let soma = 0
        let media = 0
        valores.sort((a,b) => a - b)

        for(let pos in valores){
            soma += valores[pos]
        }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor foi ${valores[0]}</p>`
        res.innerHTML += `<p>O maior valor foi ${valores[valores.length - 1]}</p>`
        res.innerHTML += `<p>O valor da soma é: ${soma}</p>`
        res.innerHTML += `<p>O valor da Media é: ${media}</p>`
    }
}