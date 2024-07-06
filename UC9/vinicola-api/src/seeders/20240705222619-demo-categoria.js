"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Categorias", [
			{
				descricao: "Categoria 1",
			},
			{
				descricao: "Categoria 2",
			},
			{
				descricao: "Categoria 3",
			},
			{
				descricao: "Categoria 4",
			},
			{
				descricao: "Categoria 5",
			},
			{
				descricao: "Categoria 6",
			},
			{
				descricao: "Categoria 7",
			},
			{
				descricao: "Categoria 8",
			},
			{
				descricao: "Categoria 9",
			},
		])
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Categorias", null, {})
	},
}
