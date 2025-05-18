var hora = 8

console.log(`Agora são exatamente ${hora}`)

if(hora > 6 && hora < 12){
    console.log('bom dia')
}else if(hora < 18){
    console.log('Boa tarde')
}else if(hora > 18){
    console.log('Boa Noite')
}