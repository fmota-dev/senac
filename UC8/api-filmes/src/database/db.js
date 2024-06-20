const mysql = require("mysql2")
require("dotenv").config()

const connection = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  console.log("Conexão com o banco de dados realizada com sucesso!")
)

module.exports = connection
