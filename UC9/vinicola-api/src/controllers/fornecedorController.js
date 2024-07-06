const { Fornecedores } = require("../models")

class FornecedorController {
	async listar(req, res) {
		try {
			const fornecedores = await Fornecedores.findAll()
			return res.json({
				mensagem: "fornecedores listadas com sucesso",
				fornecedores,
			})
		} catch (error) {
			return res
				.status(500)
				.json({ mensagem: "Erro ao listar fornecedores", error })
		}
	}

	async criar(req, res) {
		try {
			const { nome, contato } = req.body
			const categoria = await Fornecedores.create({ nome, contato })
			if (!nome || !contato) {
				return res
					.status(400)
					.json({ mensagem: "Nome e contato são obrigatórios" })
			}
			return res.json({ mensagem: "Categoria criada com sucesso", categoria })
		} catch (error) {
			return res
				.status(500)
				.json({ mensagem: "Erro ao criar categoria", error })
		}
	}

	async atualizar(req, res) {
		try {
			const { id } = req.params
			const { nome, contato } = req.body
			const categoria = await Fornecedores.findByPk(id)
			if (!categoria) {
        return res.status(404).json({ mensagem: "Categoria não encontrada" })
      }
      await categoria.update({ nome, contato })
			return res.json({
				mensagem: "Categoria atualizada com sucesso",
				categoria,
			})
		} catch (error) {
			return res
				.status(500)
				.json({ mensagem: "Erro ao atualizar categoria", error })
		}
	}

	async deletar(req, res) {
		try {
			const { id } = req.params
			const categoria = await Fornecedores.findByPk(id)
			await categoria.destroy()
			return res.json({ mensagem: "Categoria deletada com sucesso" })
		} catch (error) {
			return res
				.status(500)
				.json({ mensagem: "Erro ao deletar categoria", error })
		}
	}
}

module.exports = new FornecedorController()
