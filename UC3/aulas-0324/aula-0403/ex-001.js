// Calcule o preço total de um produto após aplicar um desconto de 20%.

function calcularDesconto(event) {
  event.preventDefault();
  let preco = document.getElementById("preco").value;
  let desconto = document.getElementById("desconto").value;
  let precoFinal = preco - (preco * desconto) / 100;
  let resultadoDesconto = document.getElementById("resultadoDesconto");
  resultadoDesconto.innerText = `O preço com desconto é: R$ ${precoFinal}`;
}

let btnCalcularDesconto = document.getElementById("calcularDesconto");
btnCalcularDesconto.addEventListener("click", calcularDesconto);

// Converta de Celsius para Fahrenheit

function converterCelsiusParaFahrenheit(event) {
  event.preventDefault();
  let celsius = document.getElementById("temperatura").value;
  let fahrenheit = celsius * 1.8 + 32;
  let resultadoTemperatura = document.getElementById("resultadoTemperatura");
  resultadoTemperatura.innerText = `A temperatura em Fahrenheit é: ${fahrenheit}°F`;
}

let btnConverterTemperatura = document.getElementById("converterTemperatura");
btnConverterTemperatura.addEventListener(
  "click",
  converterCelsiusParaFahrenheit
);

// Calcular o perimetro e a área de um retângulo

function calcularQuadrado(event) {
  event.preventDefault();
  let lado = document.getElementById("lado").value;
  let perimetro = lado * 4;
  let area = lado * lado;
  let resultadoQuadrado = document.getElementById("resultadoQuadrado");
  resultadoQuadrado.innerText = `O perimetro é ${perimetro} e a área é ${area}`;
}

let btnCalcularQuadrado = document.getElementById("calcularQuadrado");
btnCalcularQuadrado.addEventListener("click", calcularQuadrado);

// Calcular a idade com base no ano de nascimento

function calcularIdade(event) {
  event.preventDefault();
  let anoNascimento = document.getElementById("anoNascimento").value;
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - anoNascimento;
  let resultadoIdade = document.getElementById("resultadoIdade");
  resultadoIdade.innerText = `A sua idade é: ${idade} anos`;
}

let btnCalcularIdade = document.getElementById("calcularIdade");
btnCalcularIdade.addEventListener("click", calcularIdade);

// Calcular o novo preço de um produto com base no valor do produto e na média mensal de vendas

function reajustarPreco(event, valorProduto, vendaMediaMensal) {
  event.preventDefault();
  valorProduto = document.getElementById("valorProduto").value;
  vendaMediaMensal = document.getElementById("vendaMediaMensal").value;
  let resultadoNovoPreco = document.getElementById("resultadoNovoPreco");

  if (valorProduto < 30 && vendaMediaMensal < 500) {
    novoPreco = valorProduto * 1.1;
  } else if (
    valorProduto >= 30 &&
    valorProduto < 80 &&
    vendaMediaMensal >= 500 &&
    vendaMediaMensal < 1200
  ) {
    novoPreco = valorProduto * 1.15;
  } else if (valorProduto >= 80 && vendaMediaMensal >= 1200) {
    novoPreco = valorProduto * 0.8;
  } else {
    resultadoNovoPreco.innerText = "Não houve alteração no preço";
  }

  if (novoPreco !== "Não houve alteração no preço") {
    resultadoNovoPreco.innerText = `O novo preço é: R$ ${novoPreco.toFixed(2)}`;
  }
}

let btnReajustarPreco = document.getElementById("reajustarPreco");
btnReajustarPreco.addEventListener("click", reajustarPreco);
