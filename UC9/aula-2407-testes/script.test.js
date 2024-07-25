const calculadora = require("./script");

test("Testando a função subtrair", () => {
	// implemente seus testes aqui
	expect(calculadora.subtrairDoisNumeros(5, 2)).toBe(3);
	expect(calculadora.subtrairDoisNumeros(5, "2")).toBe(
		"Erro: Os valores devem ser números",
	);
	0;
});

test("Testando a função multiplicar", () => {
	// implemente seus testes aqui
	expect(calculadora.multiplicarDoisNumeros(5, 2)).toBe(10);
	expect(calculadora.multiplicarDoisNumeros(5, "2")).toBe(
		"Erro: Os valores devem ser números",
	);
});

test("Testando a função dividir", () => {
	// implemente seus testes aqui
	expect(calculadora.dividirDoisNumeros(10, 2)).toBe(5);
	expect(calculadora.dividirDoisNumeros(10, 0)).toBe(
		"Erro: Não é possível dividir por zero",
	);
	expect(calculadora.dividirDoisNumeros(0, 0)).toBe(0);
	expect(calculadora.dividirDoisNumeros(10, "2")).toBe(
		"Erro: Os valores devem ser números",
	);
});

test("Testando a função somar", () => {
  // implemente seus testes aqui
  expect(calculadora.somarDoisNumeros(5, 2)).toBe(7);
  expect(calculadora.somarDoisNumeros(5, "2")).toBe(
    "Erro: Os valores devem ser números",
  );
});