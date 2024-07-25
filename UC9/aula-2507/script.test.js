const volumeCubo = require("./script.js");

test("Volume de um cubo de lado 2 é 8", () => {
	expect(volumeCubo(2)).toBe(8);
});

// exibi uma mensagem de erro se o valor for 0 ou negativo

test("Valor 0 ou negativo exibe mensagem de erro", () => {
	expect(volumeCubo(0)).toBe("Valor igual ou menor que 0");
	expect(volumeCubo(-1)).toBe("Valor igual ou menor que 0");
});

// exibi uma mensagem de erro se o valor não for um número

test("Valor que não é número exibe mensagem de erro", () => {
	expect(volumeCubo("2")).toBe("Valor inválido");
	expect(volumeCubo(true)).toBe("Valor inválido");
})
