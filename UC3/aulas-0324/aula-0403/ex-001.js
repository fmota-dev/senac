// Calcule o preço total de um produto após aplicar um desconto de 20%.

function calcularDesconto() {
  let preco = prompt("Digite o preço do produto");
  let desconto = prompt("Digite o desconto");
  let precoFinal = preco - (preco * desconto) / 100;
  alert(precoFinal);
}

let button = document.getElementById("calcularDesconto");
button.addEventListener("click", calcularDesconto);

// Converta de Celsius para Fahrenheit

function converterCelsiusParaFahrenheit() {
  let celsius = prompt("Digite a temperatura em Celsius");
  let fahrenheit = celsius * 1.8 + 32;
  alert(`A temperatura em Fahrenheit é: ${fahrenheit}`);
}

let button2 = document.getElementById("converterTemperatura");
button2.addEventListener("click", converterCelsiusParaFahrenheit);

// Calcular o perimetro e a área de um retângulo

function calcularQuadrado() {
  let lado = prompt("Digite o lado do quadrado");
  let perimetro = lado * 4;
  let area = lado * lado;
  alert(`O perimetro é: ${perimetro} e a área é: ${area}`);
}

let button3 = document.getElementById("calcularQuadrado");
button3.addEventListener("click", calcularQuadrado);

// Calcular a idade com base no ano de nascimento

function calcularIdade() {
  let anoNascimento = prompt("Digite o ano de nascimento");
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - anoNascimento;
  alert(`A idade é: ${idade}`);
}

let button4 = document.getElementById("calcularIdade");
button4.addEventListener("click", calcularIdade);
