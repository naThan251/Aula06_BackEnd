import { Pessoa } from "./exemplo01Classe";

const pessoa01 = new Pessoa();
const pessoa02 = new Pessoa();

pessoa01.setNome("Tom Cruise");
pessoa01.setIdade(64);
pessoa01.setEndereco("California, USA")
pessoa01.setProfissao("Ator")

pessoa02.setNome("Messi");
pessoa02.setIdade(39);
pessoa02.setEndereco("Miami, USA")
pessoa02.setProfissao("Jogador de Futebol")

console.log("----- Pessoa 01 -----");
console.log(pessoa01.getNome());
console.log(pessoa01.getIdade());
console.log(pessoa01.getEndereco());
console.log(pessoa01.getProfissao());

console.log("----- Pessoa 02 -----");
console.log(pessoa02.getNome());
console.log(pessoa02.getIdade());
console.log(pessoa02.getEndereco());
console.log(pessoa02.getProfissao());