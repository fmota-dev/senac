const Vinho = require('../models/vinhoModel');
const vinhoModel = new Vinho();

class VinhoController {
	obterTodosVinhos(req, res) {
		res.json(vinhoModel.obterTodosVinhos());
	}

	obterVinhoPorId(req, res) {
		const id = Number(req.params.id); // Converte o id para um número
		const vinho = vinhoModel.obterVinhoPorId(id);
		if (vinho) {
			res.json(vinho);
		} else {
			res.status(404).json({ mensagem: 'Vinho não encontrado' });
		}
	}

	adicionarVinho(req, res) {
		const vinho = new Vinho(
			req.body.nome,
			req.body.safra,
			req.body.pais,
			req.body.tipo,
			req.body.preco,
			req.body.imagem // Adiciona a URL da imagem
		);
		vinhoModel.adicionarVinho(vinho);
		res.status(201).json({ mensagem: 'Vinho adicionado com sucesso' });
	}

	editarVinho(req, res) {
		const id = Number(req.params.id);
		const vinho = vinhoModel.obterVinhoPorId(id);
		if (vinho) {
			if (req.body.nome) {
				vinho.nome = req.body.nome;
			}
			if (req.body.safra) {
				vinho.safra = req.body.safra;
			}
			if (req.body.pais) {
				vinho.pais = req.body.pais;
			}
			if (req.body.tipo) {
				vinho.tipo = req.body.tipo;
			}
			if (req.body.preco) {
				vinho.preco = req.body.preco;
			}
			res.json(vinho);
		} else {
			res.status(404).json({ mensagem: 'Vinho não encontrado' });
		}
	}

	deletarVinho(req, res) {
		const id = Number(req.params.id);
		const vinho = vinhoModel.obterVinhoPorId(id);
		if (vinho) {
			vinhoModel.deletarVinho(id);
			res.json({ mensagem: 'Vinho deletado com sucesso' });
		} else {
			res.status(404).json({ mensagem: 'Vinho não encontrado' });
		}
	}
}

module.exports = new VinhoController();
