require("dotenv").config()
require("./models")

const express = require("express")
const { produtoRoutes, categoriaRoutes } = require("./routes")

const app = express()
const host = process.env.APP_HOST
const porta = process.env.APP_PORT
const BASE_URL = `http://${host}:${porta}`


app.use(express.json())
app.use("/produtos", produtoRoutes)
app.use("/categorias", categoriaRoutes)

app.listen(porta, () => {
  console.log(`Aplicação rodando em ${BASE_URL}`)
})
