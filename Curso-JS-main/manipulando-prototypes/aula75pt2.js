function Produto(nome, preco){
    this.nome = nome;
    this.preco =preco;
};

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa de time', 100);

// Literal
const p2 = {
    nome: "bobojaco",
    preco: 250
};
Object.setPrototypeOf(p2, Produto.prototype)
// p1.desconto(50)
// p1.aumento(50);
// const p3 = Object.create(Produto.prototype);
const p3 = new Produto('Batom', 25);
p3.desconto(15);
const p4 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "Palmeiras - Treino 2022/23"
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 150
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: "Gg"
    },
});
p3.desconto(25)
console.log(p1);
console.log(p2);
console.log(p4)