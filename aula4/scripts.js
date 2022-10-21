let peso
let altura
let imc
let resultado


function calcular(event) {
    event.preventDefault()
    peso = document.querySelector('#peso').value
    altura = document.querySelector('#altura').value
    imc = peso / (altura*altura)
    if(imc < 17) {
        resultado = document.querySelector('#resultado')
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + '<br> Cuidado, você está muito abaixo do peso'
    } else if(imc > 17 && imc <= 18.49) {
        resultado = document.querySelector('#resultado')
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + '<br> Você está abaixo do peso!'
    } else if(imc >= 18.5 && imc <= 24.99) {
        resultado = document.querySelector('#resultado')
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + '<br> Você está no peso ideal'
    } else if(imc > 25 && imc <= 29.99) {
        resultado = document.querySelector('#resultado')
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + '<br> Cuidado, você está acima do peso'
    } else if (imc >= 30) {
        resultado = document.querySelector('#resultado')
        resultado.innerHTML = '<br> Seu resultado foi: ' + imc + '<br> Cuidado, obesidade'
    }

}