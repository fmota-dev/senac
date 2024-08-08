const express = require("express");
const { conectarDB } = require("./database/config");
const usuarioRoutes = require("./routes/usuario.routes");

const app = express();
app.use(express.json());
app.use(usuarioRoutes);

const porta = 3000;

conectarDB();


app.listen(porta, () => {
	console.log(`Aplicação rodando na porta ${porta}`);
});
