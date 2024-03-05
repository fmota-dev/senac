const reajustarPreco = require('./atividade-casa.js');

test('Caso de teste 1: Valores de limite inferior', () => {
	console.log = jest.fn(); // Simula console.log
	reajustarPreco(10, 100);
	expect(console.log).toHaveBeenCalledWith(
		'O valor do produto reajustado é 11'
	);
});

test('Caso de teste 2: Valores de limite médio', () => {
	console.log = jest.fn(); // Simula console.log
	reajustarPreco(50, 800);
	expect(console.log).toHaveBeenCalledWith(
		'O valor do produto reajustado é 57.5'
	);
});

test('Caso de teste 3: Valores de limite superior', () => {
	console.log = jest.fn(); // Simula console.log
	reajustarPreco(100, 1500);
	expect(console.log).toHaveBeenCalledWith(
		'O valor do produto reajustado é 80'
	);
});
