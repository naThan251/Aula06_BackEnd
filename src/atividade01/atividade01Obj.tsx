import { createInterface } from "node:readline/promises";
import { ContaBancaria } from "./atividade01";

const leitor = createInterface({
            input: process.stdin,
            output: process.stdout
});

const conta = new ContaBancaria(1000);

const valorDeposito: number = Number(
    await leitor.question("Digite o valor para depositar:")
)

conta.depositar(valorDeposito);

const valorSaque: number = Number(
    await leitor.question("Digite o valor para sacar:")
)

conta.sacar(valorSaque);

conta.consultarSaldo();