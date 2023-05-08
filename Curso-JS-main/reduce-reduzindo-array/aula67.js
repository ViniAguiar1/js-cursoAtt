// Some todos os números (reduce)
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const  total = numeros.reduce(function(acumulador, valor, indice, array){
    // acumulador += valor;
    // console.log(acumulador, valor);
    if(valor % 2 === 0){
        acumulador += valor;
        // console.log(valor);
    }

    return acumulador;
}, 0);
// console.log(total);



const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 105 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
  ];
const maisVelha = pessoas.reduce(function(acumulador, valor){
    // console.log(acumulador, valor);
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha)