export class Estudante {

    private nome: string;
    private nota1: number;
    private nota2: number;

    constructor (
        nome: string,
        nota1: number,
        nota2: number
    ) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    public calcularMedia(): number{
        let media = this.nota1 + this.nota2;
        media /= 2;
        return Number(media.toFixed(1));
    }

    public exibirInformacoes(){
        console.log(`Nome do aluno: ${this.nome}`);
        console.log(`Notas do aluno: ${this.nota1}, ${this.nota2}`);
        console.log(`Média do aluno: ${this.calcularMedia()}`);
    }
}