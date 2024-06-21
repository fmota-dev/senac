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
      </tr>
    `

		listaFilmes.innerHTML += templateFilme
	})
}

listarFilmes()
