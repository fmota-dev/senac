let inputDeposito = document.getElementById("inputDeposito");
let inputRetirada = document.getElementById("inputRetirada");
let saldo = document.getElementById("saldo");
let btnDepositar = document.getElementById("btnDepositar");
let btnRetirar = document.getElementById("btnRetirar");
let saldoAtual = 0;

function depositarValor(event) {
  event.preventDefault();
  let valorDeposito = parseFloat(inputDeposito.value);
  saldoAtual += valorDeposito;
  saldo.innerText = `Saldo: R$${saldoAtual.toFixed(2)}`;
  inputDeposito.value = "";
}

btnDepositar.addEventListener("click", depositarValor);

function retirarValor(event) {
  event.preventDefault();
  let valorRetirada = parseFloat(inputRetirada.value);

  if (valorRetirada > saldoAtual) {
    alert("Saldo insuficiente!");
  } else if (valorRetirada <= 0) {
    alert("Valor inválido!");
  } else {
    saldoAtual -= valorRetirada;
    saldo.innerText = `Saldo: R$${saldoAtual.toFixed(2)}`;
  }
  inputDeposito.value = "";
}

btnRetirar.addEventListener("click", retirarValor);
