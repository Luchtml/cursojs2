// const promesa = new Promise(function(resolve, reject) {
//     let condicao = true

//     if(condicao) {
//         setTimeout(() => {
//             resolve('Lucas')
//         }, 2000)
       
//     }
//     else {
//         reject(Error('Um errro ocorreu na promise'))
//     }
// })

// const retorno = promesa.then(function(resolucao){
//     return 'teste'
// }).then(resolucao => {
//     console.log(resolucao)
// }, rejeitada => {
//     console.log(rejeitada)
//     console.log('catch')
//     }).finally(() => {
//         console.log('acabou')
//     }) 

// console.log(retorno)

const login = new Promise((resolve) => {
    setTimeout(()=> {
        resolve('Usuário Logado')
    }, 1000)
})
const dados = new Promise((resolve) => {
    setTimeout(()=> {
        resolve('Dados Carregados')
    }, 1500)
})

const carregouTudo = Promise.race([login, dados])

carregouTudo.then((resolucao) => {
    console.log(resolucao)
})