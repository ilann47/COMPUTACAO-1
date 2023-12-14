//Podemos copiar todas as propriedades de um objeto para o outro


let objetoA = {
    prop1: 'teste',
    prop2: 'testando',

}

let objetoB = {
    prop3: 'propriedade'
}


Object.assign(objetoA, objetoB);

console.log(objetoA);