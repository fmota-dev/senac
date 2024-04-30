const path = require('path');
const fornecedorModel = require('../models/fornecedorModel');

class FornecedorController {
    home(req, res) {
        res.send("Essa é a rota home dos fornecedores")
    }
    
    formCadastro(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/fornecedorForm.html"));
    }

    cadastro(req, res) {
        const { id, nome, email, telefone, cnpj } = req.body;
        const fornecedor = new fornecedorModel(id, nome, email, telefone, cnpj);
        res.send(`Fornecedor ${fornecedor.nome} cadastrado com sucesso!`);
    }
}

module.exports = new FornecedorController();