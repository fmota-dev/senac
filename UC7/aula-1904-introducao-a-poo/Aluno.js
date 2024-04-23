class Aluno {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
        this.disciplinas = [];
        this.notas = {};
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
        this.disciplinas.push(disciplina);
    }

    setNota(disciplina, nota) {
        let codigo = disciplina.getCodigo();
        this.notas[codigo] = this.notas[codigo] || [];
        this.notas[codigo].push(nota);
    }


    getNota(disciplina) {
        return `O aluno ${this.nome} obteve a nota ${this.notas[disciplina.getCodigo()]} na disciplina ${disciplina.getNome()}.`;
    }

    getDados() {
        return `O aluno ${this.nome} de matrícula ${this.matricula} cursa a disciplina ${this.disciplina.nome}.`;
    }

    
}

module.exports = Aluno;