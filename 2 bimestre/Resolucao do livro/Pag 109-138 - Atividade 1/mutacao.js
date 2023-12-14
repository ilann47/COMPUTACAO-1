//Um objeto pode herdar todas as caracteri9sticas do outro, virando uma referencia ao mesmo


let objetoA = {
    pontos: 10
};

objetoB = objetoA;

let objetoC = {
    pontos: 10
};


console.log(objetoA == objetoB); // true
console.log(objetoA == objetoC); // false



//Alem disso a mutacao cria uma ligacao entre os objetos


objetoA.pontos = 20;

console.log(objetoB.pontos); // 20
console.log(objetoC.pontos); // 10