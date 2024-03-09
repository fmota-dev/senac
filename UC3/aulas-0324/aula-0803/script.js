function inserir(valor) {
  let resultado = document.getElementById("resultado").innerText;

  // Verifica se o resultado atual é igual a 0 e o valor inserido não é um operador
  if (resultado === "0" && !["+", "-", "x", "/"].includes(valor)) {
    resultado = "";
  }

  // Verifica se o último caractere é um operador
  if (
    ["+", "-", "x", "/"].includes(resultado.slice(resultado.length - 1)) &&
    ["+", "-", "x", "/"].includes(valor)
  ) {
    // Remove o último operador antes de inserir o novo
    resultado = resultado.slice(0, resultado.length - 1);
  }

  document.getElementById("resultado").innerText = resultado + valor;
}

// Função para limpar o conteúdo da tela da calculadora
function limpar() {
  document.getElementById("resultado").innerText = "";
}

// Função para apagar o último caractere na tela da calculadora
function apagar() {
  let resultado = document.getElementById("resultado").innerText;
  resultado = document.getElementById("resultado").innerText =
    resultado.substring(0, resultado.length - 1);
}

// Função para calcular o resultado da expressão na tela da calculadora
function calcular() {
  let resultado = document.getElementById("resultado").innerText;

  if (resultado !== "") {
    let expressao = resultado.replaceAll("x", "*");
    let resultadoFinal = eval(expressao);
    document.getElementById("resultado").innerText = resultadoFinal;
  }
}


