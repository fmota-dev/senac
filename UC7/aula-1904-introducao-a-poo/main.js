const Aluno = require('./Aluno');
const Disciplina = require('./Disciplina');

let disciplina1 = new Disciplina('Programação Orientada a Objetos', 60, 123);
let disciplina2 = new Disciplina('Banco de Dados', 40, 456);
let aluno = new Aluno('Filipe', 123);
let aluno2 = new Aluno('Mota', 456);

// Aluno 1

aluno.setDisciplina(disciplina1);
aluno.setDisciplina(disciplina2);
aluno.setNota(disciplina1, 10);
aluno.setNota(disciplina1, 5)
aluno.setNota(disciplina2, 9)



// Aluno 2
aluno2.setDisciplina(disciplina1);
aluno2.setDisciplina(disciplina2);
aluno2.setNota(disciplina1, 7);
aluno2.setNota(disciplina2, 8);


console.log(aluno, aluno2)

