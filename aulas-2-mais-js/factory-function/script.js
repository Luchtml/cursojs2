// function createButton(text){

//     const numeroSecreto = 'j2342mn4324çasd'

//     function element() {
//         const btnElement = document.createElement('button')
//         btnElement.innerText = text
//         return btnElement
//     }

//     return{
//         text,
//         element,
//         numeroSecreto,
//     }
// }

// const btnComprar = createButton('Comprar')
// const btnVender = createButton('Vender')

// console.log(btnComprar, btnVender)



///////////////////////////////////////////////////////////

// function createButton(text){


//     function element() {
//         const btnElement = document.createElement('button')
//         btnElement.innerText = text
//         return btnElement
//     }

//     return Object.freeze({
//         text,
//         element,
//     })
// }

// const btnComprar = createButton('Comprar')
// const btnVender = createButton('Vender')

// btnComprar.text = 'Novo Texto'
// btnComprar.element = 'Novo Texto'

// console.log(btnComprar, btnVender)

function Pessoa(nome) {
    // if(!(this instanceof Pessoa))
    //forma nova do ES6
    if(!new.target)
        return new Pessoa(nome)
    
   this.nome = nome
}

Pessoa.prototype.andar = () => {
  return `${this.nome} andou`
}

const designer = Pessoa('Lucas')

console.log(designer)