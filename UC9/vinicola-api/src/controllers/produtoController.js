const { Produtos } = require("../models")

class ProdutoController {
	async listar(req, res) {
		try {
			const produtos = await Produtos.findAll()
			return res.json({
				mensagem: "produtos listadas com sucesso",
				produtos,
			})
		} catch (error) {
			return res
				.status(500)
				.json({ mensagem: "Erro ao listar produtos", error })
		}
	}

	async criar(req, res) {
		try {
			const {nome, descricao, preco, id_categoria, id_fornecedor} = req.body
			if (!nome || !descricao || !preco || !id_categoria || !id_fornecedor) {
				return res.status(400).json({ mensagem: "Nome, descrição, preço, categoria e fornecedor são obrigatórios" })
			}
			const produto = await Produtos.create({ nome, descricao, preco, id_categoria, id_fornecedor })
			return res.json({ mensagem: "Produto criado com sucesso", produto })
		} catch (error) {
			return res.status(500).json(error)
		}
	}

	async atualizar(req, res) {
		try {
			const { id } = req.params
			const { nome, contato } = req.body
			const produto = await Produtos.findByPk(id)
			if (!produto) {
				return res.status(404).json({ mensagem: "produto não encontrada" })
			}
			await produto.update({ nome, contato })
			return res.json({
				mensagem: "produto atualizada com sucesso",
				produto,
			})
		} catch (error) {
			return res
				.status(500)
				.json({ mensagem: "Erro ao atualizar produto", error })
		}
	}

	async deletar(req, res) {
		try {
			const { id } = req.params
			const produto = await Produtos.findByPk(id)
			await produto.destroy()
			return res.json({ mensagem: "produto deletado com sucesso" })
		} catch (error) {
			return res
				.status(500)
				.json({ mensagem: "Erro ao deletar produto", error })
		}
	}
}

module.exports = new ProdutoController()
