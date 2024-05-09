const path = require('path');
const produtoModel = require('../models/produtoModel');
let id = 0;
let listaProdutos = [];

class ProdutoController {
	home(req, res) {
		res.sendFile(
			path.join(__dirname, '../public/html/produto', 'homepageProduto.html')
		);
	}
	formCadastro(req, res) {
		res.sendFile(
			path.join(__dirname, '../public/html/produto', 'produtoForm.html')
		);
	}
	cadastro(req, res) {
		const { nome, preco } = req.body;
		id++;
		let produto = new produtoModel(id, nome, preco);
		listaProdutos.push(produto);
		res.redirect('/produto');
	}

	listagem(req, res) {
		res.json({ listaProdutos });
	}

	visualizarProdutos(req, res) {
		res.sendFile(
			path.join(__dirname, '../public/html/produto', 'listarProdutos.html')
		);
	}
}
module.exports = new ProdutoController();
