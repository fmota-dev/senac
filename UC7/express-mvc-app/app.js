const express = require("express");
const app = express();
const port = 3000;
const produtoRoutes = require("./routes/produtoRoutes");
const fornecedorRoutes = require("./routes/fornecedorRoutes");
const clienteRoutes = require("./routes/clienteRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/produtos", produtoRoutes);
app.use("/fornecedores", fornecedorRoutes);
app.use("/clientes", clienteRoutes);

app.listen(port, () => {
  console.log(`Aplicação rodando em -> localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});
