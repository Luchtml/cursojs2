//exercicio 1


// const tela = document.querySelector("html");
// const corAtual = tela.style.background;
// tela.style.background = "blue";



// setInterval(() => {
//   if (tela.style.background === "red") {
//     tela.style.background = "blue";
//   } else {
//     tela.style.background = "red";
//   }
// }, 2000);


//exercicio 2
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let i = 1
let timer

function iniciarTempo () {
    timer = setInterval (() => {
        tempo.innerText = i++
    }, 100)
    iniciar.setAttribute('disabled', '')
}

function pausarTempo () {
    clearInterval(timer)
    iniciar.removeAttribute('disabled')

}

function resetarTempo () {
    tempo.innerText = 0
    i = 1
}






