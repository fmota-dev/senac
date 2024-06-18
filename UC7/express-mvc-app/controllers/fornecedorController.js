const path = require('path');
const fornecedorModel = require('../models/fornecedorModel');
const listaFornecedores = [];
let id = 1;

class FornecedorController {
	home(req, res) {
		res.sendFile(
			path.join(
				__dirname,
				'../public/html/fornecedor',
				'homepageFornecedor.html'
			)
		);
	}

	formCadastro(req, res) {
		res.sendFile(
			path.join(__dirname, '../public/html/fornecedor', 'fornecedorForm.html')
		);
	}

	cadastro(req, res) {
		const { nome, email, telefone, cnpj } = req.body;
		let fornecedor = new fornecedorModel(id, nome, email, telefone, cnpj);
		listaFornecedores.push(fornecedor);
		id++;
		res.redirect('/fornecedor');
	}

	listagem(req, res) {
		res.json({ listaFornecedores });
	}

	visualizarFornecedores(req, res) {
		res.sendFile(
			path.join(
				__dirname,
				'../public/html/fornecedor',
				'listarFornecedores.html'
			)
		);
	}
}
module.exports = new FornecedorController();
