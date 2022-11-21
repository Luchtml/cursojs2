const estilo = fetch('./style.css')


estilo.then(resolucao => {
    return resolucao.text()
}).then((body) => {
    const conteudo = document.querySelector('.conteudo')
    const style = document.createElement('style')
    style.innerHTML = body
    conteudo.appendChild(style) 
})