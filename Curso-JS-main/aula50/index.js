// arguments = sustenta todos os argumentos enviados
/*function funcao(nome, sobrenome, idade) {
    /* let total = 0;
    for (argumento of arguments){
        total += argumento;
    }
    console.log(total);
   //  b = b || 0;
    console.log(nome, sobrenome, idade);
}
funcao(); */
const conta = (...args) => {
    console.log(args);
  };
  conta('+', 1, 20, 30, 40, 50);