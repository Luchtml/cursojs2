//Desafio 1

let produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado']
console.log(produtos)
console.log(produtos.length)
console.log('Tirando produto Mouse: '+ produtos.filter(p => p !== 'Mouse'));
// produtos.splice(produtos.indexOf('Mouse'), 1)
console.log(produtos)
console.log(produtos.length)

//console.log(produtos.indexOf('Computador'))

let busca = produtos.find(p => p==='Computador')
console.log(busca)

produtos.splice([1], 1)
console.log(produtos)


//Desafio2

const numbers = [1, 5, 3, 6, 8, 9, 7]

numbers.sort()
console.log(numbers)
numbers.shift
console.log(numbers)
numbers.reverse()
console.log(numbers)

//Desafio 3

let hoje = '24/10/2022';
const [dia, mes, ano] = hoje.split('/');

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);