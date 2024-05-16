window.onload = function () {
  const endpointUrl = "http://localhost:3000/vinhos";
  const wineList = document.getElementById("wine-list");

  fetch(endpointUrl)
    .then((response) => response.json())
    .then((vinhos) => {
      vinhos.forEach((vinho) => {
        const vinhoElement = document.createElement("div");
        vinhoElement.classList.add("card"); // Adiciona a classe "card" ao elemento criado

        // Adiciona uma imagem se a URL da imagem estiver presente nos dados do vinho
        const imageHtml = vinho.imagem
          ? `<img src="${vinho.imagem}" alt="Imagem do Vinho" class="card-image">` // Adiciona a classe "card-image" à imagem
          : "";

        const textHtml = `
                    <div class="card-text">
                        <h2>${vinho.nome}</h2>
                        <p class="safra">Safra: ${vinho.safra}</p>
                        <p class="pais">País: ${vinho.pais}</p>
                        <p>Tipo: ${vinho.tipo}</p>
                        <p class="preco">Preço: ${vinho.preco}</p>
						<button class="btn-comprar">Comprar</button>
                    </div>
                `;

        vinhoElement.innerHTML = `
                    ${textHtml}
                    ${imageHtml}
                `;

        wineList.appendChild(vinhoElement);
      });
    });
};

const endpointUrl = "http://localhost:3000/vinhos";

// Função para adicionar um vinho
function adicionarVinho(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const safra = document.getElementById("safra").value;
  const pais = document.getElementById("pais").value;
  const tipo = document.getElementById("tipo").value;
  const preco = document.getElementById("preco").value;
  const imagem = document.getElementById("imagem").value;

  const vinho = { nome, safra, pais, tipo, preco, imagem };

  fetch("/vinhos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vinho),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Vinho adicionado com sucesso!");
    })
    .catch((error) => console.error("Error:", error));
}

// Função para editar um vinho
function editarVinho(event) {
  event.preventDefault();

  const id = document.getElementById("edit-id").value;
  const nome = document.getElementById("edit-nome").value;
  const safra = document.getElementById("edit-safra").value;
  const pais = document.getElementById("edit-pais").value;
  const tipo = document.getElementById("edit-tipo").value;
  const preco = document.getElementById("edit-preco").value;

  const vinho = { nome, safra, pais, tipo, preco };

  fetch(`${endpointUrl}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vinho),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert(`Dados do vinho editados com sucesso!`);
    })
    .catch((error) => console.error("Error:", error));

  renderizarListaVinhos();
}

// Função para deletar um vinho
function deletarVinho(event) {
  event.preventDefault();

  const id = document.getElementById("delete-id").value;

  fetch(`${endpointUrl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Vinho deletado com sucesso!");
    })
    .catch((error) => console.error("Error:", error));
}
// Função para renderizar uma lista com o ID dos vinhos já cadastrados, para a pagina admin
function renderizarListaVinhos() {
  fetch(endpointUrl)
    .then((response) => response.json())
    .then((vinhos) => {
      const listaVinhos = document.getElementById("list-wines");

      vinhos.forEach((vinho) => {
        const vinhoIdElement = document.createElement("li");
        vinhoIdElement.innerHTML = `
          <p>ID: ${vinho.id}</p>
          <p>Nome: ${vinho.nome}</p>
          <p>Safra: ${vinho.safra}</p>
          <p>País: ${vinho.pais}</p>
          <p>Tipo: ${vinho.tipo}</p>
          <p>Preço: ${vinho.preco}</p>
        `;

        listaVinhos.appendChild(vinhoIdElement);
      });
    });
}

renderizarListaVinhos();

// Adiciona os event listeners aos formulários
document
  .querySelector('form[action="/vinhos"]')
  .addEventListener("submit", adicionarVinho);
document
  .querySelector('form[action="/vinhos/:id"]:nth-child(2)')
  .addEventListener("submit", editarVinho);
document
  .querySelector('form[action="/vinhos/:id"]:nth-child(3)')
  .addEventListener("submit", deletarVinho);
