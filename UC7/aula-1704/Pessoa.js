class Pessoa {
    constructor(nome, idade, sexo, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cpf = cpf;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }
    
    getSexo() {
        return this.sexo;
    }

    getCpf() {
        return this.cpf;
    }

    exibirDados() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nSexo: ${this.sexo}\nCPF: ${this.cpf}`;
    }
}


module.exports = Pessoa;

