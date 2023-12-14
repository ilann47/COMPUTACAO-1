//PROTOTYPES

//Um objeto fallback de outro objeto
//quando um objeto recebe uma requisicao de uma 
//propriedade que nao tem, 
//ela e procurada no prototype deste objeto
//o prototype de um objeto criado do zero e o object, 
//que tem os metodos nativos da linguagem


let pessoa = {
    maos: 2
}


console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);


//Quando criamos um objeto a partir de um outro, o base sera o prototype
//ele herdara tanto os metodos e propriedades de object( o prototype do objeto base)
//quanto os do objeto base para este novo

let pessoa1 = {
    maos: 2
}

let pessoaNova = Object.create(pessoa1);

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa1);
