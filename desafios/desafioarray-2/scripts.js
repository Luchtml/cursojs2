/* 
    Remova o primeiro valor de comidas e coloque em uma váriavel
    Remova o ultimo valor de comidas e coloque em uma váriavel
    Adicione Arroz ao final da array
    Adicione Peixe e Batata ao inicio da array
*/

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']

const primieroValor = comidas.shift()
const ultimoValor = comidas.pop()
comidas.push('Arroz')
comidas.unshift('Peixe', 'Batata')






/*
    Arrume os estudantes em ordem alfabética
    Inverta a ordem dos estudantes
    Verifique se Joana faz parte dos estudantes
    Verifique se Juliana faz parte dos estudantes
*/

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

estudantes.sort()

estudantes.reverse()
console.log(estudantes)
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))




/* 
    Substitua section por ul e div por li utilizando split e join
*/

let html = `<section>
            <div>Sobre</div>
            <div>Produtos</div>
            <div>Contatos</div>
            </section>`


// html = html.split('section')
// html = html.join('ul')
// html = html.split('div')
// html = html.join('li')

html = html.split('section').join('ul').split('div').join('li')

console.log(html)




/*
    Remova o ultimo carro, mas antes salve a array original em outra váriavel
*/

const carros = ['Ford', 'Fiat', 'VW', 'Honda']


const carrosCopy = carros.slice()
carros.pop()

console.log(carros)
console.log(carrosCopy)

