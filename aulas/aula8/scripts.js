//spread para juntar



// let primeiros = [1, 2, 3]
// let numeros = [...primeiros, 4, 5, 10]

// console.log(numeros)


// let pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Henrique',
//     cargo: 'Programador',
//     idade: 30
// }

// let novaPessoa = {
//     ...pessoa,
//     status: 'ATIVO',
//     cidade: 'Campo Grande do Norte'
// }
// console.log(novaPessoa)

//como juntar objetos spread?


function novoUsuario (info){
    let dados = {
        ...info,
        status: 'ATIVo',
        incio: '27/07/2022',
        codigo: '132123123',
    }

    console.log(dados)
}

novoUsuario({nome: 'Lucas', sobrenome:'Silva', cargo:'Dev'})