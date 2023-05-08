//define uma só
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

/*     Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave no for in
        value: estoque, // valor
        writable: false, // pode alterar ou nao o valor
        configurable: true, // pode configurar
    }); */

    Object.defineProperties(this, {
        nome:{   enumerable: true, // mostra a chave no for in
        value: nome, // valor
        writable: true, // pode alterar ou nao o valor
        configurable: true, // pode configurar
    },
        preco: {
            enumerable: true, // mostra a chave no for in
            value: preco, // valor
            writable: true, // pode alterar ou nao o valor
            configurable: true, // pode configurar
        }
    })
};
const p1 = new Produto('Camisa', 20, 5);
console.log(p1);

for(let chave in p1){
   //  console.log(chave);
};