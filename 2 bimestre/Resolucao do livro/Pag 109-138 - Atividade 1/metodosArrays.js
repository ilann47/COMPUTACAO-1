//MEtodos sao propriedades que funcionam como funcoes

//string e arrays contem metodos.


let marca = 'Nike';

console.log(typeof marca.toUpperCase);

console.log(marca.toUpperCase());


//metodos prontos e muito uteis que ajudam a manipular arrays

// push: aadiciona um ou mais elementos ao fim de um array


let numero = [1, 5, 10, 15, 20, 25];

numeros.push(30);

console.log(numeros);


numeros.push(35, 40, 45);

console.log(numeros);


// pop: remove um elemento no fim do array


let pessoas = ["Matheus", "Joao", "Ricardo"];

let pessoaRemovida = pessoas.pop();


console.log(pessoas);

console.log(pessoaRemovida);

//shift: remove o primeiro elemento de um array

let frutas = ["maca", "Melao", "Uva"];

let frutaRemovida = frutas.shift();

console.log(frutas);

console.log(frutaRemovida);


//unshift: adiciona um ou mais elementos no inicio de um array.


let nums = [1, 2];

nums.unshift(0);

console.log(nums);

arr.unshift(-2, -1);


//indexOF: encontra o indice de um determinado elemento

//lastIndexOf: encontrar o ultimo indice de um elemento.

let numeross = [0, 1, 2, 1, 0];

console.log(numeross.indexOf(1));
console.log(numeross.lastIndexOf(1));



//Slice: 
//retorna um array a partir de outro array
//o array retornado e determinado pelos parametros que sao os indices de inciio e fim do novo array.

let numerosss = [0, 1, 2, 3, 4, 5];

console.log(numerosss.slice(2, 3));

console.log(numeros, slice(3));

//forEach;
//Itera cada elemento do array;

const numss = [1, 2, 3, 4, 5, 6];
numss.forEach(num => {
    console.log(num);
});

//includes.
//verifica se o array tem um determinado elemento

let carros = ["BMW", "Fiat", "Audi"];

console.log(carros.includes("Fiat"));

//reverse.
//inverte um array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr, reverse());

