// const cliente = {
//     nome: 'Andre',
//     compras: {
//         digitais: {
//             livros: ['Livro 1', 'Livro 2'],
//             videos: ['Video JS', 'Video HTML']
//         },
//         fisicas: {
//             cadernos: ['Caderno 1']
//         }
//     }
// }

// const {livros, videos} = cliente.compras.digitais
// const {nome} = cliente

// // const livros = 'TESTE'  [ERRO]

// console.log(livros, videos)
// console.log(nome)
// ////////////////////////////////////////////////////////////



// Desestruturação aninhada 


// const cliente = {
//     nome: 'Andre',
//     compras: {
//         digitais: {
//             livros: ['Livro 1', 'Livro 2'],
//             videos: ['Video JS', 'Video HTML']
//         },
//         fisicas: {
//             cadernos: ['Caderno 1']
//         }
//     }
// }


// // DESSA FORMA FAZEMOS UMA DESESTRUTURAÇÃO ANINHADA

// const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras


// console.log(digitais)

// OBJETOS////////////////////////////////////////////////////



// -> ARRAYS////////////////////////////////////////////////

const frutas = ['Banana', 'Uva', 'Morango']

const [primeira, segunda, terceira] = frutas

console.log(terceira)