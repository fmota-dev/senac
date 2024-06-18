document.addEventListener("DOMContentLoaded", () => {
  const eventosContainer = document.getElementById("eventos-container");
  const btnNovoEvento = document.getElementById("btn-novo-evento");
  const modalNovoEvento = document.getElementById("modal-novo-evento");
  const formNovoEvento = document.getElementById("form-novo-evento");
  const modalEditarEvento = document.getElementById("modal-editar-evento");
  const formEditarEvento = document.getElementById("form-editar-evento");
  const inputEventoId = document.getElementById("evento-id");
  const inputTituloEditar = document.getElementById("titulo-editar");
  const inputDescricaoEditar = document.getElementById("descricao-editar");
  const inputDataEditar = document.getElementById("data-editar");
  const inputLocalEditar = document.getElementById("local-editar");
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";
  document.body.appendChild(modalOverlay);

  const fetchEventos = async () => {
    const response = await fetch("/eventos");
    const eventos = await response.json();
    eventosContainer.innerHTML = "";
    eventos.forEach((evento) => {
      const eventoDiv = document.createElement("div");
      eventoDiv.className = "evento";
      eventoDiv.innerHTML = `
        <h3>${evento.titulo}</h3>
        <p>${evento.descricao}</p>
        <p>${new Date(evento.data).toLocaleDateString()}</p>
        <p>${evento.local}</p>
        <button class="btn-editar" data-id="${evento.id}">Editar</button>
        <button class="btn-excluir" data-id="${evento.id}">Excluir</button>
      `;
      eventosContainer.appendChild(eventoDiv);
    });
  };

  const showModal = (modal) => {
    modal.classList.add("show");
    modalOverlay.classList.add("show");
  };

  const hideModal = (modal) => {
    modal.classList.remove("show");
    modalOverlay.classList.remove("show");
  };

  btnNovoEvento.addEventListener("click", () => {
    showModal(modalNovoEvento);
  });

  formNovoEvento.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(formNovoEvento);
    const evento = Object.fromEntries(formData.entries());
    await fetch("/eventos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evento),
    });
    hideModal(modalNovoEvento);
    fetchEventos();
  });

  formEditarEvento.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = inputEventoId.value;
    const evento = {
      titulo: inputTituloEditar.value,
      descricao: inputDescricaoEditar.value,
      data: inputDataEditar.value,
      local: inputLocalEditar.value,
    };
    await fetch(`/eventos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evento),
    });
    hideModal(modalEditarEvento);
    fetchEventos();
  });

  eventosContainer.addEventListener("click", async (e) => {
    if (e.target.classList.contains("btn-editar")) {
      const id = e.target.dataset.id;
      const response = await fetch(`/eventos/${id}`);
      const evento = await response.json();
      inputEventoId.value = evento.id;
      inputTituloEditar.value = evento.titulo;
      inputDescricaoEditar.value = evento.descricao;
      inputDataEditar.value = evento.data.split("T")[0];
      inputLocalEditar.value = evento.local;
      showModal(modalEditarEvento);
    } else if (e.target.classList.contains("btn-excluir")) {
      const id = e.target.dataset.id;
      await fetch(`/eventos/${id}`, {
        method: "DELETE",
      });
      fetchEventos();
    }
  });

  fetchEventos();

  modalOverlay.addEventListener("click", () => {
    hideModal(modalNovoEvento);
    hideModal(modalEditarEvento);
  });
});
