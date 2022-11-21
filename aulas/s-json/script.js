// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then( r => r.json())
// .then( pokemon => {
//     console.log(pokemon)
// })

const url = 'https://jsonplaceholder.typicode.com/posts'


fetch(url, {
    method: 'POST',
    body: '{"tittle": "JavaScript"}',
    headers: {
        "Content-Type"
    }
})