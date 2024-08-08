const userController = require("../controllers/usuario");
const router = require("express").Router();

router.post("/usuarios", userController.create);

module.exports = router;
