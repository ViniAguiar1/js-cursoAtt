/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)
// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: "notebook", preco: 2500};
// const prato = { nome: produto.nome, preco: produto.preco};
// console.log(Object.keys(produto));
/* Object.defineProperty(produto, "nome", {
    writable: false,
    configurable: false,
    value: 'Qualquer coisa'
});
console.log(Object.getOwnPropertyDescriptors(produto, "nome"));
produto.nome = 'Outra coisa';
console.log(produto); */
for (let entry of Object.entries(produto)){
    console.log(entry);
};