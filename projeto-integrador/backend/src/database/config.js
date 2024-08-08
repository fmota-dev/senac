const { Sequelize } = require("sequelize");

const db = new Sequelize({
	dialect: "sqlite",
	storage: "./src/database/db.sqlite",
});

const conectarDB = async () => {
	try {
    await db.authenticate();
		console.log("Conectado com sucesso ao banco de dados");
	} catch (error) {
		console.error("Não foi possivel conectar ao banco de dados");
	}
};

module.exports = { db, conectarDB };
