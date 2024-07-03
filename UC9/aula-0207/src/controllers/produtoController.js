const { Produto } = require("../models")

class ProdutoController {
  async listarProdutos(req, res) {
    try {
      const produtos = await Produto.findAll()
      res.json({ mensagem: "Lista de produtos", produtos })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  async criarProduto(req, res) {
    try {
      const novoProduto = await Produto.create(req.body)
      res.status(201).json(novoProduto)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  async buscarProdutoPorId(req, res) {
    try {
      const { id } = req.params
      const produto = await Produto.findByPk(id)
      if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" })
      }
      res.json({ mensagem: "Produto encontrado", produto })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  async atualizarProduto(req, res) {
    try {
      const { id } = req.params
      const produto = await Produto.findByPk(id)
      if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" })
      }
      await produto.update(req.body)
      res.json({ mensagem: "Produto atualizado", produto })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  async deletarProduto(req, res) {
    try {
      const { id } = req.params
      const produto = await Produto.findByPk(id)
      if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" })
      }
      await produto.destroy()
      res.json({ mensagem: "Produto deletado", produto })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}

module.exports = new ProdutoController()
