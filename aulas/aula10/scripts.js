// //MAP = PERCORRER TODA UMA LISTA

// let lista = ['Lucas', 'Maria', 'Jose', 'Iara']

// lista.map((item, index) => {
//     console.log(`passando: ${item} - Esta na posição ${index}`)
// })

//reduce = busca reduzir um array

let numeros = [5, 2, 7, 10]

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`)
    console.log(`${numero} - valor atual`)
    // console.log(`${indice} - indice atual`)
    // console.log(`${original} - array original`)
    console.log('==================================================')
    return acumulador += numero
})

console.log('total do reduce' + ' '  + total)