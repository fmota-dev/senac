const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

class Usuario {
	constructor() {
		this.Usuario = db.define("Usuario", {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nomeUsuario: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			senha: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		});
	}

	async create({ nomeUsuario, senha }) {
		const user = await this.Usuario.create({ nomeUsuario, senha });
		return user;
	}
}


module.exports = Usuario
