//SYMBOLS

//Propriedades unicas, que nao podem ser alteradas e nem criadas duas vezes;
//podemos utilizar como uma constante, so que para propriedade de objeto

class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let golden = new Cachorro('Golden Retiever');

console.log(golden.prototype[patas]);