const path = require("path");
const produtoModel = require("../models/produtoModel");
let id = 0;
let listaProdutos = [];

class ProdutoController {
  home(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/html/produto", "homepageProduto.html")
    );
  }
  formCadastro(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/html/produto", "produtoForm.html")
    );
  }
  cadastro(req, res) {
    const { nome, preco } = req.body;
    id++;
    let produto = new produtoModel(id, nome, preco);
    listaProdutos.push(produto);
    res.send({ "Dados gravados com sucesso!": produto });
  }

  listagem(req, res) {
    res.json(listaProdutos);
  }
}
module.exports = new ProdutoController();
