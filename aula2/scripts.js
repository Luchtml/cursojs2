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