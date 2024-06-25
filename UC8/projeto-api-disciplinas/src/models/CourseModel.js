const db = require("../database/db")

class CourseModel {
  async createCourse(name, description) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO courses (name, description) VALUES (?, ?)",
        [name, description],
        (error, result) => {
          if (error) {
            console.log("Erro ao criar curso")
            reject(error)
          } else {
            resolve({ id: result.insertId, name, description })
          }
        }
      )
    })
  }

  async getAllCourses() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM courses", (error, result) => {
        if (error) {
          console.log("Erro ao buscar cursos")
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  }

  async getCourseById(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM courses WHERE id = ?", [id], (error, result) => {
        if (error) {
          console.log("Erro ao buscar curso")
          reject(error)
        } else {
          resolve(result[0])
        }
      })
    })
  }

  async updateCourse(id, name, description) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE courses SET name = ?, description = ? WHERE id = ?",
        [name, description, id],
        (error, result) => {
          if (error) {
            console.log("Erro ao atualizar curso")
            reject(error)
          } else {
            resolve({ id, name, description })
          }
        }
      )
    })
  }

  async deleteCourse(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM courses WHERE id = ?", [id], (error, result) => {
        if (error) {
          console.log("Erro ao excluir curso")
          reject(error)
        } else {
          resolve(result.affectedRows > 0)
        }
      })
    })
  }
}

module.exports = CourseModel
