import { Computador } from "./Computador";

export class Gamer implements Computador{

    ligar(): void {
        console.log("Computador Gamer ligado");
    }
    reiniciar(): void {
        console.log("Computador Gamer reiniciando");
    }
    desligar(): void {
        console.log("Computador Gamer desligado");
    }
    carregarSistema(): void {
        console.log("Computador Gamer carregando sistema");
    }

}

export class Home implements Computador {

        ligar(): void {
        console.log("Computador Home ligado");
    }
    reiniciar(): void {
        console.log("Computador Home reiniciando");
    }
    desligar(): void {
        console.log("Computador Home desligado");
    }
    carregarSistema(): void {
        console.log("Computador Home carregando sistema");
    }

}