export class Animal {

    private classeBio: String = "";
    private faseVida: String = "";
    private cor: String = "";
    private especie: String = "";

    setClasseBio(classeBio: String): void {
        this.classeBio = classeBio;
    }

    setFaseVida(faseVida: String): void {
        this.faseVida = faseVida;
    }

    setCor(cor: String): void {
        this.cor = cor;
    }

    setEspecie(especie: String): void {
        this.especie = especie;
    }

    getClasseBio(): String {
        return this.classeBio;
    }

    getFaseVida(): String {
        return this.faseVida;
    }

    getCor(): String {
        return this.cor;
    }

    getEspecie(): String {
        return this.especie;
    }
}