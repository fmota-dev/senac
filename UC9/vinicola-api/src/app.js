require("dotenv").config()
const express = require("express")
const categoriaRoutes = require("./routes/categoria.routes")
const fornecedorRoutes = require("./routes/fornecedor.routes")
const produtoRoutes = require("./routes/produto.routes")

const app = express()
const host = process.env.APP_HOST
const porta = process.env.APP_PORT
const APP_URL = `http://${host}:${porta}`

app.use(express.json())
app.use("/categorias", categoriaRoutes)
app.use("/fornecedores", fornecedorRoutes)
app.use("/produtos", produtoRoutes)

app.listen(porta, () => {
	console.log(`Servidor rodando em ${APP_URL}`)
})
