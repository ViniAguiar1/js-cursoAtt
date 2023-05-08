// Factory function (Função fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor){
            // console.log(valor);
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
          //  console.log(valor);
        },

        fala(assunto = 'escrevendo...'){
            return `${this.nome} esta ${assunto}.`;
        },
        altura: a,
        peso: p,
        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('vinicius', 'aguiar', 1.85, 82);
const p2 = criaPessoa('felipe', 'aguiar', 1.78, 72);
const p3 = criaPessoa('raquel', 'aguiar', 1.77, 82);

console.log(p3.imc);