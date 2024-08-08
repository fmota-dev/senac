module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"usuarios",
			[
				{
					nomeUsuario: "usuario1",
					senha: "senha1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nomeUsuario: "usuario2",
					senha: "senha2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("usuarios", null, {});
	},
};
