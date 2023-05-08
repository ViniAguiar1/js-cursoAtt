//getters e setters
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;


    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave no for in
        // value: estoque, // valor
        // writable: true, // pode alterar ou nao o valor
        configurable: true, // pode configurar
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem');
               // console.log('Bad value');
               // return; 
            }
           // console.log(valor);
           estoquePrivado = valor;
        }

    });
};

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', ' ')
            nome = valor;
        }
    };
}

/* const p1 = new Produto('Camisa', 20, 5);
// console.log(p1);
p1.estoque = 500;
console.log(p1.estoque); */
const p2 = criaProduto('Calção');
console.log(p2.nome);