const Course = require("../models/CourseModel")
const courseModel = new Course()

class CourseController {
  async createCourse(req, res) {
    const { name, description } = req.body
    const course = await courseModel.createCourse(name, description)
    res.json(course)
  }

  async getAllCourses(req, res) {
    const courses = await courseModel.getAllCourses()
    res.json(courses)
  }

  async getCourseById(req, res) {
    const { id } = req.params
    const course = await courseModel.getCourseById(Number(id))
    if (course) {
      res.json(course)
    } else {
      res.json({ message: "Curso não encontrado" })
    }
  }

  async updateCourse(req, res) {
    const { id } = req.params
    const { name, description } = req.body
    const course = await courseModel.updateCourse(Number(id), name, description)
    if (course) {
      res.json({ message: "Curso atualizado com sucesso", course })
    } else {
      res.json({ message: "Curso não encontrado" })
    }
  }

  async deleteCourse(req, res) {
    const { id } = req.params
    const result = await courseModel.deleteCourse(Number(id))
    if (result) {
      res.json({ message: "Curso excluído com sucesso" })
    } else {
      res.json({ message: "Curso não encontrado" })
    }
  }
}

module.exports = new CourseController()
