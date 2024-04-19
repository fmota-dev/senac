const Conta = require('./Conta');

let contaFilipe = new Conta('Filipe', 1000);

contaFilipe.depositar(500.50);
contaFilipe.sacar(200.50);

console.log(contaFilipe.getSaldo());