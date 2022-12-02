// const regexp = /\w+[-.]/gi
// const regexp1 = new RegExp('\\d+', 'gi')

// const frase = 'JavaScript Linguagem 101'
// console.log(frase.replace(regexp1, 'X'))



//LOOP COM METODO TESTE()
const regexp = /Java/g
const frase = 'JavaScript e Java Linguagem 101 Java'

let i = 1
while(regexp.test(frase)) {
    console.log(i++, regexp.lastIndex)
}



////////////////////////////////////////////////////////////////////////

//LOOP COM METODO EXEC()

const frase2 = 'JavaScript, TypeScript, CoffeScript, Java'

const regexp2 =/\w+/g

let regexpResult
while((regexpResult= regexp2.exec(frase2)) !== null) {
    console.log(regexpResult[0])
}


//match()
//split()