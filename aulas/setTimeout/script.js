for(let i = 0; i < 20; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000 * i)
}

function loop (texto) {
    console.log(texto)
}
let i = 0
// setInterval(() => {
//     console.log(i++)
//     if(i>20) {
//         clearInterval
//     }
// }, 300)


const meuLoop = setInterval(() => {
    console.log(i++)
    if(i>20) {
        clearInterval(meuLoop)
    }
}, 300)

