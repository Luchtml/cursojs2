class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('acelerou')
    }
}

class Moto extends Veiculo {
    constructor (rodas, capacete) {
        super(rodas)
        this.capacete = capacete
    }
    acelerar() {
        super.acelerar()
        console.log('acelerou rapido')
    }
    empinar() {
        console.log('Moto empinou com ' + this.rodas + ' rodas')
    }
}

const honda = new Moto(2, true)
const civic = new Veiculo(4)