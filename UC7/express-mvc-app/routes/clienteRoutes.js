const clienteController = require('../controllers/clienteController');

const express = require('express');
const router = express.Router();

router.get('/', clienteController.home);
router.get('/cadastro', clienteController.formCadastro);
router.post('/cadastro', clienteController.cadastro);
router.get('/listaClientes', clienteController.listarClientes);

module.exports = router;