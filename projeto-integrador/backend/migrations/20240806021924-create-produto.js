module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("produtos", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			tipo: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			preco: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			qtdMinima: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			qtdAtual: {
				type: Sequelize.INTEGER,
				allowNull: false,
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
		await queryInterface.dropTable("produtos");
	},
};
