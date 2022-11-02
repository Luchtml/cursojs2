function Pessoas(nome, idade, sobrenome) {
    this.nome = nome
    this.idade = idade 
    this.sobrenome = sobrenome
}

Pessoas.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}
const lucas = new Pessoas('Lucas', 26, 'Costa')


