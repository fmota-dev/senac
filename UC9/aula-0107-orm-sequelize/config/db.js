require("dotenv").config()
const { Sequelize } = require("sequelize")

const db = new Sequelize({
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	dialect: process.env.DB_DIALECT,
	logging: false,
})

async function connectarDB() {
	try {
		await db.authenticate()
		await db.sync()
		console.log("Conectado e sincronizado com o banco de dados.")
	} catch (error) {
		console.error("Erro ao conectar e sincronizar com o banco de dados:", error)
	}
}

module.exports = { connectarDB, db }
