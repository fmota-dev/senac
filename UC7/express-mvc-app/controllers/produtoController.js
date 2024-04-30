const path = require('path');
const produtoModel = require('../models/produtoModel');

class ProdutoController {
  home(req, res) {
    res.send("Essa é a rota home dos produtos")
  }

  formCadastro(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/produtoForm.html"));
  }

  cadastro(req, res) {
    const { id, nome, preco } = req.body;
    const produto = new produtoModel(id, nome, preco);
    res.send(`Produto ${produto.nome} cadastrado com sucesso!`);
  }
}

module.exports = new ProdutoController();