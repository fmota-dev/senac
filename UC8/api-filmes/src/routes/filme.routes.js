const filmeController = require('../controllers/filmeController');
const express = require('express');
const router = express.Router();

router.get('/filmes', filmeController.listarFilmes);
router.get('/filmes/:id', filmeController.buscarFilmePorId);
router.delete('/filmes/:id', filmeController.deletarFilme);

module.exports = router;