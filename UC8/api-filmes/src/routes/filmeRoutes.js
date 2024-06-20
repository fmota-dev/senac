const filmeController = require('../controllers/filmeController');
const express = require('express');
const router = express.Router();

router.get('/filmes', filmeController.listarFilmes);


module.exports = router;