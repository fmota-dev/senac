async function listarGeneros() {
  const response = await fetch("/generos")
  const generos = await response.json()
  return generos
}

async function listarFilmes() {
  let listaFilmes = document.querySelector(".lista-filmes")
  const response = await fetch("/filmes")
  const filmes = await response.json()
  const generos = await listarGeneros()

  filmes.forEach((filme) => {
    const generoFilme = generos.find((genero) => genero.ID === filme.ID_GENERO)
    let templateFilme = `
      <tr>
        <td>${filme.ID}</td>
        <td>${filme.NOME}</td>
        <td>${generoFilme.DESCRICAO}</td>
      </tr>
    `

    listaFilmes.innerHTML += templateFilme
  })
}

listarFilmes()
