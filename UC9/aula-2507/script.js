// função que encontra o volume do cubo

function volumeCubo(lado) {
	if (typeof lado !== "number" || Number.isNaN(lado)) {
		return "Valor inválido";
	}

	if (lado <= 0) {
		return "Valor igual ou menor que 0";
	}

	return lado ** 3;
}

module.exports = volumeCubo;
// testar se calcula o volume do cubo corretamente para valores inteiros e reais com jest
