//find

let listagem = [5, 3, 'Lucas', 13, 15, 'Thamires']

let busca = listagem.find((item)=>{
    if(item==='Lucas') {
        return console.log('item encontrado')
    }
})


//filter

let palavras = ['Lucas', 'Thamires', 'Ana', 'Jose', 'Joao', 'Tiburcio']

let resultado = palavras.filter((item) => {
    return item.length <= 4
})

console.log(resultado)