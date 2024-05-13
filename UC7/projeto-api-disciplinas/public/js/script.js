document.addEventListener('DOMContentLoaded', function () {
	// Botões
	const btnGetAllCourses = document.getElementById('btnGetAllCourses');
	const btnGetCourse = document.getElementById('btnGetCourse');
	const btnCreateCourse = document.getElementById('btnCreateCourse');
	const btnUpdateCourse = document.getElementById('btnUpdateCourse');
	const btnDeleteCourse = document.getElementById('btnDeleteCourse');
	const endpointUrl = 'http://localhost:3000';

	// Função para renderizar todos os cursos
	function renderAllCourses(courses) {
		const listCourses = document.getElementById('listCourses');
		if (courses.length === 0) {
			listCourses.innerHTML = '<li>Nenhum curso cadastrado</li>';
		} else {
			listCourses.innerHTML = courses
				.map(
					(course) =>
						`<li>ID: ${course.id} <br> Nome: ${course.name} <br> Descrição: ${course.description}</li>`
				)
				.join('');
		}
	}

	// Função para limpar os campos de entrada
	function clearInputFields() {
		document.getElementById('courseName').value = '';
		document.getElementById('courseDescription').value = '';
		document.getElementById('cursoId').value = '';
		document.getElementById('courseId').value = '';
		document.getElementById('courseNameUpdate').value = '';
		document.getElementById('courseDescriptionUpdate').value = '';
		document.getElementById('courseIdDelete').value = '';
	}

	// Função para renderizar um curso por ID
	function renderCourseById(course) {
		const resultForId = document.getElementById('resultForId');
		if (course) {
			resultForId.innerHTML = `<li>${course.name}: ${course.description}</li>`;
		} else {
			resultForId.innerHTML = '<li>Curso não encontrado</li>';
		}
	}

	// Função para obter todos os cursos
	function getAllCourses() {
		fetch(`${endpointUrl}/courses`)
			.then((response) => response.json())
			.then((data) => {
				if (data.length === 0) {
					alert('Não há nenhum curso cadastrado');
				} else {
					renderAllCourses(data);
					alert('Cursos obtidos com sucesso!');
				}
			});
	}

	// Função para obter curso por ID
	function getCourseById() {
		const courseId = document.getElementById('cursoId').value;
		if (!courseId) {
			alert('Por favor, preencha o campo ID do curso.');
			return;
		}
		fetch(`${endpointUrl}/courses/${courseId}`)
			.then((response) => response.json())
			.then((data) => {
				renderCourseById(data);
				alert('Curso obtido com sucesso!');
			})
			.catch((error) => console.error('Erro ao obter curso por ID:', error));
	}

	// Função para criar curso
	function createCourse() {
		const courseName = document.getElementById('courseName').value;
		const courseDescription =
			document.getElementById('courseDescription').value;
		if (!courseName || !courseDescription) {
			alert('Por favor, preencha todos os campos.');
			return;
		}
		const data = { name: courseName, description: courseDescription };

		fetch(`${endpointUrl}/courses/create`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Curso criado com sucesso:', data);
				alert('Curso criado com sucesso!');
				clearInputFields();
			})
			.catch((error) => console.error('Erro ao criar curso:', error));
	}

	// Função para atualizar curso
	function updateCourse() {
		const courseId = document.getElementById('courseId').value;
		const courseNameUpdate = document.getElementById('courseNameUpdate').value;
		const courseDescriptionUpdate = document.getElementById(
			'courseDescriptionUpdate'
		).value;
		if (!courseId || !courseNameUpdate || !courseDescriptionUpdate) {
			alert('Por favor, preencha todos os campos.');
			return;
		}
		const data = {
			name: courseNameUpdate,
			description: courseDescriptionUpdate,
		};

		fetch(`${endpointUrl}/courses/update/${courseId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Curso atualizado com sucesso:', data);
				alert('Curso atualizado com sucesso!');
				clearInputFields();
			})
			.catch((error) => console.error('Erro ao atualizar curso:', error));
	}

	// Função para deletar curso
	function deleteCourse() {
		const courseIdDelete = document.getElementById('courseIdDelete').value;
		if (!courseIdDelete) {
			alert('Por favor, preencha o campo ID do curso.');
			return;
		}
		fetch(`${endpointUrl}/courses/delete/${courseIdDelete}`, {
			method: 'DELETE',
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Curso excluído com sucesso:', data);
				alert('Curso excluído com sucesso!');
				clearInputFields();
			})
			.catch((error) => console.error('Erro ao excluir curso:', error));
	}

	// Adicionar Event Listeners
	btnGetAllCourses.addEventListener('click', getAllCourses);
	btnGetCourse.addEventListener('click', getCourseById);
	btnCreateCourse.addEventListener('click', createCourse);
	btnUpdateCourse.addEventListener('click', updateCourse);
	btnDeleteCourse.addEventListener('click', deleteCourse);
});
