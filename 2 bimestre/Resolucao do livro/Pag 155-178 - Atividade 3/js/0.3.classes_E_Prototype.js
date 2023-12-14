//O Prototype do javaScript pode ser chamado de classe
//pois nas outras linguagens uma classe e um molde de um objeto

//ou seja podemos criar diversos objetos em cima de um prototype

let cachorro = {
    raca: 'SRD',
}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = 'Pastor Alemao';

console.log(pastorAlemao.raca);

// CONSTRUTOR POR FUNCAO
//Construtores sao formas de instanciar uma classe em uma linguagem de programacao
//instanciar =  criar um objeto novo
//No construtor ja podemos definir propriedades.

function criarCachorro(raca) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    return cachorro;
}

let doberman = criarCachorro('Doberman');

console.log(doberman.raca);

//CONSTRUTOR POR NEW

//Em muitas linguagens temos a possibilidade de instanciar um objeto com new..

function Cachorro(raca) {
    this.raca = raca;
}

let husky = new Cachorro('Husky');

console.log(husky.raca);


// CONSTRUTOR COM METODO

//Alem de propriedades, podemos criar a classe base ja com metodos
//basta definir o prototype com o metodo desejado

function Cachorro(raca) {
    this.raca = raca;
}
Cachorro.prototype.uivar = function () {
    console.log('Auuuuu');

}

let pug = new Cachorro('Pug');

console.log(pug.raca);

pug.uivar();

//CONSTRUTOR NA CLASSE (ES6)

//Com a versao do ES6, uma possibilidade de criar uma classe (objeto) com construtor foi adicionada
//Entao nao precisamo mais criar por meio de uma funcao

class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }

}

let labrador = new cachorro('Labrador');

console.log(labrador.raca);


//Nao podemos adicionar propriedades na classe, so via protoype
//A classe so aceita metodos

class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }
    latir() {
        console.log("Au au");

    }
}

Cachorro.prototypel.patas = 4;

let pooodle = new Cachorro('Poodle');

//OVERRIDE NAS PROPRIEDADES DO PROTOTYPE

//sempre que adicionamos uma propriedade a um objeto, e criada uma identica no prototype
//podemos substituir a do prototype

class Cachorro {
    constructor(raca) {
        this.raca = raca;
    }
}

let poodle = new Cachorro('Poodle');

Cachorro.prototype.raca = 'SRD';

console.log(poodle.raca);
console.log(Cachorro.prototype.raca);