class User {
  constructor (nome, email, cep, rua, cidade, estado) {
    this.nome = nome;
    this.email = email;
    this.cep = cep;
    this.rua = rua;
    this.cidade = cidade;
    this.estado = estado;
  }
  
}

module.exports = User;