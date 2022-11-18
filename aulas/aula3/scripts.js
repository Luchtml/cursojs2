// Switch

// function pedir() {
//     let valor = prompt('Digite um valor de 1 a 4')

//     switch(+valor){
//         case 1:
//             alert('Você escolheu 1 = Suco')
//             break
//         case 2:
//             alert('Você escolheu 2 = Água gelada')
//             break
//         case 3:
//             alert('Você escolheu 3 = Sorvete')
//             break
//         case 4:
//             alert('Você escolheu 4 = Chamar garçom')
//             break
//         default:
//             alert('Escolha uma opção entre 1 a 4')
//             break
//     }
// }


function pedir() {
    let valor = prompt('Digite um valor de 1 a 4')

    switch(valor){
        case 'Matheus':
            alert('Olá Matheus')
            break
        case 'Lucas':
            alert('Olá Lucas')
            break
        default:
            alert('Ola fulanos')
            break
    }
}