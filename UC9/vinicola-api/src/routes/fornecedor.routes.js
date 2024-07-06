const fornecedorController = require("../controllers/fornecedorController")
const router = require("express").Router()

router.get("/", fornecedorController.listar)
router.post("/", fornecedorController.criar)
router.put("/:id", fornecedorController.atualizar)
router.delete("/:id", fornecedorController.deletar)

module.exports = router
