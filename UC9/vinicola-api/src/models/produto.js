"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Produto extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Produto.belongsTo(models.Categorias, { foreignKey: "id_categoria" })
			Produto.belongsTo(models.Fornecedores, { foreignKey: "id_fornecedor" })
		}
	}
	Produto.init(
		{
			nome: {
				type: DataTypes.STRING,
			},
			descricao: {
				type: DataTypes.TEXT,
			},
			preco: {
				type: DataTypes.DECIMAL,
			},
			id_categoria: {
				type: DataTypes.INTEGER,
			},
			id_fornecedor: {
				type: DataTypes.INTEGER,
			},
		},
		{
			sequelize,
			modelName: "Produtos",
		}
	)
	return Produto
}
