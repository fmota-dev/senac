const sequelize = require("../database/config");
const { DataTypes } = require("sequelize");

class User {
  constructor() {
    this.Usuario = sequelize.define("Usuario", {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  }

  async findAll() {
    return await this.Usuario.findAll();
  }

  async findById(id) {
    return await this.Usuario.findByPk(id);
  }

  async create(usuario) {
    return await this.Usuario.create(usuario);
  }

  async update(usuario, id) {
    return await this.Usuario.update(usuario, {
      where: {
        id: id,
      },
    });
  }

  async delete(id) {
    return await this.Usuario.destroy({
      where: {
        id: id,
      },
    });
  }
}

module.exports = new User();
