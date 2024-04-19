const Aluno = require('./Aluno');
const Disciplina = require('./Disciplina');

let disciplina1 = new Disciplina('Programação Orientada a Objetos', 60, 123);
let disciplina2 = new Disciplina('Banco de Dados', 40, 456);
let aluno = new Aluno('Filipe', 123, disciplina1);

aluno.setNome('Filipe Mota');
aluno.setMatricula(456);
aluno.setDisciplina(disciplina2);

disciplina1.setNome('POO');
disciplina1.setCargaHoraria(40);
disciplina1.setCodigo(123);

console.log(aluno.getDados());
console.log(disciplina1.getDados());
console.log(disciplina2.getDados());