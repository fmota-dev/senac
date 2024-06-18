const produtoController = require('../controllers/produtoController');
const express = require('express');
const router = express.Router();
router.get('/', produtoController.home);
router.get('/cadastro', produtoController.formCadastro);
router.get('/listagem', produtoController.listagem)
router.get('/visualizarProdutos', produtoController.visualizarProdutos);
router.post('/cadastro',produtoController.cadastro);

module.exports = router;
