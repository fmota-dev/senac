const db = require("../database/db")
class Genero {
  async listarGeneros() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM genero", (error, results) => {
        if (error) {
          console.log("Erro ao executar a consulta sql")
          reject(error)
        } else {
          resolve(results)
        }
      })
    })
  }
}
module.exports = new Genero()
