const Categoria = require("./Categoria")
const Produto = require("./Produto")

Categoria.hasMany(Produto, {
  foreignKey: "categoriaId",
  as: "produtos",
})

Produto.belongsTo(Categoria, {
  foreignKey: "categoriaId",
  as: "categoria",
})

module.exports = { Categoria, Produto }
