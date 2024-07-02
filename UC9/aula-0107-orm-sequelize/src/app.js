require("dotenv").config()
const express = require("express")
const { sincronizarDB, connectarDB } = require("../config/db")
const User = require("./models/User")

const app = express()
const host = process.env.APP_HOST
const porta = process.env.APP_PORT

connectarDB()
sincronizarDB()

app.get("/", (_req, res) => {
  res.json({ mensagem: "Aula 01/07 - ORM - Sequelize" })
})

app.listen(porta, () => {
  console.log(`Aplicação rodando em http://${host}:${porta}`)
})
