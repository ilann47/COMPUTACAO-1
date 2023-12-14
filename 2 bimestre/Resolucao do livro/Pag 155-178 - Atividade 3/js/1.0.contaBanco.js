class ContaBancaria {
    constructor() {
        this.saldo = 0;
    }

    deposito(valor) {
        this.saldo += valor;
        console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
    }

    saque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para saque.");
        }
    }
}

// Testando a classe
const minhaConta = new ContaBancaria();
minhaConta.deposito(1000);
minhaConta.saque(500);
minhaConta.saque(700);
