function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function() {
        console.log(this.nome + ' andou')
    }
}

const lucas = new Pessoa('Lucas', 26)
const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)

function Dom(seletor){
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList
    this.addClass = function(classe){
        elementList.forEach((element) => {
            element.classList.add(classe)
        })
    }
}

const listaItens = new Dom('li')