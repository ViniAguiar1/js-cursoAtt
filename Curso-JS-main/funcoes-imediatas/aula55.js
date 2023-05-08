// IIFE -> Immediately invoked function expression
/*function qualquerCoisa(){
    console.log(111123455);
}
qualquerCoisa();*/
/*(function(){
    const nome = 'vinicius';
    console.log(nome);
})();*/

(function(idade, peso, altura){
    const sobrenome = 'Aguiar'
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Vinicius'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);
