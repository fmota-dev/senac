const express = require("express");
const app = express();
const porta = 3000;
const path = require("path");
const courseRoutes = require("./routes/courseRoutes");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(courseRoutes)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/html", "index.html"));
});

app.listen(porta, () => {
  console.log(`Aplicação funcionando em http://localhost:${porta}`);
});
