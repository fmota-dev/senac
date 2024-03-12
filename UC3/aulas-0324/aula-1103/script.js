let inputTarefa = document.getElementById('nomeTarefa');
let btnAdicionar = document.getElementById('btnAdicionar');
let btnLimpar = document.getElementById('btnLimpar');
let listaTarefas = document.getElementById('listaTarefas');
let tarefas = [];

function adicionarTarefa(event) {
	event.preventDefault();
	let novaTarefa = inputTarefa.value;
  
	if (novaTarefa.length > 0) {
    criarItemTarefa(novaTarefa);
		tarefas.push(novaTarefa);
		inputTarefa.value = '';
	}
}

function limparTarefas() {
  listaTarefas.innerHTML = '';
  tarefas = []; // Limpar o vetor de tarefas
}

function criarItemTarefa(tarefa) {
  // Criar um novo elemento <li> para representar a tarefa na lista
	let itemTarefa = document.createElement('li');

	// Criar uma div para conter os botões de ação (concluir e excluir)
	let divBotoes = document.createElement('div');

	// Criar botão de concluir
	let btnConcluir = document.createElement('button');
	btnConcluir.textContent = 'Concluir'; // Definir o texto do botão
	btnConcluir.classList.add('btnConcluir'); // Adicionar uma classe para estilização

	// Criar botão de excluir
	let btnExcluir = document.createElement('button');
	btnExcluir.textContent = 'Excluir'; // Definir o texto do botão
	btnExcluir.classList.add('btnExcluir'); // Adicionar uma classe para estilização

	// Configurar a estrutura do item da tarefa
	itemTarefa.textContent = tarefa; // Definir o texto da tarefa
	divBotoes.classList.add('botoes-container'); // Adicionar uma classe para estilização

	// Adicionar os botões à div de botões
	divBotoes.appendChild(btnConcluir);
	divBotoes.appendChild(btnExcluir);

	// Adicionar a div de botões ao item da tarefa
	itemTarefa.appendChild(divBotoes);

	// Adicionar o item da tarefa à lista de tarefas
	listaTarefas.appendChild(itemTarefa);

	// Adicionar o evento de clique para o botão de concluir
	btnConcluir.addEventListener('click', function () {
		concluirTarefa(itemTarefa, btnConcluir);
	});

	// Adicionar o evento de clique para o botão de excluir
	btnExcluir.addEventListener('click', function () {
		excluirTarefa(itemTarefa);
	});
}

function concluirTarefa(itemTarefa, btnConcluir) {
  let tarefaConcluida = itemTarefa;
  tarefaConcluida.classList.toggle('concluida');
  if (tarefaConcluida.classList.contains('concluida')) {
    btnConcluir.textContent = 'Desfazer';
  } else {
    btnConcluir.textContent = 'Concluir';
  }
}

function excluirTarefa(itemTarefa) {
  let indiceTarefa = Array.from(listaTarefas.children).indexOf(itemTarefa);
  console.log(`voce excluiu a tarefa de indice ${indiceTarefa}`);

	tarefas.splice(indiceTarefa, 1);

	itemTarefa.remove();
}


btnLimpar.addEventListener('click', limparTarefas);
btnAdicionar.addEventListener('click', adicionarTarefa);
