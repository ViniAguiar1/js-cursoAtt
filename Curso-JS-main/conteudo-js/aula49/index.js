// Declaração de function: (function hoisting)
falaOi()
function falaOi(){
    console.log('Oie'); 
}

// Firts-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado');
}
souUmDado();
/* function executaFuncao(funcao) {
    console.log(`Vou executar sua função abaixo:`)
    funcao();
}
executaFuncao(souUmDado); */

// Arrow function = "declaração de função"
const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
};
funcaoArrow();

// dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
}
obj.falar();