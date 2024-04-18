const Pessoa = require('./Pessoa');

const novaPessoa = new Pessoa('João', 25, 'M', '123.456.789-00');

console.table(novaPessoa);
console.log(novaPessoa.exibirDados());