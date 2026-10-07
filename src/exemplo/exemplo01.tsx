export class Pessoa {

    private nome: string;
    private idade: number;

    constructor();
    constructor(nome: string);
    constructor(nome: string, idade: number);
    constructor(nome: string = "", idade: number = 0){
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }
}