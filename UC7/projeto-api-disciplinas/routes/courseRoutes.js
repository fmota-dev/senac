const express = require("express");
const courseController = require("../controllers/courseController");
const router = express.Router();

router.get("/courses", courseController.getAllCourses);
router.get("/courses/:id", courseController.getCourseById);

router.post("/courses/create", courseController.createCourse);
router.put("/courses/update/:id", courseController.updateCourse);
router.delete("/courses/delete/:id", courseController.deleteCourse);

module.exports = router;
