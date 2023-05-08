// factory function
// constructor functions
// classes
function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomecompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa("vinicius", "aguiar");
console.log(p1.nomecompleto);