const { Evento } = require("../docs/Evento");

module.exports = {
  info: {
    version: "1.0.0",
    title: "Eventos API",
    description: "Documentação da API de eventos",
  },
  host: "localhost:3000",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  securityDefinitions: {
    JWT: {
      description: "JWT token",
      type: "apiKey",
      in: "header",
      name: "Authorization",
    },
  },
  definitions: {
    Evento
  },
};
