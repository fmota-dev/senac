const path = require('path');
const clienteModel = require('../models/clienteModel');
let idCliente = 0;
let clientes = [];

class ClienteController {
    home(req, res) {
        res.send("Essa é a rota home dos clientes")
    }
    
    formCadastro(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/clienteForm.html"));
    }

    cadastro(req, res) {
        const { id, nome, email, telefone } = req.body;
        const cliente = new clienteModel(idCliente, nome, email, telefone);
        clientes.push(cliente);
        res.send(`Cliente ${cliente.nome} cadastrado com sucesso!`);
        idCliente++;
    }

    listarClientes(req, res) {
        res.json(clientes);
    }
}

module.exports = new ClienteController();