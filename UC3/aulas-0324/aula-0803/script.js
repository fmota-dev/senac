let calculoFeito = false;
let operadores = ["+", "-", "x", "/"];

// Função para inserir um valor na tela da calculadora
function inserir(valor) {
  const displayElement = document.getElementById("display");
  let display = displayElement.innerText;
  let ultimoCaractere = display[display.length - 1];

  // Verifica se o cálculo já foi feito e o valor inserido não é um operador
  if (calculoFeito && !operadores.includes(valor)) {
    if (valor == ".") {
      displayElement.innerText = "0.";
      calculoFeito = false;
    } else {
      displayElement.innerText = valor;
      calculoFeito = false;
    }
  }
  // Verifica se o cálculo já foi feito e o valor inserido é um operador
  else if (calculoFeito && operadores.includes(valor)) {
    displayElement.innerText += valor;
    calculoFeito = false;
  }
  // Verifica se o valor inserido e o último caractere são operadores
  else if (operadores.includes(valor) && operadores.includes(ultimoCaractere)) {
    displayElement.innerText = display.slice(0, -1) + valor;
  }
  // Verifica se o valor inserido é um ponto decimal e o último caractere também é um ponto decimal
  else if (valor === "." && ultimoCaractere === ".") {
    return;
  }
  // Verifica se o valor inserido é um ponto decimal e o último caractere é um número
  else if (valor === "." && ultimoCaractere.match(/\d/)) {
    let partes = display.split(operadores);
    let ultimoNumero = partes[partes.length - 1];
    if (ultimoNumero.includes(".")) {
      return; // Já existe um ponto decimal no último número
    }
    displayElement.innerText += valor;
  }
  // Verifica se o valor inserido é um operador e o último caractere é um ponto decimal
  else if (valor === "." && operadores.includes(ultimoCaractere)) {
    displayElement.innerText += "0" + valor;
  }
  // Caso contrário, apenas adiciona o valor ao display
  else {
    displayElement.innerText += valor;
  }
}

let btnsInserir = document.querySelectorAll(".inserir");
btnsInserir.forEach((btn) => {
  btn.addEventListener("click", () => {
    inserir(btn.innerText);
  });
});

// Função para limpar o conteúdo da tela da calculadora
function limpar() {
  document.getElementById("display").innerText = "";
}

let btnLimpar = document.getElementById("limpar");
btnLimpar.addEventListener("click", limpar);

// Função para apagar o último caractere na tela da calculadora
function apagar() {
  let displayElement = document.getElementById("display");
  let display = displayElement.innerText;
  display = display.substring(0, display.length - 1);
  displayElement.innerText = display;
}

let btnApagar = document.getElementById("apagar");
btnApagar.addEventListener("click", apagar);

// Função para calcular o display da expressão na tela da calculadora
function calcular() {
  let displayElement = document.getElementById("display");
  let display = displayElement.innerText; // Definindo a variável display dentro da função calcular
  if (display) {
    let expressao = display.replaceAll("x", "*").replaceAll("÷", "/");
    try {
      let displayFinal = eval(expressao);
      displayElement.innerText = displayFinal;
      calculoFeito = true;
    } catch (erro) {
      displayElement.innerText = "Expressão inválida";
      calculoFeito = true;
    }
  }
}

let btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", calcular);
