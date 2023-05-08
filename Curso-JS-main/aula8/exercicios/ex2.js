/* 
Luiz Otavio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Vinicius nasceu em 2003
*/

const nome = "Vinicius";
const sobrenome = "Aguiar";
const idade = 19;
const peso = 81;
const altura = 1.85;
let IMC = peso / (altura * altura);   // Calculo de IMC 
let anoAtual = 2022;
let anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa ", peso, );
console.log("tem", altura, "de altura e seu IMC é de ", IMC);
console.log(nome, "nasceu em ", anoNascimento);