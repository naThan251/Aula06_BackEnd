export class Pessoa {
    private nome: String = "";
    private idade: number = 0;
    private endereco: string = "";
    private profissao: string = "";

    setNome(nome: string): void {
        this.nome = nome;
    }
    setIdade(idade: number): void {
        this.idade = idade;
    }
    setEndereco(endereco: string): void {
        this.endereco = endereco;
    }
    setProfissao(profissao: string): void {
        this.profissao = profissao;
    }

    getNome(): String {
        return this.nome;
    }
    getIdade(): Number {
        return this.idade;
    }
    getEndereco(): String {
        return this.endereco;
    }
    getProfissao(): String {
        return this.profissao;
    }

}