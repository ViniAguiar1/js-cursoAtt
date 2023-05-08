try {
    // essa parte do cod é executada quandp não a erros
    console.log(`Abri um arquivo`);
    console.log(`Manipulei o arquivo e gerou erro`); 
    console.log(`Fechei o arquivo`);

    try {
        console.log(b);
    } catch (e){
        console.log(`Deu erro`);
    }
} catch (e) {
    // é executada quando ha erros
    console.log(`Tratando o erro`);
}
finally {
    // sempre
    console.log(`FINNALY: Eu sempre sou executado`)
}