class Aluno {
    constructor(nome, matricula, disciplina) {
        this.nome = nome;
        this.matricula = matricula;
        this.disciplina = disciplina;
    }


    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getMatricula() {
        return this.matricula;
    }

    setMatricula(matricula) {
        this.matricula = matricula;
    }

    getDisciplina() {
        return this.disciplina;
    }

    setDisciplina(disciplina) {
        this.disciplina = disciplina;
    }

    getDados() {
        return `O aluno ${this.nome} de matrícula ${this.matricula} cursa a disciplina ${this.disciplina.nome}.`;
    }

    
}

module.exports = Aluno;