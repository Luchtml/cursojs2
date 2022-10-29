function isTruthy(valor){
    return !!valor
}

function quadrado(lado) {
    let total = lado * 4
    return total
}

console.log(quadrado(5))

function nome(nome, sobrenome) {
    return `${nome}  ${sobrenome}`
}

console.log('Lucas', 'Costa')

function verificarPar(numero){
    let modulo = numero % 2 
    if(modulo === 0) {
        return true
    } else {
        return false
    }
}

function tipoDeDado (dado){
    return typeof dado
}

