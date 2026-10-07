import { Estudante } from "./atividade03";

const estudante1 = new Estudante("Fulano Algaz", 8, 6.6);

const media = estudante1.calcularMedia();
console.log(`Média calculada: ${media}`);

estudante1.exibirInformacoes();