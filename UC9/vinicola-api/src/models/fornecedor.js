"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
	class Fornecedor extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Fornecedor.hasMany(models.Produtos, { foreignKey: "id_fornecedor" })
		}
	}
	Fornecedor.init(
		{
			nome: {
				type: DataTypes.STRING,
			},
			contato: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "Fornecedores",
		}
	)
	return Fornecedor
}
