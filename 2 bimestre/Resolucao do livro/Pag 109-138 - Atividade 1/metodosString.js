//trim:

//remove tudo que nao e string

let texo = ' teste ';

console.log(texto.trim());


//padStart:

//inserir caracteres antes da string.

let milAoContrario = '1';

console.log(milAoContrario.padStart(4, "0"));

//Split
//divide uma string por um separador, e retorna um array

let frase = " O rato roeu a roupa do rei de roma";


let palavras = frase.split(" ");

console.log(palavras);

//Join
//Junta elementos em um array em uma frase, por meio de um separador;

let fraseMontada = palavras.join('<->');

console.log(fraseMontada);

//repeat
//Repete uma string de acordo com um parametro number.


console.log('teste'.repeat(5));