function reajustarPreco(valorProduto, vendaMediaMensal) {
	if (valorProduto < 30 && vendaMediaMensal < 500) {
		novoPreco = valorProduto * 1.1;
	} else if (valorProduto >= 30 && valorProduto < 80 && vendaMediaMensal >= 500 && vendaMediaMensal < 1200) {
		novoPreco = valorProduto * 1.15;
	} else if (valorProduto >= 80 && vendaMediaMensal >= 1200) {
		novoPreco = valorProduto * 0.8;
	}

	if (novoPreco) {
		console.log(`O valor do produto reajustado é ${novoPreco}`);
	}
}


