const User = require("../models/userModel");
let users = [];

class UserController {
  addUser(req, res) {
    const { nome, email, cep, rua, cidade, estado } = req.body;
    const newUser = new User(nome, email, cep, rua, cidade, estado);
    users.push(newUser);
    res.status(201).json(newUser);
  }

  getUsers(req, res) {
    res.json(users);
  }

  getUserByEmail(req, res) {
    const { email } = req.params;
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.json(user);
  }
}

module.exports = new UserController();
