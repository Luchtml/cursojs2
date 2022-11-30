const frutas = ['Bana', 'Morango', 'Uva']
const frase = 'Isso é JavaScript'

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers))