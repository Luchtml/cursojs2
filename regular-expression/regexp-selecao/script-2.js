const regexpCEP = /\d{5}[\s-]?\d{3}/g;
const ceps = ["00000000", "00000-000", "00000 000"];

for(cep of ceps) {
    console.log(cep, cep.match(regexpCEP))
}