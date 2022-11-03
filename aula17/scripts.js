//DESAFIO-- somar todas as taxas e recebimentos

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39'
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99'
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129'
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49'
    },
]


let transacoesTotal = 0
let recebimentoTotal = 0  

transacoes.forEach((item)  => {
    let numeroLimpo = +item.valor.replace('R$ ', '')
    if(item.descricao.slice(0, 4) === 'Taxa') {
        transacoesTotal += numeroLimpo
    } else if(item.descricao.slice(0, 4) === 'Rece'){
        recebimentoTotal += numeroLimpo
    }
})

console.log(transacoesTotal)
console.log(recebimentoTotal)


//DESAFIO -- converter a string em array

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'

const arrayTransportes = transportes.split(';')


console.log(arrayTransportes)
//DESAFIO --Substitua todos os span's por a's

let html = `<ul>
                    <li><span>Sobre</span></li>
                    <li><span>Produtos</span></li>
                    <li><span>Contato</span></li>
              </ul>`

html = html.split('span').join('a')
console.log(html)


//DESAFIO -- Retorne o último caracter da frase

const frase = 'Melhor do ano!'


console.log(frase[frase.length - 1])



//DESAFIO -- Retorne o total de taxas



const transacoes2 = ['Taxa do Banco', '    TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial']

let taxasTotais = 0
transacoes2.forEach((item) => {
    item = item.toLowerCase().trim()
    if (item.slice(0, 4) === 'taxa'){
    taxasTotais++
    }

})

console.log(taxasTotais)