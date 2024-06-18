const Evento = require("../../src/models/eventoModel");
const eventoModel = new Evento();

class EventoController {
  criarEvento(req, res) {
    const { titulo, descricao, data, local } = req.body;
    const evento = eventoModel.criarEvento(titulo, descricao, data, local);
    res.status(201).json(evento);
  }

  listarEventos(req, res) {
    const eventos = eventoModel.listarEventos();
    res.status(200).json(eventos);
  }

  obterEventoPorId(req, res) {
    const { id } = req.params;
    const evento = eventoModel.obterEventoPorId(id);
    if (evento === null) {
      return res.status(404).json({ mensagem: "Evento não encontrado" });
    }
    res.status(200).json(evento);
  }

  atualizarEvento(req, res) {
    const { id } = req.params;
    const { titulo, descricao, data, local } = req.body;
    const evento = eventoModel.atualizarEvento(
      id,
      titulo,
      descricao,
      data,
      local
    );
    if (!evento) {
      return res.status(404).json({ mensagem: "Evento não encontrado" });
    }
    res.status(200).json(evento);
  }

  excluirEvento(req, res) {
    const { id } = req.params;
    const evento = eventoModel.excluirEvento(id);
    if (evento) {
      return res.json({ mensagem: "Evento excluído com sucesso" });
    } else {
      return res.status(404).json({ mensagem: "Evento não encontrado" });
    }
  }
}

module.exports = new EventoController();
