const { User } = require("../models")

class UserController {
	async obterTodosUsuarios(_req, res) {
		const users = await User.findAll()
		if (users.length === 0) {
			return res.json({ mensagem: "Nenhum usuário encontrado" })
		} else {
			return res.json({ mensagem: "Usuários encontrados", users })
		}
	}

	async cadastrarUsuario(req, res) {
		const novoUsuario = req.body
		const user = await User.create(novoUsuario)
		return res.json({ mensagem: "Usuário cadastrado com sucesso", user })
	}

	async obterUsuarioPorId(req, res) {
		const { id } = req.params
		const user = await User.findByPk(id)
		if (user === null) {
			return res.json({ mensagem: "Usuário não encontrado" })
		} else {
			return res.json({ mensagem: "Usuário encontrado", user })
		}
	}

	async atualizarUsuario(req, res) {
		const { id } = req.params
		const { nomeUsuario, senha, email, dataNascimento } = req.body
		const user = await User.findByPk(id)
		await user.update({
			nomeUsuario,
			senha,
			email,
			dataNascimento,
		})
		return res.json({ mensagem: "Usuário atualizado com sucesso", user })
	}

	async deletarUsuario(req, res) {
		const { id } = req.params
		const user = await User.findByPk(id)
		await user.destroy()
		return res.json({ mensagem: "Usuário deletado com sucesso" })
	}
}

module.exports = new UserController()
