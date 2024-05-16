const express = require("express");
const app = express();
const porta = 3000;
const vinhoRoutes = require("./routes/vinhoRoutes");

app.use(express.json());
app.use(vinhoRoutes);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/public/html/admin.html");
})

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
