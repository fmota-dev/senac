const cepInput = document.getElementById("cep");
const errorDiv = document.getElementById("error");

cepInput.addEventListener("input", async (event) => {
  const cep = event.target.value;
  if (cep.length === 8) {
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v1/${cep}`
      );
      if (response.ok) {
        const data = await response.json();
        if (!data.erro) {
          document.getElementById("logradouro").value = data.street;
          document.getElementById("bairro").value = data.neighborhood;
          document.getElementById("cidade").value = data.city;
          document.getElementById("estado").value = data.state;
          errorDiv.textContent = ""; // Limpa a mensagem de erro, se houver
        } else {
          errorDiv.textContent = "CEP não encontrado.";
          errorDiv.classList.add("erro");
        }
      } else {
        errorDiv.textContent =
          "Erro ao buscar o CEP. Por favor, tente novamente.";
        errorDiv.classList.add("erro");
      }
    } catch (error) {
      console.error(error);
      errorDiv.textContent =
        "Erro ao buscar o CEP. Por favor, tente novamente.";
      errorDiv.classList.add("erro");
    }
  }
});
