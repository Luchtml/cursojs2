let pessoa = {
    nome: 'Lucas',
    sobrenome: 'Costa',
    cargo: 'Programador',
}

// console.log(pessoa.nome)
// console.log(pessoa.cargo)

// let nome = 'teste'

// const { nome:nomePessoa, cargo, sobrenome } = pessoa

// console.log(nomePessoa)
// console.log(cargo)
// console.log(sobrenome)


let nomes = ['Lucas', 'Henrique', 'Juliano']

// let {0:Lucas} = nomes

// console.log(Lucas)

let [primeiroNome, segundoNome] = nomes

console.log(primeiroNome, segundoNome)