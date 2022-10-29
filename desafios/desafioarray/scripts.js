let brasilCopa = [1959, 1962, 1970, 1994, 2002]

brasilCopa.forEach(ganhou => {
    console.log(`O Brasil ganhou a copa de ${ganhou}`)
});


let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let fruta = 0; fruta < frutas.length; fruta++){
    console.log(frutas[fruta])
    if(frutas[fruta] === 'Pera') {
        break
    }
}

let ultimaFruta = frutas[frutas.length -1]

console.log(ultimaFruta)
console.log(frutas)