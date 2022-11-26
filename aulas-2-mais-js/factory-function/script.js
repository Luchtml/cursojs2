function solucao(notaMinima,totalDeVagas,notasDoVestibular) {
	//seu codigo aqui

	let canditadosAceitos = []
	for (const nota of notasDoVestibular){
		if(!nota < notaMinima) {
			canditadosAceitos.push(nota)
		}
	}

	let aMenorNota

	if(canditadosAceitos.length > totalDeVagas){
		for (const notaVerificada of canditadosAceitos) {
			if (aMenorNota === undefined) {
				aMenorNota = notaVerificada;
				canditadosAceitos.sort()
		} else {
			if (notaVerificada < aMenorNota)
				aMenorNota = notaVerificada;
				canditadosAceitos.shift()
			}
		}
	 }
	 console.log(canditadosAceitos)
	}

	

function naoMexer(input) {
	const array = input.split("\n");
	const notaMinima = Number(array[0]);
	const totalDeVagas = Number(array[1]);
	const notasDoVestibular = array[2].trim().split(" ").map(x => Number(x));
	solucao(notaMinima,totalDeVagas,notasDoVestibular);
}
let input = require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);
