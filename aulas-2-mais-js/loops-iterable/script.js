// crie 4 li's na página utilizando for ... of adicione uma classe a cada li

const itens = document.querySelectorAll('li')

for(const item of itens) {
    item.classList.add('ativo')
}











//utilize o for... in para lista todos as propriedades e valores do objeto window

for(const propriedade in window) {
    console.log(propriedade + ': ' + window[propriedade])
}