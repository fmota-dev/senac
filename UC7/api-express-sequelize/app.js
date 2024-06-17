// app.js
const express = require("express");
const userRoutes = require("./src/routes/User.routes");
const sequelize = require("./src/database/config"); // Importa a instância do Sequelize

const app = express();
app.use(express.json());

app.use(userRoutes);

app.listen(3000, () => {
  console.log("Aplicação rodando em 3000!");
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  })
  .catch((err) => {
    console.error("Falha ao estabelecer a conexão com o banco de dados:", err);
  });
