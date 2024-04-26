const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

let orcamentos = []; // Armazenar os orçamentos em memória

app.use(express.static("public")); // Definir uma pasta estatica para aplicação
app.use(express.json()); // Comando para tratar dados JSON
app.use(express.urlencoded({ extended: true })); // Comando para tratar requisições HTML (forms)

app.listen(port, () => {
  console.log(`Aplicação rodando em localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(
    "Aplicação funcionando use /cadastro para acessar o formulário de cadastro de orçamentos."
  );
});

app.get("/cadastro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/html/cadastro.html"));
});

app.post("/cadastro", (req, res) => {
  const { nome, telefone, tipoServico, descricao } = req.body;
  orcamentos.push({ nome, telefone, tipoServico, descricao });
});

app.get("/orcamentos", (req, res) => {
  res.send(orcamentos);
});

app.post("/orcamentos", (req, res) => {
  const { nome, telefone, tipoServico, descricao } = req.body;
  orcamentos.push({ nome, telefone, tipoServico, descricao });
  res.redirect("/orcamentos");
});

app.get("/meusOrcamentos", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/html/orcamentos.html"));
});

