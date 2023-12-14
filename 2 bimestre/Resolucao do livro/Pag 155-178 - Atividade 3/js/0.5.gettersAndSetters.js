//Getters e setters
//Get: Serve para resgatar o valor de uma propriedade
//Set: Serve para alterar o valor de uma propriedade;

class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }


    get verRaca() {
        return 'A raca e ' + this.raca;
    }
    set novaRaca(value) {
        this.raca = value;
    }
}

let goldenm = new Cachorro('Pastor alemao');
console.log(golden.verRaca);
golden.novaRaca = 'Golden';
console.log(golden.verRaca);