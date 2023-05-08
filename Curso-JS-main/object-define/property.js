//define uma só
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave no for in
        value: estoque, // valor
        writable: false, // pode alterar ou nao o valor
        configurable: true, // pode configurar
    });
};
const p1 = new Produto('Camisa', 20, 5);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
}