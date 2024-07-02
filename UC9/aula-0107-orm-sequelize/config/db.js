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
    console.log("Conectado com sucesso ao banco de dados")
  } catch (error) {
    console.error("Não foi possivel conectar ao banco de dados", error)
  }
}

async function sincronizarDB() {
  try {
    await db.sync()
    console.log("Tabelas criadas com sucesso")
  } catch (error) {
    console.error("Não foi possivel criar as tabelas", error)
  }
}

module.exports = { connectarDB, sincronizarDB, db }
