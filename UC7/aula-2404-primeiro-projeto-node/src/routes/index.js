const express = require('express');
const path = require('path');
const router = express.Router();

// Rota para a pagina inicial
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/views/index.html'));
});

// Rota para a pagina sobre
router.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/views/sobre.html'));
});

// Rota para a pagina contato
router.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/views/contato.html'));
});

router.get('/teste', (req, res) => {
  res.redirect('/');
})


router.use(express.static(path.join(__dirname, '../../public')));

module.exports = router;