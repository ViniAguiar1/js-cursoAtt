function retornaFuncao(nome){
    // const nome = 'vinicius';
    return function(){
        return nome;
    };
}
const funcao = retornaFuncao("Vinicius");
const funcao2 = retornaFuncao('joao');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());