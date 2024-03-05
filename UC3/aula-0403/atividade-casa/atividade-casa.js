function reajustarPreco(valorProduto, vendaMediaMensal) {
	if (valorProduto < 30 && vendaMediaMensal < 500) {
		novoPreco = valorProduto + (valorProduto * 10) / 100;
		console.log(`O valor do produto reajustado é ${novoPreco}`);
	} else if (
		valorProduto >= 30 &&
		valorProduto < 80 &&
		vendaMediaMensal >= 500 &&
		vendaMediaMensal < 1200
	) {
		novoPreco = valorProduto + (valorProduto * 15) / 100;
		console.log(`O valor do produto reajustado é ${novoPreco}`);
	} else {
		novoPreco = valorProduto - (valorProduto * 20) / 100;
		console.log(`O valor do produto reajustado é ${novoPreco}`);
	}
}

module.exports = reajustarPreco;
