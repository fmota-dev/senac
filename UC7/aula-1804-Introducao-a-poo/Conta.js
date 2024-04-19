class Conta {
    titular;
    saldo;

    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }

    getSaldo() {
        return `Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

module.exports = Conta;