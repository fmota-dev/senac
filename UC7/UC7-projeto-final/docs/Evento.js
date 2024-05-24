exports.Evento = {
  titulo: {
    type: String,
    required: true,
    description: "Título do evento",
  },
  descricao: {
    type: String,
    required: true,
    description: "Descrição do evento",
  },
  data: {
    type: Date,
    required: true,
    description: "Data do evento",
  },
  local: {
    type: String,
    required: true,
    description: "Local do evento",
  },
};
