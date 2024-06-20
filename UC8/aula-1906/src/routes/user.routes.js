const router = require("express").Router()
const UserController = require("../controllers/UserController")

router.get("/users", UserController.getAll)
router.get("/users/:id", UserController.getById)
router.post("/users", UserController.create)
router.put("/users/:id", UserController.update)
router.delete("/users/:id", UserController.delete)

module.exports = router