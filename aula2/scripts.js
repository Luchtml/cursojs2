let area = document.querySelector('#area')

function entrar() {
    let nome = prompt('Digite seu nome')
    if(nome === '' || nome === null) {
        alert('Ops algo deu errado')
        area.innerHTML = 'Clique no botão para acessar'
    } else{
    area.innerHTML = `Bem vindo ${nome}       `
    let btnSair = document.createElement('button')
    btnSair.innerText = 'Sair da conta'
    btnSair.onclick = sair
    area.appendChild(btnSair)        
    }
}

function sair() {
    alert ('Até mais')
    area.innerHTML = 'Você saiu!'
}

function mediaAluno(nota1, nota2){
    let media = (nota1 + nota2) / 2
    if(media >= 7) {
        console.log('Aluno Aprovado com a média:' + ' ' + media)
    } else if(media < 7) {
        console.log('Aluno reprovado com a média:' + ' ' + media)
    }
}

function aluno(nome, curso) {
    let msg = 'Seja Bem vindo(a) ' + nome + ' ao curso de ' + curso

    console.log(msg)
}