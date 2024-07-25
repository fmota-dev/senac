const notaFaltante = require("./alunos");

// Teste se o valor está correto

describe("Testa a função notaFaltante", () => {
  it("Testa se a função notaFaltante retorna o valor correto", () => {
    expect(notaFaltante(10, 10, 10)).toBe("Aprovado");
    expect(notaFaltante(10, 10, 5)).toBe("Aprovado");
    expect(notaFaltante(10, 5, 5)).toBe(0.3);
    expect(notaFaltante(5, 5, 5)).toBe(2);
  });

  it("Testa se a função notaFaltante retorna a mensagem correta para valores inválidos", () => {
    expect(notaFaltante("10", 10, 10)).toBe("Valor inválido");
    expect(notaFaltante(10, "10", 10)).toBe("Valor inválido");
    expect(notaFaltante(10, 10, "10")).toBe("Valor inválido");
  });

  it("Testa se a função notaFaltante retorna a mensagem correta para valores menores que 0", () => {
    expect(notaFaltante(-1, 10, 10)).toBe("Valor igual ou menor que 0");
    expect(notaFaltante(10, -1, 10)).toBe("Valor igual ou menor que 0");
    expect(notaFaltante(10, 10, -1)).toBe("Valor igual ou menor que 0");
  });
})