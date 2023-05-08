const pessoa1 = new Object();
pessoa1.nome = "Vinicius";
pessoa1.sobrenome = "Aguiar";
pessoa1.idade = 20//;
pessoa1.falaNome = function(){
    console.log(`${this.nome} esta falando seu nome.`)
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
for (let chave in pessoa1){
    console.log(pessoa1[chave]);
};
// console.log(pessoa1.getDataNascimento());
// pessoa1.falaNome();

const pessoa2 = {
    nome: "Raquel",
    sobrenome: "Aguiar"
};
// console.log(pessoa1);



/* const pessoa = {
    nome: 'Vinicius',
    sobrenome: "Aguiar"
}; */
// const chave = 'nome';
// console.log(pessoa[chave]);