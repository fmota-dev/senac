require("dotenv").config()
require("./models")

const express = require("express")
const { connectarDB } = require("../config/db")
const { userRoutes } = require("./routes")

const app = express()
const host = process.env.APP_HOST
const porta = process.env.APP_PORT

connectarDB()

app.use(express.json())
app.use(userRoutes)

app.listen(porta, () => {
	console.log(`Aplicação rodando em http://${host}:${porta}`)
})
