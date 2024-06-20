const express = require("express")
const path = require("path")
const connection = require("./database/db")
const userRoutes = require("./routes/user.routes")

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

connection.connect((error) => {
  if (error) {
    console.error("Erro ao conectar com o banco de dados: ", error)
    return
  }
  console.log("Conectado com sucesso ao banco de dados!")
})

app.use(userRoutes)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html", "index.html"))
})

app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
