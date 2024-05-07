const express = require('express');
const clienteCrontoller = require('../controllers/clienteController');
const router = express.Router();

router.get('/', clienteCrontoller.home);
router.get('/cadastro',clienteCrontoller.formCadastro);
router.get('/listarClientes', clienteCrontoller.listarClientes);
router.post('/cadastro', clienteCrontoller.cadastro);

module.exports = router;