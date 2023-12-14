//Heranca ou inheritance

//uma classe pode herdar propriedades de outra classe por heranca
//para isso utilizamos extends

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}
class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, raca);
        this.raca = raca;
    }
}


let.pug = new Cachorro(4, 'Pug');
console.log(pug);