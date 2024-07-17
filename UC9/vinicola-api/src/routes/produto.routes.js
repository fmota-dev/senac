const produtoController = require("../controllers/produtoController")
const router = require("express").Router()

router.get("/", produtoController.listar)
router.post("/", produtoController.criar)
router.put("/:id", produtoController.atualizar)
router.delete("/:id", produtoController.deletar)

module.exports = router
