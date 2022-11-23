class Veiculo {
    constructor(rodas) {
        this.rodas = rodas
    }
    acelerar() {
        console.log('acelerou')
    }
}

class Moto extends Veiculo {
    empinar() {
        console.log('Moto empinou com ' + this.rodas + 'rodas')
    }
}

const honda = new Moto(2)