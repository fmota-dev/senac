class CourseManager {
  constructor() {
    this.btnGetAllCourses = document.getElementById("btnGetAllCourses");
    this.btnGetCourse = document.getElementById("btnGetCourse");
    this.btnCreateCourse = document.getElementById("btnCreateCourse");
    this.btnUpdateCourse = document.getElementById("btnUpdateCourse");
    this.btnDeleteCourse = document.getElementById("btnDeleteCourse");
    this.endpointUrl = "http://localhost:3000";
    this.listCourses = document.getElementById("listCourses");
    this.resultForId = document.getElementById("resultForId");
    this.inputFields = [
      "courseName",
      "courseDescription",
      "cursoId",
      "courseId",
      "courseNameUpdate",
      "courseDescriptionUpdate",
      "courseIdDelete",
    ];
    this.initialize();
  }

  initialize() {
    this.btnGetAllCourses.addEventListener("click", this.getAllCourses.bind(this));
    this.btnGetCourse.addEventListener("click", this.getCourseById.bind(this));
    this.btnCreateCourse.addEventListener("click", this.createCourse.bind(this));
    this.btnUpdateCourse.addEventListener("click", this.updateCourse.bind(this));
    this.btnDeleteCourse.addEventListener("click", this.deleteCourse.bind(this));
  }

  renderAllCourses(courses) {
    if (courses.length === 0) {
      this.listCourses.innerHTML = "<li>Nenhum curso cadastrado</li>";
    } else {
      const courseItems = courses.map(
        (course) =>
          `<li>ID: ${course.id} <br> Nome: ${course.name} <br> Descrição: ${course.description}</li>`
      );
      this.listCourses.innerHTML = courseItems.join("");
    }
  }

  clearInputFields() {
    this.inputFields.forEach((field) => {
      document.getElementById(field).value = "";
    });
  }

  renderCourseById(course) {
    if (course.message) {
      this.resultForId.innerHTML = `<p>${course.message}</p>`;
    } else {
      this.resultForId.innerHTML = `<p>ID: ${course.id} <br> Nome: ${course.name} <br> Descrição: ${course.description}</p>`;
    }
  }

  handleError(error, action) {
    console.error(`Erro ao ${action} curso:`, error);
    alert(`Erro ao ${action} curso. Por favor, tente novamente.`);
  }

  getAllCourses() {
    fetch(`${this.endpointUrl}/courses`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          alert("Não há nenhum curso cadastrado");
        } else {
          this.renderAllCourses(data);
          alert("Cursos obtidos com sucesso!");
        }
      })
      .catch((error) => this.handleError(error, "obter"));
  }

  getCourseById() {
    const courseId = document.getElementById("cursoId").value;
    if (!courseId) {
      alert("Por favor, preencha o campo ID do curso.");
      return;
    }
    fetch(`${this.endpointUrl}/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => {
        this.renderCourseById(data);
        if (data.message) {
          alert("Curso não encontrado");
        } else {
          alert("Curso obtido com sucesso!");
        }
      })
      .catch((error) => this.handleError(error, "obter"));
  }

  createCourse() {
    const courseName = document.getElementById("courseName").value;
    const courseDescription = document.getElementById("courseDescription").value;
    if (!courseName || !courseDescription) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const data = { name: courseName, description: courseDescription };

    fetch(`${this.endpointUrl}/courses/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Curso criado com sucesso:", data);
        alert("Curso criado com sucesso!");
        this.clearInputFields();
      })
      .catch((error) => this.handleError(error, "criar"));
  }

  updateCourse() {
    const courseId = document.getElementById("courseId").value;
    const courseNameUpdate = document.getElementById("courseNameUpdate").value;
    const courseDescriptionUpdate = document.getElementById("courseDescriptionUpdate").value;
    if (!courseId || !courseNameUpdate || !courseDescriptionUpdate) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    const data = {
      name: courseNameUpdate,
      description: courseDescriptionUpdate,
    };

    fetch(`${this.endpointUrl}/courses/update/${courseId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Curso atualizado com sucesso:", data);
        alert("Curso atualizado com sucesso!");
        this.clearInputFields();
      })
      .catch((error) => this.handleError(error, "atualizar"));
  }

  deleteCourse() {
    const courseIdDelete = document.getElementById("courseIdDelete").value;
    if (!courseIdDelete) {
      alert("Por favor, preencha o campo ID do curso.");
      return;
    }
    fetch(`${this.endpointUrl}/courses/delete/${courseIdDelete}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Curso excluído com sucesso:", data);
        alert("Curso excluído com sucesso!");
        this.clearInputFields();
      })
      .catch((error) => this.handleError(error, "excluir"));
  }
}

const courseManager = new CourseManager();
