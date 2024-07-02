const ProdutoController = require("../controllers/produtoController")
const router = require("express").Router()

router.get("/", ProdutoController.listarProdutos)
router.get(
  "/filtroCategoria/:categoriaId",
  ProdutoController.buscarProdutosPorCategoria
)
router.post("/", ProdutoController.criarProduto)
router.get("/:id", ProdutoController.buscarProdutoPorId)
router.put("/:id", ProdutoController.atualizarProduto)
router.delete("/:id", ProdutoController.deletarProduto)

module.exports = router
