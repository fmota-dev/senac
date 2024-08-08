const Usuario = require("../models/Usuario");

class usuarioController {
	async create(req, res) {
		const { nomeUsuario, senha } = req.body;
		const user = await Usuario.create({ nomeUsuario, senha });
		return res.json(user);
	}
}

module.exports = new usuarioController();