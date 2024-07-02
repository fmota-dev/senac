const { db } = require("../config/database")
const { DataTypes } = require("sequelize")

const Produto = db.define("Produtos", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  categoriaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})


module.exports = Produto
