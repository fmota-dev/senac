const eventoController = require('../controllers/eventoController');
const express = require('express');
const router = express.Router();

router.post('/eventos', eventoController.criarEvento);
router.get('/eventos', eventoController.listarEventos);
router.get('/eventos/:id', eventoController.obterEventoPorId);
router.patch('/eventos/:id', eventoController.atualizarEvento);
router.delete('/eventos/:id', eventoController.excluirEvento);

module.exports = router;