const express = require("express")
const path = require("path")
const app = express()
const port = 3000


const filmeRoutes = require("./routes/filmeRoutes")
const generoRoutes = require("./routes/generoRoutes")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))
app.use(filmeRoutes)
app.use(generoRoutes)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html", "index.html"))
})

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`)
})
