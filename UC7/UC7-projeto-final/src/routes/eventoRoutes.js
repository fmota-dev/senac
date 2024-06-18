const eventoController = require("../../src/controllers/eventoController");
const express = require("express");
const router = express.Router();

router.post(
  "/eventos",
  eventoController.criarEvento
  // #swagger.tags = ['Eventos']
  // #swagger.description = 'Endpoint para criar um evento.'
  // #swagger.parameters['obj'] = {
  //   in: 'body',
  //   description: 'Informações do evento.',
  //   required: true,
  //   type: 'object',
  /* 
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/Evento" },
        }    

        #swagger.responses[400] = {
            description: 'Erro ao criar evento.'
        }
    */
);
router.get("/eventos", eventoController.listarEventos
    // #swagger.tags = ['Eventos']
    // #swagger.description = 'Endpoint para listar eventos.'
    // #swagger.responses[200] = {
    //   schema: { $ref: "#/definitions/Evento" },
    // }
    // #swagger.responses[400] = {
    //   description: 'Erro ao listar eventos.'
    // }
);
router.get("/eventos/:id", eventoController.obterEventoPorId
    // #swagger.tags = ['Eventos']
    // #swagger.description = 'Endpoint para obter um evento pelo ID.'
    // #swagger.parameters['id'] = { description: 'ID do evento.', required: true }
    // #swagger.responses[200] = {
    //   schema: { $ref: "#/definitions/Evento" },
    // }
    // #swagger.responses[400] = {
    //   description: 'Erro ao obter evento.'
    // }
);
router.patch("/eventos/:id", eventoController.atualizarEvento
    // #swagger.tags = ['Eventos']
    // #swagger.description = 'Endpoint para atualizar um evento.'
    // #swagger.parameters['id'] = { description: 'ID do evento.', required: true }
    // #swagger.parameters['obj'] = {
    //   in: 'body',
    //   description: 'Informações do evento.',
    //   required: true,
    //   type: 'object',
    /* 
        #swagger.responses[200] = {
            schema: { $ref: "#/definitions/Evento" },
        }    

        #swagger.responses[400] = {
            description: 'Erro ao atualizar evento.'
        }
    */
);
router.delete("/eventos/:id", eventoController.excluirEvento
    // #swagger.tags = ['Eventos']
    // #swagger.description = 'Endpoint para excluir um evento.'
    // #swagger.parameters['id'] = { description: 'ID do evento.', required: true }
    // #swagger.responses[200] = {
    //   description: 'Evento excluído com sucesso.'
    // }
    // #swagger.responses[400] = {
    //   description: 'Erro ao excluir evento.'
    // }
);

module.exports = router;
