const categoriaController = require("../controllers/categoriaController")
const router = require("express").Router()

router.get("/", categoriaController.listar)
router.post("/", categoriaController.criar)
router.put("/:id", categoriaController.atualizar)
router.delete("/:id", categoriaController.deletar)

module.exports = router