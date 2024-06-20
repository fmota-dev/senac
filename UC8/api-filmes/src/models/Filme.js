const db = require("../database/db")
class Filme {
  async listarFilmes() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM filmes", (error, results) => {
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
module.exports = new Filme()
