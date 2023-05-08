const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;
a1.forEach(function(valor, indice, array){
    // console.log(valor);
    total += valor;
});
console.log(total);


/* for(let valor of a1){
    console.log(valor);
}; */