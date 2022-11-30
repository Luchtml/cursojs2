const frutas = ['Bana', 'Morango', 'Uva']
const frase = 'Isso é JavaScript'

for(const fruta of frutas) {
    console.log(fruta)
}
// for(const char of frase) {
//     console.log(char)
// }

const buttons = document.querySelectorAll('button')

for(const btn of buttons) {
    btn.style.color = 'blue'
}

console.log(...buttons)


// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers))

const carro = {
    marca: 'Honda',
    ano: 2018,
}

// for(const chave of carro) {
//     console.log(chave)
// }
                            // [ERRO]



for(const propriedade in carro) {
    console.log(propriedade, carro[propriedade])
}