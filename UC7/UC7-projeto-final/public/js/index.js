fetch("/eventos")
  .then((response) => response.json())
  .then((eventos) => {
    const tbody = document.querySelector("tbody");
    eventos.forEach((evento) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${evento.titulo}</td>
            <td>${evento.descricao}</td>
            <td>${evento.data}</td>
            <td>${evento.local}</td>
          `;
      tbody.appendChild(row);
    });
  });
