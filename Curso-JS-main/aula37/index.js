const nome = ['Vinicius', 'Aguiar'];

/*for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
};*/

/*for (let i in nome){
    console.log(nome[i]);
}*/

/*for (let valor of nome){
    console.log(valor);
}*/
nome.forEach(function(el) {
    console.log(el);
})

// for classico geralmente usado com arrays ou strings 
// for in retorna o indice ou chaves
// for of retorna o valor em si