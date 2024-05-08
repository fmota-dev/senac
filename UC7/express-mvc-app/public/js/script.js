const endpointUrl = "http://localhost:3000/cliente/listarClientes";

fetch(endpointUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.listaClientes
      .forEach((cliente) => {
        const id = cliente.id;
        const nome = cliente.nome;
        const email = cliente.email;

        const ul = document.getElementById("listaClientes");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${id} - ${nome} - ${email}`));
        ul.appendChild(li);
      })
      .catch((error) => {
        console.log(error);
      });
  });
