export class Cliente {

    private id: Number = 0;
    private nome: String = "";
    private telefone: String = "";
    private cpf: String = "";
    private rg: String = "";

    setID(id: Number): void {
        this.id = id;
    }

    setNome(nome: String): void {
        this.nome = nome;
    }

    setTelefone(telefone: String): void {
        this.telefone = telefone;
    }

    setCPF(cpf: String): void {
        this.cpf = cpf;
    }

    setRG(rg: String): void {
        this.rg = rg;
    }

    getID(): Number {
        return this.id;
    }

    getNome(): String {
        return this.nome;
    }

    getTelefone(): String {
        return this.telefone;
    }

    getCPF(): String {
        return this.cpf;
    }

    getRG(): String {
        return this.rg;
    }
}