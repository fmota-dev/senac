const { Model, DataTypes } = require("sequelize");
const { db } = require("../database/config");

class Produto extends Model {}

Produto.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		nome: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		tipo: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		preco: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		qtdMinima: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		qtdAtual: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize: db,
		modelName: "produto",
    tableName: "produtos"
	}
);

module.exports = Produto;
