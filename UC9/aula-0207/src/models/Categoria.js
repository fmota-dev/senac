const { db } = require("../config/database")
const { DataTypes } = require("sequelize")

const Categoria = db.define("Categorias", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
})

module.exports = Categoria
