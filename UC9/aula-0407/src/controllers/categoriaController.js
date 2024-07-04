const { Categoria } = require("../models")

class CategoriaController {
  async listarCategorias(req, res) {
    try {
      const categorias = await Categoria.findAll()
      res.json({ mensagem: "Listagem de categorias", categorias })
    } catch (error) {
      res.status(400).json(error)
    }
  }

  async criarCategoria(req, res) {
    try {
      const novaCategoria = await Categoria.create(req.body)
      res.status(201).json(novaCategoria)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  async buscarCategoriaPorId(req, res) {
    try {
      const { id } = req.params
      const categoria = await Categoria.findByPk(id)
      if (!categoria) {
        return res.status(404).json({ mensagem: "Categoria não encontrada" })
      }
      res.json({ mensagem: "Categoria encontrada", categoria })
    } catch (error) {
      res.status(400).json(error)
    }
  }

  async atualizarCategoria(req, res) {
    try {
      const { id } = req.params
      const categoria = await Categoria.findByPk(id)
      if (!categoria) {
        return res.status(404).json({ mensagem: "Categoria não encontrada" })
      }
      await categoria.update(req.body)
      res.json({ mensagem: "Categoria atualizada", categoria })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  async deletarCategoria(req, res) {
    try {
      const { id } = req.params
      const categoria = await Categoria.findByPk(id)
      if (!categoria) {
        return res.status(404).json({ mensagem: "Categoria não encontrada" })
      }
      await categoria.destroy()
      res.json({ mensagem: "Categoria deletada" })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}

module.exports = new CategoriaController()
