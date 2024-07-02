const UserController = require("../controllers/userController")
const express = require("express")
const router = express.Router()

router.get("/", (_req, res) => {
	res.json({
		Aula: "API de usuários com ORM sequelize",
		data: "01/07/2024",
		UC: "09",
	})
})
router.get("/users", UserController.obterTodosUsuarios)
router.post("/users", UserController.cadastrarUsuario)
router.get("/users/:id", UserController.obterUsuarioPorId)
router.put("/users/:id", UserController.atualizarUsuario)
router.delete("/users/:id", UserController.deletarUsuario)

module.exports = router
