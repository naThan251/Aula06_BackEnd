export class Produto {

    constructor(
        private nome: string,
        private preco: number
    ) { }

    public exibirInformacoes(): void {
        console.log(`Nome do produto: ${this.nome}`);
        console.log(`Valor do produtos: ${this.preco}`);
    }
}