export class Pessoa {
    
    private nome: String = "";
    private idade: Number = 0;
    private endereco: String = "";
    private profissao: String = "";
    private cpf: String = "";
    private rg: String = "";

    setNome(nome: String): void{
        this.nome = nome;
    }

    setIdade(idade: Number): void{
        this.idade = idade;
    }

    setEndereco(endereco: String): void{
        this.endereco = endereco;
    }

    setProfissao(profissao: String): void{
        this.profissao = profissao;
    }

    setCPF(CPF: String): void{
        this.cpf = CPF;
    }

    setRG(RG: String): void{
        this.rg = RG;
    }

    getNome(): String{
        return this.nome;
    }

    getIdade(): Number{
        return this.idade;
    }

    getEndereco(): String{
        return this.endereco;
    }

    getProfissao(): String{
        return this.profissao;
    }

    getCPF(): String{
        return this.cpf;
    }

    getRG(): String{
        return this.rg;
    }

}