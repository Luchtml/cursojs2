// const regexp = /\w+[-.]/gi
// const regexp1 = new RegExp('\\d+', 'gi')

// const frase = 'JavaScript Linguagem 101'
// console.log(frase.replace(regexp1, 'X'))



// //LOOP COM METODO TESTE()
// const regexp = /Java/g
// const frase = 'JavaScript e Java Linguagem 101 Java'

// let i = 1
// while(regexp.test(frase)) {
//     console.log(i++, regexp.lastIndex)
// }



// ////////////////////////////////////////////////////////////////////////

// //LOOP COM METODO EXEC()

// const frase2 = 'JavaScript, TypeScript, CoffeScript, Java'

// const regexp2 =/\w+/g

// let regexpResult
// while((regexpResult= regexp2.exec(frase2)) !== null) {
//     console.log(regexpResult[0])
// }


//match()

//split()



///////////////////////////////////// replace()

// const tags = `
// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
// </ul>
// `

// // const regexp
// //ou regexp ou valor qualquer

// const regexp = /(?<=<\/?)\w+/g

// const resultado = tags.replace(regexp, '$& class="ativo"')

// console.log(resultado)

const emails = `empresa@homail.com
contato@ggmail.com
suporte@oulook.com
`

const regexp = /(\w+@)([\w.]+)/g

const resultado = emails.replace(regexp, function(...args){
    if(args[2] === 'homail.com'){
        return args[1] + 'hotmail.com.br'
    } else if(args[2] === 'ggmail.com'){
        return args[1] + 'gmail.com.br'
    } else if(args[2] === 'oulook.com'){
        return args[1] + 'outlook.com.br'
    } else {
        return args[0]
    }
})

console.log(resultado)