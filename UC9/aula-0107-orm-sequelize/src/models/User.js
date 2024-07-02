const { db } = require("../../config/db")
const { DataTypes } = require("sequelize")

const User = db.define("Users", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	nomeUsuario: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	dataNascimento: {
		type: DataTypes.DATEONLY,
		allowNull: false,
	},
	senha: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

module.exports = User
