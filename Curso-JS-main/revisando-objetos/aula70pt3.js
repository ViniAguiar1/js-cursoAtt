function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
};

// new = cria objeto vazio
// new = obtem o valor de this
const p1 = new Pessoa("Vinicius", "Aguiar");
delete p1.nome;
const p2 = new Pessoa("renan", 'marcondes');
console.log(p1);
 console.log(p2);