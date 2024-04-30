const path = require('path');
const clienteModel = require('../models/clienteModel');

class ClienteController {
    home(req, res) {
        res.send("Essa é a rota home dos clientes")
    }
    
    formCadastro(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/clienteForm.html"));
    }

    cadastro(req, res) {
        const { id, nome, email, telefone } = req.body;
        const cliente = new clienteModel(id, nome, email, telefone);
        res.send(`Cliente ${cliente.nome} cadastrado com sucesso!`);
    }
}

module.exports = new ClienteController();