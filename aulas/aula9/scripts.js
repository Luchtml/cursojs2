// function convidados(...nomes){
//     console.log('Seja Bem vindo')
//     console.log(nomes)
// }

// convidados('matheus','Lucas', 'Jose', 'Joao', 'thamires')

function gerador(...numeros){
    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log(numeros[numeroGerado])
}

gerador(1, 4, 5, 10, 55, 7, 8, 9, 3)