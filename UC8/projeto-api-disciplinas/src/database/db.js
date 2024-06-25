const sql = require("mysql2")
const { configDotenv } = require("dotenv")
configDotenv()

const connection = sql.createConnection(
  {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "usbw",
    database: process.env.DB_NAME || "disciplinas",
  },
  console.log("Conexão com o banco de dados realizada com sucesso")
)

module.exports = connection
