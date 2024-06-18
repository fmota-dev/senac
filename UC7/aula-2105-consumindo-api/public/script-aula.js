let cep = document.getElementById("cep");

cep.addEventListener("input", async (event) => {
  const cep = event.target.value;
  if (cep.length !== 8) {
    console.log("CEP inválido");
    return;
  } else {
    preencherCampos(cep);
  }
});

async function preencherCampos(cep) {
  fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
    .then((response) => {
      if (!response.ok) {
        limparDados();
        document.getElementById("error").textContent = "Erro ao buscar CEP.";
        errorDiv.classList.add("erro");
        throw new Error("CEP não encontrado.");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("logradouro").value = data.street;
      document.getElementById("bairro").value = data.neighborhood;
      document.getElementById("cidade").value = data.city;
      document.getElementById("estado").value = data.state;
      document.getElementById("error").textContent = "CEP encontrado.";
    });
}

function limparDados() {
  document.getElementById("logradouro").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("error").textContent = "";
}