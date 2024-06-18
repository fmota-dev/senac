const userModel = require("../models/user");

class UserController {
  async getAllUsers(req, res) {
    const users = await userModel.findAll();
    return res.json(users);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado!" });
    }
    return res.json(user);
  }

  async createUsers(req, res) {
    const { nome, idade, email } = req.body;
    const user = await userModel.create({ nome, idade, email });
    return res.json({ message: "Usuário criado com sucesso!", user });
  }

  async updateUser(req, res) {
    const { id } = req.params;
    const { nome, idade, email } = req.body;
    await userModel.update({ nome, idade, email }, id);
    return res.json({ message: "Usuário atualizado com sucesso!" });
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    await userModel.delete(id);
    return res.json({ message: "Usuário deletado com sucesso!" });
  }
}

module.exports = new UserController();
