class Disciplina {
    constructor(nome, cargaHoraria, codigo) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.codigo = codigo;
    }


    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getCargaHoraria() {
        return this.cargaHoraria;
    }

    setCargaHoraria(cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    getCodigo() {
        return this.codigo;
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    getDados() {
        return `A disciplina ${this.nome} tem carga horária de ${this.cargaHoraria} horas e código ${this.codigo}.`;
    }
}

module.exports = Disciplina;