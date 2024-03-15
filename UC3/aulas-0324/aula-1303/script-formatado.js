let inputDeposito = document.getElementById("inputDeposito");
let inputRetirada = document.getElementById("inputRetirada");

let containerSaldo = document.querySelector(".container-saldo");
let saldo = document.getElementById("saldo");
let saldoAtual = 0;

let btnDepositar = document.getElementById("btnDepositar");
let btnRetirar = document.getElementById("btnRetirar");
let valorInvalido = document.createElement("span");

let transacoes = document.querySelector(".transacoes");
let transacoesLista = document.createElement("ul");
transacoesLista.classList.add("transacoes-lista");
let tipoTransacao;

const data = new Date();
let dia = data.getDate(); // 1-31
let mes = data.getMonth() + 1; // 0-11 (zero=janeiro)
let mesFormatado = mes.toString().padStart(2, "0");
let ano = data.getFullYear(); // 4 dígitos
let dataCompleta = `${dia}/${mesFormatado}/${ano}`;

function depositarValor(event) {
  event.preventDefault();
  let valorDeposito = parseFloat(inputDeposito.value);
  const LIMITE_DEPOSITO = 1000000;

  if (!valorDeposito || valorDeposito <= 0) {
    valorInvalido.innerText = "Digite um valor válido!";
    valorInvalido.classList.add("valor-invalido", "ativo");
    containerSaldo.appendChild(valorInvalido);
    inputDeposito.value = "";
  } else if (valorDeposito <= LIMITE_DEPOSITO) {
    saldoAtual += valorDeposito;
    saldo.innerText = `Saldo atual: R$ ${saldoAtual.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })}`;
    inputDeposito.value = "";
    tipoTransacao = "Depósito";
    adicionarTransacao(
      tipoTransacao,
      valorDeposito.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
    );
  } else {
    valorInvalido.innerText = `Depósito máximo: R$ ${LIMITE_DEPOSITO.toLocaleString(
      "pt-BR",
      {
        minimumFractionDigits: 2,
      }
    )}`;
    valorInvalido.classList.add("valor-invalido", "ativo");
    containerSaldo.appendChild(valorInvalido);
  }

  inputDeposito.addEventListener("click", () => {
    valorInvalido.classList.remove("ativo");
  });
}

function retirarValor(event) {
  event.preventDefault();
  let valorRetirada = parseFloat(inputRetirada.value);
  const LIMITE_RETIRADA = 500000;

  if (!valorRetirada || valorRetirada <= 0) {
    valorInvalido.innerText = "Digite um valor válido!";
    valorInvalido.classList.add("valor-invalido", "ativo");
    containerSaldo.appendChild(valorInvalido);
    inputDeposito.value = "";
  } else if (valorRetirada > saldoAtual) {
    valorInvalido.innerText = "Saldo insuficiente";
    valorInvalido.classList.add("valor-invalido", "ativo");
    containerSaldo.appendChild(valorInvalido);
  } else if (valorRetirada > LIMITE_RETIRADA) {
    valorInvalido.innerText = `Limite de retirada: R$ ${LIMITE_RETIRADA.toLocaleString(
      "pt-BR",
      {
        minimumFractionDigits: 2,
      }
    )}`;
    valorInvalido.classList.add("valor-invalido", "ativo");
    containerSaldo.appendChild(valorInvalido);
  } else {
    saldoAtual -= valorRetirada;
    saldo.innerText = `Saldo atual: R$ ${saldoAtual.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })}`;
    tipoTransacao = "Retirada";
    inputRetirada.value = "";
    adicionarTransacao(
      tipoTransacao,
      valorRetirada.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
    );
  }

  inputRetirada.addEventListener("click", () => {
    valorInvalido.classList.remove("ativo");
  });
}

function adicionarTransacao(tipoTransacao, valor) {
  transacoesLista.classList.add("ativo");

  let novaTransacao = document.createElement("li");
  novaTransacao.textContent = `${tipoTransacao}: R$ ${valor} (${dataCompleta}) - Novo saldo R$ ${saldoAtual.toLocaleString(
    "pt-BR",
    { minimumFractionDigits: 2 }
  )}`;

  novaTransacao.classList.add("transacao-item");

  if (tipoTransacao == "Depósito") {
    novaTransacao.classList.add("transacao-deposito");
  } else {
    novaTransacao.classList.add("transacao-retirada");
  }

  transacoes.appendChild(transacoesLista);
  transacoesLista.appendChild(novaTransacao);
}

btnDepositar.addEventListener("click", depositarValor);
btnRetirar.addEventListener("click", retirarValor);
