const Fornecedor = require("./Fornecedor");
const Produto = require("./Produto");
const Usuario = require("./Usuario");

Fornecedor.belongsToMany(Produto, {
	through: "fornecedorProduto",
	foreignKey: "fornecedorId",
});

Produto.belongsToMany(Fornecedor, {
	through: "fornecedorProduto",
	foreignKey: "produtoId",
});

module.exports = {
	fornecedor: Fornecedor,
	produto: Produto,
	usuario: Usuario,
};
