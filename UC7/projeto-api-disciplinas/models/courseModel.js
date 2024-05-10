class Course {
  constructor() {
    this.listCourses = [];
  }

  createCourse(name, description) {
    const course = {
      id: this.listCourses.length + 1,
      name,
      description,
    };
    this.listCourses.push(course);
    return course;
  }

  getAllCourses() {
    return this.listCourses;
  }

  getCourseById(id) {
    const courseResult = this.listCourses.find((course) => course.id === id);
    return courseResult;
  }

  updateCourse(id, newName, newDescription) {
    const courseIndex = this.listCourses.findIndex(
      (course) => course.id === id
    );
    if (courseIndex !== -1) {
      this.listCourses[courseIndex].name = newName;
      this.listCourses[courseIndex].description = newDescription;
      return this.listCourses[courseIndex];
    } else {
      return null;
    }
  }

  deleteCourse(id) {
    const courseIndex = this.listCourses.findIndex(
      (course) => course.id === id
    );
    if (courseIndex !== -1) {
      this.listCourses.splice(courseIndex, 1);
      return true;
    }
    return false;
  }
}

module.exports = Course;
