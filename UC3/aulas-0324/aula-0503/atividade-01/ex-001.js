function verificarTamanhoPalavra() {
  let entrada = document.getElementById("nome");

  if (entrada.value.length < 5) {
    entrada.classList.add("erro");
    console.log("Erro: a palavra deve ter no mínimo 5 caracteres");
  } else {
    entrada.classList.remove("erro");
    console.log("Palavra válida")
  }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", verificarTamanhoPalavra);
