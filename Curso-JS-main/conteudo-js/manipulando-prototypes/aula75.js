// new Object-> object.prototype
const objA = {
    chave: 'A'
    // __proto__ = Object.prototype
};
const objB = {
    chave: 'B'
};

const objC = new Object();
objC.chave = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);