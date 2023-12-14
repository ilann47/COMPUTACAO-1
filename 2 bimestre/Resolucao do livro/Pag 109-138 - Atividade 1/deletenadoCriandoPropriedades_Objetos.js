
//Podemos adicionar e deletar propriedades ao longo do nosso programa

let carro = {
    carca: "VW",
    portas: 4,
    eletrico: false,
    motor: 1.0
}

console.log(carro.portas);

delete carro.portas;

console.log(carro.portas);

carro.tetoSolar = true;

console.log(carro.tetoSolar);

