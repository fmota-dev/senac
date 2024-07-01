require("dotenv").config()
const express = require("express")
const db = require("../config/db")

const app = express()
const host = process.env.APP_HOST
const porta = process.env.APP_PORT

db.connectarDB()

app.get("/", (_req, res) => {
  res.json({ mensagem: "Aula 01/07 - ORM - Sequelize" })
})

app.listen(porta, () => {
  console.log(`Aplicação rodando em http://${host}:${porta}`)
})
