const regexp = /\w+[-.]/gi
const regexp1 = new RegExp('\\d+', 'gi')

const frase = 'JavaScript Linguagem 101'
console.log(frase.replace(regexp1, 'X'))


