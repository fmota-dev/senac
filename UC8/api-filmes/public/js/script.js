async function listarGeneros() {
	const response = await fetch('/generos')
	const generos = await response.json()
	return generos
}

async function listarFilmes() {
	let listaFilmes = document.querySelector('.lista-filmes')
	const response = await fetch('/filmes')
	const filmes = await response.json()
	const generos = await listarGeneros()

	filmes.forEach((filme) => {
		const generoFilme = generos.find((genero) => genero.id === filme.id_genero)
		let templateFilme = `
      
      <tr>
        <td>${filme.id}</td>
        <td>${filme.nome}</td>
        <td>${generoFilme.descricao}</td>
				<td>
					<div>
						<button class="btn btn-editar" onclick="editarFilme(${filme.id})">Editar</button>
						<button class="btn btn-remover" onclick="deletarFilme(${filme.id})">Deletar</button>
					</div>
				</td>
      </tr>
			`
		listaFilmes.innerHTML += templateFilme
	})
}

listarFilmes()

async function editarFilme(event, id) {
	let dialog = document.querySelector('#dialog')
	dialog.showModal()
}

async function deletarFilme(id) {
	const response = await fetch(`/filmes/${id}`, {
		method: 'DELETE',
	})
	const data = await response.json()
	const template = `
		<div class="alert alert-success" role="alert">
			${data.mensagem}
		</div>
	`
	document.body.innerHTML += template
	setTimeout(() => {
		window.location.reload()
	}, 2000)
}

