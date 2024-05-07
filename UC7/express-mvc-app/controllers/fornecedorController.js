const path = require("path");
const fornecedorModel = require("../models/fornecedorModel");
const listaFornecedores = [];

class FornecedorController {
  home(req, res) {
    res.sendFile(
      path.join(
        __dirname,
        "../public/html/fornecedor",
        "homepageFornecedor.html"
      )
    );
  }

  formCadastro(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/html/fornecedor", "fornecedorForm.html")
    );
  }

  cadastro(req, res) {
    const { id, nome, email, telefone, cnpj } = req.body;
    let fornecedor = new fornecedorModel(id, nome, email, telefone, cnpj);
    listaFornecedores.push(fornecedor);
    res.send(`Fornecedor ${fornecedor.nome} cadastrado com sucesso!`);
  }

  listagem(req, res) {
    res.json(listaFornecedores);
  }
}

module.exports = new FornecedorController();
