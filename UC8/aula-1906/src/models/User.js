const db = require("../database/db")

class User {
  async getAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM usuarios", (error, results) => {
        if (error) {
          reject(error)
          return
        }
        resolve(results)
      })
    })
  }

  async getById(id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM usuarios WHERE id = ?",
        [id],
        (error, results) => {
          if (error) {
            reject(error)
            return
          }
          resolve(results)
        }
      )
    })
  }

  async create(nome, idade) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO usuarios (nome, idade) VALUES (?, ?)",
        [nome, idade],
        (error, results) => {
          if (error) {
            reject(error)
            return
          }
          resolve(results)
        }
      )
    })
  }

  async update(id, nome, idade) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE usuarios SET nome = ?, idade = ? WHERE id = ?",
        [nome, idade, id],
        (error, results) => {
          if (error) {
            reject(error)
            return
          }
          resolve(results)
        }
      )
    })
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM usuarios WHERE id = ?", [id], (error, results) => {
        if (error) {
          reject(error)
          return
        }
        resolve(results)
      })
    })
  }
}

module.exports = new User()
