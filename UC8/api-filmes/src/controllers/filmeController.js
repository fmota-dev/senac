const filme = require('../models/Filme')

class FilmeController {
	async listarFilmes(req, res) {
		const filmes = await filme.listarFilmes()
		res.json(filmes)
	}

	async buscarFilmePorId(req, res) {
		const { id } = req.params
		const filmeEncontrado = await filme.buscarFilmePorId(id)
		res.json(filmeEncontrado)
	}

	async editarFilme(req, res) {
		const { id, nome, id_genero } = req.body
		await filme.editarFilme({ id, nome, id_genero })
	}

	async deletarFilme(req, res) {
		const { id } = req.params
		await filme.deletarFilme(id)
		res.json({
			mensagem: `Filme com id ${id} deletado com sucesso`,
		})
	}
}
module.exports = new FilmeController()
