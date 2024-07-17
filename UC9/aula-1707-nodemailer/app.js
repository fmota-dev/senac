const express = require("express")
const { sendMail } = require("./mail")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/send-email", async (req, res) => {
  const { email, subject, text } = req.body
  try {
    await sendMail(email, subject, text)
    res.send({ message: "Email enviado com sucesso!" })
  } catch (error) {
    res
      .status(500)
      .send({ message: "Falha ao enviar email", error: error.message })
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
