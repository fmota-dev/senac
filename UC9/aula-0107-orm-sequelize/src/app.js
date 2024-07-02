require("dotenv").config()
require("./models")

const express = require("express")
const { sincronizarDB, connectarDB } = require("../config/db")
const { userRoutes } = require("./routes")

const app = express()
const host = process.env.APP_HOST
const porta = process.env.APP_PORT

connectarDB()
sincronizarDB()

app.use(express.json())
app.use(userRoutes)

app.get("/", (_req, res) => {
	res.json({ mensagem: "Aula 01/07 - ORM - Sequelize" })
})

app.listen(porta, () => {
	console.log(`Aplicação rodando em http://${host}:${porta}`)
})
