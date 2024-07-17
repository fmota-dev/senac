const { Categorias } = require("../models")

class CategoriaController {
	async listar(req, res) {
		try {
			const categorias = await Categorias.findAll()
			return res.json({mensagem: "Categorias listadas com sucesso", categorias})
		} catch (error) {
			return res
				.status(500)
				.json({ mensagem: "Erro ao listar categorias", error })
		}
	}

	async criar(req, res) {
		try {
			const { descricao } = req.body
			const categoria = await Categorias.create({ descricao })
			if (!descricao) {
				return res
					.status(400)
					.json({ mensagem: "Descrição é obrigatória" })
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
			const { descricao } = req.body
			const categoria = await Categorias.findByPk(id)
			categoria.descricao = descricao
			await categoria.save()
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
			const categoria = await Categorias.findByPk(id)
			await categoria.destroy()
			return res.json({ mensagem: "Categoria deletada com sucesso" })
		} catch (error) {
			return res
				.status(500)
				.json({ mensagem: "Erro ao deletar categoria", error })
		}
	}
}

module.exports = new CategoriaController()
