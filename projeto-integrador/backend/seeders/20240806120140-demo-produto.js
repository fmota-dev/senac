module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"produtos",
			[
				{
					nome: "Produto 1",
					tipo: "Tipo 1",
					preco: 10.0,
					qtdMinima: 5,
					qtdAtual: 20,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: "Produto 2",
					tipo: "Tipo 2",
					preco: 20.0,
					qtdMinima: 10,
					qtdAtual: 30,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("produtos", null, {});
	},
};
