// Dobre os numeros
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(function(valor){
   // console.log(valor, indice, array)
   return valor * 2;
});
// console.log(numerosEmDobro);
// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
const apenasONome = pessoas.map(function(obj){
    return obj.nome
});
// console.log(apenasONome);
const chaveSemNome = pessoas.map(function(obj){
    delete obj.nome;
    return obj;
});
// console.log(chaveSemNome);
const chaveId = pessoas.map(function(obj, indice){
    obj.id = indice;
    return obj;
});

console.log(chaveId);