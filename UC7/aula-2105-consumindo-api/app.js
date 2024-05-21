import express from "express";
import axios from "axios";

const app = express();
const porta = 3000;
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/obter-cep/:cep", async (req, res) => {
  const { cep } = req.params;
  try {
    const response = await axios.get(
      `https://brasilapi.com.br/api/cep/v1/${cep}`
    );
    const endereco = response.data;
    res.json(endereco);
  } catch (error) {
    res.json({ erro: "CEP não encontrado" });
  }
});

app.listen(porta, () => {
  console.log(`Servidor rodando no endereço http://localhost:${porta}`);
});
