//Remova o erro

const priceNumber = n => +n.replace('R$', '').replace(',', '.')
console.log(priceNumber('R$ 99,99'));




// Crie IIFE e isole o escopo de qualquer código JS
(() => {
    var nome = 'Lucas'
    console.log(nome)
})()



// como podemos utilizar a função abaixo

const active = callback => callback()

active(() => {
    console.log('teste active')
})