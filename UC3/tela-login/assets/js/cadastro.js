const usuarioCadastro = document.getElementById("usuario-cadastro");
const senhaCadastro = document.getElementById("senha-cadastro");
const botaoCadastrar = document.getElementById("btn-cadastrar");
const inputTermos = document.getElementById("termos-e-condicoes");
const botaoFecharModal = document.querySelector(".close");
let usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

function realizarCadastro(event) {
  event.preventDefault();
  const usuario = usuarioCadastro.value;
  const senha = senhaCadastro.value;

  // se usuario não estiver cadastrado roda o if
  if (
    usuariosCadastrados.find(
      (usuarioCadastrado) => usuarioCadastrado.usuario === usuario
    )
  ) {
    abrirModal("Usuário já cadastrado!");
  } else if (usuario && senha && inputTermos.checked) {
    usuariosCadastrados.push({ usuario, senha });
    salvarLocalStorage();
    abrirModal("Cadastro realizado com sucesso!");
    botaoFecharModal.addEventListener("click", fecharModal);
    usuarioCadastro.value = "";
    senhaCadastro.value = "";
  } else if (!inputTermos.checked && usuario && senha) {
    abrirModal("Aceite os termos e condições!");
    botaoFecharModal.addEventListener("click", fecharModal);
  } else {
    abrirModal("Preencha todos os campos!");
  }
  botaoFecharModal.addEventListener("click", fecharModal);
}

function salvarLocalStorage() {
  localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));
}

function abrirModal(texto) {
  let modal = document.querySelector(".modal");
  modal.classList.add("ativo");
  let textoModal = document.querySelector("#modal-text");
  textoModal.textContent = texto;
}

function fecharModal() {
  let modal = document.querySelector(".modal");
  modal.classList.remove("ativo");
}

function desbugar() {
  localStorage.removeItem("usuarios");
  localStorage.clear();
  window.location.reload();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "*") {
    desbugar();
  }
});

botaoCadastrar.addEventListener("click", realizarCadastro);
