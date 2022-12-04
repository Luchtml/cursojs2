// const cpfs = document.querySelectorAll('.cpf li')


// function elementsInnerText([...elements]) {
//     return elements.map(element => {
//         return element.innerText 
//     })
// }

// console.log(elementsInnerText(cpfs))



// funcão para pegar toda uma nodelist e converter em array de texto



const cpfsList = document.querySelectorAll('.cpf li')


const elementsInnerText = ([...elements]) => {
    return elements.map(element => {
        return element.innerText 
    })
}

const limparCpf = (cpf) => {
    return cpf.replace(/\D/g, '')
}

const construirCpf = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatarCpfs = (cpfs) => {
    return cpfs.map(limparCpf).map(construirCpf)
}

const substituirCpfs = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements)
    const cpfsFormatados = formatarCpfs(cpfs)

    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatados[index]
    })
}



substituirCpfs(cpfsList)

