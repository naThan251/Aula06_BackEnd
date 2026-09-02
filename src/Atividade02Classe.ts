export class Carro{

    private portas: Number = 0;
    private cor: String = "";
    private carroceria: String = "";
    private esportivo: Boolean = false;

    setPortas(portas: Number): void {
        this.portas = portas;
    }

    setCor(cor: String): void {
        this.cor = cor;
    }

    setCarroceira(carroceria: String): void {
        this.carroceria = carroceria;
    }

    setEsportivo(esportivo: Boolean): void {
        this.esportivo = esportivo;
    }

    getPortas(): Number {
        return this.portas;
    }

    getCor(): String {
        return this.cor;
    }

    getCarroceria(): String {
        return this.carroceria;
    }

    getEsportivo(): Boolean {
        return this.esportivo;
    }
}