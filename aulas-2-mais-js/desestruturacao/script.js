//Extraia o backgroundColor e margin do btn
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

const { backgroundColor, margin, color } = btnStyles;

console.log(backgroundColor, margin, color);

//Trocar o valor das variaveis entre si

let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

console.log(cursoAtivo, cursoInativo);
