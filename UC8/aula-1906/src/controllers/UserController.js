const userModel = require("../models/User")

class UserController {
  async getAll(req, res) {
    try {
      const users = await userModel.getAll()
      return res.json(users)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async getById(req, res) {
    const { id } = req.params

    try {
      const user = await userModel.getById(id)
      if (user.length === 0) {
        return res.status(404).json({ message: "Usuário não encontrado" })
      }
      return res.json(user)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async create(req, res) {
    const { nome, idade } = req.body
    if (!nome || !idade) {
      return res.status(400).json({ message: "Nome e idade são obrigatórios" })
    }

    try {
      await userModel.create(nome, idade)
      return res.status(201).json({ message: "Usuário criado com sucesso!" })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async update(req, res) {
    const { id } = req.params
    const { nome, idade } = req.body
    if (!nome && !idade) {
      return res
        .status(400)
        .json({ message: "Informe o nome ou a idade para atualizar o usuário" })
    }

    try {
      await userModel.update(id, nome, idade)
      return res.json({ message: "Usuário atualizado com sucesso!" })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  async delete(req, res) {
    const { id } = req.params

    try {
      await userModel.delete(id)
      return res.json({ message: "Usuário deletado com sucesso!" })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}

module.exports = new UserController()
