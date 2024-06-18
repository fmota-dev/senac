const Course = require("../models/courseModel");
const courseModel = new Course();

class CourseController {
  createCourse(req, res) {
    const { name, description } = req.body;
    const course = courseModel.createCourse(name, description);
    res.json(course);
  }

  getAllCourses(req, res) {
    const courses = courseModel.getAllCourses();
    res.json(courses);
  }

  getCourseById(req, res) {
    const { id } = req.params;
    const course = courseModel.getCourseById(Number(id));
    if (course) {
      res.json(course);
    } else {
      res.json({ message: "Curso não encontrado" });
    }
  }

  updateCourse(req, res) {
    const { id } = req.params;
    const { name, description } = req.body;
    const course = courseModel.updateCourse(Number(id), name, description);
    if (course) {
      res.json(course);
    } else {
      res.json({ message: "Curso não encontrado" });
    }
  }

  deleteCourse(req, res) {
    const { id } = req.params;
    const result = courseModel.deleteCourse(Number(id));
    if (result) {
      res.json({ message: "Curso excluído com sucesso" });
    } else {
      res.json({ message: "Curso não encontrado" });
    }
  }
}

module.exports = new CourseController();
