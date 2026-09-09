export class Veiculo implements Veiculo {
    
    nome: String = "";

    setNome(nome: string){
        this.nome = nome;
    }

    ligar(): void {
        console.log(`${this.nome} ligado`);
    }
    desligar(): void {
        console.log(`${this.nome} desligado`)
    }
    manobrar(): void {
        console.log(`${this.nome} manobrando`);
    }
    engatar(): void {
        console.log(`${this.nome} engatado`);
    }
    acelerar(): void {
        console.log(`${this.nome} acelerando`);
    }
    frear(): void {
        console.log(`${this.nome} freando`);
    }

}