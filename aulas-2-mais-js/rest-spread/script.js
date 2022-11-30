//Reescreva a função utilizando valores iniciais de ES6

function createButton(background = 'blue', color = 'red') {

    const buttonElement = document.createElement('button')
    buttonElement.style.background = background
    buttonElement.style.color = color
    return buttonElement
}

const redButton = createButton()

console.log(redButton)






//Utilize o método push para inserir as frutas ao final  de comidas


const frutas = ['Banana', 'Uva', 'Morango']
const comidas = ['Pizza', 'Batata']

comidas.push('Cenoura', 'Pimenta',...frutas)

console.log(comidas)