const express = require("express");
const vinhoController = require("../controllers/vinhoController");
const router = express.Router();

router.get("/vinhos", vinhoController.obterTodosVinhos);
router.get("/vinhos/:id", vinhoController.obterVinhoPorId);
router.post("/vinhos", vinhoController.adicionarVinho);
router.patch("/vinhos/:id", vinhoController.editarVinho);
router.delete("/vinhos/:id", vinhoController.deletarVinho);

module.exports = router;
