import { Calculos } from "./Calculos";

export class Calculando implements Calculos {

    num1: number = 0;
    num2: number = 0;

    result: number = 0;

    somar(): number {
        this.result = this.num1 + this.num2;
        return this.result;
    }
    sub(): number {
        this.result = this.num1 - this.num2;
        return this.result;
    }
    mult(): number {
        this.result = this.num1 * this.num2;
        return this.result;
    }
    div(): number {
        this.result = this.num1 /this.num2;
        return this.result;
    }
    exp(): number {
        this.result = this.num1 ^ this.num2;
        return this.result;
    }

}