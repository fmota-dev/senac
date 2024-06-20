document.addEventListener("htmx:afterOnLoad", function (event) {
  if (event.target.id === "userList" && event.detail.xhr.status === 200) {
    const data = JSON.parse(event.detail.xhr.responseText)
    const userListDiv = document.getElementById("userList")
    userListDiv.innerHTML = "" // Limpa o conteúdo anterior

    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tbody = document.createElement("tbody")

    // Cria o cabeçalho da tabela
    const headerRow = document.createElement("tr")
    const headers = ["ID", "Nome", "Idade", "Criado em", "Atualizado em"]
    headers.forEach((headerText) => {
      const th = document.createElement("th")
      th.textContent = headerText
      headerRow.appendChild(th)
    })
    thead.appendChild(headerRow)

    // Cria as linhas da tabela
    data.forEach((user) => {
      const row = document.createElement("tr")

      const cellId = document.createElement("td")
      cellId.textContent = user.id
      row.appendChild(cellId)

      const cellNome = document.createElement("td")
      cellNome.textContent = user.nome
      row.appendChild(cellNome)

      const cellIdade = document.createElement("td")
      cellIdade.textContent = user.idade
      row.appendChild(cellIdade)

      const cellCriadoEm = document.createElement("td")
      cellCriadoEm.textContent = new Date(user.criadoEm).toLocaleString()
      row.appendChild(cellCriadoEm)

      const cellAtualizadoEm = document.createElement("td")
      cellAtualizadoEm.textContent = new Date(
        user.AtualizadoEm
      ).toLocaleString()
      row.appendChild(cellAtualizadoEm)

      tbody.appendChild(row)
    })

    table.appendChild(thead)
    table.appendChild(tbody)
    userListDiv.appendChild(table)
  }
})
