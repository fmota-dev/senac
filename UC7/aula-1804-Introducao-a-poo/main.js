const Conta = require('./Conta');

let contaFilipe = new Conta('Filipe', 1000);

contaFilipe.depositar(500);
contaFilipe.sacar(200);

console.log(contaFilipe.getSaldo());