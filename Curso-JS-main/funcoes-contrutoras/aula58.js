// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome){
    // privados
    const ID = 123456;
    
    const metodoInterno = function(){

    };

    // atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(`${this.nome}: sou um metodo`);
    };
}
const p1 = new Pessoa('Vinicius', 'Aguiar');
const p2 = new Pessoa('Felipe', 'Aguiar');
p2.metodo();


console.log(p1.nome, p1.sobrenome);
//new = cria um objeto vazio e aponta para o this