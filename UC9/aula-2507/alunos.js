// função que define a nota que falta para o aluno ser aprovado

function notaFaltante(nota1, nota2, nota3) {
	if (
		typeof nota1 !== "number" ||
		typeof nota2 !== "number" ||
		typeof nota3 !== "number"
	) {
		return "Valor inválido";
	}

	if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
		return "Valor igual ou menor que 0";
	}

	const media = (nota1 + nota2 + nota3) / 3;

	if (media >= 7) {
		return "Aprovado";
	}

	let notaFaltante = 7 - media;

	notaFaltante = Number.parseFloat(notaFaltante.toFixed(1));

	return notaFaltante;
}

module.exports = notaFaltante;
