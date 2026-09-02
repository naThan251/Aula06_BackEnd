export class Aviao{

    private porte: String = "";
    private turbinas: Number = 0;
    private cor: String = "";
    private rodas: Number = 0;

    setPorte(porte: String): void {
        this.porte = porte;
    }

    setTurbinas(turbinas: Number): void {
        this.turbinas = turbinas;
    }

    setCor(cor: String): void {
        this.cor = cor;
    }

    setRodas(rodas: number): void {
        this.rodas = rodas;
    }

    getPorte(): String {
        return this.porte;
    }

    getTurbinas(): Number {
        return this.turbinas;
    }

    getCor(): String {
        return this.cor;
    }

    getRodas(): Number {
        return this.rodas;
    }
}