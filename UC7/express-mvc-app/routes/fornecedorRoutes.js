const fornecedorController = require("../controllers/fornecedorController");

const express = require("express");
const router = express.Router();

router.get("/", fornecedorController.home);
router.get("/cadastro", fornecedorController.formCadastro);
router.get("/listagem", fornecedorController.listagem);
router.get("/visualizarFornecedores", fornecedorController.visualizarFornecedores);
router.post("/cadastro", fornecedorController.cadastro);

module.exports = router;
