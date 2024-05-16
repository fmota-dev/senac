const listaVinhos = [];
let id = 1;

class Vinho {
  constructor(nome, safra, pais, tipo, preco, imagem) {
    this.id = id;
    this.nome = nome;
    this.safra = safra;
    this.pais = pais;
    this.tipo = tipo;
    this.preco = "R$" + preco;
    this.imagem = imagem;
  }

  obterTodosVinhos() {
    return listaVinhos;
  }

  obterVinhoPorId(id) {
    return listaVinhos.find((vinho) => vinho.id === id);
  }

  adicionarVinho(vinho) {
    listaVinhos.push(vinho);
    id++;
  }

  editarVinho(id, vinho) {
    const vinhoIndex = listaVinhos.findIndex((vinho) => vinho.id === id);
    listaVinhos[vinhoIndex] = vinho;
  }

  deletarVinho(id) {
    const vinhoIndex = listaVinhos.findIndex((vinho) => vinho.id === id);
    listaVinhos.splice(vinhoIndex, 1);
  }
}

module.exports = Vinho;
