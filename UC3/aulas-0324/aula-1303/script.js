let inputDeposito = document.getElementById('inputDeposito');
let inputRetirada = document.getElementById('inputRetirada');

let containerSaldo = document.querySelector('.container-saldo');
let saldo = document.getElementById('saldo');
let saldoAtual = 0;

let btnDepositar = document.getElementById('btnDepositar');
let btnRetirar = document.getElementById('btnRetirar');
let valorInvalido = document.createElement('span');

let transacoes = document.querySelector('.transacoes');
let ultimasTransacoes = document.createElement('ul');
ultimasTransacoes.classList.add('transacoes-lista');
let tipoTransacao;

const data = new Date();
let dia = data.getDate(); // 1-31
let mes = data.getMonth(); // 0-11 (zero=janeiro)
let ano = data.getFullYear(); // 4 dígitos
let dataCompleta = `${dia}/${mes + 1}/${ano}`;

function depositarValor(event) {
	event.preventDefault();
	let valorDeposito = parseFloat(inputDeposito.value);

	if (!valorDeposito) {
		valorInvalido.innerText = 'Digite um valor válido!';
		valorInvalido.classList.add('valor-invalido', 'ativo');
		containerSaldo.appendChild(valorInvalido);
	} else {
		saldoAtual += valorDeposito;
		saldo.innerText = `Saldo atual: R$ ${saldoAtual.toFixed(2)}`;
		inputDeposito.value = '';
		tipoTransacao = 'Depósito';
		movimentacoes(tipoTransacao, valorDeposito);
	}

	inputDeposito.addEventListener('click', () => {
		valorInvalido.classList.remove('ativo');
	});
}

function retirarValor(event) {
	event.preventDefault();
	let valorRetirada = parseFloat(inputRetirada.value);

	if (!valorRetirada || valorRetirada <= 0) {
		valorInvalido.innerText = 'Digite um valor válido!';
		valorInvalido.classList.add('valor-invalido', 'ativo');
		containerSaldo.appendChild(valorInvalido);
	} else if (valorRetirada > saldoAtual) {
		valorInvalido.innerText = 'Saldo insuficiente';
		valorInvalido.classList.add('valor-invalido', 'ativo');
		containerSaldo.appendChild(valorInvalido);
	} else {
		saldoAtual -= valorRetirada;
		saldo.innerText = `Saldo atual: R$ ${saldoAtual.toFixed(2)}`;
		tipoTransacao = 'Retirada';
		inputRetirada.value = '';
		movimentacoes(tipoTransacao, valorRetirada);
	}

	inputRetirada.addEventListener('click', () => {
		valorInvalido.classList.remove('ativo');
	});
}

function movimentacoes(tipoTransacao, valor) {
	ultimasTransacoes.classList.add('ativo');

	let novaMovimentacao = document.createElement('li');
	novaMovimentacao.textContent = `${tipoTransacao}: R$ ${valor} (${dataCompleta}) - Novo saldo R$ ${saldoAtual}`;
	novaMovimentacao.classList.add('item-transacao');

	if (tipoTransacao == 'Depósito') {
		novaMovimentacao.classList.add('transacao-deposito');
	} else {
		novaMovimentacao.classList.add('transacao-retirada');
	}

	transacoes.appendChild(ultimasTransacoes);
	ultimasTransacoes.appendChild(novaMovimentacao);
}

btnDepositar.addEventListener('click', depositarValor);
btnRetirar.addEventListener('click', retirarValor);
