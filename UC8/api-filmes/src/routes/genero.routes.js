const generoController = require("../controllers/generoController")
const express = require("express")
const router = express.Router()

router.get("/generos", generoController.listarGeneros)

module.exports = router
