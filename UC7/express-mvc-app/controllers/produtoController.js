const path = require('path');
const produtoModel = require('../models/produtoModel');
let id = 1;
let produtos  = [];

class ProdutoController {
  home(req, res) {
    res.send("Essa é a rota home dos produtos")
  }

  formCadastro(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/produtoForm.html"));
  }

  cadastro(req, res) {
    const { nome, preco } = req.body;
    const produto = new produtoModel(id, nome, preco);
    produtos.push(produto);
    res.send(`Dados recebidos: ID ${produto.id}, Nome ${produto.nome}, Preço ${produto.preco}`);
    id++;
  }

  listagem(req, res) {
    res.json(produtos);
  }

}

module.exports = new ProdutoController();