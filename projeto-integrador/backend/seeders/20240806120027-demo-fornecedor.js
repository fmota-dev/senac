module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"fornecedores",
			[
				{
					nome: "Fornecedor 1",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: "Fornecedor 2",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("fornecedores", null, {});
	},
};
