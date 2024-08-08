module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"fornecedorProduto",
			[
				{
					fornecedorId: 1,
					produtoId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fornecedorId: 1,
					produtoId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fornecedorId: 2,
					produtoId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("fornecedorProduto", null, {});
	},
};
