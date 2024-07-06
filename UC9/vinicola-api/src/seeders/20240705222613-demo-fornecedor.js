"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Fornecedores", [
			{
				nome: "Fornecedor 1",
				contato: "Contato do Fornecedor 1",
			},
			{
				nome: "Fornecedor 2",
				contato: "Contato do Fornecedor 2",
			},
			{
				nome: "Fornecedor 3",
				contato: "Contato do Fornecedor 3",
			},
			{
				nome: "Fornecedor 4",
				contato: "Contato do Fornecedor 4",
			},
			{
				nome: "Fornecedor 5",
				contato: "Contato do Fornecedor 5",
			},
			{
				nome: "Fornecedor 6",
				contato: "Contato do Fornecedor 6",
			},
			{
				nome: "Fornecedor 7",
				contato: "Contato do Fornecedor 7",
			},
			{
				nome: "Fornecedor 8",
				contato: "Contato do Fornecedor 8",
			},
			{
				nome: "Fornecedor 9",
				contato: "Contato do Fornecedor 9",
			},
		])
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Fornecedores", null, {})
	},
}
