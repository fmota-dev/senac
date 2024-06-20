const genero = require("../models/Genero")

class GeneroController {
  async listarGeneros(req, res) {
    const generos = await genero.listarGeneros()
    res.json(generos)
  }
}
module.exports = new GeneroController()
