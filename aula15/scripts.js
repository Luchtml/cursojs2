function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
    this.abracar = function(){
        return 'Abraçou'
    }
    this.andar = function(){
        return 'Andou pelo objeto'
    }
}

Pessoa.prototype.andar = function(){
    return this.nome + ' andou'
}
Pessoa.prototype.nadar = function(){
    return this.nome + ' nadou'
}

const lucas = new Pessoa('Lucas', 26)
// console.log(Pessoa.prototype)
// console.log(lucas.prototype)


const pais = 'Brasil'
const cidade = new String('Rio')