const db = require('../database/db')
class Filme {
	async listarFilmes() {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM filmes', (error, results) => {
				if (error) {
					console.log('Erro ao executar a consulta sql')
					reject(error)
				} else {
					resolve(results)
				}
			})
		})
	}

	async buscarFilmePorId(id) {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM filmes WHERE id = ?', id, (error, results) => {
				if (error) {
					console.log('Erro ao executar a consulta sql')
					reject(error)
				} else {
					resolve(results)
				}
			})
		})
	}

	async editarFilme(filme) {
		return new Promise((resolve, reject) => {
			db.query('UPDATE filmes SET nome = ?, id_genero = ? WHERE id = ?', [filme.nome, filme.id_genero, filme.id], (error, results) => {
				if (error) {
					console.log('Erro ao executar a consulta sql')
					reject(error)
				} else {
					resolve(results)
				}
			})
		})
	}

	async deletarFilme(id) {
		return new Promise((resolve, reject) => {
			db.query('DELETE FROM filmes WHERE id = ?', id, (error, results) => {
				if (error) {
					console.log('Erro ao executar a consulta sql')
					reject(error)
				} else {
					resolve(results)
				}
			})
		})
	}
}

module.exports = new Filme()
