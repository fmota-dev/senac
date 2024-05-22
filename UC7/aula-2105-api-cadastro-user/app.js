const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const app = express();
const porta = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(userRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html/index.html"));
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
