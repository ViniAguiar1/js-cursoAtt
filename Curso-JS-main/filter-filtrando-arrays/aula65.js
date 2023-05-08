// filter, map, reduce
// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 
    15, 22, 27];

    // function callbackFilter(valor){
       // return valor > 10;
    // }; 

    const numerosFiltrados = numeros.filter(function(valor){
            // console.log(valor, indice, array);
        return valor > 10;
    });
    // console.log(numerosFiltrados);


    // retorne as pessoas que tem o nome com 5 letras ou mais
    // retorne as pessoas com mais de 50 anos
    // retorne as pessoas cujo nome termina com a
    const pessoas =[
        { nome: 'Luiz', idade: 62}, 
        { nome: 'Vinicius', idade: 19},
        { nome: 'Luana', idade: 26},
        { nome: "felipe", idade: 15},
        { nome: 'raquel', idade: 40},
        { nome: "aldenor", idade: 60},
        { nome: "piu", idade: 72},
        { nome: 'ana', idade: 55},
    ];
const pessoas5Letra = pessoas.filter(function(obj){
    return obj.nome.length >= 5;
    // length verifica o tamanho da string
     // console.log(obj.nome);
});
const pessoas50anos = pessoas.filter(function(obj){
    return obj.idade > 50;
})

const pessoasFimComA = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a');
})
console.log(pessoasFimComA);
