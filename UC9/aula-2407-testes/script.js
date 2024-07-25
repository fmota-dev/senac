class Calculadora {
  somarDoisNumeros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Erro: Os valores devem ser números";
    }

    return a + b;
  }

  subtrairDoisNumeros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Erro: Os valores devem ser números";
    }

    return a - b;
  }

  multiplicarDoisNumeros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Erro: Os valores devem ser números";
    }

    return a * b;
  }

  dividirDoisNumeros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Erro: Os valores devem ser números";
    }

    if (a !== 0 && b === 0) {
      return "Erro: Não é possível dividir por zero";
    }

    if (a === 0 && b === 0) {
      return 0;
    }

    return a / b;
  }
}

module.exports = new Calculadora();
