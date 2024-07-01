const { Sequelize } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  logging: false,
})

async function connectarDB() {
  try {
    await sequelize.authenticate()
    console.log("Conectado com sucesso ao banco de dados")
  } catch (error) {
    console.error("Não foi possivel conectar ao banco de dados", error)
  }
}

module.exports = { sequelize, connectarDB }
