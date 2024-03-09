// Função para inserir os números e operadores na tela da calculadora
function inserir(valor) {
  document.getElementById("resultado").innerText += valor;
}

// Função para limpar o conteúdo da tela da calculadora
function limpar() {
  document.getElementById("resultado").innerText = "";
}

// Função para apagar o último caractere na tela da calculadora
function apagar() {
  let resultado = document.getElementById("resultado").innerText;
  document.getElementById("resultado").innerText = resultado.substring(
    0,
    resultado.length - 1
  );
}

// Função para calcular o resultado da expressão na tela da calculadora
function calcular() {
  let resultado = document.getElementById("resultado").innerText;
  let expressao = resultado.replace(/x/g, "*");
  let resultadoFinal = eval(expressao);
  document.getElementById("resultado").innerText = resultadoFinal;
}

const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    switch (botao.textContent) {
      case "C":
        limpar();
        break;
      case "<":
        apagar();
        break;
      case "/":
      case "x":
      case "-":
      case "+":
      case ".":
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        inserir(botao.textContent);
        break;
      case "=":
        calcular();
        break;
      default:
        console.log("Botão não reconhecido");
    }
  });
});
