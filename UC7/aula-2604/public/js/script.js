window.onload = function () {
  fetch("/orcamentos")
    .then((response) => response.json())
    .then((orcamentos) => {
      // Usa os dados retornados para criar a lista de orçamentos
      const orcamentosList = document.getElementById("orcamentos-list");
      orcamentos.forEach((orcamento) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <h2>${orcamento.nome}</h2>
          <p>Telefone: ${orcamento.telefone}</p>
          <p>Tipo de Serviço: ${orcamento.tipoServico}</p>
          <p>Descrição: ${orcamento.descricao}</p>
        `;
        orcamentosList.appendChild(li);
      });
    });
};
