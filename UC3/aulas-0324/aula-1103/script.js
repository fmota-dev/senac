let nomeTarefa = document.getElementById("nomeTarefa");
let btnAdicionar = document.getElementById("btnAdicionar");
let listaTarefas = document.getElementById("listaTarefas");

// Carregar tarefas salvas
let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
for (let tarefa of tarefasSalvas) {
  adicionarTarefaNaLista(tarefa);
}

function adicionarTarefa(event) {
  event.preventDefault();
  let tarefa = nomeTarefa.value;
  adicionarTarefaNaLista(tarefa);

  // Salvar tarefa no localStorage
  tarefasSalvas.push(tarefa);
  localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));

  nomeTarefa.value = "";
}

function adicionarTarefaNaLista(tarefa) {
  let itemTarefa = document.createElement("li");
  let btnConcluir = document.createElement("button");
  itemTarefa.textContent = tarefa;
  listaTarefas.appendChild(itemTarefa);
  btnConcluir.textContent = "Tarefa Concluída";
  btnConcluir.classList.add("btnConcluir");
  itemTarefa.appendChild(btnConcluir);
  btnConcluir.addEventListener("click", concluirTarefa);
}

btnAdicionar.addEventListener("click", adicionarTarefa);

function limparLista() {
  listaTarefas.innerHTML = "";
  localStorage.clear();
}

let btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limparLista);

function concluirTarefa(event) {
  let tarefaConcluida = event.target.parentElement;
  tarefaConcluida.classList.toggle("concluida");
  tarefaConcluida.classList.contains("concluida")
    ? (event.target.textContent = "Desfazer")
    : (event.target.textContent = "Tarefa Concluída");
}
