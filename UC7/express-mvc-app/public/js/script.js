const endpointUrl = 'http://localhost:3000';

function fetchClientes() {
	fetch(`${endpointUrl}/cliente/listagem`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.listaClientes.forEach((cliente) => {
				const id = cliente.id;
				const nome = cliente.nome;
				const email = cliente.email;

				const ul = document.getElementById('listaClientes');
				const li = document.createElement('li');
				li.appendChild(document.createTextNode(`${id} - ${nome} - ${email}`));
				ul.appendChild(li);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

function fetchFornecedores() {
	fetch(`${endpointUrl}/fornecedor/listagem`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.listaFornecedores.forEach((fornecedor) => {
				const id = fornecedor.id;
				const nome = fornecedor.nome;
				const email = fornecedor.email;
				const telefone = fornecedor.telefone;
				const cnpj = fornecedor.cnpj;

				const ul = document.getElementById('listaFornecedores');
				const li = document.createElement('li');
				li.appendChild(
					document.createTextNode(
						`${id} - ${nome} - ${email} - ${telefone} - ${cnpj}`
					)
				);
				ul.appendChild(li);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

function fetchProdutos() {
	fetch(`${endpointUrl}/produto/listagem`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			data.listaProdutos.forEach((produto) => {
				const id = produto.id;
				const nome = produto.nome;
				const preco = produto.preco;

				const ul = document.getElementById('listaProdutos');
				const li = document.createElement('li');
				li.appendChild(document.createTextNode(`${id} - ${nome} - ${preco}`));
				ul.appendChild(li);
			});
		})
		.catch((error) => {
			console.log(error);
		});
}

document.addEventListener('DOMContentLoaded', () => {
	fetchClientes();
	fetchFornecedores();
	fetchProdutos();
});
