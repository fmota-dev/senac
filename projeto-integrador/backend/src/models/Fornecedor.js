const { Model, DataTypes } = require("sequelize");
const { db } = require("../database/config");

class Fornecedor extends Model {}

Fornecedor.init(
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
	},
	{
		sequelize: db,
		modelName: "fornecedor",
    tableName: "fornecedores"
	}
);

module.exports = Fornecedor;
