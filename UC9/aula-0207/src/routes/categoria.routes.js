const categoriaController = require("../controllers/categoriaController")

const router = require("express").Router()

router.get("/", categoriaController.listarCategorias)
router.get("/:id", categoriaController.buscarCategoriaPorId)
router.post("/", categoriaController.criarCategoria)
router.put("/:id", categoriaController.atualizarCategoria)
router.delete("/:id", categoriaController.deletarCategoria)

module.exports = router