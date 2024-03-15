let numeroSecreto = gerarNumeroSecreto();
let numeroChute = document.querySelector(".container__input");
let botaoReiniciar = document.getElementById("reiniciar");

function gerarNumeroSecreto() {
  let numero = Math.floor(Math.random() * 10) + 1;
  return numero;
}

function verificarChute() {
  if (numeroChute.value == numeroSecreto) {
    alert("Parabéns, você acertou!");
  }
}
