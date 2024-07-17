"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Produtos", [
			{
				nome: "Produto 1",
				descricao: "Descrição do Produto 1",
				preco: 100,
				quantidade: 10,
				id_fornecedor: 1,
				id_categoria: 1,
			},
			{
				nome: "Produto 2",
				descricao: "Descrição do Produto 2",
				preco: 200,
				quantidade: 20,
				id_fornecedor: 2,
				id_categoria: 2,
			},
			{
				nome: "Produto 3",
				descricao: "Descrição do Produto 3",
				preco: 300,
				quantidade: 30,
				id_fornecedor: 3,
				id_categoria: 3,
			},
			{
				nome: "Produto 4",
				descricao: "Descrição do Produto 4",
				preco: 400,
				quantidade: 40,
				id_fornecedor: 4,
				id_categoria: 4,
			},
			{
				nome: "Produto 5",
				descricao: "Descrição do Produto 5",
				preco: 500,
				quantidade: 50,
				id_fornecedor: 5,
				id_categoria: 5,
			},
			{
				nome: "Produto 6",
				descricao: "Descrição do Produto 6",
				preco: 600,
				quantidade: 60,
				id_fornecedor: 6,
				id_categoria: 6,
			},
			{
				nome: "Produto 7",
				descricao: "Descrição do Produto 7",
				preco: 700,
				quantidade: 70,
				id_fornecedor: 7,
				id_categoria: 7,
			},
			{
				nome: "Produto 8",
				descricao: "Descrição do Produto 8",
				preco: 800,
				quantidade: 80,
				id_fornecedor: 8,
				id_categoria: 8,
			},
			{
				nome: "Produto 9",
				descricao: "Descrição do Produto 9",
				preco: 900,
				quantidade: 90,
				id_fornecedor: 9,
				id_categoria: 9,
			},
		])
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Produtos", null, {})
	},
}
