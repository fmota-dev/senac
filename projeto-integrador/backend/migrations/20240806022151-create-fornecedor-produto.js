module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("fornecedorProduto", {
			fornecedorId: {
				type: Sequelize.INTEGER,
				references: {
					model: "fornecedores", // Nome da tabela de fornecedores
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			produtoId: {
				type: Sequelize.INTEGER,
				references: {
					model: "produtos", // Nome da tabela de produtos
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("fornecedorProduto");
	},
};
