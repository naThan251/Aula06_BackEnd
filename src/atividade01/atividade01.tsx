export class ContaBancaria {
    
    private saldo: number;

    constructor( saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
    }

    sacar(valor: number): void {

        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    consultarSaldo(): void {
        console.log(`Saldo atual: R$ ${this.saldo.toFixed(2)}`);
    }
}